import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockProducts } from '../data/mockData';
import { Product, FilterState } from '../types';
import ProductList from '../components/ProductList';
import FilterPanel from '../components/FilterPanel';

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    minPrice: 0,
    maxPrice: 0,
    category: '',
    brand: ''
  });

  useEffect(() => {
    // Filter products based on search query
    const filtered = mockProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filtered);
    setFilteredProducts(filtered);
  }, [query]);

  useEffect(() => {
    // Apply filters
    let filtered = products;

    if (filters.minPrice > 0 || filters.maxPrice > 0) {
      filtered = filtered.filter(product => {
        const price = product.price;
        const minOk = filters.minPrice === 0 || price >= filters.minPrice;
        const maxOk = filters.maxPrice === 0 || price <= filters.maxPrice;
        return minOk && maxOk;
      });
    }

    if (filters.brand) {
      filtered = filtered.filter(product => product.brand === filters.brand);
    }

    setFilteredProducts(filtered);
  }, [products, filters]);

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 0,
      category: '',
      brand: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            "{query}" için arama sonuçları
          </h1>
          <p className="text-gray-600 mt-1">
            {filteredProducts.length} ürün bulundu
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Panel */}
          <div className="lg:w-64 flex-shrink-0">
            <FilterPanel
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Product List */}
          <div className="flex-1">
            <ProductList products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;