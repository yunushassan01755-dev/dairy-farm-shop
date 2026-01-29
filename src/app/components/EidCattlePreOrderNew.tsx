import { ShoppingCart, Scale, Calendar, Award, CheckCircle2, TrendingUp, Phone, MapPin, X, Info, ZoomIn, ZoomOut, RotateCw, Crown, Star, Trophy } from 'lucide-react';
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

// THIS IS PYRAMID LAYOUT EXAMPLE:
function PremiumCattleSection({ openModal, handlePreOrder }) {
  const lalBahadhur = premiumCattleList[1]; // Most premium - top of pyramid
  const raja = premiumCattleList[0]; // Bottom left
  const badshah = premiumCattleList[2]; // Bottom right

  return (
    <div className="mb-16 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold mb-4 shadow-xl border-2 border-yellow-600">
          <Crown size={28} className="text-gray-900" />
          <span className="text-xl">ULTRA PREMIUM COLLECTION</span>
          <Trophy size={28} className="text-gray-900" />
        </div>
        <p className="text-gray-700 font-semibold text-lg">
          🏆 Our Finest & Largest Cattle - World-Class Quality 🏆
        </p>
      </motion.div>

      {/* PYRAMID LAYOUT */}
      <div className="space-y-8">
        {/* TOP: Most Premium - Lal Bahadhur (Larger Card) */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="group relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-6 border-red-500 cursor-pointer"
            onClick={() => openModal(lalBahadhur)}
          >
            {/* CROWN JEWEL Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
              <motion.div
                className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 text-white px-8 py-4 rounded-b-3xl font-black text-lg shadow-2xl flex items-center gap-3 border-4 border-yellow-400"
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(234, 179, 8, 0.5)",
                    "0 15px 40px rgba(234, 179, 8, 0.8)",
                    "0 10px 30px rgba(234, 179, 8, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Crown size={24} fill="currentColor" />
                👑 CROWN JEWEL - BEST IN COLLECTION 👑
                <Trophy size={24} fill="currentColor" />
              </motion.div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden h-80 md:h-[500px] mt-16">
              <img
                src={lalBahadhur.image}
                alt={lalBahadhur.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Weight Badge */}
              <div className="absolute bottom-6 left-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full shadow-2xl border-2 border-yellow-700">
                <p className="text-xl font-black flex items-center gap-2">
                  <Scale size={24} />
                  {lalBahadhur.weight} kg
                </p>
              </div>

              {/* CODE Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full shadow-2xl border-2 border-yellow-500">
                <p className="text-base font-black">
                  CODE: {lalBahadhur.id.split('-')[1]}
                </p>
              </div>

              {/* Largest Badge */}
              <motion.div
                className="absolute top-20 left-6 bg-red-600 text-white px-4 py-2 rounded-full shadow-xl font-bold text-sm"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🏆 LARGEST IN COLLECTION
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8 bg-gradient-to-br from-white to-yellow-50/30">
              <h3 className="font-black text-gray-900 text-3xl md:text-4xl mb-3 group-hover:text-yellow-700 transition-colors">
                {lalBahadhur.name}
              </h3>
              <p className="text-base md:text-lg text-gray-700 font-semibold mb-6 flex items-center gap-2">
                <Award size={24} className="text-yellow-600" />
                {lalBahadhur.breed}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-yellow-100 p-4 rounded-xl border-2 border-yellow-300">
                  <p className="text-gray-600 font-semibold mb-1 text-sm">Age</p>
                  <p className="font-black text-gray-900 text-lg">{lalBahadhur.age}</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-xl border-2 border-yellow-300">
                  <p className="text-gray-600 font-semibold mb-1 text-sm">Meat</p>
                  <p className="font-black text-gray-900 text-lg">{lalBahadhur.meatYield}</p>
                </div>
                <div className="bg-red-100 p-4 rounded-xl border-2 border-red-300">
                  <p className="text-gray-600 font-semibold mb-1 text-sm">Grade</p>
                  <p className="font-black text-gray-900 text-lg">A+++</p>
                </div>
                <div className="bg-red-100 p-4 rounded-xl border-2 border-red-300">
                  <p className="text-gray-600 font-semibold mb-1 text-sm">Rank</p>
                  <p className="font-black text-gray-900 text-lg">#1</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {lalBahadhur.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-base text-gray-700 font-semibold">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-1">
                      <CheckCircle2 size={18} className="text-gray-900" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-t-2 border-yellow-300 pt-6">
                <div className="flex items-baseline gap-2 justify-center">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-600 to-red-600">
                    ৳{lalBahadhur.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-base text-gray-600 font-semibold mt-2 text-center">
                  ৳{Math.round(lalBahadhur.price / lalBahadhur.weight)} per kg
                </p>
                <motion.p
                  className="text-base text-red-600 font-black mt-3 text-center"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🔥 HIGHEST PRICED - MAXIMUM VALUE 🔥
                </motion.p>
              </div>

              {/* Pre-Order Button */}
              <Button
                className="w-full font-black shadow-2xl border-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 hover:from-red-700 hover:via-yellow-600 hover:to-red-700 text-white border-yellow-600 text-xl py-7"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePreOrder(lalBahadhur);
                }}
              >
                <Crown size={24} className="mr-2" />
                Pre-Order Crown Jewel Now
                <Trophy size={24} className="ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM ROW: Raja + Badshah (Two Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[raja, badshah].map((cattle, idx) => (
            <motion.div
              key={cattle.id}
              className="group relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-yellow-400 cursor-pointer"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => openModal(cattle)}
            >
              {/* Premium Badge */}
              <div className="absolute top-0 right-0 z-10">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 px-4 py-2 rounded-bl-2xl font-bold text-sm shadow-lg flex items-center gap-1">
                  <Star size={16} fill="currentColor" />
                  ULTRA PREMIUM
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden h-64 md:h-80">
                <img
                  src={cattle.image}
                  alt={cattle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Weight Badge */}
                <div className="absolute bottom-4 left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full shadow-xl">
                  <p className="text-base font-black flex items-center gap-2">
                    <Scale size={18} />
                    {cattle.weight} kg
                  </p>
                </div>

                {/* CODE Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full shadow-xl">
                  <p className="text-sm font-black">
                    CODE: {cattle.id.split('-')[1]}
                  </p>
                </div>

                {/* Crown Icon */}
                <div className="absolute top-4 right-4 bg-yellow-400 rounded-full p-2 shadow-xl">
                  <Crown size={20} className="text-gray-900" fill="currentColor" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-br from-white to-yellow-50/30">
                <h3 className="font-black text-gray-900 text-2xl mb-2 group-hover:text-yellow-700 transition-colors">
                  {cattle.name}
                </h3>
                <p className="text-sm text-gray-700 font-semibold mb-5 flex items-center gap-2">
                  <Award size={16} className="text-yellow-600" />
                  {cattle.breed}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300">
                    <p className="text-gray-600 font-semibold text-xs">Age</p>
                    <p className="font-black text-gray-900">{cattle.age}</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300">
                    <p className="text-gray-600 font-semibold text-xs">Meat</p>
                    <p className="font-black text-gray-900">{cattle.meatYield}</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300">
                    <p className="text-gray-600 font-semibold text-xs">Grade</p>
                    <p className="font-black text-gray-900">A+++</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  {cattle.features.slice(0, 2).map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-2 text-sm text-gray-700 font-semibold">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-0.5">
                        <CheckCircle2 size={14} className="text-gray-900" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="mb-5 pb-5 border-t-2 border-yellow-300 pt-5">
                  <div className="flex items-baseline gap-2 justify-center">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800">
                      ৳{cattle.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 font-semibold mt-1 text-center">
                    ৳{Math.round(cattle.price / cattle.weight)} per kg
                  </p>
                </div>

                {/* Pre-Order Button */}
                <Button
                  className="w-full font-black shadow-xl border-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 border-yellow-700 text-base py-6"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePreOrder(cattle);
                  }}
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Pre-Order Premium Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Collection Info */}
      <motion.div
        className="mt-10 bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 border-2 border-yellow-400 rounded-2xl p-8 text-center shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-800">
          <div className="flex items-center gap-3">
            <Trophy size={24} className="text-yellow-600" />
            <span className="font-bold text-base">Exhibition Quality</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-yellow-400"></div>
          <div className="flex items-center gap-3">
            <Award size={24} className="text-yellow-600" />
            <span className="font-bold text-base">World-Class Genetics</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-yellow-400"></div>
          <div className="flex items-center gap-3">
            <Crown size={24} className="text-yellow-600" />
            <span className="font-bold text-base">Limited Availability</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export { PremiumCattleSection };
