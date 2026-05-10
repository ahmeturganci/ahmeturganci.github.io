---
title: "Prompt'una Bandım - Bölüm 11: 4 – 10 Mayıs 2026 AI Haber Bülteni"
layout: post
show_read_more: true
series: promptuna-bandim
episode: 11
cover_image: /assets/images/promptuna-bandim-11.svg
cover_alt: "Prompt'una Bandım bölüm 11 kapak görseli"
---

Herkese selamlar, ben Ahmet! **Prompt'una Bandım**'ın yeni dönemindeki ilk bölümüne hoş geldiniz.

*4 – 10 Mayıs tarihleri arasında yapay zeka dünyası kelimenin tam anlamıyla "vites artırdı". Devasa GPU çiftliklerinden, emoji sayan modellere ve Instagram'da sizin yerinize alışveriş yapan ajanlara kadar dopdolu bir turumuz var. Haber sayımız çok, vaktimiz kıymetli; hadi başlayalım!*

---

## 1. 🏗️ Anthropic ve Devlerin Memphis Dansı

İlk durağımız Anthropic. Şirket, Elon Musk'ın Memphis'teki **Colossus 1** veri merkezinin tüm kapasitesini kiraladı. Rakamlar dudak uçuklatıyor: **220 binden fazla NVIDIA GPU** ve **300 megawatt'ın** üzerinde bir güçten bahsediyoruz.

**Teknik Not:** Bu güç tüketimi yaklaşık 250 bin evin elektriğine denk. Anthropic bu kas gücünü tamamen Claude'u hayatta tutmak için kullanacak. İşin ilginç yanı; SpaceX bünyesindeki xAI, yani Grok'un yaratıcısı, teknik olarak Anthropic'in en büyük rakiplerinden biri. Rakibinin mutfağında hamburger pişirmek gibi bir durum.

**Kullanıcıya Yansıması:** Bu hamle meyvelerini hemen verdi: Claude Opus API rate limitleri yükseldi ve Claude Code kullanım limitleri ücretli kullanıcılar için iki katına çıktı.

Musk'ın sözleşmeye *"Eğer AI insanlığa zarar verirse bu bilgisayarları geri alabilirim"* maddesi eklemesi tam ona göre bir hareket. Ama asıl heyecan verici olan, iki şirketin **Orbital Data Center** — yani uzayda dönen veri merkezleri — üzerinde çalışması. SpaceX roketleri hazır, Anthropic zekası hazır. Bilim kurgu gerçeğe dönüşüyor.

---

## 2. 😶 GPT-5.5 Instant — Daha Az Emoji, Daha Çok Zeka

5 Mayıs itibarıyla OpenAI varsayılan modelini güncelledi: **GPT-5.5 Instant**. Duyurudaki en komik ama önemli detay, mühendislik hedefi olarak "gereksiz emoji kullanımını azaltma"nın yazılmasıydı. 2026'da geldiğimiz nokta bu; AI'a nerede duracağını öğretmeye çalışıyoruz.

**Teknik Gelişmeler:**

- **Halüsinasyon Denetimi:** Hukuk, tıp ve finans gibi hassas alanlarda halüsinasyon oranı önceki modele göre **%52 oranında** düşürülmüş. Bu, modelin "uydurma" eğiliminin ciddi şekilde dizginlendiğini gösteriyor.
- **Derin Kişiselleştirme:** Model; geçmiş sohbetleriniz ve bağlı Gmail hesabınızdan gelen bağlamı (context) artık çok daha akıcı işliyor.
- **Güvenlik:** "Bellek Kaynakları" paneli sayesinde modelin sizin hakkınızda ne bildiğini şeffafça görebiliyor ve silebiliyorsunuz.

---

## 3. ⚡ Gemma 4 ve Speculative Decoding Sihri

Google cephesinde bu haftanın en temiz mühendislik başarısı yaşandı. Yeni donanım yok, yeni eğitim yok — ama **3 kat hız artışı** var. Peki, nasıl?

**Teknik Detay:** Normalde LLM'ler kelime kelime çalışır ve her adımda milyarlarca parametreyi bellekten çağırmak büyük bir darboğaz yaratır. Google burada **Speculative Decoding** (Tahminli Kod Çözme) tekniğini kullandı:

- Küçük bir "taslak model" sonraki kelimeleri hızla tahmin ediyor.
- Devasa "ana model" ise bu tahminleri **paralel olarak** onaylıyor.
- Tahmin doğruysa zaman kazanıyoruz; yanlışsa ana model milisaniyeler içinde düzeltiyor.

Bu sayede 31 milyar parametreli **Gemma 4**, artık yerel cihazlarda bile çok daha akıcı çalışıyor. Yeni donanım satın almadan var olan modeli 3x hızlandırmak — saf mühendislik zaferinin kitabî örneği.

---

## 4. 🛍️ Meta'nın Yeni Ajanı — Hatch

