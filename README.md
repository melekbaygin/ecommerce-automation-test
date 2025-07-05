# 📦 Ecommerce Automation Test

Bu proje, örnek bir e-ticaret web sitesi için geliştirilmiş bir test otomasyon altyapısı içerir. Web arayüzü React ile geliştirilmiş olup, test otomasyonu Java + Selenium + Cucumber teknolojileri ile yazılmıştır. Ayrıca mock API testleri için WireMock tabanlı bir mock server da bulunmaktadır.

---

## Ekran Goruntusu

https://github.com/user-attachments/assets/d1d8e066-ec25-4984-b7a0-651999342178


---

## 🧰 Kullanılan Teknolojiler

- Java 22
- Maven
- Selenium WebDriver
- Cucumber (BDD)
- WireMock (Mock API)
- Node.js / React (Web Arayüzü)
- Bash (Çalıştırma scripti)

---

## 🚀 Projeyi Başlatma

### 🔧 1. Gereksinimler

Aşağıdaki yazılımların sisteminizde kurulu olması gerekir:

- [Java 17+](https://www.oracle.com/tr/java/technologies/downloads/)
- [Apache Maven](https://maven.apache.org/download.cgi)
- [Node.js (LTS)](https://nodejs.org/en/download)
- [Git](https://git-scm.com/downloads)
- macOS/Linux terminali veya Windows için Git Bash

### 📥 2. Projeyi Klonlayın

```bash
git clone https://github.com/melekbaygin/ecommerce-automation-test.git
cd ecommerce-automation-test
```
### 📥 3. Testleri Başlatın

Projenin kök dizininde bulunan run-test.sh script'i, aşağıdaki işlemleri otomatik olarak sırasıyla gerçekleştirir:

1- Web uygulamasını başlatır (npm install + npm run dev)

2- Mock API sunucusunu ayağa kaldırır (ApiMockServer)

3- Selenium + Cucumber testlerini başlatır (mvn test)

4- Script sonunda tüm çalışan servisleri otomatik olarak kapatır

Script’i çalıştırmak için terminalde aşağıdaki komutu girin:
```bash
./run-test.sh
```
Varsayılan olarak Chrome tarayıcısı ile çalışır. Farklı bir tarayıcıda çalıştırmak isterseniz örneğin:
```bash
./run-test.sh edge
```
> Not: Script çalışırken web uygulamasını ve mock server'ı arka planda başlatır. Çıkışta bunları otomatik olarak sonlandırır.

### 📄 Test Raporu
Test çalıştıktan sonra sonuç raporu otomatik olarak şu dizine üretilir:
```bash
test-automation/target/cucumber-reports/cucumber-html-report.html
```

---

## 🐳 Docker ile Çalıştırma

Proje, Docker Compose kullanılarak da çalıştırılabilir. Bu yöntem, tüm bağımlılıkları (web uygulaması, mock sunucu ve test çalıştırıcı) izole edilmiş Docker ortamlarında yönetmenizi sağlar.

### 🚀 1. Docker Gereksinimleri

Sisteminizde Docker ve Docker Compose'un kurulu olması gerekir:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/macOS için)
- Linux için [Docker Engine](https://docs.docker.com/engine/install/) ve [Docker Compose](https://docs.docker.com/compose/install/)

### 🛠️ 2. Docker Compose ile Başlatma

Projenin kök dizininde `docker-compose.yml` dosyası bulunmaktadır. Bu dosya aşağıdaki servisleri tanımlar:

- `mock-server`: WireMock tabanlı mock API sunucusu. Port: `8080`
- `ecommerce-app`: React tabanlı e-ticaret web uygulaması. Port: `5173`
- `test-runner`: Selenium + Cucumber testlerini çalıştıran servis. Bu servis, `mock-server` ve `ecommerce-app` servisleri sağlıklı duruma geldikten sonra otomatik olarak testleri başlatır.

Tüm servisleri başlatmak ve testleri çalıştırmak için projenin kök dizininde aşağıdaki komutu kullanın:

```bash
docker-compose up --build
```

Bu komut, Docker imajlarını oluşturacak (ilk çalıştırmada) ve tüm servisleri başlatacaktır. Testler tamamlandıktan sonra servisler çalışmaya devam edecektir.

### 🛑 3. Servisleri Durdurma

Çalışan Docker servislerini durdurmak ve kaldırmak için aşağıdaki komutu kullanın:

```bash
docker-compose down
```

### 📄 Test Raporu (Docker)

Docker Compose ile testler çalıştırıldıktan sonra, test raporları yerel makinenizdeki şu dizine kaydedilir:

```bash
test-automation/target/allure-results
```

Bu raporları görüntülemek için Allure Report aracını kullanabilirsiniz.
