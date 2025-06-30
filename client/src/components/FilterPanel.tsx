import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { FilterState } from '../types';

interface FilterPanelProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFiltersChange, onClearFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePriceChange = (minPrice: number, maxPrice: number) => {
    onFiltersChange({ ...filters, minPrice, maxPrice });
  };

  const setPriceRange = (min: number, max: number) => {
    handlePriceChange(min, max);
  };

  const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Huawei'];

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Filter className="h-5 w-5" />
          <span>Filtreler</span>
        </button>
      </div>

      {/* Desktop Filter Panel */}
      <div className="hidden lg:block w-64 bg-white rounded-lg shadow-lg p-6">
        <FilterContent
          filters={filters}
          onFiltersChange={onFiltersChange}
          onClearFilters={onClearFilters}
          setPriceRange={setPriceRange}
          brands={brands}
        />
      </div>

      {/* Mobile Filter Modal */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
          <div className="bg-white w-full max-h-[80vh] overflow-y-auto rounded-t-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Filtreler</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <FilterContent
                filters={filters}
                onFiltersChange={onFiltersChange}
                onClearFilters={onClearFilters}
                setPriceRange={setPriceRange}
                brands={brands}
              />
              <button
                onClick={() => setIsOpen(false)}
                className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Filtreleri Uygula
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

interface FilterContentProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  setPriceRange: (min: number, max: number) => void;
  brands: string[];
}

const FilterContent: React.FC<FilterContentProps> = ({
  filters,
  onFiltersChange,
  onClearFilters,
  setPriceRange,
  brands
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Filtreler</h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Temizle
        </button>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-3">Fiyat Aralığı</h4>
        <div className="space-y-2">
          <div className="flex space-x-2">
            <input
              type="number"
              id="min-price"
              data-testid="min-price-input"
              placeholder="Min"
              value={filters.minPrice || ''}
              onChange={(e) => onFiltersChange({ ...filters, minPrice: Number(e.target.value) || 0 })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              id="max-price"
              data-testid="max-price-input"
              placeholder="Max"
              value={filters.maxPrice || ''}
              onChange={(e) => onFiltersChange({ ...filters, maxPrice: Number(e.target.value) || 0 })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Quick Price Ranges */}
          <div className="space-y-2">
            <button
              onClick={() => setPriceRange(0, 10000)}
              data-testid="price-range-0-10000"
              className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              0 - 10.000 TL
            </button>
            <button
              onClick={() => setPriceRange(10000, 15000)}
              data-testid="price-range-10000-15000"
              className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              10.000 - 15.000 TL
            </button>
            <button
              onClick={() => setPriceRange(15000, 20000)}
              data-testid="price-range-15000-20000"
              className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              15.000 - 20.000 TL
            </button>
            <button
              onClick={() => setPriceRange(20000, 30000)}
              data-testid="price-range-20000-30000"
              className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              20.000 - 30.000 TL
            </button>
          </div>
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-3">Marka</h4>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center">
              <input
                type="checkbox"
                data-testid={`brand-filter-${brand.toLowerCase()}`}
                checked={filters.brand === brand}
                onChange={(e) => onFiltersChange({ 
                  ...filters, 
                  brand: e.target.checked ? brand : '' 
                })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;