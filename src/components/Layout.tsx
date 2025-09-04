import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, MessageCircle, Home, Package, Heart, HeadphonesIcon, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import CartSidebar from './CartSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { getCartCount, getTotalPrice } = useCart();
  const { getWishlistCount } = useWishlist();
  const location = useLocation();
  const cartCount = getCartCount();
  const wishlistCount = getWishlistCount();
  const totalPrice = getTotalPrice();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-text-gray">
      {/* Discord Button - Fixed Position with Enhanced Glow */}
      <a
        href="https://wa.me/9647737006018"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-40 bg-gradient-to-r from-success-green to-green-600 hover:from-green-600 hover:to-success-green text-white p-3 lg:p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 animate-glow group"
      >
        <Phone size={24} className="lg:w-7 lg:h-7 group-hover:animate-bounce-gentle" />
      </a>

      {/* Header */}
              <header className="bg-dark-bg/95 backdrop-blur-xl shadow-lg border-b border-border-gray sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 lg:space-x-4 group">
              <div className="relative">
                <img 
                  src="/514001719_9868755126556062_8205783381618158987_n-1.png" 
                  alt="Yuki Store Logo" 
                  className="h-10 w-10 lg:h-14 lg:w-14 object-contain rounded-full border-2 border-primary-blue group-hover:border-accent-blue transition-all duration-500 group-hover:rotate-12"
                />
                <div className="absolute inset-0 rounded-full bg-yuki-dark/20 group-hover:bg-yuki-dark/40 transition-all duration-500 animate-pulse-slow"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-2xl font-bold text-black font-heading group-hover:text-yuki-dark transition-colors duration-300">
                  Yuki Store
                </h1>
                <p className="text-xs lg:text-sm text-yuki-dark font-medium group-hover:text-yuki-purple transition-colors duration-300">
                  Premium Roblox Items
                </p>
              </div>
            </Link>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              <Link
                to="/"
                className={`flex items-center space-x-2 px-4 xl:px-6 py-3 rounded-full transition-all duration-500 font-medium transform hover:scale-105 text-sm xl:text-base ${
                  location.pathname === '/'
                    ? 'bg-gradient-to-r from-yuki-dark to-yuki-purple text-white shadow-lg animate-glow'
                    : 'text-text-gray hover:bg-yuki-dark/20 hover:text-white hover:shadow-lg'
                }`}
              >
                <Home size={18} className="transition-transform duration-300 hover:rotate-12" />
                <span>Home</span>
              </Link>
              
              <Link
                to="/products"
                className={`flex items-center space-x-2 px-4 xl:px-6 py-3 rounded-full transition-all duration-500 font-medium transform hover:scale-105 text-sm xl:text-base ${
                  location.pathname === '/products'
                    ? 'bg-gradient-to-r from-yuki-dark to-yuki-purple text-white shadow-lg animate-glow'
                    : 'text-text-gray hover:bg-yuki-dark/20 hover:text-white hover:shadow-lg'
                }`}
              >
                <Package size={18} className="transition-transform duration-300 hover:rotate-12" />
                <span>Products</span>
              </Link>
              
              <Link
                to="/support"
                className={`flex items-center space-x-2 px-4 xl:px-6 py-3 rounded-full transition-all duration-500 font-medium transform hover:scale-105 text-sm xl:text-base ${
                  location.pathname === '/support'
                    ? 'bg-gradient-to-r from-yuki-dark to-yuki-purple text-white shadow-lg animate-glow'
                    : 'text-text-gray hover:bg-yuki-dark/20 hover:text-white hover:shadow-lg'
                }`}
              >
                <HeadphonesIcon size={18} className="transition-transform duration-300 hover:rotate-12" />
                <span>Support</span>
              </Link>

              {/* Wishlist Button */}
              <div className="flex items-center space-x-2 px-4 xl:px-6 py-3 rounded-full transition-all duration-500 font-medium text-black hover:bg-yuki-dark/20 hover:text-white relative transform hover:scale-105 cursor-pointer group text-sm xl:text-base">
                <Heart size={18} className="transition-all duration-300 group-hover:fill-current group-hover:text-danger-red group-hover:scale-110" />
                <span className="hidden xl:inline">Wishlist</span>
                {wishlistCount > 0 && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-danger-red to-red-600 text-white text-xs rounded-full h-5 w-5 lg:h-6 lg:w-6 flex items-center justify-center font-bold animate-pulse-slow">
                    {wishlistCount}
                  </div>
                )}
              </div>

              {/* Cart with Enhanced Design */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center space-x-2 xl:space-x-3 px-4 xl:px-6 py-3 rounded-full transition-all duration-500 font-medium text-black hover:bg-yuki-dark/20 hover:text-white relative bg-yuki-lavender/20 border border-border-gray hover:border-yuki-dark transform hover:scale-105 group text-sm xl:text-base"
              >
                <div className="flex items-center space-x-2">
                  <ShoppingCart size={18} className="group-hover:animate-bounce-gentle" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs xl:text-sm">Cart</span>
                    {totalPrice > 0 && (
                      <span className="text-xs text-primary-blue font-bold animate-pulse hidden xl:block">
                        {formatPrice(totalPrice)} IQD
                      </span>
                    )}
                  </div>
                </div>
                {cartCount > 0 && (
                  <div className="bg-gradient-to-r from-danger-red to-red-600 text-white text-xs rounded-full h-5 w-5 lg:h-6 lg:w-6 flex items-center justify-center font-bold animate-pulse-slow">
                    {cartCount}
                  </div>
                )}
              </button>
            </nav>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center space-x-2 sm:space-x-4">
              <div className="relative p-2 sm:p-3 text-primary-blue hover:text-accent-blue transition-colors rounded-full hover:bg-primary-blue/20 cursor-pointer">
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-danger-red to-red-600 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold">
                    {wishlistCount}
                  </div>
                )}
              </div>
              
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 sm:p-3 text-primary-blue hover:text-accent-blue transition-colors rounded-full hover:bg-primary-blue/20"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-danger-red to-red-600 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden border-t border-border-gray">
            <div className="flex justify-around py-2">
              <Link
                to="/"
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-300 ${
                  location.pathname === '/'
                    ? 'text-primary-blue bg-primary-blue/10'
                    : 'text-black hover:text-primary-blue'
                }`}
              >
                <Home size={18} />
                <span className="text-xs mt-1">Home</span>
              </Link>
              
              <Link
                to="/products"
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-300 ${
                  location.pathname === '/products'
                    ? 'text-primary-blue bg-primary-blue/10'
                    : 'text-black hover:text-primary-blue'
                }`}
              >
                <Package size={18} />
                <span className="text-xs mt-1">Products</span>
              </Link>
              
              <Link
                to="/support"
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-300 ${
                  location.pathname === '/support'
                    ? 'text-primary-blue bg-primary-blue/10'
                    : 'text-black hover:text-primary-blue'
                }`}
              >
                <HeadphonesIcon size={18} />
                <span className="text-xs mt-1">Support</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Enhanced Footer */}
              <footer className="bg-gradient-to-r from-dark-bg via-card-bg to-dark-bg text-text-gray py-12 lg:py-16 mt-20 border-t border-border-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6 lg:mb-8 group">
              <img 
                src="/514001719_9868755126556062_8205783381618158987_n-1.png" 
                alt="Yuki Store Logo" 
                className="h-10 w-10 lg:h-12 lg:w-12 object-contain rounded-full border-2 border-primary-blue group-hover:border-accent-blue transition-all duration-500 group-hover:rotate-12 animate-float"
              />
              <h3 className="text-2xl lg:text-3xl font-bold font-heading group-hover:text-primary-blue transition-colors duration-300">Yuki Store</h3>
            </div>
                            <p className="text-black mb-6 lg:mb-8 text-lg lg:text-xl leading-relaxed">
                  Your trusted source for premium Roblox items
                </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-12 mb-6 lg:mb-8">
              <a
                href="https://wa.me/9647737006018"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yuki-dark hover:text-yuki-purple transition-all duration-300 font-semibold text-base lg:text-lg transform hover:scale-110 hover:shadow-lg"
              >
                Contact us on WhatsApp
              </a>
              <Link
                to="/support"
                className="text-yuki-dark hover:text-yuki-purple transition-all duration-300 font-semibold text-base lg:text-lg transform hover:scale-110 hover:shadow-lg"
              >
                Support Center
              </Link>
            </div>
            <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border-gray">
              <p className="text-sm text-gray-400">
                © 2024 Yuki Store. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
