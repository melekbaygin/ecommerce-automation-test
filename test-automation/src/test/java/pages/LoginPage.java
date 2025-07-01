package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By;

public class LoginPage extends BasePage {
    private final By emailInput = By.id("email");
    private final By passwordInput = By.id("password");
    private final By loginButton = By.id("login-link");
    private final By logoutButton = By.id("logout-button");
    private final By loginSubmit = By.id("login-submit");

    public LoginPage(WebDriver driver) {
        super(driver);
        this.url = "http://localhost:5173";
    }

//    public void load() {
//        driver.get(url);
//    }

    public void clickLoginLink() {
        click(loginButton);
    }

    public void enterEmail(String email) {
        type(emailInput,email);
    }

    public void enterPassword(String password) {
        type(passwordInput,password);
    }

    public void submitLogin() {
        click(loginSubmit);
    }

    public boolean isHomePageVisible() {
        return isDisplayed(logoutButton);
    }
}
