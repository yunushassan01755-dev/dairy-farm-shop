import { ShoppingCart, Scale, Calendar, Award, CheckCircle2, TrendingUp, Phone, MapPin, X, Info, ZoomIn, ZoomOut, RotateCw, Crown, Star, Trophy, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from './CartContext';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

// ULTRA PREMIUM COLLECTION - Best in Class
const premiumCattleList = [
  {
    id: 'cattle-110',
    name: 'রাজা / Raja - The King',
    breed: 'Australian Brahman Cross',
    weight: 820,
    age: '4.5 years',
    price: 325000,
    image: '/image/Cow10.jpeg',
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
    image: '/image/Cow11.jpeg',
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
    image: '/image/Cow12.jpeg',
    features: ['Muscular Build', 'Superior Quality', 'Premium Genetics', 'Excellent Health'],
    badge: 'Ultra Premium',
    meatYield: '550 kg',
    isPremium: true
  }
];

export function PremiumCattlePyramid({ onAddToCart, openModal }: { onAddToCart: (cattle: any) => void, openModal: (cattle: any) => void }) {
  return (
    <div className="mb-16 max-w-7xl mx-auto relative">
      {/* Decorative Background Elements - Floating Golden Particles */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full blur-sm"
            style={{
              left: `${5 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Premium Header with Animations */}
      <motion.div
        className="text-center mb-6 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-gray-900 px-6 md:px-8 py-2 md:py-3 rounded-full font-bold mb-2 md:mb-3 shadow-xl border-2 border-yellow-600 relative overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05, y: -2 }}
          animate={{
            boxShadow: [
              "0 10px 40px rgba(234, 179, 8, 0.3)",
              "0 15px 50px rgba(234, 179, 8, 0.5)",
              "0 10px 40px rgba(234, 179, 8, 0.3)",
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* Moving Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            animate={{
              x: ["-200%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />

          {/* Rotating Crown */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Crown size={20} className="md:w-6 md:h-6 text-gray-900 drop-shadow" />
          </motion.div>

          <span className="text-base md:text-lg relative z-10 drop-shadow">ULTRA PREMIUM COLLECTION</span>

          {/* Wobbling Trophy */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 8, -8, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Trophy size={20} className="md:w-6 md:h-6 text-gray-900 drop-shadow" />
          </motion.div>
        </motion.div>

        {/* Pulsing Subtitle */}
        <motion.p
          className="text-gray-700 font-semibold text-sm md:text-base flex items-center justify-center gap-2"
          animate={{
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.span
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🏆
          </motion.span>
          Our Finest & Largest Cattle - World-Class Quality
          <motion.span
            animate={{ rotate: [0, -20, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🏆
          </motion.span>
        </motion.p>
      </motion.div>

      {/* PYRAMID LAYOUT */}
      <div className="space-y-4">
        {/* TOP CARD - Crown Jewel */}
        <TopPremiumCard cattle={premiumCattleList[1]} onAddToCart={onAddToCart} openModal={openModal} />

        {/* BOTTOM CARDS - Side by Side */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-6">
          <BottomPremiumCard cattle={premiumCattleList[0]} onAddToCart={onAddToCart} openModal={openModal} index={0} />
          <BottomPremiumCard cattle={premiumCattleList[2]} onAddToCart={onAddToCart} openModal={openModal} index={1} />
        </div>
      </div>
    </div>
  );
}

// TOP PREMIUM CARD COMPONENT
function TopPremiumCard({ cattle, onAddToCart, openModal }: any) {
  return (
    <motion.div
      className="max-w-4xl mx-auto relative"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
    >
      {/* Animated Glow Behind Card */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 via-red-400/30 to-yellow-400/20 rounded-[2.5rem] blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.7, 0.4],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="group relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-3xl overflow-hidden shadow-2xl border-4 border-red-500 cursor-pointer"
        onClick={() => openModal(cattle)}
        whileHover={{
          y: -12,
          scale: 1.01,
          boxShadow: "0 40px 80px rgba(220, 38, 38, 0.35)",
          borderColor: "rgb(239 68 68)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Rotating Border Light Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-50"
          style={{
            background: "conic-gradient(from 0deg, transparent 0%, rgba(255, 215, 0, 0.6) 25%, transparent 50%, rgba(255, 215, 0, 0.6) 75%, transparent 100%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Crown Jewel Badge */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
          <motion.div
            className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 text-white px-3 py-2 sm:px-6 sm:py-3 md:px-6 md:py-2 rounded-b-2xl sm:rounded-b-3xl md:rounded-b-2xl font-black text-xs sm:text-sm md:text-base shadow-2xl flex items-center gap-1 sm:gap-2 md:gap-2 border-2 sm:border-4 md:border-2 border-yellow-400 relative overflow-hidden"
            animate={{
              boxShadow: [
                "0 10px 35px rgba(234, 179, 8, 0.5)",
                "0 18px 45px rgba(234, 179, 8, 0.8)",
                "0 10px 35px rgba(234, 179, 8, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            {/* Badge Shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{ x: ["-150%", "150%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
            />

            <motion.div
              animate={{
                y: [0, -4, 0],
                rotate: [0, 8, -8, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Crown size={14} className="sm:w-5 sm:h-5 md:w-5 md:h-5 relative z-10" fill="currentColor" />
            </motion.div>
            <span className="hidden sm:inline relative z-10">👑 CROWN JEWEL - BEST 👑</span>
            <span className="sm:hidden relative z-10">👑 BEST 👑</span>
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                rotate: [0, 18, -18, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Trophy size={14} className="sm:w-5 sm:h-5 md:w-5 md:h-5 relative z-10" fill="currentColor" />
            </motion.div>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden h-56 sm:h-72 md:h-64 lg:h-72 mt-10 sm:mt-12 md:mt-10">
          <motion.img
            src={cattle.image}
            alt={cattle.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Sparkling Stars on Hover */}
          <motion.div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${25 + (i % 3) * 20}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.15,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <Sparkles size={16} className="text-yellow-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Badges */}
          <motion.div
            className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-3 md:left-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-3 py-1.5 sm:px-4 sm:py-2 md:px-3 md:py-1.5 rounded-full shadow-2xl border-2 border-yellow-700"
            whileHover={{ scale: 1.1, rotate: 3 }}
            animate={{
              boxShadow: [
                "0 6px 25px rgba(234, 179, 8, 0.4)",
                "0 10px 35px rgba(234, 179, 8, 0.7)",
                "0 6px 25px rgba(234, 179, 8, 0.4)",
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <p className="text-sm sm:text-base md:text-base font-black flex items-center gap-1 sm:gap-2">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Scale size={16} className="sm:w-5 sm:h-5 md:w-5 md:h-5" />
              </motion.div>
              {cattle.weight} kg
            </p>
          </motion.div>

          <motion.div
            className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-3 md:left-3 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 sm:px-4 sm:py-2 md:px-3 md:py-1.5 rounded-full shadow-xl border-2 border-yellow-500"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring" }}
            whileHover={{ scale: 1.08 }}
          >
            <p className="text-xs sm:text-sm md:text-sm font-black">
              CODE: {cattle.id.split('-')[1]}
            </p>
          </motion.div>

          <motion.div
            className="absolute top-10 left-2 sm:top-14 sm:left-4 md:top-11 md:left-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-3 md:py-1 rounded-full shadow-xl font-bold text-[10px] sm:text-xs md:text-xs border border-red-400"
            animate={{
              scale: [1, 1.12, 1],
              boxShadow: [
                "0 6px 20px rgba(220, 38, 38, 0.4)",
                "0 10px 30px rgba(220, 38, 38, 0.7)",
                "0 6px 20px rgba(220, 38, 38, 0.4)",
              ]
            }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <span className="hidden sm:inline">🏆 LARGEST IN COLLECTION</span>
            <span className="sm:hidden">🏆 LARGEST</span>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 md:p-4 bg-gradient-to-br from-white via-yellow-50/50 to-white relative overflow-hidden">
          {/* Subtle Pattern Background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px"
          }} />

          <motion.h3
            className="font-black text-gray-900 text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-2 group-hover:text-yellow-700 transition-colors relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {cattle.name}
          </motion.h3>

          <motion.p
            className="text-sm sm:text-base md:text-base text-gray-700 font-semibold mb-4 sm:mb-5 md:mb-3 flex items-center gap-2 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Award size={16} className="sm:w-5 sm:h-5 md:w-5 md:h-5 text-yellow-600" />
            </motion.div>
            {cattle.breed}
          </motion.p>

          {/* Stats Grid with Stagger Animation */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-2 mb-4 sm:mb-5 md:mb-3 relative z-10">
            {[
              { label: "Age", value: cattle.age, color: "yellow", delay: 0 },
              { label: "Meat", value: cattle.meatYield, color: "yellow", delay: 0.1 },
              { label: "Grade", value: "A+++", color: "red", delay: 0.2 },
              { label: "Rank", value: "#1", color: "red", delay: 0.3 }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className={`${stat.color === 'yellow' ? 'bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-300' : 'bg-gradient-to-br from-red-100 to-red-50 border-red-300'} p-2 sm:p-3 md:p-2 rounded-lg sm:rounded-xl border sm:border-2 relative overflow-hidden`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4 + stat.delay, type: "spring", stiffness: 200 }}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)"
                }}
              >
                <p className="text-gray-600 font-semibold mb-0.5 sm:mb-1 text-[10px] sm:text-xs md:text-xs">{stat.label}</p>
                <p className="font-black text-gray-900 text-xs sm:text-sm md:text-sm">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Features with Icon Rotation */}
          <div className="space-y-1.5 sm:space-y-2 md:space-y-1.5 mb-4 sm:mb-5 md:mb-3 relative z-10">
            {cattle.features.map((feature: string, idx: number) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-sm text-gray-700 font-semibold group/feature"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + idx * 0.1, type: "spring" }}
                whileHover={{ x: 8 }}
              >
                <motion.div
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-0.5 sm:p-1 shadow-md"
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle2 size={12} className="sm:w-4 sm:h-4 md:w-4 md:h-4 text-gray-900" />
                </motion.div>
                {feature}
              </motion.div>
            ))}
          </div>

          {/* Animated Price */}
          <motion.div
            className="mb-4 sm:mb-5 md:mb-3 pb-4 sm:pb-5 md:pb-3 border-t-2 border-yellow-300 pt-4 sm:pt-5 md:pt-3 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-baseline gap-2 justify-center">
              <motion.span
                className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-yellow-600 to-red-600"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                style={{ backgroundSize: "200% auto" }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                ৳{cattle.price.toLocaleString()}
              </motion.span>
            </div>
            <p className="text-xs sm:text-sm md:text-sm text-gray-600 font-semibold mt-1 sm:mt-2 text-center">
              ৳{Math.round(cattle.price / cattle.weight)} per kg
            </p>
            <motion.p
              className="text-xs sm:text-sm md:text-sm text-red-600 font-black mt-2 sm:mt-3 md:mt-2 text-center flex items-center justify-center gap-2"
              animate={{
                opacity: [0.8, 1, 0.8],
                scale: [1, 1.03, 1]
              }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              <motion.span animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 1, repeat: Infinity }}>🔥</motion.span>
              HIGHEST PRICED - MAXIMUM VALUE
              <motion.span animate={{ rotate: [0, -20, 20, 0] }} transition={{ duration: 1, repeat: Infinity }}>🔥</motion.span>
            </motion.p>
          </motion.div>

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="relative z-10"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="w-full font-black shadow-2xl border-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 hover:from-red-700 hover:via-yellow-600 hover:to-red-700 text-white border-yellow-600 text-sm sm:text-base md:text-base lg:text-lg py-4 sm:py-5 md:py-4 relative overflow-hidden group"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(cattle);
                }}
              >
                {/* Button Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <motion.div
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  <Crown size={18} className="sm:w-5 sm:h-5 md:w-5 md:h-5 mr-2 relative z-10 inline" />
                </motion.div>
                <span className="hidden sm:inline relative z-10">Pre-Order Crown Jewel Now</span>
                <span className="sm:hidden relative z-10">Pre-Order Now</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  <Trophy size={18} className="sm:w-5 sm:h-5 md:w-5 md:h-5 ml-2 relative z-10 inline" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// BOTTOM PREMIUM CARDS COMPONENT
function BottomPremiumCard({ cattle, onAddToCart, openModal, index }: any) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 120 }}
    >
      {/* Card Glow */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-br from-yellow-400/15 to-yellow-600/15 rounded-2xl blur-xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [0.98, 1.02, 0.98]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
      />

      <motion.div
        className="group relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-2 md:border-3 border-yellow-400 cursor-pointer"
        onClick={() => openModal(cattle)}
        whileHover={{
          y: -10,
          scale: 1.02,
          borderColor: "rgb(251 191 36)",
          boxShadow: "0 25px 50px rgba(234, 179, 8, 0.3)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Premium Badge */}
        <div className="absolute top-0 right-0 z-10">
          <motion.div
            className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 px-2 py-1 md:px-3 md:py-1.5 rounded-bl-xl md:rounded-bl-2xl font-bold text-[10px] md:text-xs shadow-lg flex items-center gap-1 overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
            />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Star size={12} className="md:w-4 md:h-4 relative z-10" fill="currentColor" />
            </motion.div>
            <span className="hidden sm:inline relative z-10">ULTRA PREMIUM</span>
            <span className="sm:hidden relative z-10">PREMIUM</span>
          </motion.div>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden h-40 sm:h-56 md:h-48 lg:h-56">
          <motion.img
            src={cattle.image}
            alt={cattle.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Floating Particles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + (i % 2) * 30}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}

          <motion.div
            className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-yellow-400 text-gray-900 px-2 py-1 md:px-4 md:py-2 rounded-full shadow-xl border border-yellow-700"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <p className="text-xs md:text-base font-black flex items-center gap-1 md:gap-2">
              <Scale size={14} className="md:w-[18px] md:h-[18px]" />
              {cattle.weight}
            </p>
          </motion.div>

          <motion.div
            className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/95 backdrop-blur-sm text-gray-900 px-2 py-1 md:px-4 md:py-2 rounded-full shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-[10px] md:text-sm font-black">
              {cattle.id.split('-')[1]}
            </p>
          </motion.div>

          <motion.div
            className="absolute top-2 right-2 md:top-4 md:right-4 bg-yellow-400 rounded-full p-1 md:p-2 shadow-xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Crown size={14} className="md:w-5 md:h-5 text-gray-900" fill="currentColor" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-3 md:p-4 bg-gradient-to-br from-white to-yellow-50/30">
          <motion.h3
            className="font-black text-gray-900 text-sm md:text-xl mb-1 md:mb-1.5 group-hover:text-yellow-700 transition-colors leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {cattle.name}
          </motion.h3>
          <p className="text-[10px] md:text-xs text-gray-700 font-semibold mb-3 md:mb-3 flex items-center gap-1 md:gap-2">
            <Award size={12} className="md:w-4 md:h-4 text-yellow-600 flex-shrink-0" />
            <span className="line-clamp-1">{cattle.breed}</span>
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-1.5 md:gap-2 mb-3 md:mb-3">
            {[
              { label: "Age", value: cattle.age },
              { label: "Meat", value: cattle.meatYield },
              { label: "A+++", value: "Grade" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-yellow-100 p-1.5 md:p-2 rounded-md md:rounded-lg border border-yellow-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <p className="text-gray-600 font-semibold text-[9px] md:text-xs">{stat.label}</p>
                <p className="font-black text-gray-900 text-[10px] md:text-sm">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Features - Hidden on mobile */}
          <div className="hidden md:block space-y-1.5 mb-3">
            {cattle.features.slice(0, 2).map((feature: string, featureIdx: number) => (
              <motion.div
                key={featureIdx}
                className="flex items-center gap-2 text-xs text-gray-700 font-semibold"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + featureIdx * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-0.5">
                  <CheckCircle2 size={12} className="text-gray-900" />
                </div>
                {feature}
              </motion.div>
            ))}
          </div>

          {/* Price */}
          <motion.div
            className="mb-3 md:mb-3 pb-3 md:pb-3 border-t border-yellow-300 md:border-t-2 pt-3 md:pt-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-baseline gap-1 justify-center">
              <motion.span
                className="text-lg md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                style={{ backgroundSize: "200% auto" }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ৳{(cattle.price / 1000).toFixed(0)}k
              </motion.span>
            </div>
            <p className="text-[9px] md:text-xs text-gray-600 font-semibold mt-0.5 md:mt-1 text-center">
              ৳{Math.round(cattle.price / cattle.weight)}/kg
            </p>
          </motion.div>

          {/* Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="w-full font-black shadow-xl border md:border-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 border-yellow-700 text-[10px] md:text-sm py-3 md:py-4 relative overflow-hidden"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(cattle);
              }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
              />
              <ShoppingCart size={14} className="md:w-4 md:h-4 mr-1 md:mr-2 relative z-10" />
              <span className="hidden sm:inline relative z-10">Pre-Order Premium Now</span>
              <span className="sm:hidden relative z-10">Pre-Order</span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
