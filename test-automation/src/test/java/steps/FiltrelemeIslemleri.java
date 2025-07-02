package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import pages.SearchResultsPage;
import utilities.DriverFactory;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class FiltrelemeIslemleri {

    private WebDriver driver;
    private SearchResultsPage searchResultsPage;

    @Given("Tarayıcıdan {string} sitesine gidilir")
    public void tarayıcıdan_sitesine_gidilir(String url) {
        driver = DriverFactory.getDriver(System.getProperty("browser", "chrome"));
        driver.manage().window().maximize();
        driver.get(url);
        searchResultsPage = new SearchResultsPage(driver);
    }
    @When("Cep telefonlarını incele butonuna tıklanır")
    public void cep_telefonlarını_incele_butonuna_tıklanır() {
        searchResultsPage.clickReviewButton();
    }
    @When("Filtreler butonuna tıklanır")
    public void filtreler_butonuna_tıklanır() {
     searchResultsPage.clickFilterButton();
    }
    @When("Fiyat araligi olarak {int} {int} TL secilir")
    public void fiyat_araligi_olarak_tl_secilir(Integer min, Integer max) {
        searchResultsPage.setMaxPriceInput(min);
    }
    @When("Filtreleri uygula butonuna tıklanır")
    public void filtreleri_uygula_butonuna_tıklanır() {
        searchResultsPage.clickApplyFilter();
    }
    @Then("Listelenen urunler {int} {int} araliginda olur")
    public void listelenen_urunler_araliginda_olur(Integer min, Integer max) {
        List<WebElement> priceElements = driver.findElements(By.cssSelector(".product-price")); // fiyatların olduğu CSS class
        //Not: ".product-price" CSS seçicisi senin HTML'ine göre uyarlanmalıdır.

        for (WebElement element : priceElements) {
            String priceText = element.getText().replaceAll("[^0-9]", ""); // ₺, boşluk vs. temizle
            if (!priceText.isEmpty()) {
                int price = Integer.parseInt(priceText);
                assertTrue("Fiyat aralık dışında: " + price, price >= min && price <= max);
            }
        }
    }
    @When("{string} markasına tıklanır")
    public void markasına_tıklanır(String brand) {
        searchResultsPage.selectBrand(brand);
    }
    @Then("Sadece Samsung markalı telefonların listelendiği görüntülenir")
    public void sadece_samsung_markalı_telefonların_listelendiği_görüntülenir() {

        //Burada da ".product-brand" HTML içeriğine göre uyarlanmalı.
        List<WebElement> brandElements = driver.findElements(By.cssSelector(".product-brand")); // marka class'ı

        for (WebElement element : brandElements) {
            String brand = element.getText().toLowerCase();
            assertEquals("Samsung", brand);
        }
    }

}
