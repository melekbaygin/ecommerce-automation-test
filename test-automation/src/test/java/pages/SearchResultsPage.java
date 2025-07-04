package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SearchResultsPage extends BasePage {
    private final By emailInput = By.id("email");
    private final By passwordInput = By.id("password");
    private final By loginButton = By.id("login-link");
    private final By logoutButton = By.id("logout-button");
    private final By loginSubmit = By.id("login-submit");
    private final By loginErrorMsg = By.id("login-error");

    private final By minPriceInput = By.id("min-price");
    private final By maxPriceInput = By.id("max-price");
    private final By filterButton = By.id("mobile-filter-open-btn");
    private final By reviewButton = By.id("hero-search-button");
    private final By filterZeroToTen = By.id("price-range-0-10000");
    private final By filterTenToFifteen = By.id("price-range-10000-15000");
    private final By filterFifteenToTwenty = By.id("price-range-15000-20000");
    private final By filterTwentyToThirty = By.id("price-range-20000-30000");
    private final By applyFilterBtn = By.id("filter-apply-btn");
    private final By filterApple = By.id("brand-filter-apple");
    private final By filterSamsung = By.id("brand-filter-samsung");
    private final By filterGoogle = By.id("brand-filter-google");
    private final By filterOnePlus = By.id("brand-filter-oneplus");
    private final By filterXiaomi = By.id("brand-filter-xiaomi");
    private final By filterHuawei = By.id("brand-filter-huawei");
    private final By clearToFilterButton = By.id("filter-clear-btn");
    private final By clickRandomProduct = By.id("product-name-6");
    private final By cartLink = By.id("cart-link");
    private final By addToCart = By.id("add-to-cart-button");
    private final By addCartSamsungTelephone = By.id("product-name-2");

    private final By searchInput = By.id("search-input");
    private final By searchButton = By.id("search-button");

    public SearchResultsPage(WebDriver driver) {
        super(driver);
        this.url = "http://localhost:5173";
    }
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

    public boolean isLoginErrorMesageShow() {
        return isDisplayed(loginErrorMsg);
    }

    public void setCartLink () {
        click(cartLink);
    }
    public void clickFilterButton() {
        click(filterButton);
    }

    public void setMinPriceInput(int min) {
        click(minPriceInput);
        type(minPriceInput, String.valueOf(min));
    }

    public void setMaxPriceInput(int max) {
        click(maxPriceInput);
        type(maxPriceInput, String.valueOf(max));
    }

    public void clickApplyFilter() {
        click(applyFilterBtn);
    }

    public void clickReviewButton () {
        click(reviewButton);
    }
    public void selectPriceRange(String range) {
        switch (range) {
            case "0-10000":
                click(filterZeroToTen);
                break;
            case "10000-15000":
                click(filterTenToFifteen);
                break;
            case "15000-20000":
                click(filterFifteenToTwenty);
                break;
            case "20000-30000":
                click(filterTwentyToThirty);
                break;
            default:
                throw new IllegalArgumentException("Geçersiz fiyat aralığı: " + range);
        }
    }

    public void selectBrand(String brand) {
        switch (brand.toLowerCase()) {
            case "apple":
                click(filterApple);
                break;
            case "samsung":
                click(filterSamsung);
                break;
            case "google":
                click(filterGoogle);
                break;
            case "oneplus":
                click(filterOnePlus);
                break;
            case "xiaomi":
                click(filterXiaomi);
                break;
            case "huawei":
                click(filterHuawei);
                break;
            default:
                throw new IllegalArgumentException("Geçersiz marka: " + brand);
        }
    }
    public void setClickRandomProduct() {
        click(clickRandomProduct);
    }
    public void clickClearFilters() {
        click(clearToFilterButton);
    }
    public void setAddToCart() {
        click(addToCart);
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
    public void setAddCartSamsungTelephone () {
        click(addCartSamsungTelephone);
    }
}
