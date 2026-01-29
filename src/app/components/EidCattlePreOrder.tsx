import { ShoppingCart, Scale, Calendar, Award, CheckCircle2, TrendingUp, Phone, MapPin, X, Info, ZoomIn, ZoomOut, RotateCw, Crown, Star, Trophy } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { PremiumCattleCards } from './PremiumCattleCards';
import { CattlePreOrderForm } from './CattlePreOrderForm';
import { useCart } from './CartContext';

// ULTRA PREMIUM COLLECTION - Best in Class
const premiumCattleList = [
  {
    id: 'cattle-110',
    name: 'রাজা / Raja - The King',
    breed: 'Australian Brahman Cross',
    weight: 820,
    age: '4.5 years',
    price: 325000,
    image: 'https://myimgs.org/storage/images/15674/WhatsApp Image 2026-01-14 at 22.jpeg',
    features: ['Premium Genetics', 'Maximum Meat Yield', 'Vet Certified Excellence', 'Superior Build'],
    badge: 'Ultra Premium',
    meatYield: '530 kg',
    isPremium: true
  },
  {
    id: 'cattle-111',
    name: 'লাল বাহাদুর / Lal Bahadhur',
    breed: 'Brazilian Nelore Import',
    weight: 880,
    age: '5 years',
    price: 395000,
    image: 'https://myimgs.org/storage/images/15671/WhatsApp Image 2026-01-14 at 22.jpeg',
    features: ['Largest in Collection', 'World-Class Genetics', 'Premium Marbling', 'Exceptional Quality'],
    badge: 'Ultra Premium',
    meatYield: '570 kg',
    isPremium: true
  },
  {
    id: 'cattle-112',
    name: 'বাদশা / Badshah - The Supreme',
    breed: 'Belgian Blue Cross',
    weight: 850,
    age: '4.5 years',
    price: 295000,
    image: 'https://myimgs.org/storage/images/15673/WhatsApp Image 2026-01-14 at 22.jpeg',
    features: ['Muscular Build', 'Superior Quality', 'Premium Genetics', 'Excellent Health'],
    badge: 'Ultra Premium',
    meatYield: '550 kg',
    isPremium: true
  }
];

const cattleList = [
  {
    id: 'cattle-101',
    name: 'শবন / Shobon',
    breed: 'Natural Deshi Cow',
    weight: 450,
    age: '2.5 years',
    price: 155000,
    image: '/image/Cow1.png',
    features: ['Natural Breed', 'Healthy & Active', 'Farm Raised'],
    badge: 'Featured',
    meatYield: '290 kg'
  },
  {
    id: 'cattle-102',
    name: 'পদ্মা / Padma',
    breed: 'Natural Deshi Cross Cow',
    weight: 480,
    age: '2.5 years',
    price: 165000,
    image: '/image/Cow2.png',
    features: ['Natural Cross Breed', 'Healthy & Active', 'Farm Raised'],
    badge: 'Featured',
    meatYield: '305 kg'
  },
  {
    id: 'cattle-103',
    name: 'কাল্লু / Kallu',
    breed: 'Natural Deshi Cross Cow',
    weight: 500,
    age: '3 years',
    price: 172000,
    image: 'https://myimgs.org/storage/images/15395/WhatsApp Image 2026-01-12 at 01.jpeg',
    features: ['Natural Cross Breed', 'Healthy & Active', 'Farm Raised'],
    badge: 'Featured',
    meatYield: '320 kg'
  },
  {
    id: 'cattle-104',
    name: 'বাহাদুর / Bahadhur',
    breed: 'Natural Deshi Cow',
    weight: 470,
    age: '2.5 years',
    price: 160000,
    image: 'https://myimgs.org/storage/images/15397/WhatsApp Image 2026-01-12 at 01.jpeg',
    features: ['Natural Breed', 'Healthy & Active', 'Farm Raised'],
    badge: 'Featured',
    meatYield: '300 kg'
  },
  {
    id: 'cattle-105',
    name: 'বাহামা বস / Bahama Boss',
    breed: 'Natural Deshi Cross Cow',
    weight: 490,
    age: '3 years',
    price: 168000,
    image: 'https://myimgs.org/storage/images/15658/WhatsApp Image 2026-01-14 at 20.jpeg',
    features: ['Natural Cross Breed', 'Healthy & Active', 'Farm Raised'],
    badge: 'Featured',
    meatYield: '310 kg'
  },
  {
    id: 'cattle-106',
    name: 'লম্বু / Lambu',
    breed: 'Natural Deshi Cow',
    weight: 460,
    age: '2.5 years',
    price: 158000,
    image: 'https://myimgs.org/storage/images/15656/WhatsApp Image 2026-01-14 at 19.jpeg',
    features: ['Natural Breed', 'Healthy & Active', 'Farm Raised'],
    badge: 'Featured',
    meatYield: '295 kg'
  },
  {
    id: 'cattle-107',
    name: 'ব্ল্যাক ডায়মন্ড / Black Diamond',
    breed: 'Premium Black Cross',
    weight: 520,
    age: '3 years',
    price: 190000,
    image: 'https://myimgs.org/storage/images/15660/WhatsApp Image 2026-01-14 at 20.jpeg',
    features: ['Premium Quality', 'Strong Build', 'Excellent Meat Quality'],
    badge: 'Featured',
    meatYield: '335 kg'
  },
  {
    id: 'cattle-108',
    name: 'রাজকুমার / Rajkumar',
    breed: 'Premium Deshi Cross',
    weight: 510,
    age: '3 years',
    price: 178000,
    image: 'https://myimgs.org/storage/images/15663/WhatsApp Image 2026-01-14 at 21.jpeg',
    features: ['Strong Build', 'Well Fed', 'Healthy & Active'],
    badge: 'Featured',
    meatYield: '325 kg'
  },
  {
    id: 'cattle-109',
    name: 'ছোট সাহেব / Choto Saheb',
    breed: 'Premium Deshi',
    weight: 530,
    age: '3 years',
    price: 185000,
    image: 'https://myimgs.org/storage/images/15665/WhatsApp Image 2026-01-14 at 21.jpeg',
    features: ['Strong Build', 'Well Fed', 'Healthy & Active'],
    badge: 'Featured',
    meatYield: '340 kg'
  }
];

