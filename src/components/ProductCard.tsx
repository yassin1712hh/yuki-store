import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, Tag, Star, Zap, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useNotification } from '../context/NotificationContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addNotification } = useNotification();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    addNotification({
      type: 'success',
      title: 'Added to Cart!',
      message: `${product.name} has been added to your cart.`,
      duration: 3000
    });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      addNotification({
        type: 'info',
        title: 'Removed from Wishlist',
        message: `${product.name} has been removed from your wishlist.`,
        duration: 3000
      });
    } else {
      addToWishlist(product);
      addNotification({
        type: 'success',
        title: 'Added to Wishlist!',
        message: `${product.name} has been added to your wishlist.`,
        duration: 3000
      });
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  const inWishlist = isInWishlist(product.id);

  return (
    <div className="group relative bg-gradient-to-br from-white to-yuki-lavender/30 rounded-3xl shadow-lg overflow-hidden hover:shadow-yuki-dark/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-border-gray hover:border-yuki-dark/50">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yuki-dark/10 to-yuki-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      
      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-success-green to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 animate-pulse-slow">
          <Tag size={16} />
          <span>{product.discount}% OFF</span>
        </div>
      )}

      {/* Wishlist Button */}
      <button
        onClick={handleWishlistToggle}
        className={`absolute top-4 right-4 z-10 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
          inWishlist 
            ? 'bg-gradient-to-r from-danger-red to-red-600 text-white animate-glow' 
            : 'bg-dark-bg/80 text-text-gray hover:bg-danger-red hover:text-white'
        }`}
      >
        <Heart size={20} className={inWishlist ? 'fill-current' : ''} />
      </button>

      {/* Premium Badge */}
      <div className="absolute top-16 right-4 z-10 bg-gradient-to-r from-yuki-dark to-yuki-purple text-white p-2 rounded-full animate-bounce-gentle">
        <Star size={16} />
      </div>

      {/* Product Image */}
      <div className="relative overflow-hidden h-56 rounded-t-3xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Action Button */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-yuki-dark to-yuki-purple hover:from-yuki-purple hover:to-yuki-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-glow"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 relative z-10">
        {/* Category */}
        <div className="inline-block bg-gradient-to-r from-yuki-dark/20 to-yuki-purple/20 text-yuki-dark px-4 py-2 rounded-full text-xs font-medium mb-4 border border-yuki-dark/30">
          {product.category}
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-yuki-dark transition-colors font-heading">
          {product.name}
        </h3>

        {/* Product Description */}
        <p className="text-black text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Price */}
        <div className="mb-6">
          {product.originalPrice ? (
            <div className="flex items-center space-x-3">
              <span className="text-lg line-through text-gray-500">
                {formatPrice(product.originalPrice)} {product.currency}
              </span>
              <span className="text-xl font-bold text-success-green">
                {formatPrice(product.price)} {product.currency}
              </span>
            </div>
          ) : (
            <span className="text-xl font-bold text-yuki-dark">
              {formatPrice(product.price)} {product.currency}
            </span>
          )}
        </div>

        {/* Action Button */}
        <Link
          to={`/product/${product.id}`}
          className="w-full bg-gradient-to-r from-yuki-lavender/20 to-card-bg hover:from-yuki-dark hover:to-yuki-purple text-black hover:text-white py-4 px-6 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg border border-border-gray hover:border-yuki-dark group/btn"
        >
          <Eye size={18} className="group-hover/btn:animate-bounce-gentle" />
          <span>View Details</span>
          <Zap size={18} className="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;