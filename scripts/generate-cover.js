#!/usr/bin/env node

/**
 * Prompt'una Bandım serisi için otomatik kapak görseli üretici.
 *
 * Kullanım:
 *   node scripts/generate-cover.js <bölüm_numarası>
 *   node scripts/generate-cover.js --all          # Eksik tüm kapakları üretir
 *   node scripts/generate-cover.js --range 4 10   # 4-10 arası üretir
 */

const fs = require("fs");
const path = require("path");

// ── Sabitler ────────────────────────────────────────────────────────────────
const ROOT_DIR = path.join(__dirname, "..");
const IMAGES_DIR = path.join(ROOT_DIR, "assets", "images");
const POSTS_DIR = path.join(ROOT_DIR, "_posts");
const POST_PATTERN = /promtunabandim|promptuna-bandim/;
const FONT = "PT Sans, Arial, sans-serif";

const LAYOUT = {
  width: 1280,
  height: 720,
  margin: 78,
  badge: { x: 78, y: 86, w: 188, h: 44, textX: 116, textY: 116 },
  title: { y1: 292, y2: 390, size: 84 },
  subtitle: { y: 470, size: 34 },
  episode: { y: 580, size: 126 },
};

// ── Renk paletleri (koyu başlangıç → turuncu/sıcak bitiş) ──────────────────
const PALETTES = [
  { bg1: "#17181d", bg2: "#f68657", accent: "#ffe1d3" },
  { bg1: "#111827", bg2: "#ef7b45", accent: "#ffe1d3" },
  { bg1: "#13151b", bg2: "#db6a3b", accent: "#ffe1d3" },
  { bg1: "#1a1025", bg2: "#e8734a", accent: "#fde8dc" },
  { bg1: "#0f1923", bg2: "#f09060", accent: "#fff0e6" },
  { bg1: "#181220", bg2: "#d4603a", accent: "#fce0d0" },
  { bg1: "#141b22", bg2: "#f57c4e", accent: "#ffe5d8" },
  { bg1: "#1c1318", bg2: "#e0825a", accent: "#ffeade" },
  { bg1: "#10171e", bg2: "#f4955f", accent: "#fff3ea" },
  { bg1: "#19132a", bg2: "#ea6e42", accent: "#fddccc" },
  { bg1: "#121a15", bg2: "#f28850", accent: "#ffe7d8" },
  { bg1: "#1b1520", bg2: "#d97844", accent: "#fce2d2" },
];

// ── Yardımcılar ─────────────────────────────────────────────────────────────
const padEpisode = (ep) => String(ep).padStart(2, "0");

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const randInt = (rand, base, range) => base + Math.floor(rand() * range);

// ── Dekoratif şekil üreticileri ─────────────────────────────────────────────
const shapeGenerators = [
  // 0: İki daire
  (rand) => {
    const cx1 = randInt(rand, 900, 200), cy1 = randInt(rand, 100, 100), r1 = randInt(rand, 160, 80);
    const cx2 = randInt(rand, 850, 150), cy2 = randInt(rand, 450, 150), r2 = randInt(rand, 200, 80);
    return [
      `<circle cx="${cx1}" cy="${cy1}" r="${r1}" fill="rgba(255,255,255,0.12)"/>`,
      `<circle cx="${cx2}" cy="${cy2}" r="${r2}" fill="rgba(255,255,255,0.08)"/>`,
    ];
  },

  // 1: Hilal
  (rand) => {
    const cx = randInt(rand, 800, 100), cy = randInt(rand, 60, 40);
    return [
      `<path d="M${cx} ${cy}c146 0 264 118 264 264S${cx + 146} 592 ${cx} 592c-106 0-198-62-240-152 50 32 109 50 172 50 180 0 326-146 326-326 0-28-4-56-10-82 17-11 36-18 58-18z" fill="rgba(255,255,255,0.12)"/>`,
    ];
  },

  // 2: Dalga
  (rand) => {
    const y = randInt(rand, 150, 60);
    return [
      `<path d="M1260 ${y}c-140-38-244 0-314 114-72 116-164 176-276 180 72 36 152 54 240 54 172 0 300-72 350-348z" fill="rgba(255,255,255,0.12)"/>`,
    ];
  },

  // 3: Üçgen grid
  (rand) => {
    const x = randInt(rand, 800, 100), y = randInt(rand, 80, 60);
    return [
      `<polygon points="${x},${y} ${x + 260},${y + 150} ${x},${y + 300}" fill="rgba(255,255,255,0.10)"/>`,
      `<polygon points="${x + 140},${y + 200} ${x + 400},${y + 350} ${x + 140},${y + 500}" fill="rgba(255,255,255,0.06)"/>`,
    ];
  },

  // 4: İç içe kareler
  (rand) => {
    const x = randInt(rand, 860, 80), y = randInt(rand, 100, 60), s = randInt(rand, 220, 60);
    const cx = x + s / 2, cy = y + s / 2;
    return [
      `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="24" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="3" transform="rotate(${randInt(rand, 15, 20)} ${cx} ${cy})"/>`,
      `<rect x="${x + 40}" y="${y + 40}" width="${s - 80}" height="${s - 80}" rx="16" fill="rgba(255,255,255,0.08)" transform="rotate(${-randInt(rand, 10, 15)} ${cx} ${cy})"/>`,
      `<circle cx="${x - 60}" cy="${y + s + 100}" r="${randInt(rand, 100, 60)}" fill="rgba(255,255,255,0.06)"/>`,
    ];
  },
];

