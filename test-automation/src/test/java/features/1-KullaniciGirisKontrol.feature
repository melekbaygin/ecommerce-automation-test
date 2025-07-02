Feature: Kullanıcı Girişi
  Scenario: Başarılı giriş
    Given Kullanıcı "http://localhost:5173" adresindeki e-ticaret sitesini ziyaret eder
    When Kullanıcı Giriş Yap butonuna tıklar
    When Kullanıcı e-posta adresine "test@example.com" yazar
    When Kullanıcı şifre olarak "123456" şifresi ile giriş yapar
    Then Ana sayfa görüntülenir

  Scenario: Yanlis sifre ile giris
    Given Kullanıcı "http://localhost:5173" adresindeki e-ticaret sitesini ziyaret eder
    When Kullanıcı Giriş Yap butonuna tıklar
    When Kullanıcı e-posta adresine "test@example.com" yazar
    When Kullanıcı şifre olarak "abcdef" şifresi ile giriş yapar
    Then Giriş başarısız olur ve hata mesajı görüntülenir

  Scenario: Geçersiz e-posta ile giriş
    Given Kullanıcı "http://localhost:5173" adresindeki e-ticaret sitesini ziyaret eder
    When Kullanıcı e-posta adresine "hatalı@example" yazar
    When Şifre alanına "123456" yazar ve giriş yapar
    Then Giriş başarısız olur ve hata mesajı görüntülenir

  Scenario: Bos alanlarla giris denemesi
    Given Kullanıcı "http://localhost:5173" adresindeki e-ticaret sitesini ziyaret eder
    When Kullanıcı Giriş Yap butonuna tıklar
    And Kullanıcı Giriş Yap butonuna tıklar
    Then Giriş başarısız olur ve hata mesajı görüntülenir