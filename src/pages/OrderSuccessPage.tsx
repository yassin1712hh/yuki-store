import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Home, Package } from 'lucide-react';

const OrderSuccessPage: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-4xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <CheckCircle className="mx-auto text-success-green animate-bounce-gentle" size={80} />
        </div>

        {/* Success Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-heading">
          Order Submitted Successfully!
        </h1>
        
        <p className="text-xl text-black mb-8 max-w-2xl mx-auto leading-relaxed">
          Thank you for your purchase! Your order has been received and is being processed. 
          We will contact you on WhatsApp to deliver your items.
        </p>

        {/* WhatsApp CTA */}
        <div className="bg-gradient-to-r from-success-green to-green-600 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center justify-center mb-4">
            <Phone size={48} className="animate-bounce-gentle" />
          </div>
          <h2 className="text-2xl font-bold mb-4">WhatsApp Contact</h2>
          <p className="text-green-100 mb-6">
            Our team will contact you on WhatsApp shortly to deliver your items. 
            Make sure your WhatsApp is active and ready to receive messages!
          </p>
          <a
            href="https://wa.me/9647737006018"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-success-green px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            <Phone size={24} />
            <span>Contact WhatsApp</span>
          </a>
        </div>

        {/* What's Next */}
        <div className="bg-gradient-to-br from-card-bg to-dark-bg rounded-2xl shadow-lg p-8 mb-8 border border-border-gray">
          <h3 className="text-2xl font-bold text-black mb-6">What happens next?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-blue text-white rounded-full p-3 flex-shrink-0">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Order Verification</h4>
                <p className="text-black text-sm">
                  Our team will verify your payment and order details within 30 minutes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-secondary-blue text-white rounded-full p-3 flex-shrink-0">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">WhatsApp Contact</h4>
                <p className="text-black text-sm">
                  We'll reach out to you on WhatsApp to arrange the item delivery.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-success-green text-white rounded-full p-3 flex-shrink-0">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Item Delivery</h4>
                <p className="text-black text-sm">
                  Receive your premium Roblox items directly in-game!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-blue to-secondary-blue text-white px-8 py-4 rounded-full hover:from-secondary-blue hover:to-primary-blue transition-all duration-300 transform hover:scale-105"
          >
            <Home size={20} />
            <span>Back to Home</span>
          </Link>
          
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-success-green to-green-600 text-white px-8 py-4 rounded-full hover:from-green-600 hover:to-success-green transition-all duration-300 transform hover:scale-105"
          >
            <Package size={20} />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* Support Info */}
        <div className="mt-12 p-6 bg-gradient-to-r from-card-bg to-dark-bg rounded-lg border border-border-gray">
          <h4 className="font-semibold text-white mb-2">Need Help?</h4>
          <p className="text-text-gray text-sm">
            If you have any questions or concerns about your order, please don't hesitate to contact us on WhatsApp. 
            Our support team is available 24/7 to assist you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
