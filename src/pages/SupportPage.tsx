import React from 'react';
import { Phone, AlertTriangle, Shield, Clock, Users, CheckCircle, XCircle, Info, Star, Zap } from 'lucide-react';

const SupportPage: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Header with Enhanced Animation */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Shield className="text-primary-blue animate-bounce-gentle" size={40} />
            <h1 className="text-6xl md:text-7xl font-bold text-black font-heading animate-slide-up">
              Support Center
            </h1>
            <Shield className="text-secondary-blue animate-bounce-gentle" size={40} />
          </div>
                      <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Get help with your orders, account issues, and learn about our policies
            </p>
        </div>

        {/* WhatsApp Support with Enhanced Design */}
        <div className="bg-gradient-to-br from-success-green via-green-600 to-success-green rounded-3xl p-10 mb-16 text-white shadow-2xl transform hover:scale-105 transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="bg-white/20 p-6 rounded-full w-20 h-20 mx-auto mb-8 animate-float">
              <Phone size={40} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6 font-heading">Contact us on WhatsApp</h2>
            <p className="text-green-100 mb-8 text-xl leading-relaxed">
              Get instant support, track your orders, and connect with our community!
            </p>
            <a
              href="https://wa.me/9647737006018"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 bg-white text-success-green px-10 py-5 rounded-full font-bold hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 text-xl shadow-2xl animate-glow"
            >
              <Phone size={28} />
              <span>Contact WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Important Instructions with Enhanced Cards */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Order Instructions */}
          <div className="bg-gradient-to-br from-card-bg to-dark-bg rounded-3xl p-8 border border-border-gray shadow-2xl transform hover:scale-105 transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gradient-to-r from-primary-blue to-secondary-blue p-4 rounded-full animate-glow">
                <Info className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-black font-heading">Order Instructions</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-dark-bg rounded-2xl p-6 border border-border-gray hover:border-success-green/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-success-green mt-1 flex-shrink-0 animate-bounce-gentle" size={24} />
                  <div>
                    <div className="text-black font-bold mb-2 text-lg">Correct WhatsApp Number</div>
                    <div className="text-black leading-relaxed">Make sure your WhatsApp number is exactly correct and active. Example: <code className="bg-primary-blue/30 px-3 py-1 rounded-lg text-primary-blue font-mono">07XXXXXXXXX</code></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-bg rounded-2xl p-6 border border-border-gray hover:border-primary-blue/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-primary-blue mt-1 flex-shrink-0 animate-bounce-gentle" size={24} />
                  <div>
                    <div className="text-black font-bold mb-2 text-lg">WhatsApp Contact</div>
                    <div className="text-black leading-relaxed">We will contact you on WhatsApp to deliver your items. Make sure your WhatsApp is active and ready.</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-bg rounded-2xl p-6 border border-border-gray hover:border-secondary-blue/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-secondary-blue mt-1 flex-shrink-0 animate-bounce-gentle" size={24} />
                  <div>
                    <div className="text-black font-bold mb-2 text-lg">Payment Screenshot</div>
                    <div className="text-black leading-relaxed">Upload a clear screenshot of your payment confirmation. This is required for verification.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Issues */}
          <div className="bg-gradient-to-br from-card-bg to-dark-bg rounded-3xl p-8 border border-border-gray shadow-2xl transform hover:scale-105 transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gradient-to-r from-danger-red to-orange-500 p-4 rounded-full animate-glow">
                <AlertTriangle className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-black font-heading">Common Issues</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-dark-bg rounded-2xl p-6 border border-danger-red/30 hover:border-danger-red/60 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <XCircle className="text-danger-red mt-1 flex-shrink-0 animate-bounce-gentle" size={24} />
                  <div>
                    <div className="text-white font-bold mb-2 text-lg">Wrong WhatsApp Number</div>
                    <div className="text-text-gray leading-relaxed">If your WhatsApp number is incorrect, we cannot contact you. Double-check before submitting!</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-bg rounded-2xl p-6 border border-danger-red/30 hover:border-danger-red/60 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <XCircle className="text-danger-red mt-1 flex-shrink-0 animate-bounce-gentle" size={24} />
                  <div>
                    <div className="text-white font-bold mb-2 text-lg">Inactive WhatsApp</div>
                    <div className="text-text-gray leading-relaxed">If your WhatsApp is not active or blocked, we cannot deliver your items or provide support.</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-bg rounded-2xl p-6 border border-danger-red/30 hover:border-danger-red/60 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <XCircle className="text-danger-red mt-1 flex-shrink-0 animate-bounce-gentle" size={24} />
                  <div>
                    <div className="text-white font-bold mb-2 text-lg">Fake Payment Screenshot</div>
                    <div className="text-text-gray leading-relaxed">Providing fake payment screenshots will result in immediate order cancellation and account ban.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Policies with Enhanced Design */}
        <div className="bg-gradient-to-br from-card-bg to-dark-bg rounded-3xl p-10 border-2 border-danger-red/50 shadow-2xl mb-16 transform hover:scale-105 transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center space-x-4 mb-10">
            <div className="bg-gradient-to-r from-danger-red to-red-600 p-5 rounded-full animate-glow">
              <Shield className="text-white" size={32} />
            </div>
            <h3 className="text-4xl font-bold text-white font-heading">Terms & Policies</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Order Cancellation Policy */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-danger-red/20 to-red-600/20 rounded-3xl p-8 border border-danger-red/50 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <Clock className="text-danger-red animate-bounce-gentle" size={28} />
                  <h4 className="text-2xl font-bold text-white">Order Cancellation Policy</h4>
                </div>
                <div className="space-y-4 text-text-gray">
                  <p className="leading-relaxed">
                    <strong className="text-danger-red">IMPORTANT:</strong> If we cannot reach you on WhatsApp within <strong className="text-white">24 hours</strong> of placing your order, your order will be automatically cancelled.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-danger-red">NO REFUNDS:</strong> Once your order is cancelled due to non-compliance, your payment will be forfeited and no refund will be issued.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">Contact Requirement:</strong> You must be reachable on WhatsApp for order delivery. Failure to respond within 24 hours may result in order cancellation.
                  </p>
                </div>
              </div>
            </div>

            {/* Violation Consequences */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-danger-red/20 to-red-600/20 rounded-3xl p-8 border border-danger-red/50 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <AlertTriangle className="text-danger-red animate-bounce-gentle" size={28} />
                  <h4 className="text-2xl font-bold text-white">Violation Consequences</h4>
                </div>
                <div className="space-y-4 text-text-gray">
                  <p className="leading-relaxed">
                    <strong className="text-danger-red">Account Ban:</strong> Providing false information, fake screenshots, or attempting to scam will result in immediate permanent ban.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-danger-red">Payment Forfeiture:</strong> Banned users forfeit all payments and will not receive any items or refunds.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">Compliance Required:</strong> All users must follow our terms and WhatsApp communication rules to maintain access to our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Stats with Enhanced Animation */}
        <div className="bg-gradient-to-r from-primary-blue via-secondary-blue to-primary-blue rounded-3xl p-10 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <h3 className="text-4xl font-bold mb-10 font-heading">Support Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="group hover:transform hover:scale-110 transition-all duration-500">
              <div className="bg-white/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 animate-float">
                <Clock size={32} className="text-white" />
              </div>
              <div className="text-5xl font-bold mb-3 font-heading">24/7</div>
              <div className="text-blue-100 text-lg">Support Available</div>
            </div>
            <div className="group hover:transform hover:scale-110 transition-all duration-500">
              <div className="bg-white/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 animate-float" style={{ animationDelay: '0.5s' }}>
                <Zap size={32} className="text-white" />
              </div>
              <div className="text-5xl font-bold mb-3 font-heading">&lt;5min</div>
              <div className="text-blue-100 text-lg">Average Response</div>
            </div>
            <div className="group hover:transform hover:scale-110 transition-all duration-500">
              <div className="bg-white/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 animate-float" style={{ animationDelay: '1s' }}>
                <Star size={32} className="text-white" />
              </div>
              <div className="text-5xl font-bold mb-3 font-heading">99%</div>
              <div className="text-blue-100 text-lg">Customer Satisfaction</div>
            </div>
            <div className="group hover:transform hover:scale-110 transition-all duration-500">
              <div className="bg-white/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 animate-float" style={{ animationDelay: '1.5s' }}>
                <Users size={32} className="text-white" />
              </div>
              <div className="text-5xl font-bold mb-3 font-heading">1000+</div>
              <div className="text-blue-100 text-lg">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Contact Information with Enhanced Design */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-card-bg to-dark-bg rounded-3xl p-10 border border-border-gray shadow-2xl transform hover:scale-105 transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-3xl font-bold text-white mb-6 font-heading">Need More Help?</h3>
            <p className="text-text-gray mb-8 text-lg leading-relaxed">
              Our support team is available 24/7 on WhatsApp to help you with any questions or issues.
            </p>
            <a
              href="https://wa.me/9647737006018"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 bg-gradient-to-r from-success-green to-green-600 text-white px-10 py-5 rounded-full font-bold hover:from-green-600 hover:to-success-green transition-all duration-500 transform hover:scale-110 shadow-2xl animate-glow"
            >
              <Phone size={28} />
              <span>Get Support on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
