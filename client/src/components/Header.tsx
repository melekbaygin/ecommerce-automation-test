import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" id="logo">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ET</span>
            </div>
            <span className="text-xl font-bold text-gray-900">E-TicaretTest</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                id="search-input"
                data-testid="search-input"
                placeholder="Ürün, kategori veya marka ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <button
                type="submit"
                id="search-button"
                data-testid="search-button"
                className="absolute right-2 top-1.5 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Ara
              </button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-2" id="user-info">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">{user?.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  id="logout-button"
                  data-testid="logout-button"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Çıkış</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                id="login-link"
                data-testid="login-link"
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <User className="h-5 w-5" />
                <span>Giriş Yap</span>
              </Link>
            )}
            
            <Link
              to="/cart"
              id="cart-link"
              data-testid="cart-link"
              className="relative flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Sepet</span>
              {totalItems > 0 && (
                <span
                  id="cart-count"
                  data-testid="cart-count"
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center space-x-2 px-2">
                    <User className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700">{user?.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Çıkış</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-2 px-2 text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  <span>Giriş Yap</span>
                </Link>
              )}
              
              <Link
                to="/cart"
                className="relative flex items-center space-x-2 px-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Sepet</span>
                {totalItems > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;