const badgeColors: { [key: string]: string } = {
  'Featured': 'bg-[#2E6B3F]',
  'New': 'bg-yellow-500',
  'Ultra Premium': 'bg-[#FFD700]'
};

export function EidCattlePreOrder() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCattle, setSelectedCattle] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPreOrderFormOpen, setIsPreOrderFormOpen] = useState(false);
  const [cattleForPreOrder, setCattleForPreOrder] = useState<any>(null);
  const [addedToCartId, setAddedToCartId] = useState<string | null>(null);

  // Use cart context
  const { addToCart } = useCart();

  const displayedCattle = showAll ? cattleList : cattleList.slice(0, 4);

  const handlePreOrder = (cattle: any) => {
    // Add to cart instead of opening form directly
    addToCart(cattle);

    // Show local notification near the card
    setAddedToCartId(cattle.id);
    setTimeout(() => setAddedToCartId(null), 3000);

    toast.success(
      `${cattle.name} added to cart! Please go to cart to complete pre-order information.`,
      {
        duration: 5000,
        action: {
          label: 'View Cart',
          onClick: () => {
            // Trigger cart open - we'll need to pass this from parent
            const cartButton = document.querySelector('[data-cart-button]') as HTMLElement;
            if (cartButton) cartButton.click();
          }
        }
      }
    );
  };

  const closePreOrderForm = () => {
    setIsPreOrderFormOpen(false);
    setCattleForPreOrder(null);
  };

  const openModal = (cattle: any) => {
    setSelectedCattle(cattle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCattle(null), 300);
  };

  const handleCall = () => {
    window.location.href = 'tel:+88001924900128';
  };

  const handleViewMap = () => {
    window.open('https://maps.google.com/?q=Bhakurta,Savar,Dhaka,Bangladesh', '_blank');
  };

  return (
    <div className="py-3 md:py-8 bg-gradient-to-b from-[#EAF4EC] to-white">
      <div className="container mx-auto px-3 md:px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-3 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block relative bg-gradient-to-r from-[#2E6B3F] to-[#1f4a2a] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold mb-2 md:mb-4 text-sm md:text-base shadow-lg border-2 border-yellow-400"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-300/30 to-yellow-400/20 rounded-full"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.span
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 4px 20px rgba(46, 107, 63, 0.2)",
                  "0 6px 25px rgba(46, 107, 63, 0.3)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            <span className="relative flex items-center gap-2">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                🎯
              </motion.span>
              Eid al-Adha 2026 Pre-Booking
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-yellow-400 rounded-full"
              />
            </span>
          </motion.div>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1.5 md:mb-3">
            Premium Qurbani Cattle
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-[10px] md:text-sm px-4 leading-snug md:leading-normal">
            Pre-book healthy, halal-certified cattle for Eid al-Adha. Limited availability.
          </p>
        </motion.div>

        {/* ULTRA PREMIUM COLLECTION - Best in Class */}
        <div className="mb-16 max-w-7xl mx-auto" id="ultra-premium-cattle">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-gray-900 px-6 md:px-8 py-2 md:py-3 rounded-full font-bold mb-2 md:mb-3 shadow-xl border-2 border-yellow-600">
              <Crown size={20} className="md:w-6 md:h-6 text-gray-900" />
              <span className="text-base md:text-lg">ULTRA PREMIUM COLLECTION</span>
              <Trophy size={20} className="md:w-6 md:h-6 text-gray-900" />
            </div>
            <p className="text-gray-700 font-semibold text-sm md:text-base">
              🏆 Our Finest & Largest Cattle - World-Class Quality 🏆
            </p>
          </motion.div>

          {/* PYRAMID LAYOUT: Top = Lal Bahadhur (Best), Bottom = Raja + Badshah */}
          <PremiumCattleCards onAddToCart={handlePreOrder} openModal={openModal} />

          {/* Premium Collection Info */}
          <motion.div
            className="mt-10 bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 border-2 border-yellow-400 rounded-2xl p-6 md:p-8 text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-gray-800">
              <div className="flex items-center gap-2 md:gap-3">
                <Trophy size={20} className="md:w-6 md:h-6 text-yellow-600" />
                <span className="font-bold text-sm md:text-base">Exhibition Quality</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-yellow-400"></div>
              <div className="flex items-center gap-2 md:gap-3">
                <Award size={20} className="md:w-6 md:h-6 text-yellow-600" />
                <span className="font-bold text-sm md:text-base">World-Class Genetics</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-yellow-400"></div>
              <div className="flex items-center gap-2 md:gap-3">
                <Crown size={20} className="md:w-6 md:h-6 text-yellow-600" />
                <span className="font-bold text-sm md:text-base">Limited Availability</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Regular Collection Header */}
        <div className="text-center mb-8 mt-12" id="standard-cattle">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Premium Standard Collection
          </h3>
          <p className="text-gray-600 text-sm">
            High-quality cattle perfect for your Qurbani needs
          </p>
        </div>

        {/* Cattle Grid - Horizontal scroll on mobile, grid on desktop */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-5 max-w-7xl mx-auto">
          {/* Mobile: Horizontal Scroll */}
          <div className="lg:hidden flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-3 -mx-3">
            {displayedCattle.map((cattle, index) => (
              <div
                key={cattle.id}
                className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 cursor-pointer rounded-tl-[14px] rounded-tr-[40px] rounded-bl-[14px] rounded-br-[14px] flex-shrink-0 w-[280px] snap-center"
                onClick={() => openModal(cattle)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={cattle.image}
                    alt={cattle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`${badgeColors[cattle.badge]} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                      {cattle.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 px-3 py-1 rounded-full">
                    <p className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                      <Scale size={12} />
                      {cattle.weight} kg
                    </p>
                  </div>
                  {/* Info Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Info size={32} className="mx-auto mb-2" />
                      <p className="text-sm font-semibold">Click for Details</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 bg-gradient-to-b from-white to-gray-50 relative">
                  {/* "Check Cart" Notification Badge */}
                  <AnimatePresence>
                    {addedToCartId === cattle.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.8 }}
                        className="absolute -top-2 right-4 bg-green-500 text-white px-3 py-1 rounded-full shadow-lg z-10 flex items-center gap-1"
                      >
                        <CheckCircle2 size={14} />
                        <span className="text-xs font-bold">Check Cart! 🛒</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <h3 className="font-bold text-gray-900 mb-1 text-lg">{cattle.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{cattle.breed}</p>

                  <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="text-gray-500">Age</p>
                      <p className="font-semibold text-gray-900">{cattle.age}</p>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-gray-500">Meat Yield</p>
                      <p className="font-semibold text-gray-900">{cattle.meatYield}</p>
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-4">
                    {cattle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 size={14} className="text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-2xl font-bold text-[#2E6B3F] text-center mb-3">
                      ৳{cattle.price.toLocaleString()}
                    </p>
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Button
                        className="w-full bg-[#2E6B3F] hover:bg-[#1f4a2a] text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePreOrder(cattle);
                        }}
                      >
                        <Calendar className="mr-2" size={16} />
                        Pre-Order Now
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Grid */}
          <div className="hidden lg:contents">
            {displayedCattle.map((cattle, index) => (
              <div
                key={cattle.id}
                className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 cursor-pointer rounded-tl-[14px] rounded-tr-[40px] rounded-bl-[14px] rounded-br-[14px] hover:-translate-y-2"
                onClick={() => openModal(cattle)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={cattle.image}
                    alt={cattle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`${badgeColors[cattle.badge]} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                      {cattle.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 px-3 py-1 rounded-full">
                    <p className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                      <Scale size={12} />
                      {cattle.weight} kg
                    </p>
                  </div>
                  {/* Info Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Info size={32} className="mx-auto mb-2" />
                      <p className="text-sm font-semibold">Click for Details</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 relative">
                  {/* "Check Cart" Notification Badge */}
                  <AnimatePresence>
                    {addedToCartId === cattle.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.8 }}
                        className="absolute -top-2 right-4 bg-green-500 text-white px-3 py-1.5 rounded-full shadow-lg z-10 flex items-center gap-1.5"
                      >
                        <CheckCircle2 size={16} />
                        <span className="text-sm font-bold">Check Cart! 🛒</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-[#2E6B3F] transition-colors">
                    {cattle.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{cattle.breed}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500">Age</p>
                      <p className="font-semibold text-gray-900">{cattle.age}</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500">Meat Yield</p>
                      <p className="font-semibold text-gray-900">{cattle.meatYield}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {cattle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle2 size={12} className="text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#2E6B3F]">
                        ৳{cattle.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      ৳{Math.round(cattle.price / cattle.weight)} per kg
                    </p>
                  </div>

                  {/* Pre-Order Button */}
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                  >
                    <Button
                      className="w-full bg-[#2E6B3F] hover:bg-[#1f4a2a] text-white font-semibold"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePreOrder(cattle);
                      }}
                    >
                      <ShoppingCart size={16} className="mr-2" />
                      Pre-Order Now
                    </Button>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show More Button */}
        {cattleList.length > 4 && (
          <div className="text-center mt-8">
            <Button
              className="bg-[#2E6B3F] hover:bg-[#1f4a2a] text-white font-semibold"
              size="sm"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        )}

        {/* Bottom Info */}
        <div className="mt-12 bg-gradient-to-r from-[#2E6B3F] to-[#1f4a2a] text-white p-8 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">📞 Need Help Choosing?</h3>
          <p className="text-center text-green-100 mb-6">
            Our cattle experts are available to help you select the perfect animal for your Qurbani.
            Call us or visit our farm for inspection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
              📞 Call: 01924900128
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white/20"
              onClick={() => window.open('https://maps.google.com/?q=Bhakurta,Savar,Dhaka,Bangladesh', '_blank')}
            >
              📍 Visit Our Farm - Bhakurta, Savar
            </Button>
          </div>
        </div>

        {/* Terms */}
        <div className="mt-8 text-center text-sm text-gray-600 max-w-3xl mx-auto">
          <p className="mb-2">
            <strong className="text-gray-900">Pre-Order Terms:</strong> 30% advance payment required to book.
            Balance payment before Eid. Free delivery within Dhaka city. All animals are vet-checked and healthy.
          </p>
          <p className="text-xs text-gray-500">
            * Prices may vary based on market conditions. Final weight may vary ±5%. Photos are for reference only.
          </p>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCattle && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="min-h-screen w-full flex items-center justify-center p-4">
              <motion.div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl relative"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Large Image */}
                <div className="relative overflow-hidden h-64 sm:h-80 md:h-96 rounded-t-2xl bg-gray-100">
                  <img
                    src={selectedCattle.image}
                    alt={selectedCattle.name}
                    className="w-full h-full object-contain cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLightboxOpen(true);
                      setZoomLevel(1);
                    }}
                  />

                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-20"
                    onClick={closeModal}
                  >
                    <X size={24} className="text-gray-700" />
                  </button>

                  <div className="absolute top-6 left-6">
                    <span className={`${selectedCattle.badge === 'Ultra Premium' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900' : badgeColors[selectedCattle.badge] + ' text-white'} text-sm font-bold px-4 py-2 rounded-full shadow-xl`}>
                      {selectedCattle.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-full shadow-lg">
                    <p className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      <Scale size={16} />
                      {selectedCattle.weight} kg
                    </p>
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedCattle.name}</h2>
                    <p className="text-lg text-gray-600">{selectedCattle.breed}</p>
                    <div className="mt-4 flex items-baseline gap-3">
                      <span className="text-4xl font-bold text-[#2E6B3F]">
                        ৳{selectedCattle.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">
                        (৳{Math.round(selectedCattle.price / selectedCattle.weight)} per kg)
                      </span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-[#EAF4EC] to-white p-4 rounded-xl border border-[#2E6B3F]/20">
                      <p className="text-xs text-gray-600 mb-1">Weight</p>
                      <p className="text-xl font-bold text-[#2E6B3F]">{selectedCattle.weight} kg</p>
                    </div>
                    <div className="bg-gradient-to-br from-[#EAF4EC] to-white p-4 rounded-xl border border-[#2E6B3F]/20">
                      <p className="text-xs text-gray-600 mb-1">Age</p>
                      <p className="text-xl font-bold text-[#2E6B3F]">{selectedCattle.age}</p>
                    </div>
                    <div className="bg-gradient-to-br from-[#EAF4EC] to-white p-4 rounded-xl border border-[#2E6B3F]/20">
                      <p className="text-xs text-gray-600 mb-1">Meat Yield</p>
                      <p className="text-xl font-bold text-[#2E6B3F]">{selectedCattle.meatYield}</p>
                    </div>
                    <div className="bg-gradient-to-br from-[#EAF4EC] to-white p-4 rounded-xl border border-[#2E6B3F]/20">
                      <p className="text-xs text-gray-600 mb-1">Code</p>
                      <p className="text-xl font-bold text-[#2E6B3F]">{selectedCattle.id.split('-')[1]}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Features & Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedCattle.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                          <div className="bg-green-500 rounded-full p-1 flex-shrink-0">
                            <CheckCircle2 size={16} className="text-white" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-6"></div>

                  {/* Action Buttons */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <Button
                      className="bg-gradient-to-r from-[#2E6B3F] to-[#1f4a2a] hover:from-[#1f4a2a] hover:to-[#2E6B3F] text-white font-bold shadow-lg"
                      size="lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePreOrder(selectedCattle);
                        closeModal();
                      }}
                    >
                      <ShoppingCart size={20} className="mr-2" />
                      Pre-Order Now
                    </Button>

                    <Button
                      className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-gray-900 font-bold shadow-lg"
                      size="lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCall();
                      }}
                    >
                      <Phone size={20} className="mr-2" />
                      Call Now
                    </Button>

                    <Button
                      variant="outline"
                      className="border-2 border-[#2E6B3F] text-[#2E6B3F] hover:bg-[#EAF4EC] font-bold shadow-lg"
                      size="lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewMap();
                      }}
                    >
                      <MapPin size={20} className="mr-2" />
                      View Location
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 bg-gradient-to-r from-[#EAF4EC] to-white p-4 rounded-xl border border-[#2E6B3F]/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-[#2E6B3F]" />
                        <span className="font-semibold">01924900128</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#2E6B3F]" />
                        <span className="font-semibold">Bhakurta, Savar, Dhaka</span>
                      </div>
                    </div>
                  </div>

                  {/* Terms Note */}
                  <p className="mt-4 text-xs text-gray-500 text-center">
                    📝 30% advance payment required. Free delivery within Dhaka. Vet-checked and halal certified.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && selectedCattle && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors z-20"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X size={28} className="text-gray-700" />
            </button>

            {/* Zoom Controls */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl z-20">
              <button
                className="bg-[#2E6B3F] hover:bg-[#1f4a2a] text-white rounded-full p-2 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel(prev => Math.max(1, prev - 0.25));
                }}
                disabled={zoomLevel <= 1}
              >
                <ZoomOut size={20} />
              </button>

              <span className="text-sm font-bold text-gray-700 min-w-[60px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>

              <button
                className="bg-[#2E6B3F] hover:bg-[#1f4a2a] text-white rounded-full p-2 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel(prev => Math.min(3, prev + 0.25));
                }}
                disabled={zoomLevel >= 3}
              >
                <ZoomIn size={20} />
              </button>

              <button
                className="bg-gray-600 hover:bg-gray-700 text-white rounded-full p-2 transition-colors ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel(1);
                }}
              >
                <RotateCw size={20} />
              </button>
            </div>

            {/* Image Container */}
            <div
              className="relative w-full h-full flex items-center justify-center p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedCattle.image}
                alt={selectedCattle.name}
                className="max-w-full max-h-full object-contain cursor-move"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transition: 'transform 0.3s ease-out'
                }}
                drag={zoomLevel > 1}
                dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                dragElastic={0.1}
              />
            </div>

            {/* Image Info */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">{selectedCattle.name}</h3>
              <p className="text-sm text-gray-600">{selectedCattle.breed} • {selectedCattle.weight} kg</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pre-Order Form */}
      {isPreOrderFormOpen && cattleForPreOrder && (
        <CattlePreOrderForm
          isOpen={isPreOrderFormOpen}
          onClose={closePreOrderForm}
          cattle={cattleForPreOrder}
        />
      )}
    </div>
  );
}