import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-96 bg-gradient-to-b from-card-bg to-dark-bg border-l border-border-gray shadow-2xl z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-gray">
          <h2 className="text-2xl font-bold text-white font-heading">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary-blue/20 rounded-full transition-colors"
          >
            <X className="text-white" size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="mx-auto text-text-gray mb-4" size={48} />
              <p className="text-text-gray">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-dark-bg rounded-2xl p-4 border border-border-gray">
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-medium text-sm mb-1">{item.name}</h3>
                      <p className="text-primary-blue text-sm font-semibold">
                        {formatPrice(item.price)} {item.currency}
                      </p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-2 bg-card-bg rounded-full p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-primary-blue/20 rounded-full transition-colors"
                          >
                            <Minus className="text-white" size={14} />
                          </button>
                          <span className="text-white text-sm w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-primary-blue/20 rounded-full transition-colors"
                          >
                            <Plus className="text-white" size={14} />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 hover:bg-danger-red/20 rounded-full transition-colors"
                        >
                          <Trash2 className="text-danger-red" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-border-gray">
            <div className="flex justify-between items-center mb-4">
              <span className="text-text-gray">Total:</span>
              <span className="text-2xl font-bold text-white">
                {formatPrice(getTotalPrice())} IQD
              </span>
            </div>
            
            <Link
              to="/checkout"
              onClick={onClose}
              className="w-full bg-gradient-to-r from-primary-blue to-secondary-blue hover:from-secondary-blue hover:to-primary-blue text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 text-center block"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;