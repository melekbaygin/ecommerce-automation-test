import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import { Product, Seller } from '../types';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSeller, setSelectedSeller] = useState<Seller | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const foundProduct = mockProducts.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      // Satıcıları puana göre artan sırala (en düşük puanlı en başta)
      const sortedSellers = [...foundProduct.sellers].sort((a, b) => a.rating - b.rating);
      setSelectedSeller(sortedSellers[0]); // En düşük puanlı satıcıyı seç
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    if (product && selectedSeller) {
      setIsLoading(true);
      setTimeout(() => {
        addToCart(product, selectedSeller);
        setIsLoading(false);
      }, 500);
    }
  };

  // Favorilere ekle fonksiyonu
  const handleAddToFavorites = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setFavorite(true);
    // Burada gerçek favorilere ekleme işlemi yapılabilir (API çağrısı vs.)
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Ürün bulunamadı</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700"
          >
            Ana sayfaya dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  data-testid="product-title"
                >
                  {product.name}
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-lg font-medium">{product.rating}</span>
                  </div>
                  <span className="text-gray-600">({product.reviewCount} değerlendirme)</span>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-900">
                  {formatPrice(selectedSeller?.price || product.price)}
                </div>
                {product.originalPrice && (
                  <div className="text-lg text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </div>
                )}
              </div>

              {/* Seller Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Satıcı Seçimi</h3>
                <div className="space-y-3">
                  {product.sellers.map((seller) => (
                    <div
                      key={seller.id}
                      data-testid={`seller-option-${seller.id}`}
                      className={`satici p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedSeller?.id === seller.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedSeller(seller)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-gray-900">{seller.name}</div>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center satici-puan">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="ml-1 text-sm text-gray-600">{seller.rating}</span>
                            </div>
                            <span className="text-gray-400">•</span>
                            <span className="text-sm text-gray-600">
                              {seller.reviewCount} değerlendirme
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">{seller.shipping}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">
                            {formatPrice(seller.price)}
                          </div>
                          <div className="text-sm text-green-600">
                            {seller.inStock ? 'Stokta var' : 'Stokta yok'}
                          </div>
                          <button
                            className="sepete-ekle-btn mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!seller.inStock}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!isAuthenticated) { navigate('/login'); return; }
                              setIsLoading(true);
                              setTimeout(() => {
                                addToCart(product, seller);
                                setIsLoading(false);
                              }, 500);
                            }}
                          >
                            Sepete Ekle
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={isLoading || !selectedSeller?.inStock}
                  id="add-to-cart-button"
                  data-testid="add-to-cart-button"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>
                    {isLoading ? 'Sepete Ekleniyor...' : 'Sepete Ekle'}
                  </span>
                </button>

                <div className="flex space-x-4">
                  <button 
                    className={`flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors ${favorite ? 'bg-yellow-100 border-yellow-400 text-yellow-700' : ''}`}
                    id="add-to-favorites-btn"
                    onClick={handleAddToFavorites}
                    data-testid="add-to-favorites-btn"
                    disabled={favorite}
                  >
                    <Heart className="h-5 w-5" />
                    <span>{favorite ? 'Favorilere Eklendi' : 'Favorilere Ekle'}</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="h-5 w-5" />
                    <span>Paylaş</span>
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Truck className="h-4 w-4" />
                  <span>Ücretsiz kargo</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4" />
                  <span>2 yıl garantili</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="border-t border-gray-200 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ürün Açıklaması</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Özellikler</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;