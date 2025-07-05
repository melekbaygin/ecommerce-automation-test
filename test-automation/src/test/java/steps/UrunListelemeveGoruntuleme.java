package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import pages.HomePage;
import pages.LoginPage;
import utilities.DriverFactory;

public class UrunListelemeveGoruntuleme {
    private WebDriver driver;
    private HomePage homePage;

    @Given("Kullanıcı {string} sitesini ziyaret eder")
    public void kullanıcı_sitesini_ziyaret_eder(String url) {
        driver = DriverFactory.getDriver();
        driver.manage().window().maximize();
        driver.get(config.Config.APP_URL);
        homePage = new HomePage(driver);
    }
    @When("Arama çubuğuna tıklanır")
    public void arama_çubuğuna_tıklanır() {
        homePage.setSearchInput();
    }
    @When("{string} yazılır")
    public void yazılır(String productInput) {
        homePage.setEnterProductInput(productInput);
    }
    @When("Ara butonuna tıklanır")
    public void ara_butonuna_tıklanır() {
        homePage.setSearchButton();
    }
    @Then("{string} içeren ürünler listelenir")
    public void içeren_ürünler_listelenir(String string) {
        String result = driver.findElement(new By.ByCssSelector("p.text-gray-600.mt-1")).getText();
        result.contains("ürün bulundu");
    }
    @When("{string} yazilir")
    public void yazilir(String computer) {
        homePage.setEnterProductInput(computer);
    }
    @Then("{string} mesajı görünür")
    public void mesajı_görünür(String information) {
        String result = driver.findElement(new By.ByCssSelector("p.text-gray-600.mt-1")).getText();
        result.contains("Hiç ürün bulunamadı.");
    }

}
