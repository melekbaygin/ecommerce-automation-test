Feature: Sepete Urun Ekleme

  Scenario: Urun sepete basari ile eklenir
    Given "http://localhost:5173" e-ticaret sitesine gidilir
    When Giris yap butonuna tiklanir
    And E-posta adresi alanina tiklanir ve "test@example.com" yazilir
    And Sifre alanina tiklanir ve "123456" yazilir
    And Cep telefonlarini incele butonuna tiklanir
    And Filtreler kisminin altinda bulunan min bolumune tiklanir ve 15000 degeri girilir
    And Filtreler kisminin altinda bulunan max bolumune tiklanir ve 20000 degeri girilir
    And Filtreleri uygula butonuna tiklanir
    And Cikan sonuctan en alt satirdan rastgele bir urun secilir
    And En dusuk puanli saticinin urunu sepete eklenir
    Then Urunun sepete dogru eklendigi kontrol edilir