import { ShoppingCart, Scale, Award, CheckCircle2, Crown, Star, Trophy } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

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

export function PremiumCattleCards({ onAddToCart, openModal }: { onAddToCart: (cattle: any) => void, openModal: (cattle: any) => void }) {
  const topCattle = premiumCattleList[1]; // Lal Bahadhur
  const bottomCattle = [premiumCattleList[0], premiumCattleList[2]]; // Raja, Badshah

  return (
    <div className="space-y-4">
      {/* TOP CARD - Crown Jewel */}
      <motion.div
        className="max-w-4xl mx-auto relative"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated glow */}
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 via-red-400/30 to-yellow-400/20 rounded-[2.5rem] blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="group relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-3xl overflow-hidden shadow-2xl border-4 border-red-500 cursor-pointer"
          onClick={() => openModal(topCattle)}
          whileHover={{
            y: -12,
            scale: 1.01,
            boxShadow: "0 40px 80px rgba(220, 38, 38, 0.35)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Rotating border light */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-40 pointer-events-none"
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
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
              />
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-b-2xl"></div>
              <Crown size={16} className="sm:w-6 sm:h-6 md:w-5 md:h-5 relative z-10" fill="currentColor" />
              <span className="relative z-10">CROWN JEWEL</span>
              <Trophy size={16} className="sm:w-6 sm:h-6 md:w-5 md:h-5 relative z-10" fill="currentColor" />
            </motion.div>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden h-64 sm:h-80 md:h-96 bg-gray-100 mt-6 sm:mt-8 md:mt-6">
            <motion.img
              src={topCattle.image}
              alt={topCattle.name}
              className="w-full h-full object-contain"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Floating sparkles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  scale: [0, 2, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}

            <motion.div
              className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 md:bottom-4 md:left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 sm:px-6 sm:py-3 md:px-4 md:py-2 rounded-full shadow-2xl border-2 sm:border-4 md:border-2 border-yellow-400 relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-full"></div>
              <p className="text-sm sm:text-lg md:text-base font-black flex items-center gap-1 sm:gap-3 md:gap-2 relative z-10">
                <Scale size={16} className="sm:w-6 sm:h-6 md:w-5 md:h-5" />
                {topCattle.weight} kg
              </p>
            </motion.div>

            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 md:top-4 md:left-4 bg-white text-gray-900 px-3 py-2 sm:px-6 sm:py-3 md:px-4 md:py-2 rounded-full shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-full"></div>
              <p className="text-xs sm:text-base md:text-sm font-black relative z-10">
                #{topCattle.id.split('-')[1]}
              </p>
            </div>

            <div className="absolute top-3 right-3 sm:top-6 sm:right-6 md:top-4 md:right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-2 sm:p-3 md:p-2 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
              <Crown size={20} className="sm:w-8 sm:h-8 md:w-6 md:h-6 text-gray-900 relative z-10" fill="currentColor" />
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-8 md:p-6 bg-gradient-to-br from-white to-yellow-50/30 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

            <h3 className="font-black text-gray-900 text-xl sm:text-3xl md:text-2xl mb-1 sm:mb-3 md:mb-2 group-hover:text-red-600 transition-colors">
              {topCattle.name}
            </h3>
            <p className="text-xs sm:text-base md:text-sm text-gray-700 font-semibold mb-4 sm:mb-6 md:mb-4 flex items-center gap-1 sm:gap-3 md:gap-2">
              <Award size={14} className="sm:w-6 sm:h-6 md:w-5 md:h-5 text-red-600 flex-shrink-0" />
              {topCattle.breed}
            </p>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-3 mb-4 sm:mb-6 md:mb-4">
              {[
                { label: "Age", value: topCattle.age },
                { label: "Meat Yield", value: topCattle.meatYield },
                { label: "Grade", value: "A+++" },
                { label: "Status", value: "Premium" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-red-100 to-yellow-50 p-2 sm:p-4 md:p-3 rounded-lg sm:rounded-2xl md:rounded-xl border-2 sm:border-4 md:border-2 border-red-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-lg"></div>
                  <p className="text-gray-600 font-semibold text-[10px] sm:text-sm md:text-xs mb-0.5 sm:mb-1 md:mb-0.5 relative z-10">{stat.label}</p>
                  <p className="font-black text-gray-900 text-xs sm:text-lg md:text-sm relative z-10">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-2 sm:space-y-3 md:space-y-2 mb-4 sm:mb-6 md:mb-4">
              {topCattle.features.map((feature, featureIdx) => (
                <div key={featureIdx} className="flex items-center gap-2 sm:gap-4 md:gap-3 text-xs sm:text-base md:text-sm text-gray-700 font-semibold">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-full p-0.5 sm:p-1 md:p-0.5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
                    <CheckCircle2 size={12} className="sm:w-5 sm:h-5 md:w-4 md:h-4 text-white relative z-10" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            <div className="mb-4 sm:mb-6 md:mb-4 pb-4 sm:pb-6 md:pb-4 border-t-2 sm:border-t-4 md:border-t-2 border-red-300 pt-4 sm:pt-6 md:pt-4">
              <div className="flex items-baseline gap-1 sm:gap-2 md:gap-1 justify-center">
                <motion.span
                  className="text-2xl sm:text-5xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  style={{ backgroundSize: "200% auto" }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  ৳{topCattle.price.toLocaleString()}
                </motion.span>
              </div>
              <p className="text-xs sm:text-base md:text-sm text-gray-600 font-semibold mt-1 sm:mt-2 md:mt-1 text-center">
                Premium per kg: ৳{Math.round(topCattle.price / topCattle.weight)}/kg
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="w-full font-black shadow-2xl border-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 hover:from-red-700 hover:via-yellow-600 hover:to-red-700 text-white border-yellow-600 text-sm sm:text-base md:text-base lg:text-lg py-4 sm:py-5 md:py-4 relative overflow-hidden group"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(topCattle);
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <Crown size={18} className="sm:w-5 sm:h-5 md:w-5 md:h-5 mr-2 relative z-10" />
                <span className="hidden sm:inline relative z-10">Pre-Order Crown Jewel Now</span>
                <span className="sm:hidden relative z-10">Pre-Order Now</span>
                <Trophy size={18} className="sm:w-5 sm:h-5 md:w-5 md:h-5 ml-2 relative z-10" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* BOTTOM CARDS */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-6">
        {bottomCattle.map((cattle, idx) => (
          <motion.div
            key={cattle.id}
            className="relative"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            {/* Card glow */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-br from-yellow-400/15 to-yellow-600/15 rounded-2xl blur-xl"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [0.98, 1.02, 0.98]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
            />

            <motion.div
              className="group relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-2 md:border-3 border-yellow-400 cursor-pointer"
              onClick={() => openModal(cattle)}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(234, 179, 8, 0.3)"
              }}
            >
              {/* Premium Badge */}
              <div className="absolute top-0 right-0 z-10">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 px-2 py-1 md:px-3 md:py-1.5 rounded-bl-xl md:rounded-bl-2xl font-bold text-[10px] md:text-xs shadow-lg flex items-center gap-1 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
                  />
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-tl-xl"></div>
                  <Star size={12} className="md:w-4 md:h-4 relative z-10" fill="currentColor" />
                  <span className="hidden sm:inline relative z-10">ULTRA PREMIUM</span>
                  <span className="sm:hidden relative z-10">PREMIUM</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden h-40 sm:h-56 md:h-48 lg:h-56 bg-gray-100">
                <motion.img
                  src={cattle.image}
                  alt={cattle.name}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Sparkles */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${30 + (i % 2) * 30}%`,
                    }}
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}

                <motion.div
                  className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-2 py-1 md:px-4 md:py-2 rounded-full shadow-xl border border-yellow-700 relative overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-full"></div>
                  <p className="text-xs md:text-base font-black flex items-center gap-1 md:gap-2 relative z-10">
                    <Scale size={14} className="md:w-[18px] md:h-[18px]" />
                    {cattle.weight}
                  </p>
                </motion.div>

                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white text-gray-900 px-2 py-1 md:px-4 md:py-2 rounded-full shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-full"></div>
                  <p className="text-[10px] md:text-sm font-black relative z-10">
                    {cattle.id.split('-')[1]}
                  </p>
                </div>

                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-yellow-400 rounded-full p-1 md:p-2 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
                  <Crown size={14} className="md:w-5 md:h-5 text-gray-900 relative z-10" fill="currentColor" />
                </div>
              </div>

              {/* Content */}
              <div className="p-3 md:p-4 bg-gradient-to-br from-white to-yellow-50/30 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>

                <h3 className="font-black text-gray-900 text-sm md:text-xl mb-1 md:mb-1.5 group-hover:text-yellow-700 transition-colors leading-tight">
                  {cattle.name}
                </h3>
                <p className="text-[10px] md:text-xs text-gray-700 font-semibold mb-3 md:mb-3 flex items-center gap-1 md:gap-2">
                  <Award size={12} className="md:w-4 md:h-4 text-yellow-600 flex-shrink-0" />
                  <span className="line-clamp-1">{cattle.breed}</span>
                </p>

                <div className="grid grid-cols-3 gap-1.5 md:gap-2 mb-3 md:mb-3">
                  {[
                    { label: "Age", value: cattle.age },
                    { label: "Meat", value: cattle.meatYield },
                    { label: "A+++", value: "Grade" }
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-1.5 md:p-2 rounded-md md:rounded-lg border border-yellow-300 relative overflow-hidden"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-md"></div>
                      <p className="text-gray-600 font-semibold text-[9px] md:text-xs relative z-10">{stat.label}</p>
                      <p className="font-black text-gray-900 text-[10px] md:text-sm relative z-10">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="hidden md:block space-y-1.5 mb-3">
                  {cattle.features.slice(0, 2).map((feature: string, featureIdx: number) => (
                    <div key={featureIdx} className="flex items-center gap-2 text-xs text-gray-700 font-semibold">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-0.5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
                        <CheckCircle2 size={12} className="text-gray-900 relative z-10" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mb-3 md:mb-3 pb-3 md:pb-3 border-t border-yellow-300 md:border-t-2 pt-3 md:pt-3">
                  <div className="flex items-baseline gap-1 justify-center">
                    <motion.span
                      className="text-lg md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800"
                      animate={{
                        backgroundPosition: ["0%", "100%", "0%"],
                      }}
                      style={{ backgroundSize: "200% auto" }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      ৳{cattle.price.toLocaleString()}
                    </motion.span>
                  </div>
                  <p className="text-[9px] md:text-xs text-gray-600 font-semibold mt-0.5 md:mt-1 text-center">
                    ৳{Math.round(cattle.price / cattle.weight)}/kg
                  </p>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    className="w-full font-black shadow-xl border md:border-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 border-yellow-700 text-[10px] md:text-sm py-3 md:py-4 relative overflow-hidden"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(cattle);
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
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
        ))}
      </div>
    </div>
  );
}
