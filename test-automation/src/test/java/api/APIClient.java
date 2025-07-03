package api;

import io.restassured.response.Response;
import org.json.JSONObject;
import static io.restassured.RestAssured.given;

public class APIClient {
    private String baseUrl;
    private String token;

    public APIClient(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    // WireMock beklentisine uygun: user ve pass sabit değerler
    public String getToken() {
        Response response = given()
            .header("user", "testUser")
            .header("pass", "testPass")
            .when()
            .post(baseUrl + "/token");
        response.then().statusCode(200);
        token = response.jsonPath().getString("token");
        return token;
    }

    public Response viewInvoice(String barcode) {
        // barcode sadece rakam olmalı, kontrol eklenebilir
        if (!barcode.matches("[0-9]+")) {
            throw new IllegalArgumentException("Barcode must be numeric");
        }
        return given()
            .queryParam("barcode", barcode)
            .when()
            .get(baseUrl + "/viewInvoice");
    }

    public Response sendInvoice(String barcode) {
        // Token WireMock için sabit olmalı
        if (token == null) {
            token = "mocked_token_12345";
        }
        if (!barcode.matches("[0-9]+")) {
            throw new IllegalArgumentException("Barcode must be numeric");
        }
        JSONObject requestBody = new JSONObject();
        requestBody.put("Barcode", barcode);
        return given()
            .header("token", token)
            .contentType("application/json")
            .body(requestBody.toString())
            .when()
            .post(baseUrl + "/sendInvoice");
    }
}
