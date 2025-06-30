import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, Product, Seller } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, seller: Seller) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction = 
  | { type: 'ADD_TO_CART'; payload: { product: Product; seller: Seller } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find(item => item.productId === action.payload.product.id);
      if (existingItem) {
        return state.map(item =>
          item.productId === action.payload.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, {
        productId: action.payload.product.id,
        product: action.payload.product,
        seller: action.payload.seller,
        quantity: 1
      }];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.productId !== action.payload);
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.productId === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product: Product, seller: Seller) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, seller } });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.seller.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};