Meta, Instagram içinde **Hatch** adında dahili bir ajanı test etmeye başladı. Senaryo çok basit: Bir ürün görüyorsunuz, beğeniyorsunuz ve ajana "bunu al" diyorsunuz. Ajan ödeme bilgilerinizi biliyor, adresinizi biliyor ve siparişi siz ekrandan ayrılmadan tamamlıyor.

**Analiz:** Kullanıcı için kolaylık, ama Meta için dev bir reklam devrimi. "Reklamı gördüm, düşündüm, aldım" süreci artık tamamen otonom hale geliyor: *"AI reklamı gördü, AI satın aldı."*

Aradaki o "insan kararı" adımı daraldıkça, e-ticaretin kuralları yeniden yazılacak. Bunun bir kolaylık mı yoksa bir manipülasyon riski mi olduğu sorusu ise henüz yanıtsız.

---

## 5. 🎙️ OpenAI'dan Ses Devrimi — Real-Time Voice API

OpenAI bu hafta sadece metin tarafında kalmadı; API tarafına **Gerçek Zamanlı Ses Zekâsı** (Voice Intelligence) özelliklerini eklediğini duyurdu. Bu hamleyle artık AI ajanları "metin chatbotu" olmaktan çıkıp gerçek zamanlı dijital asistanlara dönüşüyor.

**Teknik Detaylar:**

- **Düşük Gecikme (Low Latency):** Yeni altyapı sayesinde sesli çıkarım (voice inference) hızı neredeyse insan konuşma temposuna çekildi. O can sıkıcı bekleme süreleri tarih oluyor.
- **Tek Pipeline Mimarisi:** Eskiden ses; önce metne çevrilir, sonra işlenir, sonra tekrar sese çevrilirdi. Yeni API ile **canlı konuşma, transkripsiyon ve anlık çeviri** tek bir akış üzerinden yürüyor.
- **Screenless AI:** OpenAI burada net bir mesaj veriyor: Gelecek "ekransız". Geliştiriciler artık yalnızca sesle yönetilen, çok dilli ve duyguları anlayabilen otonom ajanlar inşa edebilecek.

---

## 6. 📱 OpenAI'nin "AI Agent Phone" İddiaları Güçleniyor

OpenAI'nin Jony Ive ekibiyle geliştirdiği AI odaklı cihazın artık bir **"AI agent phone"** formuna evrildiği konuşuluyor. Yeni raporlara göre şirket 2027 için üretim planlarını hızlandırdı; cihazın uygulama tabanlı değil, doğrudan AI agent merkezli çalışacağı belirtiliyor.

**Teknik Gelişmeler:**

- Cihazın özel **MediaTek AI chipset** kullanacağı iddia ediliyor.
- **Dual-NPU mimarisiyle** gerçek zamanlı AI inference hedefleniyor.
- Sistem klasik "app" mantığından çok görev bazlı AI agent yaklaşımına odaklanıyor.
- Kamera ve sensör altyapısının **çevresel algılama** için optimize edildiği belirtiliyor.
- OpenAI'nin donanım tarafında Apple benzeri **"vertical integration"** stratejisine geçtiği görülüyor.

Eğer bu vizyonu geçen haftanın Bedrock ve voice API haberleriyle birleştirirseniz, ortaya tutarlı bir tablo çıkıyor: OpenAI artık yalnızca bir model şirketi olmak istemiyor.

---

## 7. 🤖 Meta, "Agentic AI Assistant" Geliştiriyor

Meta'nın, **Muse Spark** modeli tabanlı gelişmiş bir "agentic AI assistant" üzerinde çalıştığı ortaya çıktı. Sistem, kullanıcı adına görev yapabilen ve bağımsız karar alabilen AI agent mantığıyla geliştiriliyor.

**Teknik Gelişmeler:**

- Yeni assistant, klasik chatbot yerine **görev odaklı AI agent** olarak tasarlanıyor.
- Sistem kişisel görevleri bağımsız biçimde yerine getirebiliyor.
- Muse Spark modeli **uzun context ve kullanıcı hafızası** odaklı geliştiriliyor.
- Instagram için özel **AI commerce/shopping agent** hazırlanıyor.
- Meta'nın hedefi, AI'ı sosyal medya uygulamalarının merkezine yerleştirmek.

Hatch ve bu haberle birlikte Meta'nın stratejisi netleşiyor: Sosyal medya platformunu bir alışveriş + görev yönetimi platformuna dönüştürmek. Ve bunu yaparken sizin adınıza karar alan bir ajan ile yapmak.

---

## 🎙️ Bu Haftanın Özeti

Bu hafta tek bir tema öne çıktı: **ajanlık**. Hatch sipariş veriyor, OpenAI telefonu görev yapıyor, Meta asistanı bağımsız karar alıyor, Voice API ise bu ajanları sesle yönetilebilir hale getiriyor. 

Speculative Decoding bize şunu hatırlattı: En büyük sıçramalar bazen yeni donanımdan değil, zekice algoritmalardan geliyor. Ve Anthropic'in Memphis hamlesi ise şunu gösterdi: Bu rekabette enerji, GPU ve fiziksel alan artık stratejik bir silah.

Bir sonraki bölümde görüşmek üzere!
