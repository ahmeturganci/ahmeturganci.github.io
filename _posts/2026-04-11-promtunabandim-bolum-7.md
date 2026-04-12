---
title: "Prompt'una Bandım - Bölüm 7: Haftanın Yapay Zeka Gündemi"
layout: post
show_read_more: true
series: promptuna-bandim
episode: 7
cover_image: /assets/images/promptuna-bandim-07.svg
cover_alt: "Prompt'una Bandım bölüm 7 kapak görseli"
---

Herkese selamlar, ben Ahmet! **Prompt'una Bandım**'ın yedinci bölümüne hoş geldiniz.

*Bu hafta: Anthropic en güçlü modelini duyurdu ama vermedi. Meta yıllarca "açık kaynak savunucusuyuz" dedikten sonra kapalı bir model çıkardı. OpenAI'nin bir sonraki modeli neredeyse kapıda. Ve AI ile yazılan kodun güvenlik faturası büyümeye devam ediyor. On haberi kısa, bilgi odaklı ve kaynaklı olarak derledik.*

---

## 1. Anthropic Project Glasswing: Modeli Vermek Yerine Savunuculara Verdiler

7 Nisan'da Anthropic, Claude Mythos Preview modelini ve Project Glasswing girişimini duyurdu. Modelin varlığı geçen hafta bir sızıntıyla ortaya çıkmıştı — bu hafta resmi duyuru geldi.

Model neden kamuya açılmıyor? Anthropic'e göre test sürecinde **her büyük işletim sisteminde ve her büyük tarayıcıda binlerce sıfır gün açığı** bulundu. Bu kapasitenin herkese açık olması saldırganlara da aynı gücü verir.

Bunun yerine seçilmiş savunmacılara verildi. AWS, Apple, Google, Microsoft, Cisco dahil **12 büyük ortak** modele erişim alıyor. Anthropic 100 milyon dolarlık kullanım kredisi ve açık kaynak güvenlik projelerine 4 milyon dolar bağış taahhüt etti.

Siber güvenlik uzmanları bu kararı sektörde bir ilk olarak değerlendiriyor. Bir modelin saldırı kapasitesi gerekçesiyle kamuya açılmaması ve bunun bu kadar net biçimde ilan edilmesi daha önce olmamıştı.

