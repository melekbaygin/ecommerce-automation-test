Feature: Ürün Arama

  Scenario: Var olan telefon modelini arama
    Given Kullanıcı "http://localhost:5173" sitesini ziyaret eder
    When Arama çubuğuna tıklanır
    And  "iPhone" yazılır
    And  Ara butonuna tıklanır
    Then "iPhone" içeren ürünler listelenir

  Scenario: Olmayan bir ürünü arama
    Given Kullanıcı "http://localhost:5173" sitesini ziyaret eder
    When Arama çubuğuna tıklanır
    When "Bilgisayar" yazilir
    And  Ara butonuna tıklanır
    Then "Ürün bulunamadı" mesajı görünür