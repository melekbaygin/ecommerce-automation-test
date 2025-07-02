package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import org.openqa.selenium.WebDriver;
import utilities.DriverFactory;

import pages.LoginPage;
import pages.HomePage;
import static org.junit.Assert.assertTrue;

public class KullaniciGirisKontrol {
    private WebDriver driver;
    private LoginPage loginPace;

    @Given("Kullanıcı {string} adresindeki e-ticaret sitesini ziyaret eder")
    public void kullanıcı_adresindeki_e_ticaret_sitesini_ziyaret_eder(String url) {
        driver = DriverFactory.getDriver(System.getProperty("browser", "chrome"));
        driver.manage().window().maximize();
        driver.get(url);
        loginPace = new LoginPage(driver);
    }
    @When("Kullanıcı Giriş Yap butonuna tıklar")
    public void kullanıcı_giriş_yap_butonuna_tıklar() {
        loginPace.clickLoginLink();
    }
    @When("Kullanıcı e-posta adresine {string} yazar")
    public void kullanıcı_e_posta_adresine_yazar(String email) {
        loginPace.enterEmail(email);
    }
    @When("Kullanıcı şifre olarak {string} şifresi ile giriş yapar")
    public void kullanıcı_şifre_olarak_şifresi_ile_giriş_yapar(String password) {
        loginPace.enterPassword(password);
        loginPace.submitLogin();

    }
    @Then("Ana sayfa görüntülenir")
    public void ana_sayfa_görüntülenir() {
        assertTrue(loginPace.isHomePageVisible());
    }
    @Then("Giriş başarısız olur ve hata mesajı görüntülenir")
    public void giriş_başarısız_olur_ve_hata_mesajı_görüntülenir() {
        assertTrue(loginPace.isLoginErrorMesageShow());
    }
    @When("Şifre alanına {string} yazar ve giriş yapar")
    public void şifre_alanına_yazar_ve_giriş_yapar(String password) {
        loginPace.enterPassword(password);
        loginPace.submitLogin();
    }

}
