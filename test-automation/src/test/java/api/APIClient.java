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

    public String getToken(String user, String pass) {
        Response response = given()
            .header("user", user)
            .header("pass", pass)
            .when()
            .post(baseUrl + "/token");
        response.then().statusCode(200);
        token = response.jsonPath().getString("token");
        return token;
    }

    public Response viewInvoice(String barcode) {
        return given()
            .queryParam("barcode", barcode)
            .when()
            .get(baseUrl + "/viewInvoice");
    }

    public Response sendInvoice(String barcode) {
        if (token == null) {
            throw new RuntimeException("Token not acquired. Call getToken first.");
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
