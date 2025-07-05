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
