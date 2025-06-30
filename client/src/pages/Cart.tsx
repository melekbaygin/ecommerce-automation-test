import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    // Checkout logic would go here
    alert('Ödeme işlemi tamamlandı! (Test amaçlı)');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-8" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sepetiniz Boş</h2>
            <p className="text-gray-600 mb-8">Henüz sepetinizde ürün bulunmuyor.</p>
            <Link
              to="/search?q=cep%20telefonu"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Alışverişe Başla
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">
              Sepetim ({items.length} ürün)
            </h1>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.productId}
                  data-testid={`cart-item-${item.productId}`}
                  className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-4 border border-gray-200 rounded-lg"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Satıcı: {item.seller.name}
                    </p>
                    <p className="text-lg font-bold text-gray-900 mt-2">
                      {formatPrice(item.seller.price)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        data-testid={`decrease-quantity-${item.productId}`}
                        className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span 
                        className="px-3 py-1 bg-gray-100 rounded-md font-medium"
                        data-testid={`quantity-${item.productId}`}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        data-testid={`increase-quantity-${item.productId}`}
                        className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.productId)}
                      data-testid={`remove-item-${item.productId}`}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold text-gray-900">Toplam:</span>
                <span 
                  className="text-2xl font-bold text-gray-900"
                  data-testid="cart-total"
                >
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={clearCart}
                  className="flex-1 px-6 py-3 border border-red-300 text-red-700 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                >
                  Sepeti Temizle
                </button>
                <button
                  onClick={handleCheckout}
                  data-testid="checkout-button"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ödemeye Geç
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;