---
title: "Prompt'una Bandım - Bölüm 4: Haftanın Yapay Zeka Gündemi"
layout: post
show_read_more: true
---

16–22 Mart 2026

Herkese selamlar, ben Ahmet! **Prompt'una Bandım**'ın dördüncü bölümüne hoş geldiniz.

*Bu hafta da yapay zeka duraksız ilerledi. Google'dan uçtan uca kodlama ajanı, OpenAI'dan Python ekosistemini sarsan bir satın alma, Mistral'dan matematiksel doğrulama, GitHub'dan görünmez bir saldırı dalgası ve daha fazlası. On iki haberi kısa, akıcı ve kaynaklı olarak derledik.*



---

## 1. Google AI Studio'da "Full-Stack Coding Agent" Dönemi

Google, 18 Mart'ta AI Studio içerisine entegre ettiği "Coding Agent" özelliğini duyurdu. Artık geliştiriciler, tek bir prompt ile React frontend ve Node.js backend içeren karmaşık full-stack uygulamaları sıfırdan kurabiliyor. Bu güncelleme; dosya sistemine doğrudan erişim, hata ayıklama ve otomatik dağıtım yeteneklerini kapsıyor.

Peki buradaki asıl kırılma ne? Yarış artık "kim daha iyi autocomplete yapıyor?" yarışı değil; "kim daha iyi junior developer gibi davranıyor?" yarışı. Google, AI Studio'yu bir playground'dan çıkarıp gerçek bir full-stack üretim ortamına çevirmek istiyor. Karşıda Vercel v0, Claude Code, Cursor Agent ve Replit Agent gibi güçlü oyuncular var — ama Google'ın mesajı net. Ve tabii kritik soru da ortada: Bu ajanlar, Glassworm gibi görünmez Unicode saldırılarını fark edecek kadar uyanık mı? Çünkü yeni dönemde mesele sadece hızlı kod yazmak değil, güvenli ürün çıkarabilmek.

**Kaynaklar:**

