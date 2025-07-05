package pages;

import config.Config;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePage extends BasePage {

    private final By searchInput = By.id("search-input");
    private final By searchButton = By.id("search-button");

    public HomePage(WebDriver driver) {
        super(driver);
        this.url = Config.APP_URL;
    }

    public void setSearchInput() {
        click(searchInput);
    }
    public void setSearchButton () {
        click(searchButton);
    }
    public void setEnterProductInput (String productInput) {
        type(searchInput, productInput);
    }

}
