package hooks;

import io.cucumber.java.AfterStep;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import utilities.DriverFactory;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Hooks {
    @AfterStep
    public void takeScreenshotOnFailure(Scenario scenario) {
        if (scenario.isFailed()) {
            WebDriver driver = DriverFactory.getDriver();

            // 1. Cucumber raporuna ekle
            byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshotBytes, "image/png", "Failure Screenshot");

            // 2. Dosya sistemine de kaydet
            File screenshotFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
            String fileName = "target/screenshots/screenshot_" + timeStamp + ".png";

            try {
                Files.createDirectories(new File("target/screenshots").toPath());
                Files.copy(screenshotFile.toPath(), new File(fileName).toPath());
            } catch (IOException e) {
                System.err.println("Screenshot kaydedilirken hata oluştu: " + e.getMessage());
            }
        }
    }
}
