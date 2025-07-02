Feature: Güvenli Sayfa Erişimi

  Scenario: Giriş yapmadan sepet sayfasına erişim
    When Kullanıcı direkt olarak "/cart" sayfasını açar
    Then Giriş sayfasına yönlendirilir

  Scenario: Giriş yapmadan ürün satın alma sayfasına erişim
    When Kullanıcı direkt olarak "/checkout" sayfasını açar
    Then Giriş yapması gerektiği uyarısı gösterilir
