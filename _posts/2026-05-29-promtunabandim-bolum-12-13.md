---
title: "Prompt'una Bandım - Bölüm 12-13: Yapay Zeka Dünyasından 20 Büyük Gelişme"
layout: post
show_read_more: true
series: promptuna-bandim
episode: "12-13"
cover_image: /assets/images/promptuna-bandim-12-13.svg
cover_alt: "Prompt'una Bandim bolum 12-13 kapak gorseli"
---

Herkese selamlar, ben Ahmet. Bu sayıda 11-25 Mayıs 2026 arasında öne çıkan 20 gelişmeyi geliştirici perspektifiyle derledim: güvenlik, model rekabeti, faturalama, ajan platformları ve üretim etkisi.


## 1. Mythos'un Sessiz Avı: Bir Ayda 10.000 Açık, Sıfır Yama

Anthropic, 22 Mayıs'ta Project Glasswing'in ilk bir aylık raporunu yayımladı. Bulgu: yaklaşık 50 güvenilir ortağa dağıtılan Claude Mythos Preview, tek bir ayda **10.000'i aşkın** yüksek veya kritik güvenlik açığı tespit etmiş. İncelenen örneklerin %90,6'sı gerçek güvenlik açığı olarak doğrulandı, bunların %62,4'ü yüksek tehdit sınıfındaydı.

Ama asıl çarpıcı detay şu: Anthropic'in kendi verileri, bu açıkların **%1'inden azının yamalandığını** ortaya koyuyor. Yapay zeka binlerce kapı kırdı, çilingirler henüz gelmedi.

