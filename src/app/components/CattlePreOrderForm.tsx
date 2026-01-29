import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Phone, MapPin, User, Calendar, CreditCard, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface CattlePreOrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  cattle: {
    id: string;
    name: string;
    breed: string;
    weight: number;
    age: string;
    price: number;
    image: string;
    meatYield: string;
  };
}

export function CattlePreOrderForm({ isOpen, onClose, cattle }: CattlePreOrderFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    area: '',
    preferredDeliveryDate: '',
    paymentMethod: 'cash',
    specialRequests: '',
  });
  const [orderNumber, setOrderNumber] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.customerName || !formData.phone || !formData.address || !formData.area) {
      toast.error('Please fill in all required fields!');
      return;
    }

    // Generate order number
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    const orderNum = `COW${timestamp}${random}`.slice(-12);
    setOrderNumber(orderNum);

    // Create order object
    const order = {
      orderNumber: orderNum,
      orderType: 'Cattle Pre-Order',
      cattle: {
        id: cattle.id,
        name: cattle.name,
        breed: cattle.breed,
        weight: cattle.weight,
        price: cattle.price,
        image: cattle.image,
      },
      customer: formData,
      orderDate: new Date().toISOString(),
      status: 'Pending Confirmation',
    };

    // Save to localStorage
    const existingOrders = localStorage.getItem('mozzammel-cattle-orders');
    const orders = existingOrders ? JSON.parse(existingOrders) : [];
    orders.push(order);
    localStorage.setItem('mozzammel-cattle-orders', JSON.stringify(orders));

    // Move to success step
    setStep(2);
    toast.success('Pre-order submitted successfully! 🎉');
  };

  const handleWhatsAppContact = () => {
    const message = `Hi! I submitted a cattle pre-order.
Order Number: ${orderNumber}
Cattle: ${cattle.name} (${cattle.breed})
Weight: ${cattle.weight} kg
Price: ৳${cattle.price.toLocaleString()}
Name: ${formData.customerName}
Phone: ${formData.phone}
Location: ${formData.area}, ${formData.city}`;

    const whatsappUrl = `https://wa.me/8801924900128?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:01924900128';
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      customerName: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      area: '',
      preferredDeliveryDate: '',
      paymentMethod: 'cash',
      specialRequests: '',
    });
    setOrderNumber('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Fixed overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* Modal Content - Scrollable container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {step === 1 ? (
                <>
                  {/* Header - Fixed */}
                  <div className="bg-gradient-to-r from-[#2E6B3F] to-[#1f4a2a] text-white p-6 relative flex-shrink-0">
                    <button
                      onClick={handleClose}
                      className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <X size={20} />
                    </button>

                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Cattle Pre-Order Form</h2>
                    <p className="text-green-100">Fill in the details below to reserve your cattle</p>
                  </div>

                  {/* Cattle Summary - Fixed */}
                  <div className="p-4 bg-gray-50 border-b border-gray-200 flex-shrink-0">
                    <div className="flex items-center gap-4">
                      <img
                        src={cattle.image}
                        alt={cattle.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900">{cattle.name}</h3>
                        <p className="text-sm text-gray-600">{cattle.breed}</p>
                        <div className="flex gap-4 mt-1 text-sm">
                          <span className="text-gray-600">Weight: <strong>{cattle.weight} kg</strong></span>
                          <span className="text-gray-600">Age: <strong>{cattle.age}</strong></span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[#2E6B3F]">৳{cattle.price.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Form - Scrollable */}
                  <div className="flex-1 overflow-y-auto">
                    <form onSubmit={handleSubmit} className="p-6 space-y-5">
                      <div className="space-y-5">
                        {/* Personal Information */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <User size={20} className="text-[#2E6B3F]" />
                            Personal Information
                          </h3>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Full Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                required
                                value={formData.customerName}
                                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E6B3F] focus:border-transparent"
                                placeholder="Enter your full name"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Phone Number <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E6B3F] focus:border-transparent"
                                placeholder="01XXXXXXXXX"
                              />
                            </div>

                            <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Email (Optional)
                              </label>
                              <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E6B3F] focus:border-transparent"
                                placeholder="your.email@example.com"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Location Information */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <MapPin size={20} className="text-[#2E6B3F]" />
                            Delivery Location
                          </h3>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Area/Neighborhood <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                required
                                value={formData.area}
                                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E6B3F] focus:border-transparent"
                                placeholder="e.g., Mirpur, Dhanmondi"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                City <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                required
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E6B3F] focus:border-transparent"
                                placeholder="e.g., Dhaka"
                              />
                            </div>

                            <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Complete Address <span className="text-red-500">*</span>
                              </label>
                              <textarea
                                required
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E6B3F] focus:border-transparent"
                                placeholder="House/Road number, landmark, etc."
                                rows={3}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Delivery & Payment */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Calendar size={20} className="text-[#2E6B3F]" />
                            Delivery & Payment
                          </h3>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Preferred Delivery Date
                              </label>
                              <input
                                type="date"
                                value={formData.preferredDeliveryDate}
                                onChange={(e) => setFormData({ ...formData, preferredDeliveryDate: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E6B3F] focus:border-transparent"
                                min={new Date().toISOString().split('T')[0]}
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Payment Method <span className="text-red-500">*</span>
                              </label>
                              <div className="space-y-2">
                                <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                  <input
                                    type="radio"
                                    name="payment"
                                    value="cash"
                                    checked={formData.paymentMethod === 'cash'}
                                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                                    className="text-[#2E6B3F] focus:ring-[#2E6B3F]"
                                  />
                                  <span className="font-medium">Cash on Delivery</span>
                                </label>
                                <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                  <input
                                    type="radio"
                                    name="payment"
                                    value="advance"
                                    checked={formData.paymentMethod === 'advance'}
                                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                                    className="text-[#2E6B3F] focus:ring-[#2E6B3F]"
                                  />
                                  <span className="font-medium">Advance Payment</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Special Requests */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Special Requests / Notes (Optional)
                          </label>
                          <textarea
                            value={formData.specialRequests}
                            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E6B3F] focus:border-transparent"
                            placeholder="Any special requirements or questions..."
                            rows={3}
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-gray-200 p-6 bg-gray-50 flex-shrink-0">
                    <div className="flex gap-3">
                      <Button
                        type="button"
                        onClick={handleClose}
                        variant="outline"
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        className="flex-1 bg-[#2E6B3F] hover:bg-[#1f4a2a] text-white py-3 text-lg font-semibold"
                      >
                        Submit Pre-Order
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Success Screen */}
                  <div className="bg-gradient-to-r from-[#2E6B3F] to-[#1f4a2a] text-white p-6 relative">
                    <button
                      onClick={handleClose}
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

                    <h2 className="text-2xl md:text-3xl font-bold text-center">Pre-Order Submitted!</h2>
                    <p className="text-center text-green-100 mt-2">Order #{orderNumber}</p>
                  </div>

                  <div className="p-6">
                    {/* Success Message */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                      <h3 className="font-bold text-lg text-green-900 mb-2 text-center">
                        Thank You for Your Pre-Order!
                      </h3>
                      <p className="text-green-800 text-center">
                        We have received your cattle pre-order request. Our team will contact you within 24 hours to confirm the details and arrange delivery.
                      </p>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={cattle.image}
                          alt={cattle.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{cattle.name}</h3>
                          <p className="text-sm text-gray-600">{cattle.breed}</p>
                          <p className="text-sm text-gray-600">Weight: {cattle.weight} kg</p>
                        </div>
                        <p className="text-xl font-bold text-[#2E6B3F]">৳{cattle.price.toLocaleString()}</p>
                      </div>

                      <div className="border-t border-gray-300 pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Customer:</span>
                          <span className="font-medium">{formData.customerName}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Phone:</span>
                          <span className="font-medium">{formData.phone}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Location:</span>
                          <span className="font-medium">{formData.area}, {formData.city}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Payment:</span>
                          <span className="font-medium capitalize">{formData.paymentMethod}</span>
                        </div>
                      </div>
                    </div>

                    {/* Contact Options */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-700 mb-3 text-center font-medium">
                        Need immediate assistance? Contact us:
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

                    <Button
                      onClick={handleClose}
                      className="w-full bg-[#2E6B3F] hover:bg-[#1f4a2a] text-white py-3"
                    >
                      Close
                    </Button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}