import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Zap, Heart, Sparkles, Crown, Gift } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-yuki-lavender/10 via-dark-bg to-yuki-purple/10" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-yuki-lavender/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yuki-purple/20 rounded-full blur-3xl animate-float" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-slide-up">
            <div className="relative mb-12">
              <img 
                src="/514001719_9868755126556062_8205783381618158987_n-1.png" 
                alt="Yuki Store Logo" 
                className="h-32 w-32 mx-auto rounded-full border-4 border-primary-blue animate-float shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue/30 to-secondary-blue/30 animate-glow"></div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 font-heading">
              Welcome to
              <span className="block bg-gradient-to-r from-primary-blue to-accent-blue bg-clip-text text-transparent">
                Yuki Store
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-black mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover the most exclusive and premium Roblox items. 
              From legendary pets to rare weapons, we have everything you need to enhance your gaming experience.
            </p>
            
            <Link
              to="/products"
              className="inline-flex items-center space-x-4 bg-gradient-to-r from-yuki-dark to-yuki-purple hover:from-yuki-purple hover:to-yuki-dark text-white px-12 py-6 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-glow group"
            >
              <Sparkles size={28} className="group-hover:animate-bounce-gentle" />
              <span>Explore Our Products</span>
              <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
              <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yuki-lavender/5 via-dark-bg to-card-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6 font-heading">
              Why Choose Yuki Store?
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              We provide the best service and most exclusive items for Roblox enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-yuki-dark to-yuki-purple p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:shadow-2xl group-hover:animate-glow">
                <Star className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-gray mb-4 font-heading">Premium Quality</h3>
              <p className="text-text-secondary leading-relaxed">Only the rarest and most valuable items in our collection</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-success-green to-green-600 p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:shadow-2xl group-hover:animate-glow">
                <Shield className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-gray mb-4 font-heading">Secure Trading</h3>
              <p className="text-text-secondary leading-relaxed">Safe and reliable transactions with verified payment methods</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-yuki-dark to-yuki-purple p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-105 transition-all duration-500">
                <Zap className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-gray mb-4 font-heading">Fast Delivery</h3>
              <p className="text-text-secondary leading-relaxed">Quick processing and instant delivery through our Discord server</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-danger-red to-red-600 p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:shadow-2xl group-hover:animate-glow">
                <Heart className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-gray mb-4 font-heading">Customer Care</h3>
              <p className="text-text-secondary leading-relaxed">Dedicated support team ready to help you 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
              <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card-bg via-yuki-purple/5 to-card-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6 font-heading">
              Our Categories
            </h2>
            <p className="text-xl text-black">
              Explore our diverse collection of premium Roblox items
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-card-bg to-dark-bg rounded-3xl p-10 text-center shadow-lg hover:shadow-yuki-dark/20 transition-all duration-500 transform hover:-translate-y-4 border border-border-gray hover:border-yuki-dark/50 group">
              <div className="bg-gradient-to-br from-yuki-dark to-yuki-purple p-6 rounded-full w-20 h-20 mx-auto mb-8 group-hover:animate-glow">
                <Crown className="text-white text-3xl" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6 font-heading">Adopt Me</h3>
              <p className="text-black mb-8 leading-relaxed">
                Legendary pets, neon animals, and exclusive items to build your dream collection
              </p>
              <Link
                to="/products?category=Adopt Me"
                className="text-yuki-dark hover:text-yuki-purple font-semibold inline-flex items-center space-x-2 group/link"
              >
                <span>View Items</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-card-bg to-dark-bg rounded-3xl p-10 text-center shadow-lg hover:shadow-yuki-dark/20 transition-all duration-500 transform hover:-translate-y-4 border border-border-gray hover:border-yuki-dark/50 group">
              <div className="bg-gradient-to-br from-yuki-dark to-yuki-purple p-6 rounded-full w-20 h-20 mx-auto mb-8 group-hover:animate-glow">
                <Zap className="text-white text-3xl" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6 font-heading">MM2</h3>
              <p className="text-black mb-8 leading-relaxed">
                Rare knives, chroma weapons, and legendary items for Murder Mystery 2
              </p>
              <Link
                to="/products?category=MM2"
                className="text-yuki-dark hover:text-yuki-purple font-semibold inline-flex items-center space-x-2 group/link"
              >
                <span>View Items</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-card-bg to-dark-bg rounded-3xl p-10 text-center shadow-lg hover:shadow-yuki-dark/20 transition-all duration-500 transform hover:-translate-y-4 border border-border-gray hover:border-yuki-dark/50 group">
              <div className="bg-gradient-to-br from-yuki-dark to-yuki-purple p-6 rounded-full w-20 h-20 mx-auto mb-8 group-hover:animate-glow">
                <Gift className="text-white text-3xl" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6 font-heading">Grow a Garden</h3>
              <div className="text-black mb-8 leading-relaxed">
                Premium seeds, tools, and decorations to create the perfect garden
              </div>
              <Link
                to="/products?category=Grow a Garden"
                className="text-yuki-dark hover:text-yuki-purple font-semibold inline-flex items-center space-x-2 group/link"
              >
                <span>View Items</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yuki-dark via-yuki-purple to-yuki-dark">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-8 font-heading">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Join thousands of satisfied customers and get your dream Roblox items today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/products"
              className="bg-white text-yuki-dark px-10 py-5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Browse Products
            </Link>
            <a
              href="https://wa.me/9647737006018"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-10 py-5 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/20"
            >
              Contact WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
