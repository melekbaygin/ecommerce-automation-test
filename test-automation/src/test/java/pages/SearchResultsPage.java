package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SearchResultsPage extends BasePage {
    private final By minPriceInput = By.id("minPrice");
    private final By maxPriceInput = By.id("maxPrice");
    private final By filterButton = By.id("filterButton");

    public SearchResultsPage(WebDriver driver) {
        super(driver);
    }

    public void filterByPriceRange(int min, int max) {
        driver.findElement(minPriceInput).clear();
        driver.findElement(minPriceInput).sendKeys(String.valueOf(min));
        driver.findElement(maxPriceInput).clear();
        driver.findElement(maxPriceInput).sendKeys(String.valueOf(max));
        driver.findElement(filterButton).click();
    }
}
