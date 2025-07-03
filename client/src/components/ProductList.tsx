import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  title?: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  return (
    <div className="w-full">
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      )}
      
      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Hiç ürün bulunamadı.</p>
        </div>
      ) : (
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          data-testid="product-list"
        >
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
              data-testid={`product-card-${product.id}`}
              id={`product-card-${product.id}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;