function generateShape(episode) {
  const rand = seededRandom(episode * 7919);
  const generator = shapeGenerators[episode % shapeGenerators.length];
  return generator(rand).join("\n  ");
}

// ── SVG üretici ─────────────────────────────────────────────────────────────
function generateSVG(episode) {
  const { bg1, bg2, accent } = PALETTES[episode % PALETTES.length];
  const padded = padEpisode(episode);
  const { width, height, margin } = LAYOUT;
  const { badge, title, subtitle, episode: ep } = LAYOUT;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">Prompt'una Bandim Bolum ${episode}</title>
  <desc id="desc">Bolum ${episode} icin soyut kapak tasarimi</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  ${generateShape(episode)}
  <rect x="${badge.x}" y="${badge.y}" width="${badge.w}" height="${badge.h}" rx="22" fill="#ffffff" fill-opacity="0.16"/>
  <text x="${badge.textX}" y="${badge.textY}" font-family="${FONT}" font-size="28" fill="#ffffff">SERI</text>
  <text x="${margin}" y="${title.y1}" font-family="${FONT}" font-size="${title.size}" font-weight="700" fill="#ffffff">Prompt'una</text>
  <text x="${margin}" y="${title.y2}" font-family="${FONT}" font-size="${title.size}" font-weight="700" fill="#ffffff">Bandim</text>
  <text x="${margin}" y="${subtitle.y}" font-family="${FONT}" font-size="${subtitle.size}" fill="${accent}">Haftanin yapay zeka gundemi</text>
  <text x="${margin}" y="${ep.y}" font-family="${FONT}" font-size="${ep.size}" font-weight="700" fill="#ffffff">${padded}</text>
</svg>`;
}

// ── Dosya kaydetme ──────────────────────────────────────────────────────────
function coverPath(episode) {
  return path.join(IMAGES_DIR, `promptuna-bandim-${padEpisode(episode)}.svg`);
}

function saveCover(episode, { force = false } = {}) {
  const filePath = coverPath(episode);
  const padded = padEpisode(episode);

  if (!force && fs.existsSync(filePath)) {
    console.log(`⏭  Bölüm ${padded} zaten mevcut: ${path.relative(process.cwd(), filePath)}`);
    return false;
  }

  fs.mkdirSync(IMAGES_DIR, { recursive: true });
  fs.writeFileSync(filePath, generateSVG(episode), "utf-8");
  console.log(`✅ Bölüm ${padded} oluşturuldu: ${path.relative(process.cwd(), filePath)}`);
  return true;
}

function generateBatch(episodes, { force = false } = {}) {
  const created = episodes.reduce((n, ep) => n + (saveCover(ep, { force }) ? 1 : 0), 0);
  console.log(`\n${created} yeni kapak oluşturuldu.`);
  return created;
}

// ── Post'lardan bölüm numaralarını bulma ────────────────────────────────────
function findSeriesEpisodes() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => POST_PATTERN.test(f))
    .map((f) => {
      const content = fs.readFileSync(path.join(POSTS_DIR, f), "utf-8");
      const match = content.match(/^episode:\s*(\d+)/m);
      return match ? parseInt(match[1], 10) : null;
    })
    .filter(Boolean)
    .sort((a, b) => a - b);
}

// ── CLI ─────────────────────────────────────────────────────────────────────
function printUsage() {
  console.log(
    [
      "Kullanım:",
      "  node scripts/generate-cover.js <bölüm>        Tek bölüm üret",
      "  node scripts/generate-cover.js --all           Eksik tüm kapakları üret",
      "  node scripts/generate-cover.js --range 4 10    4-10 arası üret",
      "  node scripts/generate-cover.js --force <bölüm> Üzerine yaz",
    ].join("\n"),
  );
}

function parseRange(args) {
  const start = parseInt(args[1], 10);
  const end = parseInt(args[2], 10);
  if (isNaN(start) || isNaN(end) || start > end) {
    console.error("Geçersiz aralık. Örn: --range 4 10");
    process.exit(1);
  }
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    printUsage();
    process.exit(0);
  }

  const force = args.includes("--force");
  const cleanArgs = args.filter((a) => a !== "--force");

  if (cleanArgs[0] === "--all") {
    const episodes = findSeriesEpisodes();
    if (episodes.length === 0) {
      console.log("Hiç promptuna-bandım postu bulunamadı.");
      return;
    }
    console.log(`Bulunan bölümler: ${episodes.join(", ")}`);
    generateBatch(episodes, { force });
  } else if (cleanArgs[0] === "--range") {
    generateBatch(parseRange(cleanArgs), { force });
  } else {
    const episode = parseInt(cleanArgs[0], 10);
    if (isNaN(episode) || episode < 1) {
      console.error("Geçerli bir bölüm numarası girin.");
      process.exit(1);
    }
    saveCover(episode, { force });
  }
}

module.exports = { generateSVG, saveCover, findSeriesEpisodes };

if (require.main === module) {
  main();
}
