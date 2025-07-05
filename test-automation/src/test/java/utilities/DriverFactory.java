package utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

import java.util.UUID;

public class DriverFactory {
    public static WebDriver getDriver() {
        // Tarayıcı adı dışarıdan alınır, default olarak "edge"
        String browserName = System.getProperty("browser", "chrome").toLowerCase();
        WebDriver driver;

        switch (browserName) {
            case "chrome":
                WebDriverManager.chromedriver().setup();
                ChromeOptions chromeOptions = new ChromeOptions();
                chromeOptions.addArguments("--no-sandbox");
                chromeOptions.addArguments("--disable-dev-shm-usage");
                chromeOptions.addArguments("--disable-gpu");

                // Headless mode opsiyonunu ortam değişkeninden al
                String headlessEnv = System.getenv("HEADLESS");
                boolean isHeadless = headlessEnv != null && headlessEnv.equalsIgnoreCase("true");
                if (isHeadless) {
                    chromeOptions.addArguments("--headless=new");
                }

                // İsteğe bağlı: user-data-dir parametresi sadece headless değilse eklenebilir
                if (!isHeadless) {
                    String uniqueUserDataDir = "/tmp/chrome_user_data_" + UUID.randomUUID();
                    chromeOptions.addArguments("--user-data-dir=" + uniqueUserDataDir);
                }
                driver = new ChromeDriver(chromeOptions);
                break;

            case "firefox":
                WebDriverManager.firefoxdriver().setup();
                FirefoxOptions firefoxOptions = new FirefoxOptions();
                driver = new FirefoxDriver(firefoxOptions);
                break;

            case "edge":
                WebDriverManager.edgedriver().setup();
                EdgeOptions edgeOptions = new EdgeOptions();
                driver = new EdgeDriver(edgeOptions);
                break;

            default:
                throw new IllegalArgumentException("Unsupported browser: " + browserName);
        }

        return driver;
    }
}
