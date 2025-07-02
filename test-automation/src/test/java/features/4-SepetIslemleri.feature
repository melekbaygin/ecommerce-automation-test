Feature: Sepete Ürün Ekleme

  Scenario: Ürün sepete eklenir
    Given Kullanıcı ürün detay sayfasındadır
    When Sepete ekle butonuna tıklar
    Then Ürün sepete eklenir ve onay mesajı görünür

  Scenario: Aynı ürün birden fazla kez eklenebilir
    When Kullanıcı bir ürünü 3 kez sepete ekler
    Then Sepette o ürün 3 adet görünür

  Scenario: Sepete eklemeden önce login uyarısı
    Given Kullanıcı giriş yapmamıştır
    When Sepete ekle butonuna tıklar
    Then "Giriş yapmalısınız" uyarısı çıkar
