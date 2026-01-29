import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard, FileText, Beef } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from './CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { toast } from 'sonner';
import { OrderConfirmation } from './OrderConfirmation';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const [isPreOrderForm, setIsPreOrderForm] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cash'
  });
  const [preOrderFormData, setPreOrderFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    preferredDeliveryDate: '',
    paymentMethod: 'partial',
    advanceAmount: '',
    specialRequests: '',
    termsAccepted: false
  });

  // Check if cart has cattle items
  const hasCattleItems = cartItems.some(item => item.breed || item.type === 'cattle');
  const hasProductItems = cartItems.some(item => !item.breed && item.type !== 'cattle');
  
  const deliveryFee = cartTotal > 0 ? 50 : 0;
  const total = cartTotal + deliveryFee;

  const generateOrderNumber = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `MDA${timestamp}${random}`.slice(-10);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }

    if (!formData.name || !formData.phone || !formData.address) {
      toast.error('Please fill in all required fields!');
      return;
    }

    // Create order details
    const order = {
      orderNumber: generateOrderNumber(),
      items: [...cartItems],
      customerName: formData.name,
      phone: formData.phone,
      address: formData.address,
      paymentMethod: formData.paymentMethod,
      subtotal: cartTotal,
      deliveryFee: deliveryFee,
      total: total,
      orderDate: new Date().toISOString()
    };

    // Save order to localStorage
    const existingOrders = localStorage.getItem('mozzammel-orders');
    const orders = existingOrders ? JSON.parse(existingOrders) : [];
    orders.push(order);
    localStorage.setItem('mozzammel-orders', JSON.stringify(orders));

    // Show order confirmation
    setOrderDetails(order);
    setShowOrderConfirmation(true);
    
    // Clear cart and form
    clearCart();
    setFormData({ name: '', phone: '', address: '', paymentMethod: 'cash' });
    setIsCheckout(false);
    
    // Show success toast
    toast.success('Order placed successfully! 🎉');
  };

  const handleCloseOrderConfirmation = () => {
    setShowOrderConfirmation(false);
    setOrderDetails(null);
    onClose();
  };

  return (
    <>
      {/* Backdrop - NO BLUR */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-full md:w-[480px] bg-white shadow-2xl z-50 flex flex-col max-h-screen"
          >
            {/* Header - Fixed */}
            <div className="bg-[#2E6B3F] text-white p-4 md:p-6 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="md:w-6 md:h-6" />
                <div>
                  <h2 className="text-lg md:text-xl font-bold">Shopping Cart</h2>
                  <p className="text-xs md:text-sm text-green-100">{cartItems.length} items</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>
            </div>

            {/* Content - Scrollable with max height */}
            <div className="flex-1 overflow-y-auto min-h-0">
              {!isCheckout && !isPreOrderForm ? (
                <>
                  {/* Cart Items */}
                  {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 p-8">
                      <ShoppingBag size={48} className="md:w-16 md:h-16 mb-4 opacity-50" />
                      <p className="text-base md:text-lg font-medium">Your cart is empty</p>
                      <p className="text-sm">Add some products to get started!</p>
                    </div>
                  ) : (
                    <div className="p-3 md:p-4 space-y-3 md:space-y-4">
                      {cartItems.map((item) => {
                        const isCattle = item.breed || item.type === 'cattle';
                        
                        return (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            className="bg-gray-50 rounded-lg p-3 md:p-4 flex gap-3 md:gap-4"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">{item.name}</h3>
                                  {isCattle && item.breed && (
                                    <p className="text-xs text-blue-600 font-medium">{item.breed}</p>
                                  )}
                                  <p className="text-xs md:text-sm text-gray-600">৳{item.price.toLocaleString()}</p>
                                  {isCattle && (
                                    <div className="mt-1 inline-block bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full font-medium">
                                      <Beef size={10} className="inline mr-1" />
                                      Pre-Order Item
                                    </div>
                                  )}
                                </div>
                                <button
                                  onClick={() => {
                                    removeFromCart(item.id);
                                    toast.success('Item removed from cart');
                                  }}
                                  className="p-1.5 md:p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                                >
                                  <Trash2 size={16} className="md:w-[18px] md:h-[18px]" />
                                </button>
                              </div>
                              
                              <div className="flex items-center justify-between gap-2 mt-2">
                                {/* Show quantity controls only for products, not cattle */}
                                {!isCattle ? (
                                  <>
                                    <div className="flex items-center gap-1.5 md:gap-2 bg-white rounded-lg border border-gray-200">
                                      <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="p-1 hover:bg-gray-100 rounded-l-lg transition-colors"
                                      >
                                        <Minus size={14} className="md:w-4 md:h-4" />
                                      </button>
                                      <span className="px-2 md:px-3 font-semibold text-sm">{item.quantity}</span>
                                      <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="p-1 hover:bg-gray-100 rounded-r-lg transition-colors"
                                      >
                                        <Plus size={14} className="md:w-4 md:h-4" />
                                      </button>
                                    </div>
                                    <p className="font-bold text-[#2E6B3F] text-sm md:text-base">
                                      ৳{(item.price * item.quantity).toFixed(2)}
                                    </p>
                                  </>
                                ) : (
                                  <p className="font-bold text-[#2E6B3F] text-base md:text-lg">
                                    ৳{item.price.toLocaleString()}
                                  </p>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : isPreOrderForm ? (
                /* Pre-Order Form */
                <div className="p-4 md:p-6 space-y-4 md:space-y-5">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Cattle Pre-Order Information</h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-4">Please fill out the information below to complete your cattle pre-order</p>
                    
                    <div className="space-y-3 md:space-y-4">
                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={preOrderFormData.name}
                          onChange={(e) => setPreOrderFormData({ ...preOrderFormData, name: e.target.value })}
                          className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm md:text-base"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={preOrderFormData.phone}
                          onChange={(e) => setPreOrderFormData({ ...preOrderFormData, phone: e.target.value })}
                          className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm md:text-base"
                          placeholder="01XXXXXXXXX"
                        />
                      </div>

                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          value={preOrderFormData.email}
                          onChange={(e) => setPreOrderFormData({ ...preOrderFormData, email: e.target.value })}
                          className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm md:text-base"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                          Delivery Address *
                        </label>
                        <textarea
                          required
                          value={preOrderFormData.address}
                          onChange={(e) => setPreOrderFormData({ ...preOrderFormData, address: e.target.value })}
                          className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm md:text-base"
                          placeholder="Enter complete delivery address"
                          rows={2}
                        />
                      </div>

                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                          Preferred Delivery Date
                        </label>
                        <input
                          type="date"
                          value={preOrderFormData.preferredDeliveryDate}
                          onChange={(e) => setPreOrderFormData({ ...preOrderFormData, preferredDeliveryDate: e.target.value })}
                          className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm md:text-base"
                        />
                      </div>

                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                          Payment Method *
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              name="preOrderPayment"
                              value="partial"
                              checked={preOrderFormData.paymentMethod === 'partial'}
                              onChange={(e) => setPreOrderFormData({ ...preOrderFormData, paymentMethod: e.target.value })}
                              className="text-amber-600 focus:ring-amber-500"
                            />
                            <div className="flex-1">
                              <span className="font-medium text-sm md:text-base block">Partial Payment (Advance)</span>
                              <span className="text-xs text-gray-500">Pay advance now, rest on delivery</span>
                            </div>
                          </label>
                          <label className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              name="preOrderPayment"
                              value="full"
                              checked={preOrderFormData.paymentMethod === 'full'}
                              onChange={(e) => setPreOrderFormData({ ...preOrderFormData, paymentMethod: e.target.value })}
                              className="text-amber-600 focus:ring-amber-500"
                            />
                            <div className="flex-1">
                              <span className="font-medium text-sm md:text-base block">Full Payment</span>
                              <span className="text-xs text-gray-500">Pay complete amount now</span>
                            </div>
                          </label>
                          <label className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              name="preOrderPayment"
                              value="on-delivery"
                              checked={preOrderFormData.paymentMethod === 'on-delivery'}
                              onChange={(e) => setPreOrderFormData({ ...preOrderFormData, paymentMethod: e.target.value })}
                              className="text-amber-600 focus:ring-amber-500"
                            />
                            <div className="flex-1">
                              <span className="font-medium text-sm md:text-base block">Cash on Delivery</span>
                              <span className="text-xs text-gray-500">Pay when cattle is delivered</span>
                            </div>
                          </label>
                        </div>
                      </div>

                      {preOrderFormData.paymentMethod === 'partial' && (
                        <div>
                          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                            Advance Amount (৳)
                          </label>
                          <input
                            type="number"
                            value={preOrderFormData.advanceAmount}
                            onChange={(e) => setPreOrderFormData({ ...preOrderFormData, advanceAmount: e.target.value })}
                            className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm md:text-base"
                            placeholder="Enter advance amount"
                            min="1000"
                          />
                          <p className="text-xs text-gray-500 mt-1">Minimum ৳1,000 advance required</p>
                        </div>
                      )}

                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                          Special Requests (Optional)
                        </label>
                        <textarea
                          value={preOrderFormData.specialRequests}
                          onChange={(e) => setPreOrderFormData({ ...preOrderFormData, specialRequests: e.target.value })}
                          className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm md:text-base"
                          placeholder="Any special instructions or requirements?"
                          rows={2}
                        />
                      </div>

                      {/* Terms and Conditions */}
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 md:p-4">
                        <h4 className="font-bold text-sm md:text-base text-amber-900 mb-2">Terms & Conditions</h4>
                        <div className="space-y-1.5 text-xs md:text-sm text-amber-800">
                          <p>✓ Advance payment is non-refundable</p>
                          <p>✓ Cattle will be delivered on or before Eid-ul-Adha</p>
                          <p>✓ Weight may vary ±5-10kg from listed weight</p>
                          <p>✓ All cattle are vet-certified and healthy</p>
                          <p>✓ Delivery charges apply based on location</p>
                          <p>✓ We reserve the right to substitute with similar quality cattle if unavailable</p>
                        </div>
                        
                        <label className="flex items-start gap-2 mt-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preOrderFormData.termsAccepted}
                            onChange={(e) => setPreOrderFormData({ ...preOrderFormData, termsAccepted: e.target.checked })}
                            className="mt-1 text-amber-600 focus:ring-amber-500"
                            required
                          />
                          <span className="text-xs md:text-sm text-amber-900 font-medium">
                            I accept the terms and conditions for cattle pre-order *
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Checkout Form */
                <form onSubmit={handleCheckout} className="p-4 md:p-6 space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Delivery Information</h3>
                    
                    <div className="space-y-3 md:space-y-4">
                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E6B3F] focus:border-transparent text-sm md:text-base"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E6B3F] focus:border-transparent text-sm md:text-base"
                          placeholder="01XXXXXXXXX"
                        />
                      </div>

                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                          Delivery Address *
                        </label>
                        <textarea
                          required
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E6B3F] focus:border-transparent text-sm md:text-base"
                          placeholder="Enter your complete address"
                          rows={3}
                        />
                      </div>

                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                          Payment Method *
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              name="payment"
                              value="cash"
                              checked={formData.paymentMethod === 'cash'}
                              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                              className="text-[#2E6B3F] focus:ring-[#2E6B3F]"
                            />
                            <span className="flex-1 font-medium text-sm md:text-base">Cash on Delivery</span>
                          </label>
                          <label className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              name="payment"
                              value="bkash"
                              checked={formData.paymentMethod === 'bkash'}
                              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                              className="text-[#2E6B3F] focus:ring-[#2E6B3F]"
                            />
                            <span className="flex-1 font-medium text-sm md:text-base">bKash</span>
                          </label>
                          <label className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              name="payment"
                              value="nagad"
                              checked={formData.paymentMethod === 'nagad'}
                              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                              className="text-[#2E6B3F] focus:ring-[#2E6B3F]"
                            />
                            <span className="flex-1 font-medium text-sm md:text-base">Nagad</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Footer with Total and Actions - Fixed */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 p-4 md:p-6 bg-gray-50 flex-shrink-0">
                <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">৳{cartTotal.toLocaleString()}</span>
                  </div>
                  {!hasCattleItems && (
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-gray-600">Delivery Fee</span>
                      <span className="font-semibold">৳{deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base md:text-lg font-bold border-t pt-1.5 md:pt-2">
                    <span>Total</span>
                    <span className="text-[#2E6B3F]">৳{(hasCattleItems ? cartTotal : total).toLocaleString()}</span>
                  </div>
                </div>

                {!isCheckout && !isPreOrderForm ? (
                  <div className="space-y-2">
                    {/* Show different buttons based on cart content */}
                    {hasCattleItems ? (
                      <>
                        <Button
                          onClick={() => setIsPreOrderForm(true)}
                          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 md:py-6 text-base md:text-lg font-semibold"
                        >
                          <FileText size={18} className="md:w-5 md:h-5 mr-2" />
                          Complete Pre-Order Information
                        </Button>
                        {hasProductItems && (
                          <p className="text-xs text-center text-amber-700 bg-amber-50 p-2 rounded">
                            ⚠️ Mixed cart: Please complete pre-order for cattle first
                          </p>
                        )}
                      </>
                    ) : (
                      <Button
                        onClick={() => setIsCheckout(true)}
                        className="w-full bg-[#2E6B3F] hover:bg-[#1f4a2a] text-white py-4 md:py-6 text-base md:text-lg font-semibold"
                      >
                        <CreditCard size={18} className="md:w-5 md:h-5 mr-2" />
                        Proceed to Checkout
                      </Button>
                    )}
                    <Button
                      onClick={onClose}
                      variant="outline"
                      className="w-full py-2 md:py-3 text-sm md:text-base"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                ) : isPreOrderForm ? (
                  <div className="space-y-2">
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        // Handle pre-order submission
                        if (!preOrderFormData.name || !preOrderFormData.phone || !preOrderFormData.address || !preOrderFormData.termsAccepted) {
                          toast.error('Please fill all required fields and accept terms');
                          return;
                        }
                        
                        const preOrder = {
                          orderNumber: generateOrderNumber(),
                          type: 'pre-order',
                          items: cartItems.filter(item => item.breed || item.type === 'cattle'),
                          ...preOrderFormData,
                          total: cartTotal,
                          orderDate: new Date().toISOString()
                        };
                        
                        // Save to localStorage
                        const existingOrders = localStorage.getItem('mozzammel-pre-orders');
                        const orders = existingOrders ? JSON.parse(existingOrders) : [];
                        orders.push(preOrder);
                        localStorage.setItem('mozzammel-pre-orders', JSON.stringify(orders));
                        
                        setOrderDetails(preOrder);
                        setShowOrderConfirmation(true);
                        clearCart();
                        setPreOrderFormData({
                          name: '',
                          phone: '',
                          email: '',
                          address: '',
                          preferredDeliveryDate: '',
                          paymentMethod: 'partial',
                          advanceAmount: '',
                          specialRequests: '',
                          termsAccepted: false
                        });
                        setIsPreOrderForm(false);
                        toast.success('Pre-order submitted successfully! 🎉');
                      }}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 md:py-6 text-base md:text-lg font-semibold"
                    >
                      Submit Pre-Order - ৳{cartTotal.toLocaleString()}
                    </Button>
                    <Button
                      onClick={() => setIsPreOrderForm(false)}
                      variant="outline"
                      className="w-full py-2 md:py-3 text-sm md:text-base"
                      type="button"
                    >
                      Back to Cart
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button
                      onClick={handleCheckout}
                      type="button"
                      className="w-full bg-[#2E6B3F] hover:bg-[#1f4a2a] text-white py-4 md:py-6 text-base md:text-lg font-semibold"
                    >
                      Place Order - ৳{total.toFixed(2)}
                    </Button>
                    <Button
                      onClick={() => setIsCheckout(false)}
                      variant="outline"
                      className="w-full py-2 md:py-3 text-sm md:text-base"
                      type="button"
                    >
                      Back to Cart
                    </Button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Order Confirmation */}
      {showOrderConfirmation && orderDetails && (
        <OrderConfirmation
          isOpen={showOrderConfirmation}
          orderDetails={orderDetails}
          onClose={handleCloseOrderConfirmation}
        />
      )}
    </>
  );
}