Feature: Geçersiz e-posta ile giriş
  Scenario: Geçersiz e-posta ile giriş
    Given Kullanıcı siteyi ziyaret eder
    When Kullanıcı e-posta adresine "hatalı@example" yazar
    When Şifre alanına "123456" yazar ve giriş yapar
    Then Giriş başarısız olur ve hata mesajı görüntülenir