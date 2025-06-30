import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import LoginForm from './components/LoginForm';
import APITest from './pages/APITest';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/api-test" element={<APITest />} />
              </Routes>
            </main>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;