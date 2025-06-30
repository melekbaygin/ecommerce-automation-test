import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro 128GB',
    price: 17999,
    originalPrice: 19999,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    category: 'cep telefonu',
    brand: 'Apple',
    rating: 4.8,
    reviewCount: 1245,
    description: 'En yeni iPhone 15 Pro, titanium gövde ve A17 Pro çip ile geldi.',
    features: ['6.1" Super Retina XDR ekran', 'A17 Pro çip', '48MP ana kamera', 'Titanium gövde'],
    sellers: [
      { id: 's1', name: 'TechStore', rating: 4.2, reviewCount: 890, price: 17999, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's2', name: 'ElektronikDünyası', rating: 4.6, reviewCount: 1200, price: 18299, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's3', name: 'MobilMart', rating: 3.8, reviewCount: 456, price: 17899, shipping: '29 TL kargo', inStock: true },
    ]
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra 256GB',
    price: 19500,
    originalPrice: 21000,
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
    category: 'cep telefonu',
    brand: 'Samsung',
    rating: 4.7,
    reviewCount: 892,
    description: 'Galaxy S24 Ultra, S Pen ve 200MP kamera ile üstün performans.',
    features: ['6.8" Dynamic AMOLED ekran', 'Snapdragon 8 Gen 3', '200MP kamera', 'S Pen dahil'],
    sellers: [
      { id: 's4', name: 'SamsungMağaza', rating: 4.5, reviewCount: 1100, price: 19500, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's5', name: 'TeknoShop', rating: 4.1, reviewCount: 678, price: 19200, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's6', name: 'GalaxyStore', rating: 3.9, reviewCount: 234, price: 19800, shipping: '35 TL kargo', inStock: true },
    ]
  },
  {
    id: '3',
    name: 'Google Pixel 8 Pro 128GB',
    price: 16999,
    originalPrice: 18500,
    image: 'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg',
    category: 'cep telefonu',
    brand: 'Google',
    rating: 4.6,
    reviewCount: 456,
    description: 'Google Pixel 8 Pro, Tensor G3 çip ve yapay zeka özellikleri ile.',
    features: ['6.7" LTPO OLED ekran', 'Tensor G3 çip', '50MP kamera', 'Yapay zeka özellikleri'],
    sellers: [
      { id: 's7', name: 'GoogleStore', rating: 4.3, reviewCount: 789, price: 16999, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's8', name: 'PixelDünyası', rating: 4.0, reviewCount: 345, price: 17200, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's9', name: 'AndroidShop', rating: 3.7, reviewCount: 123, price: 16800, shipping: '25 TL kargo', inStock: true },
    ]
  },
  {
    id: '4',
    name: 'OnePlus 12 256GB',
    price: 18999,
    originalPrice: 20500,
    image: 'https://images.pexels.com/photos/1034645/pexels-photo-1034645.jpeg',
    category: 'cep telefonu',
    brand: 'OnePlus',
    rating: 4.5,
    reviewCount: 678,
    description: 'OnePlus 12, Snapdragon 8 Gen 3 ve 100W hızlı şarj ile.',
    features: ['6.82" AMOLED ekran', 'Snapdragon 8 Gen 3', '50MP kamera', '100W hızlı şarj'],
    sellers: [
      { id: 's10', name: 'OnePlusStore', rating: 4.4, reviewCount: 567, price: 18999, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's11', name: 'HızlıTelefon', rating: 4.2, reviewCount: 890, price: 18799, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's12', name: 'MobileWorld', rating: 3.6, reviewCount: 234, price: 19200, shipping: '40 TL kargo', inStock: true },
    ]
  },
  {
    id: '5',
    name: 'Xiaomi 14 Ultra 512GB',
    price: 15999,
    originalPrice: 17500,
    image: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg',
    category: 'cep telefonu',
    brand: 'Xiaomi',
    rating: 4.4,
    reviewCount: 789,
    description: 'Xiaomi 14 Ultra, Leica kamera sistemi ve Snapdragon 8 Gen 3 ile.',
    features: ['6.73" AMOLED ekran', 'Snapdragon 8 Gen 3', 'Leica kamera', '90W hızlı şarj'],
    sellers: [
      { id: 's13', name: 'XiaomiTürkiye', rating: 4.1, reviewCount: 456, price: 15999, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's14', name: 'Mi-Store', rating: 4.3, reviewCount: 678, price: 16200, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's15', name: 'TelefonDünyası', rating: 3.5, reviewCount: 167, price: 15800, shipping: '30 TL kargo', inStock: true },
    ]
  },
  {
    id: '6',
    name: 'Huawei P60 Pro 256GB',
    price: 16500,
    originalPrice: 18000,
    image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg',
    category: 'cep telefonu',
    brand: 'Huawei',
    rating: 4.3,
    reviewCount: 345,
    description: 'Huawei P60 Pro, Kirin 9000S çip ve gelişmiş kamera sistemi ile.',
    features: ['6.67" OLED ekran', 'Kirin 9000S çip', '48MP kamera', 'Hızlı şarj'],
    sellers: [
      { id: 's16', name: 'HuaweiStore', rating: 4.0, reviewCount: 234, price: 16500, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's17', name: 'TeknoMart', rating: 4.2, reviewCount: 567, price: 16800, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's18', name: 'PhonePlus', rating: 3.4, reviewCount: 89, price: 16300, shipping: '35 TL kargo', inStock: true },
    ]
  },
  {
    id: '7',
    name: 'Realme GT 6 256GB',
    price: 12999,
    originalPrice: 14500,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
    category: 'cep telefonu',
    brand: 'Realme',
    rating: 4.2,
    reviewCount: 210,
    description: 'Realme GT 6, yüksek performanslı işlemcisi ve hızlı şarjı ile.',
    features: ['6.7" AMOLED ekran', 'Snapdragon 7+ Gen 2', '64MP kamera', '80W hızlı şarj'],
    sellers: [
      { id: 's19', name: 'RealmeStore', rating: 4.0, reviewCount: 120, price: 12999, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's20', name: 'CepMarket', rating: 3.9, reviewCount: 98, price: 13200, shipping: '25 TL kargo', inStock: true }
    ]
  },
  {
    id: '8',
    name: 'Oppo Reno 11 128GB',
    price: 11999,
    originalPrice: 13500,
    image: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg',
    category: 'cep telefonu',
    brand: 'Oppo',
    rating: 4.1,
    reviewCount: 180,
    description: 'Oppo Reno 11, şık tasarım ve güçlü kamera özellikleri ile.',
    features: ['6.4" AMOLED ekran', 'MediaTek Dimensity 900', '50MP kamera', '65W hızlı şarj'],
    sellers: [
      { id: 's21', name: 'OppoShop', rating: 4.2, reviewCount: 110, price: 11999, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's22', name: 'TelefonSepeti', rating: 3.8, reviewCount: 70, price: 12200, shipping: '20 TL kargo', inStock: true }
    ]
  },
  {
    id: '9',
    name: 'Vivo V30 256GB',
    price: 13999,
    originalPrice: 15000,
    image: 'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg',
    category: 'cep telefonu',
    brand: 'Vivo',
    rating: 4.0,
    reviewCount: 150,
    description: 'Vivo V30, uzun pil ömrü ve geniş ekranı ile.',
    features: ['6.78" AMOLED ekran', 'Snapdragon 778G', '64MP kamera', '44W hızlı şarj'],
    sellers: [
      { id: 's23', name: 'VivoMağaza', rating: 4.1, reviewCount: 80, price: 13999, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's24', name: 'MobilFırsat', rating: 3.7, reviewCount: 60, price: 14200, shipping: '30 TL kargo', inStock: true }
    ]
  },
  {
    id: '10',
    name: 'Tecno Camon 20 Pro',
    price: 10999,
    originalPrice: 12000,
    image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg',
    category: 'cep telefonu',
    brand: 'Tecno',
    rating: 3.9,
    reviewCount: 90,
    description: 'Tecno Camon 20 Pro, uygun fiyatlı ve güçlü kamera performansı.',
    features: ['6.67" IPS LCD', 'Helio G99', '64MP kamera', '33W hızlı şarj'],
    sellers: [
      { id: 's25', name: 'TecnoStore', rating: 3.8, reviewCount: 40, price: 10999, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's26', name: 'CepDükkanı', rating: 3.6, reviewCount: 30, price: 11200, shipping: '15 TL kargo', inStock: true }
    ]
  },
  {
    id: '11',
    name: 'POCO X6 Pro 256GB',
    price: 14499,
    originalPrice: 15500,
    image: 'https://images.pexels.com/photos/461389/pexels-photo-461389.jpeg',
    category: 'cep telefonu',
    brand: 'POCO',
    rating: 4.3,
    reviewCount: 130,
    description: 'POCO X6 Pro, yüksek performans ve uygun fiyatı bir arada sunar.',
    features: ['6.67" AMOLED ekran', 'Dimensity 8300 Ultra', '64MP kamera', '67W hızlı şarj'],
    sellers: [
      { id: 's27', name: 'PocoMağaza', rating: 4.2, reviewCount: 60, price: 14499, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's28', name: 'FırsatTelefon', rating: 4.0, reviewCount: 50, price: 14700, shipping: '20 TL kargo', inStock: true }
    ]
  },
  {
    id: '12',
    name: 'Honor 90 Lite 128GB',
    price: 10499,
    originalPrice: 11500,
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg',
    category: 'cep telefonu',
    brand: 'Honor',
    rating: 3.8,
    reviewCount: 75,
    description: 'Honor 90 Lite, hafif tasarım ve uzun pil ömrü ile.',
    features: ['6.7" LCD ekran', 'Dimensity 6020', '100MP kamera', '22.5W hızlı şarj'],
    sellers: [
      { id: 's29', name: 'HonorStore', rating: 3.9, reviewCount: 35, price: 10499, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's30', name: 'CepAvantaj', rating: 3.7, reviewCount: 25, price: 10700, shipping: '10 TL kargo', inStock: true }
    ]
  },
  {
    id: '13',
    name: 'Infinix Note 30 256GB',
    price: 11499,
    originalPrice: 12500,
    image: 'https://images.pexels.com/photos/461389/pexels-photo-461389.jpeg',
    category: 'cep telefonu',
    brand: 'Infinix',
    rating: 3.7,
    reviewCount: 60,
    description: 'Infinix Note 30, geniş ekranı ve uygun fiyatı ile.',
    features: ['6.78" IPS LCD', 'Helio G99', '64MP kamera', '45W hızlı şarj'],
    sellers: [
      { id: 's31', name: 'InfinixMağaza', rating: 3.8, reviewCount: 20, price: 11499, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's32', name: 'TelefonExpress', rating: 3.6, reviewCount: 15, price: 11700, shipping: '15 TL kargo', inStock: true }
    ]
  },
  {
    id: '14',
    name: 'Motorola Edge 40 Neo',
    price: 13499,
    originalPrice: 14500,
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg',
    category: 'cep telefonu',
    brand: 'Motorola',
    rating: 4.0,
    reviewCount: 85,
    description: 'Motorola Edge 40 Neo, suya dayanıklı tasarım ve hızlı şarj.',
    features: ['6.55" pOLED ekran', 'Dimensity 7030', '50MP kamera', '68W hızlı şarj'],
    sellers: [
      { id: 's33', name: 'MotoStore', rating: 4.1, reviewCount: 40, price: 13499, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's34', name: 'CepFırsat', rating: 3.9, reviewCount: 30, price: 13700, shipping: '20 TL kargo', inStock: true }
    ]
  },
  {
    id: '15',
    name: 'TCL 40 SE 256GB',
    price: 10999,
    originalPrice: 12000,
    image: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg',
    category: 'cep telefonu',
    brand: 'TCL',
    rating: 3.6,
    reviewCount: 55,
    description: 'TCL 40 SE, uygun fiyatlı ve geniş depolama alanı.',
    features: ['6.75" IPS LCD', 'Helio G37', '50MP kamera', '18W hızlı şarj'],
    sellers: [
      { id: 's35', name: 'TCLMağaza', rating: 3.7, reviewCount: 20, price: 10999, shipping: 'Ücretsiz kargo', inStock: true },
      { id: 's36', name: 'TelefonPazarı', rating: 3.5, reviewCount: 15, price: 11200, shipping: '10 TL kargo', inStock: true }
    ]
  }
];

export const mockUsers = [
  { id: '1', email: 'test@example.com', password: '123456', name: 'Test Kullanıcı' },
  { id: '2', email: 'admin@test.com', password: 'admin123', name: 'Admin Kullanıcı' }
];