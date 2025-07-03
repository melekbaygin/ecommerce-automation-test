Feature: API Testleri

  Scenario: Token alma
    Given API için kullanıcı adı "testUser" ve şifre "testPass" ile token alınır
    Then dönen token "mocked_token_12345" olmalıdır

  Scenario: Fatura görüntüleme
    Given API için kullanıcı adı "testUser" ve şifre "testPass" ile token alınır
    When barcode "1234567890" ile fatura görüntülenir
    Then fatura bilgisi aşağıdaki gibi dönmeli:
      | InvoiceLink                  | Result.success |
      | http://abc.com/invoice.pdf   | true           |

  Scenario: Fatura gönderme
    Given API için kullanıcı adı "testUser" ve şifre "testPass" ile token alınır
    When barcode "9876543210" ile fatura gönderilir
    Then yanıt mesajı "Invoice sent successfully" olmalıdır
