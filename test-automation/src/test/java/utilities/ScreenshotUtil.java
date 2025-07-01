package utilities;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ScreenshotUtil {
    public static void takeScreenshot(WebDriver driver, String scenarioName) {
        if (driver instanceof TakesScreenshot) {
            File screenshotFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss"));
            String fileName = scenarioName.replaceAll("[^a-zA-Z0-9.-]", "_") + "_" + timestamp + ".png";
            String screenshotDir = "screenshots";
            try {
                Files.createDirectories(Paths.get(screenshotDir));
                Files.copy(screenshotFile.toPath(), Paths.get(screenshotDir, fileName));
                System.out.println("Ekran görüntüsü alındı: " + Paths.get(screenshotDir, fileName).toAbsolutePath());
            } catch (IOException e) {
                System.err.println("Ekran görüntüsü alınırken hata oluştu: " + e.getMessage());
            }
        }
    }
}
