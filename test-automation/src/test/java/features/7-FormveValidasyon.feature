Feature: Form Doğrulama

Scenario: Geçersiz e-posta formatı
  When Kullanıcı e-posta alanına "test@com" yazar
  Then "Geçerli bir e-posta giriniz" hatası gösterilir

Scenario: Şifre minimum karakter kontrolü
  When Kullanıcı 3 karakterlik bir şifre girer
  Then "Şifre en az 6 karakter olmalı" hatası gösterilir
