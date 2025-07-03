import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.core.WireMockConfiguration;
import static com.github.tomakehurst.wiremock.client.WireMock.*;

public class ApiMockServer {

    public static void main(String[] args) {
        // WireMock sunucusunu 8080 portunda başlat
        WireMockServer wireMockServer = new WireMockServer(WireMockConfiguration.options().port(8080));
        wireMockServer.start();
        System.out.println("WireMock sunucusu 8080 portunda baslatildi.");

        // ---------- 1. Endpoint: /token (POST) ----------
        wireMockServer.stubFor(post(urlEqualTo("/token"))
            .withHeader("user", equalTo("testUser"))
            .withHeader("pass", equalTo("testPass"))
            .willReturn(aResponse()
                .withHeader("Content-Type", "application/json")
                .withBody("{\"token\": \"mocked_token_12345\"}")));
        System.out.println("'/token' endpoint'i yapilandirildi.");

        // ---------- 2. Endpoint: /viewInvoice (GET) ----------
        wireMockServer.stubFor(get(urlPathEqualTo("/viewInvoice"))
            .withQueryParam("barcode", matching("[0-9]+"))
            .willReturn(aResponse()
                .withHeader("Content-Type", "application/json")
                .withBody("{\"InvoiceLink\": \"http://abc.com/invoice.pdf\", \"Result\": {\"success\": true}}")));
        System.out.println("'/viewInvoice' endpoint'i yapilandirildi.");

        // ---------- 3. Endpoint: /sendInvoice (POST) ----------
        wireMockServer.stubFor(post(urlEqualTo("/sendInvoice"))
            .withHeader("token", equalTo("mocked_token_12345"))
            .withRequestBody(matchingJsonPath("$.Barcode", matching("[0-9]+")))
            .willReturn(aResponse()
                .withStatus(200)
                .withHeader("Content-Type", "application/json")
                .withBody("{\"message\": \"Invoice sent successfully\"}")));
        System.out.println("'/sendInvoice' endpoint'i yapilandirildi.");

        // Sunucunun çalışmaya devam etmesi için bekleyin (isteğe bağlı, testlerde otomatik kapanır)
        // new Scanner(System.in).nextLine(); // Konsoldan giriş beklenene kadar açık kalır
        // wireMockServer.stop();
    }
}