* [Google AI Studio — Resmi duyuru](https://ai.google.dev)
* [Google Developers Blog — Coding Agent detayları](https://developers.googleblog.com)

---

## 2. Astral + OpenAI Birleşmesi: Python Araç Zincirinde Yeni Çağ

OpenAI, 19 Mart'ta Python ekosisteminin en sevilen modern araçlarından bazılarını geliştiren Astral'ı satın alacağını duyurdu. Astral, Python dünyasında son dönemin en hızlı ve en çok konuşulan araçları olan `uv`, `ruff` ve `ty`'ın arkasındaki ekip. Hacker News'te 1400'ü aşkın puan aldı — geliştiriciler neden bu kadar heyecanlandı?

Çünkü burada alınan şey sadece bir startup değil; doğrudan Python geliştiricisinin günlük iş akışına dokunan altyapı. OpenAI'ın verdiği mesaj net: Bu araçları Codex ekosistemine entegre ederek, AI'ın sadece kod yazmasını değil; ortam kurmasını, bağımlılıkları yönetmesini, lint etmesini ve test akışını daha güvenilir hale getirmesini istiyor. Yani yarış artık "kim daha iyi kod üretiyor?" yarışı değil; "kim tüm geliştirme ortamını AI-native hale getiriyor?" yarışı.

**Kaynaklar:**

* [Astral Blog — Resmi açıklama](https://astral.sh/blog/openai)
* [Hacker News — Topluluk tartışması](https://news.ycombinator.com)

---

## 3. Mistral "Leanstral": Halüsinasyona Matematiksel Engel

Mistral, 16 Mart'ta Lean 4 ekosistemi için geliştirdiği açık kaynak kod ajanı "Leanstral"ı duyurdu. Modelin amacı sadece kod üretmek değil; formal verification ve theorem proving süreçlerinde üretilen kodun doğruluğunu matematiksel olarak kanıtlayan bir geliştirme akışı sunmak.

Peki bu neden önemli? Bugüne kadar AI ile yazılan kod için en büyük soru hep aynıydı: "Çalışıyor gibi görünüyor ama gerçekten doğru mu?" Leanstral bu soruyu "ispat edebildiğin kadar doğru" diyerek yanıtlamaya çalışıyor. Özellikle güvenlik kritik sistemlerde — finans, sağlık, savunma — "çalışıyor gibi görünen kod" yerine doğruluğu kanıtlanmış yapılar hayati önem taşıyor. Bu, AI destekli yazılım geliştirmede hızdan çok doğrulanabilirlik tarafına oynayan yeni bir yönü temsil ediyor.

**Kaynaklar:**

* [Mistral AI — Leanstral duyurusu](https://mistral.ai)
* [arXiv — Teknik makale](https://arxiv.org)

---

## 4. Glassworm Malicious Wave: 150+ Repo Tehlikede

16 Mart'ta GitHub güvenlik camiası bir alarm verdi: Glassworm adlı tehdit aktörü, Unicode karakterlerini kullanarak kod editörlerinde görünmeyen ancak terminalde zararlı komutlar çalıştıran bir saldırı başlattı. Yüzlerce açık kaynak depo etkilendi ve özellikle popüler React Native ile npm paketleri hedef alındı.

Nasıl çalışıyor? Zararlı unicode karakterler, editörde tamamen görünmez oluyor — kodu okuduğunda hiçbir şey fark etmiyorsun. Ama terminal o kodu çalıştırdığında, arka planda zararlı komutlar devreye giriyor. Hepimiz temiz kod, açık kaynak, şeffaflık konuşuyoruz; ama tek bir görünmez karakter bile tüm sistemi altüst edebiliyor. Geliştiricilere "invisible code" taraması yapmaları için uyarı gönderildi. Bu, güvenlikte yeni normalin bir parçası haline geliyor.

**Kaynaklar:**

* [Aikido Security — Orijinal araştırma](https://www.aikido.dev)
* [GitHub Security Blog — Güvenlik uyarısı](https://github.blog)

---

## 5. Moonshot AI: "Attention Residuals" ile Bellek Devrimi

16 Mart'ta Moonshot AI, kendi geliştirdiği Kimi model ailesi için "Attention Residuals" adını verdiği yeni bir mimari yaklaşımı tanıttı. Bu yöntem, Transformer modellerinde katmanlar arası bilgi akışını daha akıllı hale getirerek daha iyi ölçeklenme ve daha düşük hesaplama maliyeti hedefliyor.

Pratikte ne anlama geliyor? Uzun context ile çalışan modeller daha az bellek kullanabilecek ve token başına maliyet düşebilecek. AI araştırmacıları bunu "Transformer mimarisindeki en büyük verimlilik sıçramalarından biri" olarak nitelendiriyor. Moonshot AI burada yeni bir model çıkarmaktan çok, gelecekteki büyük dil modellerinin daha ucuz ve verimli çalışmasını sağlayacak altyapıyı geliştiriyor. Uzun vadede hepimizin kullandığı modellerin maliyetini aşağı çekebilecek bir gelişme bu.

**Kaynaklar:**

* [arXiv — Attention Residuals makalesi](https://arxiv.org)
* [TechCrunch — Teknik analiz](https://techcrunch.com)

---

## 6. Meta "Vibes": AI Tabanlı Video Üretim SDK'sı

Meta Superintelligence Labs, 18 Mart'ta metinden video üreten "Vibes" API'sini duyurdu. Artık bir React uygulamasına saniyeler içinde dinamik ve yüksek kaliteli AI videoları entegre etmek mümkün. Kullanıcı bir prompt giriyor, saniyeler içinde o uygulamanın içinde AI tarafından üretilmiş video oynuyor.

Bu gelişme frontend dünyasını ciddi değiştirebilir. Bugüne kadar UI dediğimiz şey statikti ya da en fazla animasyondu. Şimdi uygulamalar kendi içinde dinamik video üreten sistemlere dönüşebilir. Video üretimi artık ayrı bir araç ya da offline bir süreç olmaktan çıkıyor, doğrudan ürünün bir parçası haline geliyor. Meta'nın hedefi OpenAI'ın Sora tarafında başlattığı kaliteyi alıp geliştiricilerin kullanabileceği bir API'ye dönüştürmek — ve bu duyuru tam da bu yarışta kritik bir hamle.

**Kaynaklar:**

* [Meta Superintelligence Labs — Vibes API duyurusu](https://ai.meta.com)

---

## 7. VibeJS: "Niyet Odaklı" İlk Framework

21 Mart'ta Product Hunt'ın haftanın birincisi olan VibeJS, "prompt mühendisliği bitti, niyet mühendisliği başladı" tartışmalarını alevlendirdi. VibeJS'te geliştiricinin sadece uygulama mantığını ve "hissiyatını" tanımlaması yeterli; geri kalan tüm boilerplate ve UI kodu AI tarafından canlı olarak yazılıyor.

Burada kritik kırılma şu: Prompt engineering bile ikinci plana düşüyor, yerini "niyet anlatma" alıyor. Geliştirici artık syntax bilen kişi değil; ürünün davranışını, akışını ve hissini doğru tarif eden kişi oluyor. Ama bu işin bir de realitesi var: Bu sistemler ne kadar hızlı olursa olsun, üretilen şeyin kontrolü, debug süreci ve sürdürülebilirliği hala büyük soru işareti. Vibe ederek uygulama çıkarmak mümkün — ama o uygulamayı production'da yaşatmak hâlâ klasik mühendislik refleksleri gerektiriyor.

**Kaynaklar:**

* [VibeJS — Resmi site](https://vibejs.dev)
* [Product Hunt — Haftalık 1. sıra](https://www.producthunt.com)

---

## 8. GPT-5.4 mini & nano: Küçük Modeller Büyük Oynuyor

OpenAI, 17 Mart'ta bugüne kadarki en yetenekli küçük modelleri GPT-5.4 mini ve nano'yu duyurdu. GPT-5.4 mini, kodlama ve reasoning tarafında büyük modellere oldukça yakın performans sunarken 2 kattan fazla hızlı çalışıyor. GPT-5.4 nano ise sınıflandırma ve yüksek hacimli görevler için şimdiye kadarki en ucuz seçenek.

Buradaki asıl kırılma şu: Artık herkes tek dev model kullanmak zorunda değil. Büyük model plan yapıyor, küçük model işi execute ediyor gibi multi-agent mimariler çok daha mantıklı hale geliyor. "Tek model her şeyi yapsın" yaklaşımı yerini "doğru işi doğru model yapsın" yaklaşımına bırakıyor. API maliyet karşılaştırmaları geliştirici forumlarında viral oldu — çünkü token maliyetleri düştükçe, daha önce ekonomik olmayan use-case'ler bir anda yapılabilir hale geliyor.

**Kaynaklar:**

* [OpenAI — GPT-5.4 mini & nano duyurusu](https://openai.com)
* [TechCrunch — Analiz ve karşılaştırma](https://techcrunch.com)

---

## 9. a16z "Top 100 AI Tüketici Uygulamaları" Raporu

Andreessen Horowitz'in Mart 2026'nın ikinci haftasında yayımladığı rapor, AI kullanımında çok net bir trend ortaya koydu: yarış artık sadece model kalitesinde değil, dağıtımda. Claude'un ücretli kullanıcıları yıllık yüzde 200'den fazla büyürken, Gemini yüzde 258 büyüme gösterdi. Haftalık ChatGPT web kullanıcılarının yaklaşık yüzde 20'sinin aynı haftada Gemini'yi de kullandığı dikkat çekiyor — çoklu model dünyası oluşuyor.

Google, Nano Banana modeliyle Gemini'ye ilk haftada milyonlarca yeni kullanıcı kazandırdı; Veo 3 ile video tarafında ciddi bir kırılma yarattı. Anthropic ise Claude Code ve Office entegrasyonlarıyla kurumsal pazarı kilitlemeye oynuyor. Ama raporun en kritik çıkarımı şu: AI artık ayrı bir ürün değil. İnsanlar "AI kullanayım" diye ayrı bir yere gitmiyor; AI zaten kullandıkları ürünlerin içine gömülüyor. Yarın bir gün hiçbir kullanıcı "AI özelliği var mı?" diye sormayacak, çünkü zaten default olacak.

**Kaynaklar:**

* [a16z — Top 100 AI Consumer Apps raporu](https://a16z.com/ai-consumer-apps)
* [Olivia Moore — Rapor analizi](https://a16z.com)

---

## 10. Türkiye Yapay Zeka Eylem Planı

Sanayi ve Teknoloji Bakanlığı, Milli Teknoloji Hamlesi kapsamında yeni Yapay Zeka Eylem Planı için paydaş görüşlerini toplamaya başladı. Vatandaşlar ve geliştiriciler 10 Nisan'a kadar [yapayzekavizyonu.sanayi.gov.tr](https://yapayzekavizyonu.sanayi.gov.tr) üzerinden öneri iletebiliyor.

Buradaki amaç net: Türkiye'yi sadece AI kullanan değil, AI üreten ülkelerden biri haline getirmek. Ama işin kritik tarafı şu — bu tarz planlar çok yapıldı, asıl farkı uygulama tarafı yaratacak. Eğer gerçekten developer'ı, startup'ı ve şirketleri içine çeken, somut destekler veren bir yapı kurulursa anlamlı olur. Belki de ilk defa, sahadan gelen gerçek ihtiyaçlarla şekillenen bir AI stratejisi görebiliriz.

**Kaynaklar:**

* [Sanayi ve Teknoloji Bakanlığı — Yapay Zeka Eylem Planı](https://yapayzekavizyonu.sanayi.gov.tr)

---

## 11. Microsoft'un "Microslop" Yasağı

Microsoft, kendi yapay zeka aracı Copilot'un Discord sunucusunda "Microslop" kelimesini yasakladı. "Slop" internette genellikle düşük kaliteli AI içerikleri tanımlamak için kullanılıyor; Microsoft adıyla birleşince şirket biraz alınmış görünüyor ve kullanıcılar bu kelimeyi yazdığında botlar tarafından susturuluyor.

İşin komik yanı şu: Yapay zekanın kalitesini artırmak yerine adını korumaya çalışıyorlar. Klasik kurumsal refleks. Bu durum aynı zamanda bize AI topluluklarının ve şirketlerin, kullanıcı geri bildirimleriyle nasıl çatışabileceğini gösteriyor. Bir yandan teknoloji harika işler çıkarıyor, diğer yandan marka egosu bazen her şeyi gölgeleyebiliyor. Tartışma Reddit ve X'te kısa sürede viral oldu.

**Kaynaklar:**

* [Reddit — Topluluk tepkisi](https://www.reddit.com)
* [The Verge — Haber ve bağlam](https://www.theverge.com)

---

## 12. AI ile 10 Milyon Dolarlık Müzik Soygunu

ABD'de bir adam, yapay zekayı kullanarak binlerce sahte şarkı ve "hayalet grup" oluşturdu. Sadece şarkıları yapmakla kalmadı; 7/24 bu şarkıları dinleyen bot hesaplar kurdu ve Spotify, Apple Music gibi platformlardan tam 10 milyon dolar telif geliri kazandı — ve bunun için 20 Mart'ta mahkûm edildi.

Biz hâlâ "AI müzisyenlerin yerini alır mı?" diye tartışıyoruz; bu adam AI ile kendi plak şirketini, kendi dinleyici kitlesini kurup bankayı boşaltmış bile. İki taraf var: bir yanda inanılmaz bir teknik zekâ, diğer yanda etik ve hukuki soru işaretleri. Bu dava, streaming platformlarının AI botlara karşı nasıl korunacağı konusunda endüstri genelinde ciddi bir tartışma başlattı.

**Kaynaklar:**

* [DOJ — Dava açıklaması](https://www.justice.gov)
* [Billboard — Müzik endüstrisi perspektifi](https://www.billboard.com)
* [The Verge — Teknik detaylar](https://www.theverge.com)

---

## Haftanın Büyük Resmi

Bu haftanın tek bir teması var: **yapay zeka artık yardımcı araçtan çıkıp, iş akışının bizzat kendisi haline geliyor.** Kod yazmaktan müzik üretmeye, güvenlik açıklarından yasal çerçevelere kadar her yer değişiyor — aynı anda. Ve artık soru "AI ne yapabilir?" değil; "AI'ı kim, nasıl, ne için kullanıyor?" sorusu.

---

*Bu blog yazısı, Prompt'una Bandım podcast'inin 17–22 Mart 2026 bülteninin yazılı versiyonudur.*
