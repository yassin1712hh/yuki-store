import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Shield, Zap, Tag, AlertTriangle, CheckCircle, CreditCard } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { addNotification } = useNotification();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-black mb-4">Product Not Found</h1>
          <p className="text-black mb-8">The product you're looking for doesn't exist.</p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-blue to-secondary-blue text-white px-6 py-3 rounded-full hover:from-secondary-blue hover:to-primary-blue transition-all duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    addNotification({
      type: 'success',
      title: 'Added to Cart!',
      message: `${product.name} has been added to your cart.`,
      duration: 3000
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-primary-blue hover:text-accent-blue mb-8 transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            {product.discount && (
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-success-green to-green-600 text-white px-4 py-2 rounded-full font-bold flex items-center space-x-2 animate-pulse-slow">
                <Tag size={16} />
                <span>{product.discount}% OFF</span>
              </div>
            )}
            <div className="bg-gradient-to-br from-card-bg to-dark-bg rounded-3xl shadow-2xl overflow-hidden border border-border-gray">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Category Badge */}
            <div className="inline-block bg-gradient-to-r from-primary-blue/20 to-secondary-blue/20 text-primary-blue px-6 py-3 rounded-full font-medium text-lg border border-primary-blue/30">
              {product.category}
            </div>

            {/* Product Name */}
            <h1 className="text-5xl font-bold text-black font-heading leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="space-y-3">
              {product.originalPrice ? (
                <div className="flex items-center space-x-4">
                  <span className="text-2xl line-through text-gray-500">
                    {formatPrice(product.originalPrice)} {product.currency}
                  </span>
                  <span className="text-4xl font-bold text-success-green">
                    {formatPrice(product.price)} {product.currency}
                  </span>
                </div>
              ) : (
                <span className="text-4xl font-bold text-primary-blue">
                  {formatPrice(product.price)} {product.currency}
                </span>
              )}
              {product.discount && (
                <p className="text-success-green font-semibold text-lg flex items-center space-x-2">
                  <Tag size={20} />
                  <span>You save {formatPrice(product.originalPrice! - product.price)} {product.currency}!</span>
                </p>
              )}
            </div>

            {/* Description */}
            <div className="bg-gradient-to-r from-card-bg to-dark-bg rounded-2xl p-6 border border-border-gray">
              <p className="text-black leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-primary-blue/10 to-secondary-blue/10 rounded-2xl border border-primary-blue/30 group hover:scale-105 transition-all duration-300">
                <Star className="text-primary-blue group-hover:animate-bounce-gentle" size={24} />
                <div>
                  <div className="font-semibold text-black">Premium Quality</div>
                  <div className="text-sm text-black">Verified authentic</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-success-green/10 to-green-600/10 rounded-2xl border border-success-green/30 group hover:scale-105 transition-all duration-300">
                <Shield className="text-success-green group-hover:animate-bounce-gentle" size={24} />
                <div>
                  <div className="font-semibold text-black">Secure Trade</div>
                  <div className="text-sm text-black">Safe transaction</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-secondary-blue/10 to-primary-blue/10 rounded-2xl border border-secondary-blue/30 group hover:scale-105 transition-all duration-300">
                <Zap className="text-secondary-blue group-hover:animate-bounce-gentle" size={24} />
                <div>
                  <div className="font-semibold text-black">Fast Delivery</div>
                  <div className="text-sm text-black">Instant transfer</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={`/order/${product.id}`}
                className="flex-1 bg-gradient-to-r from-primary-blue to-secondary-blue hover:from-secondary-blue hover:to-primary-blue text-white py-5 px-8 rounded-full font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-glow flex items-center justify-center space-x-3"
              >
                <CreditCard size={24} />
                <span>Order Now</span>
              </Link>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-dark-bg to-card-bg hover:from-success-green hover:to-green-600 text-white py-5 px-8 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 border border-border-gray hover:border-success-green"
              >
                <ShoppingCart size={24} />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Important Information - Enhanced */}
            <div className="bg-gradient-to-br from-card-bg via-dark-bg to-card-bg rounded-3xl p-8 border-2 border-primary-blue/30 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-primary-blue to-secondary-blue p-3 rounded-full">
                  <AlertTriangle className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-black text-2xl font-heading">Important Information</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-dark-bg rounded-2xl border border-border-gray hover:border-primary-blue/50 transition-all duration-300">
                  <CheckCircle className="text-success-green mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="text-black font-semibold mb-1">WhatsApp Delivery</div>
                    <div className="text-black text-sm">All items are delivered through WhatsApp contact for security and instant support</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-dark-bg rounded-2xl border border-border-gray hover:border-primary-blue/50 transition-all duration-300">
                  <CheckCircle className="text-primary-blue mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="text-black font-semibold mb-1">Payment Verification</div>
                    <div className="text-black text-sm">Payment verification required before delivery to ensure transaction security</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-dark-bg rounded-2xl border border-border-gray hover:border-primary-blue/50 transition-all duration-300">
                  <CheckCircle className="text-secondary-blue mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="text-black font-semibold mb-1">24/7 Support</div>
                    <div className="text-black text-sm">Contact us on WhatsApp for instant support and real-time updates on your order</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-dark-bg rounded-2xl border border-border-gray hover:border-primary-blue/50 transition-all duration-300">
                  <CheckCircle className="text-success-green mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="text-white font-semibold mb-1">Secure Transactions</div>
                    <div className="text-text-gray text-sm">All transactions are secure, monitored, and protected by our verification system</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-primary-blue/20 to-secondary-blue/20 rounded-2xl border border-primary-blue/50">
                <div className="text-center">
                  <div className="text-white font-bold mb-2 flex items-center justify-center space-x-2">
                    <Star className="text-primary-blue" size={20} />
                    <span>Ready to get your items?</span>
                  </div>
                  <a
                    href="https://wa.me/9647737006018"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-success-green to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-success-green transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Contact WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
