---
title:  "Docfx ile dokümantasyon oluşturma"
layout: post
---


Herkese selam bu yazımda sizlere C, VB gibi dillerde, DocFx kullanarak kod dokümantasyonu nasıl yapılır elimden geldiğince bahsetmeye çalışacağım.
Hadi başlayalım.
 
 <iframe src="https://giphy.com/embed/5AcR8w022Gk4E" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
 
### DocFx Nedir?
 [**Docfx** ](https://github.com/dotnet/docfx)  .NET projeleri için dokümantasyon oluşturmamızı sağlayan açık kaynak kodlu bir araçtır.
 İlk bakıldığında biraz göz korkutucu olabilir. Bu karışıklığın nedenini içerisinde barındırdığı pek çok özellik kümesi ve dosyalardan kaynaklı olacaktır. Şimdi elimden geldiğince basit bir şekilde anlaşılır hale getirmeye çalışacağım.

## Kurulum & Kullanım

Öncelikle kurulum işleminden başlayalım;

### CLI ile kurulum ve kullanım

Windows bir işletim sisteminde docfx kullanabilmek için öncelikle [Chocolatey](https://chocolatey.org/install) paket yöneticisini kurmamız gerekiyor.

Chocolatey paketini kurmak için [bu adresten ](about:invalid#zSoyz)ayrıntılı biçimde nasıl kurmanız gerektiği anlatılmakta. Kurduk değil mi şimdi gelelim docfx kurulumuna Windows Power Shell açalım ve aşağıdaki komutu yazalım.

choco install docfx -y

docfx –v ile kurduğumuzu kontrolünü yapalım.

![docfx versiyonu](https://cdn-images-1.medium.com/max/2000/1*iIG_W15qqKgd0Fnf3r7MUQ.png)*docfx versiyonu*

docfx –h ile docfx ile bakalım ne var ne yok;

![](https://cdn-images-1.medium.com/max/2000/1*6rWYCFR5m26p9UhPyAFwjw.png)

Bunun yanında [https://github.com/dotnet/docfx/releases](https://github.com/dotnet/docfx/releases) adresinden indirerek kullanabilirsiniz

### **Visual Studio ile tümleşik kullanmak**

Öncelikle doküman oluşturmak istediğiniz projenizi açınız
Sonrasında nuget package manger açtın
NuGet üzerinden kurulum yapmak için DocFx NuGet

    Install-Package docfx.console -Version 2.33.0

Yada nuget arama bölümünden docfx ile docfx kurlumunu gerçekleştirin
Server üzerinde kullanmak için detaylı olarak kendi web sitelerinden ayrıntısına erişebilirsiniz.

Şimdi gelelim bize birçok özellik sağlayan docfx ile basit şekilde bir proje oluşturalım ve projemizin kodlarından dokümantasyonu üretelim.

<iframe src="https://giphy.com/embed/xT0xejrYAhUGvuKwms" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

Öncelikle basit birkaç sınıfa sahip bir .net core projesi oluşturuyorum.

Sonrasında sınıflarımın içerisindeki metotları ve metotlar ile ilgili açıklamaları yapıyorum. Özetle aşağıda izleyen kod tarzı bir yapı güdüyorum.


    /// <summary>
    /// Sınıf içerisindeki örnek bir fonksiyon
    /// </summary>
    /// <param name=”a”>Sayısal türde bir paremetre </param>
    /// <param name=”b”>karakter türünde bir başka parametre </param>
    /// <returns>Geri değer olarak a ve b değerleri ile işlem yapılarak object türünde bir geri dönüş değeri veriyor</returns>
    public object SampleMethod(int a, string b)
    {
    return a.ToString() + b;
    }

Daha sonrasında projemizi bitirdik yada ara sürüm çıkacağız senaryomuz böyle olsun

Öncelikle cmdmizi açalım

Docfx komut çalıştırma yapısı olarak

    docfx <docfx.json file path> [-o <output folder path>]
    docfx <subcommand> [<args>]]

bu şekilde bizde öncelikle bir dokümantasyon projesi oluşturalım.

bunun için ilgili yere nereye oluşturmak istiyorsanız

**docfx init** diyelim burada birkaç soru cevaplamamız lazım

![](https://cdn-images-1.medium.com/max/2000/1*tM6rdCVsHb2q7UE2WF2HyA.png)

Sonrasında bize gelen dosya yapısına bir bakalım;

![init sonrası oluşan dosyalar](https://cdn-images-1.medium.com/max/2000/1*RcmVqTFs4bN-p1Pr1c-pjQ.png)*
init sonrası oluşan dosyalar*

Burada **docfx.json** yapılandırma ayarlarını yapacağımız dosya olacak.

    **api** /: API dökümantastonu için gerekli dosyaların yapılandırılması için gerekli .yml dosyaları bulunuyor.

    **articles**/: Kendimiz oluşturduğumuz dökümanların yer alabileceği

    **dosya**. Örneğin Relase Notes burada yeralabilir.

    **src **/: Klasör, kaynak kod projelerimizi depolamak içindir. (Bunu kullanmayabiliriz.)

    **docfx.json**: Ana yapılandırma dosyası.

    **index.md**: Anasayfa içeriğinin bulunduğu dosya.

    **toc.yml**: Sitemizin navbar içeriği

Evet her şey artık hazır son olarakta basit oluşturduğum projeden bir ekran görüntüsü paylaşayım.

![](https://cdn-images-1.medium.com/max/2610/1*zoyBCZLNVl4As-_oxksj-w.png)

### DocFx Yapılandırma

Docfx içerisindeki yapılandırmalar için docfx.json dosyasını tanıyalım.

src bölümü içerisinde
 files: dosya dizinimizi verdik bir önceki dizine .. [ile çıkabiliriz onun için](https://gist.github.com/ahmeturganci/0f1004594b67cf767ac64ae1c9b47f2d)

    "src": [
            {
              "files": [
                "Source/**.sln"
              ],
              "exclude": [
                "**/obj/**",
                "**/bin/**",
                "_site/**"
              ],
            "src":".."
            }

    ]

şimdi gelelim en güzel yere bu kodun dokümantasyonedilmiş haline doxfx bizim için bir statik html web sitesi verecek bunun içinde docfx.json üzerinde öncelikle yapılandırma ayarlarımızı yapmamız gerekiyor. buradaki özelliklerin ayrıntılı hali için [bi şuraya kaçalım!!](https://dotnet.github.io/docfx/tutorial/docfx.exe_user_manual.html#31-properties-for-metadata) Geldik değil mi?

Şimdi terminalimizi açalım ve proje dizinimize gidelim

    docfx --serve

ve evet bizim için [http://localhost:8080](http://localhost:8080) adresine gidelim.

![index.md içerisine yazdıklarımız :D aaaaa :D](https://cdn-images-1.medium.com/max/2572/1*r39egf5_V3YyIg6n1ZmNFQ.png)*index.md içerisine yazdıklarımız :D aaaaa :D*

Şimdide dokümantasyon bakalım .

![anlatmaya gerek yok görüyorsunuz](https://cdn-images-1.medium.com/max/2570/1*78hw9Zz2MSmHc9Gcx4attg.png)*anlatmaya gerek yok görüyorsunuz*

[Projenin tüm halini github üzerinde paylaştım.](https://github.com/ahmeturganci/docfx-sample)

## Özet

Konuyu ***toparlamak* **gerekirse ***dokümantasyon*** nyazılımın ***olmazsa*** olmazlarından bende c# vb gibi .net platformunda açık kaynak kodlu olarak kullanabileceğinizi düşündüğüm bir araç olan docfx elimden geldiği kadar size anlatmaya çalıştım. Yine kafanıza takılan birşey olur ise yardımcı olmaktan memnuniyet duyarım. Hatam kusurum oldu ise afola bir sonraki yazıda görüşmek üzere esenle kalın :D

<iframe src="https://giphy.com/embed/26u4b45b8KlgAB7iM" width="480" height="324" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
