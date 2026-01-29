import { motion } from 'motion/react';
import { CheckCircle2, Phone, MessageCircle, X, Package, MapPin, CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import { CartItem } from './CartContext';

interface OrderConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: {
    orderNumber: string;
    items: CartItem[];
    customerName: string;
    phone: string;
    address: string;
    paymentMethod: string;
    subtotal: number;
    deliveryFee: number;
    total: number;
  };
}

export function OrderConfirmation({ isOpen, onClose, orderDetails }: OrderConfirmationProps) {
  if (!isOpen) return null;

  const handleWhatsAppContact = () => {
    const message = `Hi! I just placed order #${orderDetails.orderNumber}. 
Order Details:
${orderDetails.items.map(item => `- ${item.name} x${item.quantity}`).join('\n')}
Total: ৳${orderDetails.total.toFixed(2)}
Name: ${orderDetails.customerName}
Phone: ${orderDetails.phone}
Address: ${orderDetails.address}`;
    
    const whatsappUrl = `https://wa.me/8801924900128?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:01924900128';
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-[60] overflow-y-auto"
        onClick={onClose}
      >
        {/* Modal - Positioned at top, NO min-h-screen */}
        <div className="w-full flex items-start justify-center p-4 pt-8 pb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2E6B3F] to-[#1f4a2a] text-white p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="flex justify-center mb-4"
              >
                <div className="bg-white rounded-full p-4">
                  <CheckCircle2 size={48} className="text-green-500" />
                </div>
              </motion.div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-center">Order Confirmed!</h2>
              <p className="text-center text-green-100 mt-2">Order #{orderDetails.orderNumber}</p>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {/* Success Message */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 text-center">
                  Thank you for your order! We will contact you shortly to confirm delivery details.
                </p>
              </div>

              {/* Order Items */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Package size={20} className="text-[#2E6B3F]" />
                  Order Items
                </h3>
                <div className="space-y-2">
                  {orderDetails.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-gray-600">৳{item.price} × {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-bold text-[#2E6B3F]">৳{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Info */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <MapPin size={20} className="text-[#2E6B3F]" />
                  Delivery Information
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div>
                    <p className="text-sm text-gray-600">Customer Name</p>
                    <p className="font-medium">{orderDetails.customerName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone Number</p>
                    <p className="font-medium">{orderDetails.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Delivery Address</p>
                    <p className="font-medium">{orderDetails.address}</p>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <CreditCard size={20} className="text-[#2E6B3F]" />
                  Payment Details
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Payment Method</span>
                    <span className="font-medium capitalize">{orderDetails.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span>৳{orderDetails.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>৳{orderDetails.deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-300">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-lg text-[#2E6B3F]">৳{orderDetails.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Contact Options */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-3 text-center">
                  Have questions about your order? Contact us directly:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={handleWhatsAppContact}
                    className="bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={handlePhoneCall}
                    className="bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <Button
                onClick={onClose}
                className="w-full bg-[#2E6B3F] hover:bg-[#1f4a2a] text-white py-3"
              >
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}