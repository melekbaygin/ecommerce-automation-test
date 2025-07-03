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

  Scenario: Ayni urunu farklı saticilardan sepete ekleyince sepette farkli saticilarin gozukmesi
    Given "http://localhost:5173" e-ticaret sitesine gidilir
    When Giris yap butonuna tiklanir
    And E-posta adresi alanina tiklanir ve "test@example.com" yazilir
    And Sifre alanina tiklanir ve "123456" yazilir
    When Arama cubuguna "Samsung Galaxy S24 Ultra 256GB" yazilir ve ara butonuna tiklanir
    And Urun detay sayfasina gidilir ve birinci satici secilip sepete eklenir
    And Urun detay sayfasina gidilir ve ikinci satici secilip sepete eklenir
    And Urun detay sayfasina gidilir ve ucuncu satici secilip sepete eklenir
    When Sepete gidilir
    Then Sepette uc farkli saticinin listelendigi gozlemlenir