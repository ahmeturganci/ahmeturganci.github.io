(function () {
  const MAX_SUGGESTIONS = 8;
  const WORD_REPLACEMENTS = [
    ["yanlız", "yalnız"],
    ["herkez", "herkes"],
    ["yalnış", "yanlış"],
    ["şöför", "şoför"],
    ["birşey", "bir şey"],
    ["bişey", "bir şey"],
    ["hiç bir", "hiçbir"],
    ["bir çok", "birçok"],
    ["pekçok", "pek çok"],
    ["bir kaç", "birkaç"],
    ["hiçkimse", "hiç kimse"],
    ["farket", "fark et"],
    ["farked", "fark ed"],
    ["ardarda", "art arda"],
    ["klavuz", "kılavuz"],
  ];
  const QUESTION_PATTERNS = [
    {
      pattern:
        /\b([a-zçğıöşü]+(?:yor|dı|di|du|dü|tı|ti|tu|tü|acak|ecek|ar|er|ır|ir|ur|ür|malı|meli|sa|se|mış|miş|muş|müş))(m[ıiuü])(s[ıiuü]n|y[ıiuü]m|y[ıiuü]z)\b/giu,
      replacer: (_, word, suffix, ending) => `${word} ${suffix}${ending}`,
    },
    {
      pattern:
        /\b([a-zçğıöşü]+(?:yor|dı|di|du|dü|tı|ti|tu|tü|acak|ecek|ar|er|ır|ir|ur|ür|malı|meli|sa|se|mış|miş|muş|müş))(m[ıiuü])\b/giu,
      replacer: (_, word, suffix) => `${word} ${suffix}`,
    },
    {
      pattern: /\b(var|yok|değil|olur|tamam)(m[ıiuü])\b/giu,
      replacer: (_, word, suffix) => `${word} ${suffix}`,
    },
  ];

  function preserveCase(source, replacement) {
    if (source === source.toLocaleUpperCase("tr-TR")) {
      return replacement.toLocaleUpperCase("tr-TR");
    }

    const firstChar = source.charAt(0);
    const rest = source.slice(1);

    if (
      firstChar === firstChar.toLocaleUpperCase("tr-TR") &&
      rest === rest.toLocaleLowerCase("tr-TR")
    ) {
      return replacement
        .split(" ")
        .map(word => word.charAt(0).toLocaleUpperCase("tr-TR") + word.slice(1))
        .join(" ");
    }

    return replacement;
  }

  function capitalizeSentences(text) {
    let shouldCapitalize = true;
    let result = "";

    for (const char of text) {
      if (shouldCapitalize && /[a-zçğıöşü]/iu.test(char)) {
        result += char.toLocaleUpperCase("tr-TR");
        shouldCapitalize = false;
        continue;
      }

      result += char;

      if (/[.!?…]/u.test(char) || char === "\n") {
        shouldCapitalize = true;
      }
    }

    return result;
  }

  function applyRule(text, suggestionList, label, transform) {
    const nextText = transform(text);

    if (nextText !== text) {
      suggestionList.push(label);
    }

    return nextText;
  }

  function applyRegexReplacement(
    text,
    suggestionList,
    label,
    pattern,
    replacement
  ) {
    let changed = false;
    const nextText = text.replace(pattern, match => {
      const nextValue =
        typeof replacement === "function"
          ? replacement(match)
          : preserveCase(match, replacement);

      if (nextValue !== match) {
        changed = true;
      }

      function escapeRegExp(value) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }

      function createWordPattern(source) {
        const escapedSource = escapeRegExp(source).replace(/\s+/g, "\\s+");
        return new RegExp(
          `(?<![\\p{L}\\p{N}_])${escapedSource}(?![\\p{L}\\p{N}_])`,
          "giu"
        );
      }

      return nextValue;
    });

    if (changed) {
      suggestionList.push(label);
    }

    return nextText;
  }

  function normalizeText(rawText) {
    const suggestions = [];
    const normalizedInput = rawText.replace(/\r\n/g, "\n");
    const leadingWhitespace = normalizedInput.match(/^\s*/u)?.[0] || "";
    const trailingWhitespace = normalizedInput.match(/\s*$/u)?.[0] || "";
    const startIndex = leadingWhitespace.length;
    const endIndex = normalizedInput.length - trailingWhitespace.length;
    let text = normalizedInput.slice(startIndex, endIndex);

    if (!text.trim()) {
      return {
        correctedText: rawText,
        suggestions,
      };
    }

    text = applyRule(
      text,
      suggestions,
      "Fazla boşluklar sadeleştirildi.",
      value => value.replace(/[^\S\n]+/g, " ")
    );
    text = applyRule(
      text,
      suggestions,
      "Noktalama işaretlerinden önceki boşluklar kaldırıldı.",
      value => value.replace(/\s+([,.;:!?])/g, "$1")
    );
    text = applyRule(
      text,
      suggestions,
      "Noktalama işaretlerinden sonra uygun boşluk eklendi.",
      value =>
        value
          .replace(/([;:!?])([^\s\n])/g, "$1 $2")
          .replace(/([,.])([A-Za-zÇĞİIÖŞÜçğıöşü])/gu, "$1 $2")
    );
    text = applyRule(
      text,
      suggestions,
      "Tekrarlanan boş satırlar azaltıldı.",
      value => value.replace(/\n{3,}/g, "\n\n")
    );

    WORD_REPLACEMENTS.forEach(([source, target]) => {
      text = applyRegexReplacement(
        text,
        suggestions,
        `Yaygın yazım hatası düzeltildi: ${source} → ${target}`,
        createWordPattern(source),
        target
      );
    });

    text = applyRule(text, suggestions, "Soru eki ayrı yazıldı.", value => {
      let result = value;

      QUESTION_PATTERNS.forEach(({ pattern, replacer }) => {
        result = result.replace(pattern, replacer);
      });

      return result;
    });
    text = applyRule(
      text,
      suggestions,
      "Cümle başları büyük harfe çevrildi.",
      capitalizeSentences
    );

    return {
      correctedText: `${leadingWhitespace}${text}${trailingWhitespace}`,
      suggestions: [...new Set(suggestions)].slice(0, MAX_SUGGESTIONS),
    };
  }

  function renderSuggestions(items, listElement, summaryElement) {
    if (items.length === 0) {
      listElement.innerHTML = "";
      summaryElement.hidden = true;
      return;
    }

    listElement.replaceChildren(
      ...items.map(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        return listItem;
      })
    );
    summaryElement.hidden = false;
  }

  function init() {
    const input = document.getElementById("proofreader-input");
    const output = document.getElementById("proofreader-output");
    const status = document.querySelector('[data-role="status"]');
    const summary = document.querySelector('[data-role="summary"]');
    const suggestions = document.querySelector('[data-role="suggestions"]');
    const correctButton = document.querySelector('[data-action="correct"]');
    const clearButton = document.querySelector('[data-action="clear"]');
    const copyButton = document.querySelector('[data-action="copy"]');

    if (
      !input ||
      !output ||
      !status ||
      !summary ||
      !suggestions ||
      !correctButton ||
      !clearButton ||
      !copyButton
    ) {
      return;
    }

    async function handleCorrection() {
      const text = input.value;

      if (!text.trim()) {
        status.textContent = "Lütfen düzeltilecek bir metin gir.";
        output.value = "";
        summary.hidden = true;
        copyButton.disabled = true;
        return;
      }

      correctButton.disabled = true;
      clearButton.disabled = true;
      copyButton.disabled = true;
      status.textContent = "Metin kontrol ediliyor...";

      try {
        const data = normalizeText(text);
        const correctedText = data.correctedText;

        output.value = correctedText;
        renderSuggestions(data.suggestions || [], suggestions, summary);

        if (correctedText === text) {
          status.textContent =
            "Düzeltilmesi gereken belirgin bir hata bulunamadı.";
        } else {
          status.textContent = `${data.suggestions.length || 1} düzenleme uygulandı.`;
        }

        copyButton.disabled = !output.value;
        correctButton.disabled = false;
        clearButton.disabled = false;
      } catch (error) {
        output.value = "";
        summary.hidden = true;
        status.textContent = "Metin işlenirken bir hata oluştu.";
        correctButton.disabled = false;
        clearButton.disabled = false;
      }
    }

    async function handleCopy() {
      if (!output.value) {
        return;
      }

      try {
        await navigator.clipboard.writeText(output.value);
        status.textContent = "Düzeltilmiş metin panoya kopyalandı.";
      } catch (error) {
        status.textContent = "Metin kopyalanamadı.";
      }
    }

    function handleClear() {
      input.value = "";
      output.value = "";
      status.textContent = "";
      summary.hidden = true;
      suggestions.innerHTML = "";
      copyButton.disabled = true;
      input.focus();
    }

    correctButton.addEventListener("click", handleCorrection);
    clearButton.addEventListener("click", handleClear);
    copyButton.addEventListener("click", handleCopy);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
