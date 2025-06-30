import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Star, TrendingUp } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import ProductList from '../components/ProductList';

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState(mockProducts.slice(0, 4));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              En İyi Cep Telefonları
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Test için hazırlanmış güvenilir e-ticaret deneyimi
            </p>
            <Link
              to="/search?q=cep%20telefonu"
              id="hero-search-button"
              data-testid="hero-search-button"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Smartphone className="h-5 w-5 mr-2" />
              Cep Telefonlarını İncele
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Öne Çıkan Ürünler</h2>
            <p className="text-lg text-gray-600">En popüler cep telefonları özel fiyatlarla</p>
          </div>
          
          <ProductList products={featuredProducts} />
          
          <div className="text-center mt-8">
            <Link
              to="/search?q=cep%20telefonu"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Tüm Ürünleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Güvenilir Satıcılar</h3>
              <p className="text-gray-600">Tüm satıcılarımız değerlendirme sistemi ile kontrol edilir</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">En İyi Fiyatlar</h3>
              <p className="text-gray-600">Rekabetçi fiyatlar ve özel indirimler</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Geniş Ürün Yelpazesi</h3>
              <p className="text-gray-600">En yeni modeller ve popüler markalar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;