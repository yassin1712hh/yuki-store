import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  if (cartItems.length === 0) {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-3xl font-bold text-black mb-4">Your Cart is Empty</h1>
          <p className="text-black mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yuki-dark to-yuki-purple text-white px-8 py-4 rounded-lg hover:from-yuki-purple hover:to-yuki-dark transition-all duration-300 transform hover:scale-105"
          >
            <ShoppingBag size={20} />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-black font-heading">
            Shopping Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-danger-red hover:text-red-700 transition-colors flex items-center space-x-2"
          >
            <Trash2 size={20} />
            <span>Clear Cart</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-gradient-to-br from-white to-yuki-lavender/20 rounded-2xl shadow-lg p-6 hover:shadow-yuki-dark/20 transition-all duration-300 border border-border-gray">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="inline-block bg-gradient-to-r from-yuki-dark/20 to-yuki-purple/20 text-yuki-dark px-3 py-1 rounded-full text-xs font-medium mb-2 border border-yuki-dark/30">
                        {item.category}
                      </div>
                      <h3 className="text-xl font-bold text-black">{item.name}</h3>
                      <p className="text-black text-sm">{item.description}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      {/* Price */}
                      <div className="text-2xl font-bold text-yuki-dark bg-white px-4 py-2 rounded-lg border border-yuki-dark/30 shadow-sm">
                        {formatPrice(item.price)} {item.currency}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3 bg-white rounded-lg p-1 border border-yuki-dark shadow-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-yuki-dark/10 rounded-lg transition-colors text-yuki-dark hover:text-yuki-purple"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center font-bold text-yuki-dark text-lg">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-yuki-dark/10 rounded-lg transition-colors text-yuki-dark hover:text-yuki-purple"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 p-2 transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right">
                      <span className="text-sm text-black font-medium">Subtotal: </span>
                      <span className="font-bold text-yuki-dark text-lg bg-white px-3 py-1 rounded-lg border border-yuki-dark/30 shadow-sm">
                        {formatPrice(item.price * item.quantity)} {item.currency}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-card-bg to-yuki-lavender/20 rounded-2xl shadow-lg p-6 sticky top-8 border border-border-gray">
              <h2 className="text-2xl font-bold text-black mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-black">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-medium text-text-gray">
                      {formatPrice(item.price * item.quantity)} {item.currency}
                    </span>
                  </div>
                ))}
              </div>

                                  <div className="border-t border-border-gray pt-4 mb-6">
                      <div className="flex justify-between text-2xl font-bold text-black bg-white p-4 rounded-xl border border-yuki-dark/30 shadow-sm">
                        <span>Total</span>
                        <span>{formatPrice(getTotalPrice())} IQD</span>
                      </div>
                    </div>

              <Link
                to="/checkout"
                className="w-full bg-gradient-to-r from-yuki-dark to-yuki-purple hover:from-yuki-purple hover:to-yuki-dark text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/products"
                className="w-full mt-4 bg-yuki-lavender/20 hover:bg-yuki-dark/20 text-text-gray hover:text-yuki-dark py-3 px-6 rounded-lg font-medium transition-all duration-300 text-center block border border-border-gray"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;