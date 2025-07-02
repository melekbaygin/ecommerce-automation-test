package runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = {
            "src/test/java/features/1-KullaniciGirisKontrol.feature",
//            "src/test/java/features/2-UrunListelemeveGoruntuleme.feature",
//            "src/test/java/features/3-FiltrelemeIslemleri.feature",
//            "src/test/java/features/4-SepetIslemleri.feature",
//            "src/test/java/features/5-SepetGoruntulemeveSilme.feature",
//            "src/test/java/features/6-UrunSiralama.feature",
//            "src/test/java/features/7-FormveValidasyon.feature",
//            "src/test/java/features/8-GuvenlikveYetkilendirme.feature"

    },
    glue = "steps",
    plugin = {
        "pretty",
        "html:target/cucumber-reports/cucumber-html-report.html",
        "json:target/cucumber-reports/cucumber.json",
        "io.qameta.allure.cucumber7jvm.AllureCucumber7Jvm"
    },
    snippets = CucumberOptions.SnippetType.CAMELCASE,
    tags = "@ui or @api"
)
public class TestRunner {

}
