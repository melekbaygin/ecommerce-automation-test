Feature: Ürün Sıralama

  Scenario: Fiyata göre artan sıralama
    Given Kullanıcı ürün listesini görüntülemektedir
    When "Fiyata göre artan" sıralama seçilir
    Then Ürünler ucuzdan pahalıya sıralanır

  Scenario: Fiyata göre azalan sıralama
    When "Fiyata göre azalan" seçeneği seçilir
    Then Ürünler pahalıdan ucuza sıralanır

  Scenario: En çok satılanlara göre sıralama
    When "Çok satanlar" sıralama seçeneği seçilir
    Then En çok satılan ürünler ilk sırada yer alır
