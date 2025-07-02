package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ProductDetailPage extends BasePage {
    private final By addToCartButton = By.id("addToCartButton");

    public ProductDetailPage(WebDriver driver) {
        super(driver);
        this.url = "http://localhost:5173";
    }

    public void addToCart() {
        driver.findElement(addToCartButton).click();
    }
}
