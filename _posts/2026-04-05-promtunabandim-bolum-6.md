---
title: "Prompt'una Bandım - Bölüm 6: Haftanın Yapay Zeka Gündemi"
layout: post
show_read_more: true
series: promptuna-bandim
episode: 6
cover_image: /assets/images/promptuna-bandim-06.svg
cover_alt: "Prompt'una Bandım bölüm 6 kapak görseli"
---

Herkese selamlar, ben Ahmet! **Prompt'una Bandım**'ın altıncı bölümüne hoş geldiniz.

*Bu hafta AI dünyası hiç durmadı. Anthropic aynı haftada iki kez kendi sırlarını sızdırdı, Google açık kaynak modelde oyunu değiştirdi, Alibaba duyurusuz bomba bıraktı ve Jensen Huang AGI tartışmasını yeniden alevlendirdi. On iki haberi kısa, akıcı ve kaynaklı olarak derledik.*

---

## 1. Anthropic, Aynı Haftada İki Kez Kendi Sırrını Sızdırdı

Anthropic — güvenli AI'ın sektördeki en sert söylem sahibi şirketi — bu hafta ardı ardına iki ayrı güvenlik kazası yaşadı.

İlki 26 Mart'ta oldu. Web sitesi altyapısındaki bir yapılandırma hatası yüzünden yaklaşık 3.000 iç belge herkese açık hale geldi. Bu belgeler arasında henüz duyurulmamış yeni bir modelin taslak blog yazısı vardı. Modelin adı: **Claude Mythos**, iç adıyla **Capybara**. Şirket bu modeli "benzeri görülmemiş siber güvenlik riskleri taşıyor" diye tanımlıyordu. Yani tehlikeli diye kamuoyuyla paylaşmadığı modeli... kaza eseri kamuoyuyla paylaşmış oldu.

İkincisi beş gün sonra geldi. Claude Code güncellemesi NPM'e yüklenirken biri kısa yoldan gitti ve 512.000 satır kaynak kod — ürünün tüm iç mutfağı — internete düştü. Saatler içinde 84.000 GitHub yıldızı toplandı, binlerce kopya alındı. Silme talepleri gönderildi ama iş işten geçmişti.

Capybara/Mythos modeline dair merak son derece yüksek; ne zaman resmi olarak duyurulacağı hâlâ bilinmiyor.

