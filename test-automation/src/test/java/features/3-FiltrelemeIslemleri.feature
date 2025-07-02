Feature: Filtreleme

  Scenario: Fiyat araligi filtresinin uygulanmasi
    Given Tarayıcıdan "http://localhost:5173" sitesine gidilir
    When Cep telefonlarını incele butonuna tıklanır
    And Filtreler butonuna tıklanır
    And Fiyat araligi olarak 15000 20000 TL secilir
    And Filtreleri uygula butonuna tıklanır
    Then Listelenen urunler 15000 20000 araliginda olur

  Scenario: Marka filtresi uygulanmasi
    Given Tarayıcıdan "http://localhost:5173" sitesine gidilir
    When Cep telefonlarını incele butonuna tıklanır
    And Filtreler butonuna tıklanır
    And "Samsung" markasına tıklanır
    And Filtreleri uygula butonuna tıklanır
    Then Sadece Samsung markalı telefonların listelendiği görüntülenir