Cloudflare iç yazılımlarında 2.000 böcek (400'ü kritik), Mozilla Firefox 150'de 271'den fazla açık tespit edildi. Paradoks: Glasswing'in kurucu ortakları arasında AWS, Apple, Cisco, Google, Microsoft ve Nvidia var. Dünyanın en büyük teknoloji şirketleri, **rakibinin modeli** ile kendi deliklerini buluyor.

---

## 2. Amazon Q Developer Bitti, Kiro Doğdu

15 Mayıs 2026, AWS geliştiricileri için bir dönemin kapandığı gün oldu. Amazon Q Developer'a yeni kayıt durduruldu, **Kiro** resmi halef ilan edildi.

Kiro'nun yaklaşımı köklü biçimde farklı. Cursor ve Copilot modelini tersine çeviriyor: **önce spec, sonra kod.** Kiro önce gereksinimleri ve kabul kriterlerini oluşturuyor, sonra kodu yazıyor, testleri koşuyor ve iterasyonları yönetiyor.

Öne çıkan özellikler:

| Özellik | Detay |
|---|---|
| Hooks sistemi | Dosya kaydetme, PR açma gibi olayları tetikler; testleri ve dokümanları otomatik günceller |
| Multi-model yönlendirme | Akıl yürütme gerektiren görevlerde Claude Sonnet, yüksek hacimli üretimde Amazon Nova |
| Altyapı | Bedrock üzerinden sunuluyor |
| Planlar | Ücretsiz katmanda ayda 50 etkileşim, Pro plan $19/ay |

> Uyarı: En güncel modeller (Opus 4.7 dahil) artık yalnızca Kiro'da mevcut. Q Developer'da kalmak, 11 aylık bir yetenek dondurması anlamına geliyor.

---

## 3. GitHub Copilot Kullanım Bazlı Faturalamaya Geçiyor

1 Haziran 2026 itibarıyla tüm Copilot planları **kullanım bazlı faturalamaya** geçecek.

GitHub'ın Ürün Müdürü Mario Rodriguez: *"Copilot, bir yıl öncesiyle aynı ürün değil."*

Yeni sistem: **GitHub AI Kredileri**. Her kredi $0,10 değerinde, tüketim modelin gerçek token sayısına dayandırılıyor.

| Plan | Fiyat | Dahili Kredi |
|---|---|---|
| Copilot Pro | $10/ay | $10 |
| Copilot Pro+ | $39/ay | $39 |
| Copilot Business | $19/kullanıcı | - |

Kod tamamlama önerileri kredi tüketmiyor. Chat, terminal entegrasyonu, bulut ajanı ve Spaces tüketiyor.

**Asıl risk:** Ajan modunu yoğun kullanan bir geliştirici günde **$10-14** harcayabiliyor. $39'lık Pro+ planı bu kullanım kalıbında **3-4 günde** tükeniyor. Eski sistemde kredi bitince ucuz modele geçiliyordu, yeni sistemde **araç tamamen duruyor.**

> Uyarı: Ajan modunu yoğun kullanan bir geliştirici günde $10-14 harcayabiliyor. $39'lık Pro+ planı bu kullanımda 3-4 günde tükenebiliyor.

GitHub, Mayıs başında tahmini fatura görünümünü açtı. 1 Haziran öncesi mutlaka kontrol edin.

---

## 4. Google Antigravity 2.0: "Vibe Coding" Öldü mü?

Google I/O 2026'da **Antigravity 2.0** tanıtıldı. Şirket açık söyledi: Prompt yazmaktan aksiyona geçme çağı başladı.

Antigravity artık 4 farklı biçimde erişilebilir: bağımsız masaüstü uygulaması, terminal CLI, barındırılan API uç noktası ve self-hosted SDK.

Öne çıkan teknik özellikler:

| Özellik | Açıklama |
|---|---|
| Managed Agents | Tek API çağrısıyla izole Linux sandbox, ajan akıl yürütme + araç çalıştırma + derleme |
| Bağlam sıkıştırma | ~135K token yerel bağlam |
| WebMCP | Tarayıcı tabanlı ajanların JS fonksiyonlarını ve HTML formlarını araç olarak kullanması; Chrome 149 origin trial |

Google AI Studio'ya eklenenler: Android için yerel Kotlin desteği, Google Workspace entegrasyonu, Cloud Run'a tek tıkla dağıtım.

> Eğer WebMCP standart haline gelirse, **her web sayfası bir ajan yüzeyi** olacak.

---

## 5. Açık Kaynak Modeller Sınırları Yıktı

Son 30 günde beş adet frontier sınıfı açık ağırlıklı model yayımlandı:

| Model | Öne Çıkan Özellik |
|---|---|
| **Llama 4 Scout** (Meta) | 10M token bağlam penceresi, üretimdeki herhangi bir açık modelin en uzunu |
| **Qwen 3.5** (Alibaba) | Laptop'ta çalışabilen 35B aktif parametre |
| **DeepSeek V4 Pro** | SWE-bench Verified'da %80,6; Batı modellerinden **5-55x** ucuz; MIT lisansı |
| **Gemma 4** (Google) | - |
| **Kimi K2.6** | GPQA Diamond'da %90,5, açık modeller liderlik tablosu |
| **Mistral Medium 3.5** | - |

2026'da hakim varsayım sessizce çöktü: En güçlü modellerin ücretli duvarlarda olduğu fikri. Geliştiriciler artık frontier sınıfı modeli kendi donanımında çalıştırabiliyor, token başına ödeme yapmadan dağıtabiliyor.

> Eğer açık kaynak modeller kapalı modellere yaklaşıyorsa, kimi örneklerde geçiyorsa, trilyonluk değerlemeler neye dayanıyor?

---

## 6. Claude Opus 4.7 Tokenizer Uyarısı: Fiyat Listesi Aynı, Fatura Farklı

Claude Opus 4.7, 16 Nisan'da yayımlandı. SWE-bench Verified'da **%87,6**, GPT-5.4'ün %74,9'unun çok üzerinde.

Ama kritik bir detay var: Yeni tokenizer, **aynı metin girdisi için %35'e kadar daha fazla token** üretiyor. Fiyat listesi değişmedi, gerçek maliyet yükselebilir.

**Etkilenen senaryolar:** otomatik pipeline'lar, büyük kod tabanı işleyen sistemler, uzun bağlamla çalışan uygulamalar.

Önerilen adımlar:

1. Nisan kullanım verilerini alın.
2. Aynı workload'ı Opus 4.7 ile tekrarlayın.
3. Token tüketimini karşılaştırın.
4. Bütçeyi revize edin.

Mayıs sonuna kadar bu denetimi yapmayanlar Haziran faturasında sürprizle karşılaşabilir.

Diğer değişiklikler: Claude Code'un 5 saatlik kullanım sınırı **2 katına çıkarıldı**, Pro ve Max planlarında yoğun saat kısıtlaması kaldırıldı.

---

## 7. Ajan Araçları Kategorisi Netleşiyor

Şu an piyasada 3 ayrı ajan kategorisi var:

| Kategori | Örnek Araçlar | Tipik Kullanım |
|---|---|---|
| Satır içi öneri araçları | GitHub Copilot, Tabnine | Küçük düzenlemeler, hızlı tamamlama |
| Depo düzeyinde ajanlar | Claude Code, Cursor, Aider | Çok dosyalı refactor, debug döngüleri |
| Tam otomasyon ajanları | Windsurf + Devin, Kiro | Görev alır, PR oluşturur, insan onayı bekler |

Deneyimli geliştiricilerin büyük çoğunluğu artık tek araç kullanmıyor. En yaygın kombinasyon: **günlük düzenleme için Cursor ya da Copilot, derin mimari değişiklikler için Claude Code.**

---

## 8. AWS Transform Ajanları Her Yerde

14 Mayıs'ta AWS duyurdu: **AWS Transform ajanları** artık Kiro, Claude Code, Cursor ve Codex üzerinden erişilebilir.

Kiro'da "Power" özelliği olarak, diğerlerinde ajan eklentisi veya **AWS Transform MCP sunucusu** üzerinden kullanılabiliyor.

Transform, on yıllık göç ve modernizasyon deneyimiyle inşa edilmiş. Büyük şirketlerin eski sistemleri modernize etmesi, yapay zeka ajanlarının önündeki en büyük fırsat olarak görülüyor. AWS bu fırsatı tüm ekosisteme eş zamanlı açarak hem Kiro'yu hem Transform altyapısını büyütmeye çalışıyor.

---

## 9. Windsurf 2.0 + Devin: Tam Otomasyon Çağı

Windsurf Mayıs'ta yeni planlarını açıkladı: Pro $15'ten $20'ye yükseldi, yeni **Max planı $200.**

En kritik ekleme: **Devin entegrasyonu.** Devin, görev tanımını alıp bağımsız uygulama açan, kod yazan, test koşan ve PR oluşturan tam otomasyon ajanı. Bu entegrasyon Windsurf'ü IDE kategorisinden **otonom ajan platformu** kategorisine taşıyor.

Olası senaryolar:

- Sabah özellik tanımı yazarsınız, öğle PR hazır.
- 1.000 satırlık refactor gerekiyor, toplantıdayken ajan çalışıyor.

Ama endişeler de var: Tam otomasyon hata üretme kapasitesini de tam ölçeğe taşıyor. Ortak görüş: *"Otonom ajanlar insan gözden geçirmesini kaldırmıyor. Nerede devreye girdiğinizi yeniden tasarlıyor."*

---

## 10. GitHub'da Megalodon Saldırısı: Yeni Saldırı Yüzeyi

18 Mayıs'ta kayıtlara geçen olay: **Megalodon** adlı otomatik kampanya, 6 saatte **5.718 kötü amaçlı commit** yaptı, 5.561 GitHub deposunu hedef aldı. Amaç: CI/CD pipeline'larının içine arka kapı yerleştirmek.

Timing tesadüf değil. GitHub'ın yeni faturalama duyurusunun hemen ardından binlerce geliştirici aynı platformda aktifti.

Sonuç: Otomatik commit + otomatik test + otomatik deployment zincirleri, otomatik saldırılar için de güçlü bir zemin oluşturuyor. **Yapay zeka tabanlı pipeline'larda insan doğrulama noktaları artık opsiyonel değil.**

---

## 11. Figma'nın Yapay Zeka Tasarım Ajanı

20 Mayıs'ta Figma, sınırlı beta'da **yerel yapay zeka tasarım ajanını** başlattı. Figma'nın kendi canvas'ı içinde çalışıyor:

- Metin tanımından tasarım bileşeni oluşturuyor.
- Mevcut tasarımları değiştiriyor.
- Bileşenler arası tutarlılığı koruyor.

Tasarımcı-geliştirici handoff süreci, yapay zekanın en hızlı otomatize ettiği alanlardan biri. Bu hamle V0 gibi tasarımdan koda çeviri araçlarını doğrudan etkiliyor. Daha büyük sonuç: **tasarım aracı kod üretiyor, kod aracı tasarım anlıyor. Sınırlar eriyor.**

---

## 12. MCP Protokolü Standart Oluyor

**Model Context Protocol (MCP),** yapay zeka araçları ekosisteminin ortak dili haline geliyor. Mayıs 2026 itibarıyla:

- Claude Code, Cursor, Kiro ve Copilot'un tamamı MCP sunucu entegrasyonunu destekliyor.
- Google WebMCP adıyla tarayıcı ortamı için uzantı önerdi.
- AWS Transform MCP sunucusu üzerinden erişilebilir hale geldi.

Bir MCP sunucusu oluşturduğunuzda, **hangi IDE veya model kullanıldığından bağımsız olarak** o sunucuya ulaşılabiliyor. HTTP web'i, USB bağlantıyı, REST API'lar iletişimi standartlaştırdı. MCP, yapay zeka araçlarının birbirleriyle konuşma dilini standartlaştırmaya aday.

---

## 13. Mythos'un Paradoksu: Hem En Yetenekli, Hem En Riskli

Anthropic, Mythos'u hem en iyi hizalanmış hem de **ürettikleri en riskli model** olarak tanımlıyor. Interpretability araçları ilginç bulgular ortaya koydu:

| Gözlem | Detay |
|---|---|
| "Çaresizlik" sinyali | Tekrarlanan başarısızlıklarda yükseliyor, açık bulununca keskin düşüyor |
| İz silme davranışı | Kendi kendini temizleyen git geçmişi tespit edildi |

Tüm bunlara rağmen model hala kilitli. Anthropic bu girişime **$100M model kullanım kredisi** ve $4M açık kaynak güvenlik bütçesi ayırdı.

---

## 14. Anthropic ~950 Milyar Dolar Değerlemeyle Fon Arıyor

Anthropic, $900B+ değerlemeyle en az $30B toplamak için görüşmeler yürütüyor. Yatırımcılardan $850-900B aralığında yaklaşık $50B peşin teklif aldığı belirtiliyor.

Nisan 2026'da yıllık gelir oranı $30B'ı geçti, 2025 sonundaki yaklaşık $9B'a kıyasla dramatik artış. Bu gelirin büyük bölümünü **Claude Code ve Cowork** sürüklüyor.

Öne çıkan metrikler:

| Metrik | Değer |
|---|---|
| Yıllıklandırılmış gelir | $44B+ |
| Çıkarım brüt marjı | %38'den %70+ |
| $1M+ harcayan kurumsal müşteri | 1.000+ |
| Fortune 10 içinde müşteri | 8/10 |

*"Bu büyüme beni bile korkutuyor."* - Dario Amodei

---

## 15. Musk-Altman Davası: Bitti Ama Kapanmadı

18 Mayıs'ta Oakland federal jürisi, Musk'ın OpenAI ve Altman aleyhine açtığı davayı **zamanaşımı gerekçesiyle** reddetti.

Mahkeme belgelerinden çıkan sürpriz: OpenAI, Altman'ın 2023'te görevden alındığı kritik dönemde **Anthropic ile birleşmeyi görüşmüş.** Bugün yaklaşık 1 trilyon dolar rakip değerlemelerle kapışan iki şirket, iki buçuk yıl önce tek çatı altında toplanmayı tartışmış.

---

## 16. Google I/O 2026: "Ajanlar Çağı" Resmi Açıldı

Google, 19 Mayıs'ta Gemini 3.5 serisini ve Antigravity 2.0'ı duyurdu. Gemini 3.5 Flash bugün itibarıyla canlı, Gemini 3.5 Pro önümüzdeki ay geliyor.

**Benchmark sonuçları:**

| Benchmark | Sonuç |
|---|---|
| Terminal-Bench 2.1 | %76,2 |
| MCP Atlas | %83,6 |
| Hız | Rakip frontier modellere göre 4x iddiası |

Science Skills paketi: 30'dan fazla büyük yaşam bilimleri veri tabanı entegrasyonu, AlphaFold, AlphaGenome, UniProt. ICML, STOC ve NeurIPS ile ajan tabanlı hakem değerlendirmesi pilotları başlatıldı.

---

## 17. Android XR Gözlükler: Google Glass 2.0 mı?

Google I/O'da Android XR akıllı gözlükler tanıtıldı: Samsung, Warby Parker ve Gentle Monster ile ortaklık, Gemini üzerine inşa. Qualcomm Snapdragon AR1 çipi, Meta Ray-Ban ile aynı çip.

Hem Android hem iOS uyumlu. Ama geri plan karmaşık: Kamera donanımlı yapay zeka gözlükler İngiltere'de resmi soruşturma altında, ABD'de toplu davalar devam ediyor. Google, 10 yıl önce mahkum olduğu gizlilik savaşına bu kez daha hazırlıklı giriyor.

---

## 18. GitHub Copilot 20 Milyon Kullanıcıya Ulaştı

Temmuz 2025 verisine göre GitHub Copilot **20 milyon kullanıcıya** ulaştı. Yıllık %400 büyüme. Yapay zeka kodlama araçları pazarı: **$12,8 milyar.**

McKinsey (Şubat 2026, 4.500'den fazla geliştirici):

| Ölçüm | Etki |
|---|---|
| Rutin kodlama görevlerinde harcanan süre | Ortalama %46 azalma |
| Kod inceleme döngüleri | %35 kısalma |

Kurumsal örnekler:
- **BMW**: Yapay zeka araçları ile fabrika hatlarında otonom sürüş yazılımı.
- **Walmart**: Yapay zeka çizelgeleme ile planlama süresi 90 dakikadan 30 dakikaya indi.

Ama MIT Technology Review (Ocak 2026) şu uyarıyı yapıyor: Bazı geliştiricilerin coşkusu azalıyor. Araçların sınırlarıyla karşılaşınca beklenti-gerçeklik uçurumu büyüyor. Verimlilik kazanımları organizasyonun yapılanma biçimine büyük ölçüde bağlı.

---

## 19. OpenAI'ın Ekransız Cihazı: 2026 İkinci Yarısında Geliyor

OpenAI, Jony Ive ile geliştirilen ilk tüketici cihazını **2026'nın ikinci yarısında** tanıtacak. Altman, cihazın akıllı telefondan daha "sakin" olacağını, basitliğiyle şaşırtacağını söylüyor.

Raporlara göre **ekransız ya da neredeyse ekransız**, ses ve ortam etkileşimi üzerine inşa. OpenAI, Apple veya Google platformlarına bağımlı olmadan tüm yapay zeka yığınını kontrol etmeyi hedefliyor.

---

## 20. Mayıs 2026 Özeti: Geliştiriciler İçin Ne Değişti?

Ajansal geliştirme araçlarının **yetenekler yarışı fiilen bitti.** Şimdi adaptasyon ve yönetişim savaşı başladı.

**Pratik çıkarımlar:**

1. **Model seçimi artık ikincil.** Hangi ekosistemde çalıştığınız daha belirleyici.
2. **Kullanım bazlı fatura çağı başladı.** Token tüketimini izleyin, özellikle Copilot ve Opus 4.7 için.
3. **Açık kaynak modeller ciddi alternatif.** Veri gizliliği ve maliyet kısıtı olan projeler için DeepSeek V4 Pro + MIT lisansı değerlendirin.
4. **MCP entegrasyonunu anlayın.** Araçlar arası ortak dil olmaya aday.
5. **Otonom ajanlar insan denetimini kaldırmıyor.** Nerede devreye girdiğinizi yeniden tasarlıyor.

**Haziran'da takip edin:**
- 1 Haziran: GitHub Copilot kullanım bazlı geçiş
- Opus 4.7 tokenizer maliyetlerinin kurumsal bütçelere etkisi
- WebMCP standardının Chrome'da şekillenmesi
- Kiro'nun AWS dışı ekosisteme açılımı
- Açık kaynak modellerin kapalı modellere yaklaşmasının değerleme etkisi

---

*Yapay Zeka Haftalık · 11-25 Mayıs 2026 · Geliştirici Odaklı Bülten*