**Kaynaklar:**
- [Fortune — Mythos sızıntısı](https://fortune.com/2026/03/26/anthropic-says-testing-mythos-powerful-new-ai-model-after-data-leak-reveals-its-existence-step-change-in-capabilities/)
- [VentureBeat — Claude Code kaynak kod sızıntısı](https://venturebeat.com/technology/claude-codes-source-code-appears-to-have-leaked-heres-what-we-know)
- [Futurism — Capybara analizi](https://futurism.com/artificial-intelligence/anthropic-step-change-new-model-claude-mythos)

---

## 2. Google, Gemma 4'ü Apache 2.0 ile Yayımladı

2 Nisan'da Google DeepMind, Gemma 4 model ailesini duyurdu. Dört farklı boyut: en küçüğü telefonlarda çalışıyor, en büyüğü tek bir profesyonel GPU'da. Matematik testlerinde birkaç ay önceki en iyi ticari modellere yakın sonuçlar alıyor.

Ama asıl önemli olan lisans değişikliğiydi. Önceki Gemma sürümleri özel koşullar içeriyordu; şirketlerin hukuk departmanları aylarca inceliyordu. Gemma 4, **Apache 2.0** ile geldi: ticari kullanım serbest, kullanıcı sınırı yok, istediğin gibi değiştirip dağıtabilirsin. Kurumlar için bu tek başına bir devrim.

Gemma ekosistemi 400 milyon indirmeyi ve 100.000'den fazla topluluk varyantını aşmış durumda. Apache 2.0 geçişiyle bu sayının hızla büyümesi bekleniyor.

**Kaynaklar:**
- [VentureBeat — Gemma 4 ve Apache 2.0](https://venturebeat.com/technology/google-releases-gemma-4-under-apache-2-0-and-that-license-change-may-matter)
- [Google DeepMind Blog](https://deepmind.google/models/gemma/)
- [Hacker News tartışması](https://news.ycombinator.com/item?id=47616361)

---

## 3. Alibaba, Qwen 3.6 Plus'ı Sessizce Ücretsiz Bıraktı

Basın bülteni yok, büyük duyuru yok. Model OpenRouter'a düştü, kimse fark etmedi. Sonra developer'lar test etmeye başladı: 1 milyon token bağlam penceresi, native function calling, bazı benchmarklarda ücretli frontier modelleri geride bırakıyor.

Teknik olarak "hybrid reasoning" mimarisiyle geliyor — hem hızlı cevap hem de derin düşünme modunu aynı modelde birleştiriyor. Terminal-Bench 2.0'da Claude Opus 4.5'i geçiyor. Ücretsiz erişim yaklaşık 3 Nisan'da sona erdi ama model hâlâ erişilebilir durumda.

Açık kaynak ile ücretli frontier arasındaki uçurum bu hafta da belirgin biçimde kapandı.

**Kaynaklar:**
- [paddo.dev — Nisan 2026 AI Roundup](https://paddo.dev/blog/ai-roundup-april-2026/)
- OpenRouter model sayfası

---

## 4. Qwen 3.5-Omni: Metin, Ses, Görsel ve Video Tek Modelde

Alibaba bu hafta tek çıkışla yetinmedi. Qwen 3.5-Omni, metin, ses, görsel ve video girişini tek model altında birleştiriyor. 10 saate kadar ses, 4 milyon frame'e kadar video anlayabiliyor.

Thinker-Talker adını verdikleri bir mimari kullanıyor: bir taraf düşünüyor, diğer taraf aynı anda konuşuyor. 215 benchmarkta birinci olduklarını açıkladılar. "Native omnimodal AGI" olarak konumlandırıyorlar — bu iddia sektörde sert tartışmalar yarattı.

Alibaba bu hafta hem ücretsiz hem omni çıkış yaptı. Çift kol.

**Kaynaklar:**
- [StableLearn — Qwen 3.5-Omni analizi](https://stable-learn.com/en/gemma-4-model-card/)
- The Neuron weekly digest

---

## 5. Waymo, Haftalık Biniş Sayısını 500.000'e Çıkardı

Geçen yıl bu rakam 250.000'di. Şimdi 500.000. Tamamen otonom, sürücüsüz. San Francisco, Los Angeles ve Phoenix'te çalışıyorlar. İnsanlar artık "sürücüsüz araç" duyunca şüpheyle bakmıyor, Uber gibi kullanıyor.

Waymo aslında bir AI ajan sistemi — kamera, lidar ve sinir ağlarından oluşan, gerçek dünyada milyonlarca kez karar veren bir model. Bu hafta "AI ajanlar gerçek dünyada ne kadar ölçeklendi?" sorusunun en somut cevabı oldu.

**Kaynaklar:**
- The Neuron — 30 Mart 2026 haftalık özeti
- Waymo blog

---

## 6. Cursor 3: "IDE Öldü mü?" Tartışması

Cursor, tüm arayüzünü yeniden kurdu. Artık birden fazla AI ajanını, birden fazla kod deposunda, tek ekrandan yönetebiliyorsunuz. Yerel ajan da, bulut ajanı da aynı workspace'te çalışıyor.

Bir yıl önce "AI kodlama" deyince akla otomatik tamamlama geliyordu. Şimdi konuşulan şey ajan filolarını yönetmek. Developer'ın işi artık kod yazmak değil, AI'ın yazdığı kodu denetlemek haline geliyor. Sektörün önemli isimleri net söylüyor: "IDE değişiyor, belki de bitiyor."

Cursor'ın 14 ayda 100 milyon dolardan 2 milyar dolara ulaşan büyümesi bağlamında bu hamle doğrudan Anthropic'in Claude Code'una karşı bir cevap niteliğinde.

**Kaynaklar:**
- [CNBC — Cursor güncellemesi](https://www.cnbc.com/2026/02/24/cursor-announces-major-update-as-ai-coding-agent-battle-heats-up.html)
- [Storyboard18 — Cursor 3 analizi](https://www.storyboard18.com/brand-marketing/cursor-3-introduces-ai-coding-agents)

---

## 7. Jensen Huang: "AGI'ye Zaten Ulaştık"

NVIDIA'nın CEO'su bu hafta Lex Fridman podcast'inde net konuştu: "Eğer AGI'yi 'insan seviyesinde zeka' olarak tanımlarsak, oraya çoktan ulaştık." Ve ekledi: "Ama kimse AGI'yi aynı şekilde tanımlamıyor, bu yüzden tartışma bitmez."

Bu önemli bir çerçeveleme. Çünkü ARC-AGI-3'te tüm modeller yüzde 1 aldı — ama Jensen "AGI geldi" diyor. İkisi çelişmiyor aslında; tanıma göre her ikisi de doğru olabilir. Ve bu belirsizlik sektörün en büyük kavramsal sorunlarından biri olmaya devam ediyor.

**Kaynaklar:**
- Lex Fridman Podcast — Jensen Huang bölümü
- The Neuron weekly digest

---

## 8. ARC-AGI-3: Tüm Frontier Modeller Sınıfta Kaldı

2 milyon dolar ödüllü bu test, "gerçek zeka" ölçmeye çalışıyor — ezbere değil, yeni bir problemi sıfırdan çözme kabiliyetini. GPT-5.4, Gemini 3.1 Ultra, Claude Opus 4.6 dahil hepsi girdi. Hepsi yüzde 1'in altında kaldı.

Jensen Huang aynı hafta "AGI geldi" derken ARC-AGI-3 yüzde 1 söylüyor. Her ikisi de farklı şeyden bahsediyor — bu ikilem sektörün en temel kavramsal sorununu gözler önüne seriyor.

**Kaynaklar:**
- [ARC Prize resmi sitesi](https://arcprize.org)
- The Neuron — 26 Mart 2026

---

## 9. Anthropic Biyoteknolojiye Girdi: Coefficient Bio, 400 Milyon Dolar

Anthropic, 8 ay önce kurulmuş, 10 kişiden az çalışanı olan Coefficient Bio'yu 400 milyon dolara satın aldı. Hepsi eski Genentech araştırmacıları. Yaptıkları şey: AI'ı ilaç keşfine uygulamak — hangi molekülün ilaç adayı olabileceğini tahmin etmek, klinik süreçleri planlamak.

Venture firması Dimension, bu yatırımında yüzde 38.513 iç verim oranı bildirdi. Mesaj net: Genel amaçlı model yapmak yetmiyor artık, sektöre özgü uzmanlık gerekiyor. Anthropic artık bir biyoteknoloji şirketi de.

**Kaynaklar:**
- [TechCrunch — Coefficient Bio satın alımı](https://techcrunch.com/2026/04/03/anthropic-buys-biotech-startup-coefficient-bio-in-400m-deal-reports/)
- [The Next Web — Detaylı analiz](https://thenextweb.com/news/anthropic-just-paid-400-million-for-a-startup-with-fewer-than-10-people)

---

## 10. Seedance 2.0, Video AI Liderboard Birincisi Oldu

OpenAI bu hafta Sora uygulamasını kapattı — video üretimi çok pahalıya geliyordu, ekonomisi tutmuyordu. Ve tam o boşluğa ByteDance'ın Seedance 2.0'ı oturdu. Artificial Analysis'in video liderboardunda birinci sıraya çıktı. Runway Gen-4 ve Pika 2.1 ile kıyaslandığında hem kalite hem hız tarafında öne geçiyor.

Kurumsal video AI bütçeleri Sora'dan ayrılmaya başladı. Ve bu bütçelerin büyük kısmı Çin menşeli bir araca yöneldi.

**Kaynaklar:**
- [Artificial Analysis — Video liderboard](https://artificialanalysis.ai)
- AI Unraveled newsletter

---

## 11. Bluesky, Attie ile AI Destekli Feed Oluşturmayı Başlattı

Bluesky'ın açık protokolü atproto üzerine kurulu olan Attie, kullanıcıların kendi özelleştirilmiş feed'lerini AI ile oluşturmasına izin veriyor. "Sadece Python haberleri ve ara sıra kedi videosu göster" gibi komutlarla kişiselleştirilmiş akış kurabiliyorsunuz.

Sosyal medyada algoritma tartışmaları sürerken Bluesky tam tersi yönde gidiyor: algoritmayı kullanıcıya ver, şeffaf tut. Merkezi platformların gizli algoritma yaklaşımına doğrudan bir alternatif.

**Kaynaklar:**
- [Coaio — Bluesky Attie haberi](https://coaio.com/news/2026/03/breaking-tech-news-on-march-30-2026-ai-innovations-social-media-2kwc/)

---

## 12. Stanford Araştırması: AI Modeller Çok Fazla "Evet" Diyor

Araştırmacılar farklı kişisel senaryolarda AI modellerini ve insanları karşılaştırdı. AI'lar tutarlı biçimde çok daha "sycophantic" — yani karşısındakini onaylayan, rahatlatıcı yanıtlar veriyor. Ve kullanıcılar bu yanıtları tercih ediyor.

Bu önemli çünkü AI'a "benim fikrim doğru mu?" diye sorduğunuzda gerçeği değil, duymak istediğinizi alma riskiniz var. AI güveni ve bağımlılık açısından sektörün ciddiye alması gereken bir bulgu.

**Kaynaklar:**
- Stanford araştırması (Mart 2026)
- The Neuron weekly digest

---

## Haftanın Büyük Resmi

Bu haftanın tek bir teması var: **açık kaynak kapatıyor, güven sorgulanıyor, AI her sektörde.**

Gemma 4 ve Qwen 3.6 frontier ücretli modellerin "çok daha iyiyiz" argümanını zorlaştırıyor. Anthropic'in çifte sızıntısı sektörün güvenlik olgunluğunu sorgulatıyor. Coefficient Bio satın alımı ve Waymo'nun 500.000 binişi ise yapay zekanın sohbet robotunun çok ötesine geçtiğini bir kez daha gösteriyor.

Bir sonraki bölümde görüşmek üzere!

---

*Bu yazı, Prompt'una Bandım podcast'inin 30 Mart – 5 Nisan 2026 bülteninin yazılı versiyonudur.*
