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
  }
];

export const mockUsers = [
  { id: '1', email: 'test@example.com', password: '123456', name: 'Test Kullanıcı' },
  { id: '2', email: 'admin@test.com', password: 'admin123', name: 'Admin Kullanıcı' }
];