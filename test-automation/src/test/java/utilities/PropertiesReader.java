package utilities;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class PropertiesReader {
    private static Properties properties = new Properties();
    static {
        try {
            FileInputStream fis = new FileInputStream("src/test/resources/config.properties");
            properties.load(fis);
        } catch (IOException e) {
            throw new RuntimeException("config.properties okunamadı", e);
        }
    }
    public static String get(String key) {
        return properties.getProperty(key);
    }
}
