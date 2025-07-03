package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.SearchResultsPage;
import utilities.DriverFactory;

import java.time.Duration;
import java.util.List;
import java.util.NoSuchElementException;

public class SepetIslemleri {

    private WebDriver driver;
    private SearchResultsPage searchResultsPage;

//    public class ProductDetailSteps {
//        WebDriver driver;
//
//        @Given("kullanıcı ürün detay sayfasında")
//        public void kullanici_urun_detay_sayfasinda() {
//            driver.get("http://localhost:3000/product/1"); // örnek ürün id
//        }
//
//        @When("en düşük puanlı satıcıyı seçer ve sepete ekler")
//        public void en_dusuk_puanli_saticiyi_secer_ve_sepete_ekler() {
//            // Tüm satıcı kartlarını bul
//            java.util.List<WebElement> sellers = driver.findElements(By.className("satici"));
//
//            double minRating = Double.MAX_VALUE;
//            WebElement minSeller = null;
//
//            for (WebElement seller : sellers) {
//                // Satıcı puanını bul
//                WebElement ratingEl = seller.findElement(By.className("satici-puan")).findElement(By.tagName("span"));
//                double rating = Double.parseDouble(ratingEl.getText().replace(",", "."));
//                if (rating < minRating) {
//                    minRating = rating;
//                    minSeller = seller;
//                }
//            }
//
//            assertNotNull("En düşük puanlı satıcı bulunamadı!", minSeller);
//
//            // Satıcıyı seç (tıkla)
//            minSeller.click();
//
//            // Sepete ekle butonunu bul ve tıkla
//            WebElement addToCartBtn = minSeller.findElement(By.className("sepete-ekle-btn"));
//            addToCartBtn.click();
//
//            // Sepete ekleme işleminin tamamlanmasını bekle (gerekirse)
//            try {
//                Thread.sleep(600); // setTimeout(500) ile uyumlu
//            } catch (InterruptedException e) {}
//        }
//
//        @Then("ürün sepete eklenmiş olmalı")
//        public void urun_sepete_eklenmis_olmali() {
//            // Sepet sayfasına git
//            driver.get("http://localhost:3000/cart");
//
//            // Sepet ürünleri listesinin görünmesini bekle
//            new WebDriverWait(driver, java.time.Duration.ofSeconds(5))
//                    .until(ExpectedConditions.visibilityOfElementLocated(By.id("cart-items-list")));
//
//            // Sepette en az bir ürün olmalı
//            java.util.List<WebElement> cartItems = driver.findElements(By.className("cart-item"));
//            assertTrue("Sepette ürün yok!", cartItems.size() > 0);
//        }
//    }

    public void enDusukPuanliSaticiyiSepeteEkle() {
        List<WebElement> saticilar = driver.findElements(By.className("satici"));

        double minPuan = Double.MAX_VALUE;
        WebElement enDusukPuanliSatici = null;

        for (WebElement satici : saticilar) {
            try {
                String puanText = satici.findElement(By.className("satici-puan")).getText();
                puanText = puanText.replaceAll("[^\\d.]", "");
                double puan = Double.parseDouble(puanText);

                if (puan < minPuan) {
                    minPuan = puan;
                    enDusukPuanliSatici = satici;
                }
            } catch (NoSuchElementException e) {
                System.out.println("Puan bilgisi bulunamadi!");
            }
        }

        if (enDusukPuanliSatici != null) {
            enDusukPuanliSatici.findElement(By.className("sepete-ekle-btn")).click();
        } else {
            throw new RuntimeException("Satici bulunamadi!");
        }
    }


    public boolean isProductInCart(String expectedProductName) {
        try {
            WebElement cartList = driver.findElement(By.id("cart-items-list"));
            List<WebElement> cartItems = cartList.findElements(By.className("cart-item-name"));

            for (WebElement itemName : cartItems) {
                if (itemName.getText().trim().equalsIgnoreCase(expectedProductName)) {
                    return true;
                }
            }
            return false;
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    @Given("{string} e-ticaret sitesine gidilir")
    public void e_ticaret_sitesine_gidilir(String url) {
        driver = DriverFactory.getDriver(System.getProperty("browser", "chrome"));
        driver.manage().window().maximize();
        driver.get(url);
        searchResultsPage = new SearchResultsPage(driver);
    }

    @When("Giris yap butonuna tiklanir")
    public void giris_yap_butonuna_tiklanir() {
        searchResultsPage.clickLoginLink();
    }
    @When("E-posta adresi alanina tiklanir ve {string} yazilir")
    public void e_posta_adresi_alanina_tiklanir_ve_yazilir(String email) {
        searchResultsPage.enterEmail(email);
    }
    @When("Sifre alanina tiklanir ve {string} yazilir")
    public void sifre_alanina_tiklanir_ve_yazilir(String password) {
        searchResultsPage.enterPassword(password);
        searchResultsPage.submitLogin();
    }
    @When("Cep telefonlarini incele butonuna tiklanir")
    public void cep_telefonlarini_incele_butonuna_tiklanir() {
        searchResultsPage.clickReviewButton();
    }

    @Given("Filtreler kisminin altinda bulunan min bolumune tiklanir ve {int} degeri girilir")
    public void filtreler_kisminin_altinda_bulunan_min_bolumune_tiklanir_ve_degeri_girilir(Integer min) {
        searchResultsPage.setMinPriceInput(min);
    }
    @Given("Filtreler kisminin altinda bulunan max bolumune tiklanir ve {int} degeri girilir")
    public void filtreler_kisminin_altinda_bulunan_max_bolumune_tiklanir_ve_degeri_girilir(Integer max) {
        searchResultsPage.setMaxPriceInput(max);
    }
    @When("Filtreleri uygula butonuna tiklanir")
    public void filtreleri_uygula_butonuna_tiklanir() {
        searchResultsPage.clickApplyFilter();
    }
    @When("Cikan sonuctan en alt satirdan rastgele bir urun secilir")
    public void cikan_sonuctan_en_alt_satirdan_rastgele_bir_urun_secilir() {
        new WebDriverWait(driver, Duration.ofSeconds(3));
        searchResultsPage.setClickRandomProduct();
    }
    @When("En dusuk puanli saticinin urunu sepete eklenir")
    public void en_dusuk_puanli_saticinin_urunu_sepete_eklenir() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));
        wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.className("satici")));
        enDusukPuanliSaticiyiSepeteEkle();
        searchResultsPage.setAddToCart();

    }
    @Then("Urunun sepete dogru eklendigi kontrol edilir")
    public void urunun_sepete_dogru_eklendigi_kontrol_edilir() {
        searchResultsPage.setCartLink();
        new WebDriverWait(driver, java.time.Duration.ofSeconds(5))
                .until(ExpectedConditions.visibilityOfElementLocated(By.id("cart-items-list")));

        String expectedProductName = "Huawei P60 Pro 256GB";
        Assert.assertTrue("Ürün sepete eklenmedi!", isProductInCart(expectedProductName));
    }

}
