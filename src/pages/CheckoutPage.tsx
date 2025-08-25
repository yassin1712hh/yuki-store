import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, Upload, Check, Smartphone, Building, AlertTriangle, Shield, QrCode, CreditCard, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { paymentMethods } from '../data/paymentMethods';
import { PaymentMethod } from '../types';
import { useNotification } from '../context/NotificationContext';

const CheckoutPage: React.FC = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { addNotification } = useNotification();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null);
  const [customerInfo, setCustomerInfo] = useState({
    senderNumber: '',
    robloxUsername: '',
    whatsappNumber: '',
    screenshot: null as File | null
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  const totalPrice = getTotalPrice();
  const orderId = `CART-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomerInfo(prev => ({ ...prev, screenshot: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPaymentMethod) return;

    setShowConfirmation(true);
  };

  const confirmSubmit = async () => {
    setIsSubmitting(true);
    setShowConfirmation(false);

    try {
      // Create Discord embed data for cart items with enhanced design
      const itemsList = cartItems.map(item => 
        `**${item.name}** x${item.quantity} - ${formatPrice(item.price * item.quantity)} ${item.currency}`
      ).join('\n');

      const embedData = {
        embeds: [{
          title: '🛒 New Cart Order',
          color: 0x3B82F6,
          thumbnail: {
            url: cartItems[0]?.image || ''
          },
          fields: [
            { name: '📦 Items', value: itemsList, inline: false },
            { name: '🔢 Order ID', value: `\`${orderId}\``, inline: true },
            { name: '💰 Total Price', value: `**${formatPrice(totalPrice)} IQD**`, inline: true },
            { name: '💳 Payment Method', value: `**${selectedPaymentMethod.name}**`, inline: true },
            { name: '📱 WhatsApp Number', value: `**${customerInfo.whatsappNumber}**`, inline: true },
            { name: '🎯 Roblox Username', value: `**${customerInfo.robloxUsername}**`, inline: true },
            { name: '📱 Payment Info', value: `**Sender Number:** ${customerInfo.senderNumber}`, inline: false }
          ],
          timestamp: new Date().toISOString(),
          footer: { 
            text: '🏪 ThePearlStore Order System',
            icon_url: 'https://cdn.discordapp.com/attachments/1353823608425676913/1389924027954499665/d6ce479c363234b42ca441fb12df0b3ctplv-tiktokx-cropcenter10801080.png'
          }
        }]
      };

      // Send to Discord webhook - Updated URL
      const webhookUrl = 'https://discord.com/api/webhooks/1391188102034231347/XnBLnza8INspGvc5mrcLV93YjosYUUKjHNe2xU2L1us-NogtzDAESUrl4WZBTRTF5_eJ';
      
      // First send the embed
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(embedData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // If there's a screenshot, send it as a separate message
      if (customerInfo.screenshot) {
        const formData = new FormData();
        formData.append('file', customerInfo.screenshot);
        formData.append('content', `📸 **Payment Screenshot** for Order ID: \`${orderId}\`\n👤 **Customer:** ${customerInfo.whatsappNumber}\n🛒 **Cart Items:** ${cartItems.length} items`);

        const fileResponse = await fetch(webhookUrl, {
          method: 'POST',
          body: formData,
        });

        if (!fileResponse.ok) {
          console.warn('Failed to send screenshot, but order was processed');
        }
      }
      
      // Clear cart
      clearCart();
      
      // Show success notification
      addNotification({
        type: 'success',
        title: 'Order Submitted Successfully!',
        message: `Order ID: ${orderId}. We will contact you on WhatsApp to deliver your items.`,
        duration: 10000
      });

      // Navigate back to products
      navigate('/products');
    } catch (error) {
      console.error('Error submitting order:', error);
      addNotification({
        type: 'error',
        title: 'Order Failed',
        message: 'There was an error submitting your order. Please try again.',
        duration: 10000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPaymentLogo = (type: string) => {
    switch (type) {
      case 'zain-cash':
        return (
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
            <Smartphone className="text-white" size={24} />
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center">
            <CreditCard className="text-white" size={24} />
          </div>
        );
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-black mb-12 text-center font-heading">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
                      <div className="bg-gradient-to-br from-card-bg to-yuki-lavender/20 rounded-3xl shadow-lg p-8 border border-border-gray">
              <h2 className="text-3xl font-bold text-black mb-8 font-heading">Order Summary</h2>
            
            <div className="space-y-6 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 p-6 bg-yuki-lavender/10 rounded-2xl border border-border-gray">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl border border-border-gray"
                  />
                  <div className="flex-1">
                    <div className="inline-block bg-gradient-to-r from-yuki-dark/20 to-yuki-purple/20 text-yuki-dark px-3 py-1 rounded-full text-xs font-medium mb-2 border border-yuki-dark/30">
                      {item.category}
                    </div>
                    <h3 className="font-semibold text-text-gray text-lg mb-1">{item.name}</h3>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-text-secondary">Qty: {item.quantity}</span>
                      <span className="font-semibold text-yuki-dark text-lg">
                        {formatPrice(item.price * item.quantity)} {item.currency}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border-gray pt-6">
              <div className="mb-4 p-4 bg-white rounded-2xl border border-yuki-dark/30 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="text-black font-medium">Order ID:</span>
                  <span className="font-mono font-bold text-yuki-dark text-lg">{orderId}</span>
                </div>
              </div>
              
              <div className="flex justify-between text-2xl font-bold text-text-gray p-4 bg-gradient-to-r from-yuki-dark/20 to-yuki-purple/20 rounded-2xl border border-yuki-dark/30">
                <span>Total:</span>
                <span>{formatPrice(totalPrice)} IQD</span>
              </div>
            </div>
          </div>

          {/* Payment Selection */}
          <div className="bg-gradient-to-br from-card-bg to-yuki-lavender/20 rounded-3xl shadow-lg p-8 border border-border-gray">
            {!selectedPaymentMethod ? (
              <div>
                <h2 className="text-3xl font-bold text-text-gray mb-8 font-heading text-center">Choose Payment Method</h2>
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPaymentMethod(method)}
                      className="w-full border-2 border-border-gray hover:border-yuki-dark/50 bg-yuki-lavender/10 hover:bg-yuki-dark/10 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center space-x-4">
                        {getPaymentLogo(method.type)}
                        <div className="flex-1 text-left">
                          <div className="font-semibold text-text-gray text-lg">{method.name}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-text-gray mb-4 font-heading">Payment Information</h2>
                  <button
                    type="button"
                    onClick={() => setSelectedPaymentMethod(null)}
                    className="text-yuki-dark hover:text-yuki-purple text-sm"
                  >
                    ← Change Payment Method
                  </button>
                </div>

                {/* Payment Details */}
                <div className="bg-gradient-to-r from-yuki-dark/10 to-yuki-purple/10 rounded-2xl p-6 border border-yuki-dark/30">
                  <h3 className="font-semibold text-black mb-4 text-lg">Payment Details</h3>
                  
                  {/* QR Code for Zain Cash */}
                  {selectedPaymentMethod.type === 'zain-cash' && selectedPaymentMethod.qrCode && (
                    <div className="mb-6 text-center">
                      <div className="bg-white p-4 rounded-2xl inline-block shadow-lg">
                        <img 
                          src={selectedPaymentMethod.qrCode} 
                          alt="Zain Cash QR Code" 
                          className="w-48 h-48 object-contain"
                        />
                      </div>
                      <div className="mt-4 flex items-center justify-center space-x-2 text-yuki-dark">
                        <QrCode size={20} />
                        <span className="font-medium">Scan QR Code to Pay</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-yuki-dark/30 shadow-sm">
                      <span className="text-black font-medium">Number:</span>
                      <div className="flex items-center space-x-3">
                        <span className="font-mono font-bold text-yuki-dark text-lg">{selectedPaymentMethod.number}</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(selectedPaymentMethod.number!, 'number')}
                          className="p-2 hover:bg-yuki-dark/10 rounded-lg transition-colors"
                        >
                          {copiedField === 'number' ? (
                            <Check className="text-success-green" size={18} />
                          ) : (
                            <Copy className="text-yuki-dark" size={18} />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-yuki-dark/30 shadow-sm">
                      <span className="text-black font-medium">Amount:</span>
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-yuki-dark text-xl">{formatPrice(totalPrice)} IQD</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(totalPrice.toString(), 'amount')}
                          className="p-2 hover:bg-yuki-dark/10 rounded-lg transition-colors"
                        >
                          {copiedField === 'amount' ? (
                            <Check className="text-success-green" size={18} />
                          ) : (
                            <Copy className="text-yuki-dark" size={18} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Information */}
                <div className="space-y-6">
                  <h3 className="font-semibold text-black text-lg">Your Information</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Number you sent from *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerInfo.senderNumber}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, senderNumber: e.target.value }))}
                      className="w-full px-4 py-3 bg-white border border-border-gray rounded-xl focus:ring-2 focus:ring-yuki-dark focus:border-yuki-dark transition-all duration-300 text-text-gray"
                      placeholder="07XXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Roblox Username *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerInfo.robloxUsername}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, robloxUsername: e.target.value }))}
                      className="w-full px-4 py-3 bg-white border border-border-gray rounded-xl focus:ring-2 focus:ring-yuki-dark focus:border-yuki-dark transition-all duration-300 text-text-gray"
                      placeholder="Your Roblox username"
                      />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerInfo.whatsappNumber}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, whatsappNumber: e.target.value }))}
                      className="w-full px-4 py-3 bg-white border border-border-gray rounded-xl focus:ring-2 focus:ring-yuki-dark focus:border-yuki-dark transition-all duration-300 text-text-gray"
                      placeholder="07XXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Payment Screenshot *
                    </label>
                    <div className="border-2 border-dashed border-border-gray rounded-2xl p-8 text-center hover:border-yuki-dark transition-colors bg-yuki-lavender/10">
                      <Upload className="mx-auto text-yuki-dark mb-4" size={40} />
                      <p className="text-black mb-4">
                        Upload a screenshot of your payment
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="screenshot-upload"
                        required
                      />
                      <label
                        htmlFor="screenshot-upload"
                        className="inline-block bg-gradient-to-r from-yuki-dark to-yuki-purple text-white px-6 py-3 rounded-full cursor-pointer hover:from-yuki-purple hover:to-yuki-dark transition-all duration-300 font-medium"
                      >
                        Choose File
                      </label>
                      {customerInfo.screenshot && (
                        <p className="text-success-green mt-3 font-medium">
                          ✓ {customerInfo.screenshot.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yuki-dark to-yuki-purple hover:from-yuki-purple hover:to-yuki-dark text-white py-5 px-8 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none animate-glow flex items-center justify-center space-x-3"
                >
                  <CreditCard size={24} />
                  <span>{isSubmitting ? 'Submitting Order...' : 'Complete Order'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-white to-yuki-lavender/30 rounded-3xl p-8 max-w-md w-full border-2 border-yuki-dark/50 shadow-lg">
              <div className="text-center">
                <div className="bg-gradient-to-r from-danger-red to-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <AlertTriangle className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4 font-heading flex items-center justify-center space-x-2">
                  <Phone className="text-success-green" size={24} />
                  <span>Important Warning</span>
                </h3>
                
                <div className="space-y-4 text-left mb-8">
                  <div className="bg-success-green/10 border border-success-green/30 rounded-2xl p-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="text-success-green mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="text-black font-semibold mb-1">WhatsApp Contact Required</div>
                        <div className="text-black text-sm">We will contact you on WhatsApp to deliver your items. Make sure your number is correct and active.</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yuki-dark/10 border border-yuki-dark/30 rounded-2xl p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="text-yuki-dark mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="text-black font-semibold mb-1">Correct WhatsApp Number</div>
                        <div className="text-black text-sm">Make sure your WhatsApp number is correct. If it's wrong, we cannot contact you for delivery.</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowConfirmation(false)}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmSubmit}
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-yuki-dark to-yuki-purple hover:from-yuki-purple hover:to-yuki-dark text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'I Understand'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;