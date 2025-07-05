package steps;

import api.APIClient;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import io.restassured.response.Response;
import org.json.JSONObject;
import static org.junit.Assert.*;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Map;

public class ApiStepDefinitions {
    private APIClient apiClient = new APIClient(System.getenv("MOCK_API_URL") != null ? System.getenv("MOCK_API_URL") : "http://localhost:8080");
    private String actualToken;
    private Response invoiceViewResponse;
    private Response invoiceSendResponse;

    @Given("API için kullanıcı adı {string} ve şifre {string} ile token alınır")
    public void api_icin_kullanici_adi_ve_sifre_ile_token_alinir(String user, String pass) {
        assertEquals("testUser", user);
        assertEquals("testPass", pass);
        actualToken = apiClient.getToken();
    }

    @Then("dönen token {string} olmalıdır")
    public void donen_token_olmalidir(String expectedToken) {
        assertEquals(expectedToken, actualToken);
    }

    @When("barcode {string} ile fatura görüntülenir")
    public void barcode_ile_fatura_goruntulenir(String barcode) {
        invoiceViewResponse = apiClient.viewInvoice(barcode);
        // Başarılı ise response body dosyaya yaz
        if (invoiceViewResponse.getStatusCode() == 200) {
            try (FileWriter writer = new FileWriter("target/viewInvoice-response.json")) {
                writer.write(invoiceViewResponse.getBody().asString());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @Then("fatura bilgisi aşağıdaki gibi dönmeli:")
    public void fatura_bilgisi_asagidaki_gibi_donmeli(DataTable table) {
        Map<String, String> expected = table.asMaps().get(0);
        JSONObject json = new JSONObject(invoiceViewResponse.getBody().asString());
        assertEquals(expected.get("InvoiceLink"), json.getString("InvoiceLink"));
        assertEquals(Boolean.parseBoolean(expected.get("Result.success")), json.getJSONObject("Result").getBoolean("success"));
    }

    @When("barcode {string} ile fatura gönderilir")
    public void barcode_ile_fatura_gonderilir(String barcode) {
        invoiceSendResponse = apiClient.sendInvoice(barcode);
        // Başarılı ise response body dosyaya yaz
        if (invoiceSendResponse.getStatusCode() == 200) {
            try (FileWriter writer = new FileWriter("target/sendInvoice-response.json")) {
                writer.write(invoiceSendResponse.getBody().asString());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @Then("yanıt mesajı {string} olmalıdır")
    public void yanit_mesaji_olmalidir(String expectedMessage) {
        JSONObject json = new JSONObject(invoiceSendResponse.getBody().asString());
        assertEquals(expectedMessage, json.getString("message"));
    }
}
