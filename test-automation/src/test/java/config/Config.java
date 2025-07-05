package config;

public class Config {
    public static final String APP_URL;
    static {
        String envUrl = System.getenv("APP_URL");
        APP_URL = (envUrl != null && !envUrl.isEmpty()) ? envUrl : "http://localhost:5173";
    }
}