**Kaynaklar:**
- [Fortune — Project Glasswing lansmanı](https://fortune.com/2026/04/07/anthropic-claude-mythos-model-project-glasswing-cybersecurity/)
- [TechCrunch — Teknik detaylar](https://techcrunch.com/2026/04/07/anthropic-mythos-ai-model-preview-security/)
- [Anthropic Blog — Resmi duyuru](https://www.anthropic.com/glasswing)

---

## 2. Meta Muse Spark: Açık Kaynaktan Çıkış

8 Nisan'da Meta, **Muse Spark**'ı duyurdu. Alexandr Wang liderliğindeki Meta Superintelligence Labs'tan çıkan ilk model.

Arka plan: Geçen yıl Llama 4 beklentileri karşılamayınca Zuckerberg, Scale AI'dan Wang'i 14,3 milyar dolarlık bir anlaşmayla getirdi. Ekip dokuz ayda tüm AI altyapısını baştan kurdu.

Model metin, ses ve görsel girişi destekliyor. Benchmark sonuçlarına göre GPT-5.4 ve Claude Sonnet 4.6 ile rekabetçi. Meta AI uygulamasında aktif, WhatsApp, Instagram ve Facebook'a yakında geliyor.

En kritik fark: **Muse Spark kapalı kaynak.** Meta bugüne kadar Llama ailesini açık ağırlıklarla yayımlıyordu. Bu ilk kez tamamen kapalı bir model çıkardılar. Wang "ileride açık kaynak sürüm çıkarılabilir" dedi, tarih vermedi.

Geliştirici topluluğunun tepkisi olumsuz oldu. Meta hissesi yüzde 6,5 yükseldi.

**Kaynaklar:**
- [CNBC — Muse Spark duyurusu](https://www.cnbc.com/2026/04/08/meta-debuts-first-major-ai-model-since-14-billion-deal-to-bring-in-alexandr-wang.html)
- [Fortune — Alexandr Wang ve strateji](https://fortune.com/2026/04/08/meta-unveils-muse-spark-mark-zuckerberg-ai-push/)
- [TechCrunch — Geliştirici tepkileri](https://techcrunch.com/2026/04/08/meta-debuts-the-muse-spark-model-in-a-ground-up-overhaul-of-its-ai/)

---

## 3. OpenAI'nin Yeni Modeli: Kod Adı "Spud"

OpenAI'nin bir sonraki büyük modeli mart sonunda ön eğitimi tamamladı. Dahili kod adı **Spud**. GPT-5.5 ya da GPT-6 olarak çıkacak, henüz kesinleşmedi.

Polymarket'ta Nisan ayı lansmanı için **yüzde 78 olasılık** veriliyor. Sam Altman çalışanlarına modelin "çok güçlü" olduğunu ve ekonomiyi hızlandırabileceğini söyledi.

Bu model ChatGPT, Codex ve araştırma araçlarını tek bir platformda birleştiren "unified super-app" stratejisinin omurgası olacak. Çıktığında benchmark tabloları yeniden şekillenebilir.

**Kaynaklar:**
- [The Information — Spud sızıntısı](https://www.theinformation.com)
- [LumiChats — Detaylı analiz](https://lumichats.com/blog/gpt-5-5-spud-openai-release-date-features-april-2026-complete-guide)
- [Polymarket — Tahmin verileri](https://polymarket.com)

---

## 4. Vibe Coding'in Güvenlik Faturası

Georgia Tech'in **Vibe Security Radar** projesi mart ayında doğrudan AI üretimi koddan kaynaklanan **35 yeni CVE** tespit etti. Ocak'ta 6, Şubat'ta 15'ti.

Veracode'un 100'den fazla modeli kapsayan testinde AI üretimi kodun **yüzde 45'i** temel güvenlik testini geçemedi. XSS ve log injection kategorilerinde başarısızlık oranı yüzde 86–88.

Dikkat çekici bir veri: Model büyüklüğü burada fark yaratmıyor. Büyük modeller küçük modellerden güvenlik testinde anlamlı biçimde daha iyi değil. Yani daha pahalı araç kullanmak tek başına çözüm değil.

RSA Konferansı'nda NCSC başkanı bu konuya özel oturum açtı. Konu artık sektörün gündeminde.

**Kaynaklar:**
- [Infosecurity Magazine — CVE verileri](https://www.infosecurity-magazine.com/news/ai-generated-code-vulnerabilities/)
- [NBC News — Genel analiz](https://www.nbcnews.com/tech/security/ai-code-vibe-claude-openai-chatgpt-rcna258807)
- [Cloud Security Alliance — Araştırma notu](https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-generated-code-vulnerability-surge-2026/)

---

## 5. OpenAI Safety Fellowship

OpenAI, dış araştırmacıları destekleyecek **Safety Fellowship** programını 6 Nisan'da duyurdu. Eylül 2026'dan Şubat 2027'ye kadar sürecek.

Odak alanlar: güvenlik değerlendirmesi, etik, sağlamlık, ölçeklenebilir azaltımlar, gizlilik korumalı güvenlik yöntemleri ve ajan denetimi. Çıktılar makaleler, benchmark'lar ve veri setleri olacak.

Bu duyuru OpenAI'nin aynı hafta yayımladığı "Zeka Çağı için Endüstriyel Politika" belgesiyle aynı güne denk geldi. Şirket teknik güç gösterisi yaparken eş zamanlı güvenlik ve politika sinyali veriyor.

**Kaynaklar:**
- [OpenAI Blog — Resmi duyuru](https://openai.com/index/introducing-openai-safety-fellowship/)

---

## 6. ABD'li AI Firmaları Çin Model Distilasyonuna Karşı Ortak Hareket Ediyor

OpenAI, Anthropic ve Google bu hafta ortak bir girişim başlattı. İddiaya göre bazı Çinli laboratuvarlar, prompt saldırılarıyla bu şirketlerin modellerinden yetenekleri kopyalıyor.

Asıl endişe şu: Kopyalama sürecinde modellerin güvenlik katmanları devre dışı kalıyor. Yani ortaya çıkan model **orijinalin yeteneklerine sahip ama güvenlik önlemlerine sahip değil.**

ABD Ulusal Güvenlik Konseyi'nin de konuyla ilgilendiği belirtiliyor. Üç firma tespit ve savunma mekanizmaları üzerinde birlikte çalışıyor.

**Kaynaklar:**
- [Axios — İlk haber](https://www.axios.com)
- [NeuralBuddies — Haftalık özet](https://www.neuralbuddies.com/p/ai-news-recap-april-10-2026)

---

## 7. Perplexity 450 Milyon Dolar ARR

Perplexity tek bir ayda **yüzde 50 büyüyerek** 450 milyon dolarlık yıllık tekrar eden gelire ulaştı. 100 milyonun üzerinde aylık aktif kullanıcı var.

Büyümeyi sürükleyen arama değil, **ajan ürünleri.** Öne çıkan örnek: canlı IRS verisiyle çalışan bir vergi ajanı. Bireysel ve kurumsal katmanlar 20 ile 200 dolar arasında fiyatlanıyor.

Cursor'ın 2 milyar ve Anthropic'in 19 milyar dolarlık ARR'ı ile karşılaştırıldığında daha küçük, ama büyüme hızı dikkat çekici.

**Kaynaklar:**
- [The AI Marketers — Haftalık özet](https://www.theaimarketers.ai/news041026/)

---

## 8. Shopify AI Toolkit: Ajanlar Artık Mağazayı Yönetiyor

Shopify'ın yeni **AI Toolkit**'i ajanların doğal dil üzerinden gerçek mağaza operasyonlarını yürütmesine olanak tanıyor. Toplu SEO güncellemesi, indirim uygulama, ürün görseli değiştirme gibi işlemler artık komutla yapılıyor.

Fark şu: daha önce bu araçlar Shopify'ın nasıl çalıştığını tahmin etmeye çalışan bir asistan gibi davranıyordu. Şimdi gerçek değişiklik yapan bir operatör gibi davranıyor.

E-ticaret için AI ajanların doğrudan operasyonel entegrasyon çağını başlatan bir adım.

**Kaynaklar:**
- [The AI Marketers — Shopify haberi](https://www.theaimarketers.ai/news041026/)

---

## 9. Gemini ve NotebookLM Entegrasyonu

Google, **NotebookLM**'yi doğrudan Gemini arayüzüne entegre etti. Artık uygulamalar arasında geçiş yapmadan araştırma defteri oluşturmak mümkün.

PDF, belgeler, URL'ler, YouTube videoları yan panelden yüklenebiliyor. Gemini'de başlanan araştırma kesintisiz biçimde NotebookLM'de video özetine dönüştürülebiliyor. Her şey otomatik senkronize oluyor.

Ücretli Gemini kullanıcılarına bu hafta açıldı. Mobil ve ücretsiz katmana yakında geliyor.

**Kaynaklar:**
- [NeuralBuddies — Haftalık özet](https://www.neuralbuddies.com/p/ai-news-recap-april-10-2026)
- [HumAI Blog — Nisan 2026 özeti](https://www.humai.blog/ai-news-trends-april-2026-complete-monthly-digest/)

---

## 10. AI Sağlıkta: Bakım Veren Biri Yanlış Teşhisi Yakaladı

Teknoloji uzmanı Pratik Desai, annesinin evre dört duodenal adenokarsinom tedavisini yönetmek için NotebookLM ve Claude'dan oluşan bir iş akışı kurdu.

Sistem her gün Epic sağlık kaydı çıktılarını analiz etti. BT tarama yanlış teşhislerini yakaladı, tıbbi acil durumları öngördü ve bakımı koordine etti. Üç kritik müdahaleye zemin hazırladığı aktarılıyor.

Bu vakayı önemli kılan: kullanılan araçlar herkese açık tüketici ürünleri. Özel bir sistem yok. Bu düzeyde klinik değer, standart araçlarla elde edildi.

**Kaynaklar:**
- [HumAI Blog — Vaka analizi](https://www.humai.blog/ai-news-trends-april-2026-complete-monthly-digest/)

---

## Kısa Haberler

**OpenAI Çocuk Güvenliği Planı:** 8 Nisan'da NCMEC ile hazırlanan politika belgesi yayımlandı. AI üretimi istismar içeriğine karşı hukuki çerçeve ve teknik öneri paketi sunuyor. [→ OpenAI Blog](https://openai.com/index/introducing-child-safety-blueprint/)

**MCP 97 milyon kurulum:** Anthropic'in Model Context Protocol'ü 97 milyon kurulumu aştı. Tüm büyük AI sağlayıcıları artık MCP uyumlu araç çıkarıyor. Ajan ekolojisinin fiili standardı haline geliyor.

**Claude App Store'da ChatGPT'yi geçti:** Claude'un indirme sayısı ilk kez kısa süreliğine ChatGPT'yi geçti. Claude Code ve Glasswing'in yarattığı bilinirlikle ilişkilendiriliyor.

**Claude kesintisi:** 6–7 Nisan'da Claude giriş sorunları ve hata artışıyla ciddi bir kesinti yaşadı. 30 milyar dolar gelir duyurusunun aynı haftasına denk geldi.

---

## Haftanın Büyük Resmi

Bu haftanın üç teması var: **güç konsolide oluyor, güvenlik ciddiye alınıyor, ajanlar somutlaşıyor.**

Anthropic en güçlü modelini seçilmiş ortaklara verdi. Meta en iyi modelini kapalı tuttu. OpenAI yeni modelini henüz çıkarmadı ama çerçeveyi hazırladı. Açık kaynak taraftaki baskı büyüyor, güvenlik borcu artıyor, sermaye yoğunlaşıyor.

Öte yandan Shopify, Perplexity ve Gemini entegrasyonu AI'ın sohbet arayüzünden çıkıp iş yapan sisteme dönüştüğünü somut olarak gösteriyor.

Bir sonraki bölümde görüşmek üzere!

---

*Bu yazı, Prompt'una Bandım podcast'inin 5–11 Nisan 2026 bülteninin yazılı versiyonudur.*
