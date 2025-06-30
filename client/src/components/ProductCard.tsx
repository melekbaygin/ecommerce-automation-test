import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
      data-testid={`product-card-${product.id}`}
      data-product-id={product.id}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discountPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
              %{discountPercentage} İndirim
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 
            className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors"
            data-testid={`product-name-${product.id}`}
          >
            {product.name}
          </h3>

          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
            </div>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-sm text-gray-600">{product.reviewCount} değerlendirme</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span 
                className="text-2xl font-bold text-gray-900"
                data-testid={`product-price-${product.id}`}
              >
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{product.sellers.length} satıcı</span>
              <ShoppingCart className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;