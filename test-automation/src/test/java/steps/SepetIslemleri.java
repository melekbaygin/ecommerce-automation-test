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
import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;

import static org.junit.Assert.assertEquals;

public class SepetIslemleri {

    private WebDriver driver;
    private SearchResultsPage searchResultsPage;
    private WebDriverWait wait;

    public void enDusukPuanliSaticiyiSepeteEkle() {
        List<WebElement> saticilar = driver.findElements(By.cssSelector(".satici")); // Değiştirildi

        double minPuan = Double.MAX_VALUE;
        WebElement enDusukPuanliSatici = null;

        for (WebElement satici : saticilar) {
            try {
                String puanText = satici.findElement(By.cssSelector(".satici-puan span")).getText();
                puanText = puanText.replaceAll("[^\\d.]", "");
                double puan = Double.parseDouble(puanText);

                if (puan < minPuan) {
                    minPuan = puan;
                    enDusukPuanliSatici = satici;
                }
            } catch (NoSuchElementException | NumberFormatException e) {
                System.out.println("Puan bilgisi okunamadi veya hatali format: " + e.getMessage());
            }
        }

        if (enDusukPuanliSatici != null) {
            enDusukPuanliSatici.findElement(By.cssSelector(".sepete-ekle-btn")).click();
        } else {
            throw new RuntimeException("Sepete ekleyecek satıcı bulunamadı!");
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
        driver = DriverFactory.getDriver();
        driver.manage().window().maximize();
        driver.get(config.Config.APP_URL);
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
        wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.cssSelector("div[data-testid^='seller-option']")));
        enDusukPuanliSaticiyiSepeteEkle();
        searchResultsPage.setAddToCart();
    }

    @Then("Urunun sepete dogru eklendigi kontrol edilir")
    public void urunun_sepete_dogru_eklendigi_kontrol_edilir() {
        searchResultsPage.setCartLink();
        new WebDriverWait(driver, java.time.Duration.ofSeconds(5))
                .until(ExpectedConditions.visibilityOfElementLocated(By.id("cart-items-list")));

        String expectedProductName = "Huawei P60 Pro 256GB";
        Assert.assertTrue("Urun sepete eklenmedi!", isProductInCart(expectedProductName));
    }

    @When("Arama cubuguna {string} yazilir ve ara butonuna tiklanir")
    public void arama_cubuguna_yazilir_ve_ara_butonuna_tiklanir(String productInput) {
        searchResultsPage.setEnterProductInput(productInput);
        searchResultsPage.setSearchButton();
    }
    @When("Urun detay sayfasina gidilir ve birinci satici secilip sepete eklenir")
    public void urun_detay_sayfasina_gidilir_ve_birinci_satici_secilip_sepete_eklenir() {
        searchResultsPage.setAddCartSamsungTelephone();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement firstSellerBtn = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("[data-testid='seller-option-s4'] button")));
        firstSellerBtn.click();
    }
    @When("Urun detay sayfasina gidilir ve ikinci satici secilip sepete eklenir")
    public void urun_detay_sayfasina_gidilir_ve_ikinci_satici_secilip_sepete_eklenir() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement secondSellerBtn = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("[data-testid='seller-option-s5'] button")));
        secondSellerBtn.click();
    }
    @When("Urun detay sayfasina gidilir ve ucuncu satici secilip sepete eklenir")
    public void urun_detay_sayfasina_gidilir_ve_ucuncu_satici_secilip_sepete_eklenir() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement thirdSellerBtn = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("[data-testid='seller-option-s6'] button")));
        thirdSellerBtn.click();
    }

    @When("Sepete gidilir")
    public void sepete_gidilir() {
        searchResultsPage.setCartLink();;
    }
    @Then("Sepette uc farkli saticinin listelendigi gozlemlenir")
    public void sepette_uc_farkli_saticinin_listelendigi_gozlemlenir() {
        // Satıcı bilgilerini bekle (ilk satıcıyı baz al)
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".cart-item-seller")));

        // Tüm satıcı <p> elemanlarını al
        List<WebElement> sellerElements = driver.findElements(By.cssSelector(".cart-item-seller"));

        // Satıcı isimlerini ayıkla (örneğin "Satıcı: SamsungMağaza" -> "SamsungMağaza")
        Set<String> uniqueSellers = new HashSet<>();
        for (WebElement seller : sellerElements) {
            String fullText = seller.getText().trim(); // "Satıcı: SamsungMağaza"
            if (fullText.contains(":")) {
                String[] parts = fullText.split(":");
                if (parts.length > 1) {
                    uniqueSellers.add(parts[1].trim());
                }
            }
        }
        Assert.assertEquals("Sepette 3 farkli satici bulunmuyor!", 3, uniqueSellers.size());
}
}
