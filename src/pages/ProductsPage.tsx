import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, Sparkles, TrendingUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'Adopt Me', 'MM2', 'Grow a Garden'];

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Sparkles className="text-yuki-dark animate-bounce-gentle" size={32} />
            <h1 className="text-5xl md:text-6xl font-bold text-black font-heading">
              Our Products
            </h1>
            <Sparkles className="text-yuki-purple animate-bounce-gentle" size={32} />
          </div>
                      <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Discover our exclusive collection of premium Roblox items
            </p>
        </div>

        {/* Filters */}
        <div className="bg-gradient-to-r from-card-bg to-yuki-lavender/20 rounded-3xl shadow-lg p-8 mb-12 border border-border-gray">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Search */}
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yuki-dark group-hover:text-yuki-purple transition-colors" size={24} />
              <input
                type="text"
                placeholder="Search for amazing products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-card-bg border border-border-gray rounded-full focus:ring-2 focus:ring-yuki-dark focus:border-yuki-dark transition-all duration-300 text-black placeholder-gray-400 text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <Filter className="text-yuki-dark" size={24} />
                <span className="text-black font-medium">Categories:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-yuki-dark to-yuki-purple text-white shadow-lg animate-glow'
                        : 'bg-yuki-lavender/20 text-black hover:bg-yuki-dark/20 hover:text-white border border-border-gray'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <TrendingUp className="text-yuki-dark" size={24} />
                <h3 className="text-2xl font-bold text-black font-heading">
                  {filteredProducts.length} Premium Items Found
                </h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-3xl font-bold text-black mb-4 font-heading">No products found</h3>
            <p className="text-black text-lg">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-yuki-dark via-yuki-purple to-yuki-dark rounded-3xl p-12 text-white text-center shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold mb-3 font-heading">{products.length}+</div>
              <div className="text-blue-100 text-lg">Premium Items</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold mb-3 font-heading">1000+</div>
              <div className="text-blue-100 text-lg">Happy Customers</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold mb-3 font-heading">24/7</div>
              <div className="text-blue-100 text-lg">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;