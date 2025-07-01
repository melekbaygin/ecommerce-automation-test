package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePage extends BasePage {
    private final By searchBox = By.id("searchBox");
    private final By searchButton = By.id("searchButton");

    public HomePage(WebDriver driver) {
        super(driver);
        this.url = "http://localhost:3000/home";
    }

    public void searchProduct(String query) {
        driver.findElement(searchBox).sendKeys(query);
        driver.findElement(searchButton).click();
    }
}
