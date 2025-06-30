export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  sellers: Seller[];
  description: string;
  features: string[];
}

export interface Seller {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  price: number;
  shipping: string;
  inStock: boolean;
}

export interface CartItem {
  productId: string;
  product: Product;
  seller: Seller;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface FilterState {
  minPrice: number;
  maxPrice: number;
  category: string;
  brand: string;
}