package runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = {
            "src/test/java/features/1-KullaniciGirisKontrol.feature",
            //"src/test/java/features/2-UrunListelemeveGoruntuleme.feature",
//            "src/test/java/features/3-FiltrelemeIslemleri.feature",
            "src/test/java/features/4-SepetIslemleri.feature",
    },
    plugin = {
        "pretty",
        "html:target/cucumber-reports/cucumber-html-report.html",
        "json:target/cucumber-reports/cucumber.json",
        "io.qameta.allure.cucumber7jvm.AllureCucumber7Jvm"
    },
        glue = {"steps","hooks"},
        monochrome = true
//    snippets = CucumberOptions.SnippetType.CAMELCASE,
//    tags = "@ui or @api"
)
public class TestRunner {

}
