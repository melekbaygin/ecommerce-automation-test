Feature: Kullanıcı Girişi
  Scenario: Başarılı giriş
    Given Kullanıcı "http://localhost:5173" adresindeki e-ticaret sitesini ziyaret eder
    When Kullanıcı Giriş Yap butonuna tıklar
    When Kullanıcı e-posta adresine "test@example.com" yazar
    When Kullanıcı şifre olarak "123456" şifresi ile giriş yapar
    Then Ana sayfa görüntülenir