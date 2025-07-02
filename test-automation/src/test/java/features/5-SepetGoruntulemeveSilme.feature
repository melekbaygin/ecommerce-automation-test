Feature: Sepet Yönetimi

  Scenario: Sepet içeriğini görüntüleme
    Given Kullanıcı giriş yapmıştır ve sepete ürün eklemiştir
    When Sepet ikonuna tıklar
    Then Sepette ürünler ve toplam fiyat görüntülenir

  Scenario: Sepetten ürün çıkarma
    When Kullanıcı bir ürünü sil butonuna tıklar
    Then Ürün sepetten kaldırılır

  Scenario: Sepeti tamamen boşaltma
    When Kullanıcı "Sepeti boşalt" butonuna tıklar
    Then Sepet tamamen boşalır ve bilgi mesajı gösterilir
