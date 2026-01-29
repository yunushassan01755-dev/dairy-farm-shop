import { Award, CheckCircle2, TrendingUp, Phone, MapPin, ShieldCheck, Truck, BadgeDollarSign, CreditCard, Sparkles, ChevronLeft, ChevronRight, Crown, Star, Trophy, Scale } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { PhoneCallModal } from './PhoneCallModal';

// Lal Bahadhur Cattle Data
const lalBahadhurCattle = {
  id: 'cattle-111',
  name: 'লাল বাহাদুর / Lal Bahadhur',
  breed: 'Brazilian Nelore Import',
  weight: 880,
  age: '5 years',
  price: 395000,
  image: 'https://myimgs.org/storage/images/15671/WhatsApp Image 2026-01-14 at 22.jpeg',
  features: ['Largest in Collection', 'World-Class Genetics', 'Show Champion', 'Premium Marbling'],
  badge: 'Ultra Premium',
  meatYield: '570 kg',
  isPremium: true
};

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const totalSlides = 1; // Changed from 2 to 1 (removed Lal Bahadhur slide)

  // Auto-rotate every 25 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 25000); // Changed from 15000 to 25000 (25 seconds)

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative bg-gradient-to-b from-[#EAF4EC] to-white isolate">
      <div className="container mx-auto px-3 md:px-4 py-2 md:py-6">
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl transform-gpu will-change-auto">
          {/* Slides */}
          <AnimatePresence mode="wait" initial={false}>
            {currentSlide === 0 && (
              <motion.div
                key="owner-slide"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ 
                  duration: 1.2,
                  ease: [0.25, 0.1, 0.25, 1.0] // Butter smooth cubic-bezier easing
                }}
              >
                {/* SLIDE 1: Owner/Farm Banner */}
                <div className="relative bg-gradient-to-br from-[#2E6B3F] via-[#1f4a2a] to-[#2E6B3F] p-2 md:p-10 lg:p-12 md:min-h-[700px] lg:min-h-[800px]">
                  {/* Decorative Pattern Overlay - Simplified */}
                  <div className="absolute inset-0 opacity-5" 
                       style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                         backgroundSize: '30px 30px'
                       }}>
                  </div>

                  <div className="relative grid lg:grid-cols-12 gap-3 md:gap-8 items-center">
                    {/* Left Side - Owner Introduction */}
                    <div className="lg:col-span-4 text-center lg:text-left">
                      <div>
                        {/* Owner Photo */}
                        <div className="relative inline-block mb-2 md:mb-6">
                          <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50"></div>
                          <div className="relative w-16 h-16 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto lg:mx-0 rounded-full border-4 md:border-6 border-yellow-400 overflow-hidden shadow-2xl">
                            <img 
                              src="/image/owner_picture.jpeg" 
                              alt="MD. Mozzammel Haque" 
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          {/* Verified Badge */}
                          <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-1 md:p-2 shadow-lg">
                            <Award className="w-3 h-3 md:w-6 md:h-6 text-[#2E6B3F]" />
                          </div>
                        </div>

                        {/* Owner Info */}
                        <h3 className="text-sm md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
                          MD. Mozzammel Haque
                        </h3>
                        <p className="text-yellow-400 font-semibold text-xs md:text-base mb-2 md:mb-4">
                          Founder & Owner
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-4 border border-white/20">
                          <p className="text-white/90 text-[10px] md:text-sm leading-relaxed mb-2 md:mb-3">
                            "আসসালামু আলাইকুম! Welcome to our premium cattle collection. Each animal is personally selected and raised with care."
                          </p>
                          <a href="tel:+8801924900128">
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-white/80">
                              <Phone className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                              <span className="text-xs md:text-sm font-medium">01924900128</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Center - Main Message */}
                    <div className="lg:col-span-4 text-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {/* Premium Badge */}
                        <div className="inline-block mb-2 md:mb-8">
                          <motion.div 
                            className="relative"
                            animate={{ 
                              scale: [1, 1.05, 1],
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50"></div>
                            <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-full px-4 md:px-10 py-1.5 md:py-3.5 border-2 border-yellow-300/50 shadow-2xl">
                              <span className="text-gray-900 font-extrabold text-[10px] md:text-base uppercase tracking-[0.15em] md:tracking-[0.2em] flex items-center gap-1.5 md:gap-3">
                                <Sparkles className="w-3 h-3 md:w-5 md:h-5" strokeWidth={3} />
                                Eid al-Adha 2026
                                <Sparkles className="w-3 h-3 md:w-5 md:h-5" strokeWidth={3} />
                              </span>
                            </div>
                          </motion.div>
                        </div>

                        {/* Premium Heading */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        >
                          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-2 md:mb-5 leading-[1.1] tracking-tight">
                            Premium Qurbani
                            <br />
                            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(250,204,21,0.5)]">
                              Cattle Collection
                            </span>
                          </h2>
                        </motion.div>

                        <motion.p 
                          className="text-white/95 text-xs md:text-lg lg:text-xl mb-2 md:mb-8 max-w-lg mx-auto leading-relaxed font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                        >
                          Pre-book your <span className="text-yellow-300 font-bold">healthy, halal-certified</span> cattle now. 
                          <span className="block mt-1 text-yellow-200/90 text-[10px] md:text-base">Limited premium stock available!</span>
                        </motion.p>

                        {/* Premium Feature Cards */}
                        <motion.div 
                          className="grid grid-cols-2 gap-2 md:gap-4 mb-2 md:mb-8 max-w-xl mx-auto"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 1 }}
                        >
                          {[
                            { IconComponent: ShieldCheck, text: 'Halal Certified', color: 'from-emerald-500/20 to-emerald-600/20', border: 'border-emerald-400/30', iconColor: 'text-emerald-300' },
                            { IconComponent: Truck, text: 'Free Delivery', color: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-400/30', iconColor: 'text-blue-300' },
                            { IconComponent: BadgeDollarSign, text: 'Best Price', color: 'from-amber-500/20 to-amber-600/20', border: 'border-amber-400/30', iconColor: 'text-amber-300' },
                            { IconComponent: CreditCard, text: 'Easy Payment', color: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-400/30', iconColor: 'text-purple-300' }
                          ].map((item, idx) => (
                            <motion.div 
                              key={idx} 
                              className={`relative bg-gradient-to-br ${item.color} backdrop-blur-md rounded-lg md:rounded-xl px-2 md:px-4 py-2 md:py-4 border ${item.border} shadow-lg overflow-hidden group cursor-pointer`}
                              whileHover={{ 
                                scale: 1.05, 
                                y: -5,
                                transition: { duration: 0.2 }
                              }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 1.1 + (idx * 0.1) }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <div className="relative flex flex-col items-center">
                                <item.IconComponent className={`w-5 h-5 md:w-9 md:h-9 mb-1 md:mb-2 ${item.iconColor} drop-shadow-lg`} strokeWidth={2.5} />
                                <span className="text-white text-[10px] md:text-sm font-bold tracking-wide text-center">{item.text}</span>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Premium CTA Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 1.4 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <Button className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-500 text-gray-900 font-extrabold text-sm md:text-lg px-6 md:px-12 py-3 md:py-7 rounded-full shadow-2xl hover:shadow-[0_20px_60px_rgba(250,204,21,0.6)] transition-all duration-500 border-2 border-yellow-300/50 overflow-hidden group"
                              onClick={() => setIsPhoneModalOpen(true)}
                            >
                              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                              <span className="relative flex items-center gap-2 md:gap-3">
                                <Phone className="w-4 h-4 md:w-6 md:h-6 animate-pulse" />
                                Call Now to Book
                              </span>
                            </Button>
                          </motion.div>
                          
                          {/* Subtitle under button */}
                          <motion.p 
                            className="text-yellow-200/80 text-[10px] md:text-sm mt-1 md:mt-4 font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                          >
                            📞 Available 24/7 for your convenience
                          </motion.p>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Right Side - Featured Cattle Preview */}
                    <div className="lg:col-span-4">
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="relative"
                      >
                        <div className="text-center mb-2 md:mb-4">
                          <h4 className="text-white font-bold text-xs md:text-base mb-1 md:mb-2">
                            🐄 Featured Premium Cattle
                          </h4>
                        </div>

                        {/* Cattle Preview Grid */}
                        <div className="grid grid-cols-2 gap-1.5 md:gap-3">
                          {[
                            { img: '/image/Cow1.png', code: 'CODE:101', name: 'Shobon' },
                            { img: 'https://myimgs.org/storage/images/15395/WhatsApp Image 2026-01-12 at 01.jpeg', code: 'CODE:103', name: 'Kallu' },
                            { img: 'https://myimgs.org/storage/images/15394/WhatsApp Image 2026-01-12 at 00.jpeg', code: 'CODE:102', name: 'Padma' },
                            { img: 'https://myimgs.org/storage/images/15397/WhatsApp Image 2026-01-12 at 01.jpeg', code: 'CODE:104', name: 'Bahadhur' }
                          ].map((cattle, idx) => (
                            <motion.div
                              key={idx}
                              className="relative group overflow-hidden rounded-lg border-2 border-white/30 hover:border-yellow-400 transition-all duration-300 cursor-pointer"
                              whileHover={{ scale: 1.05, y: -5 }}
                              transition={{ duration: 0.2 }}
                              onClick={() => {
                                // Scroll to the standard premium cattle section
                                const cattleSection = document.getElementById('standard-cattle');
                                if (cattleSection) {
                                  cattleSection.scrollIntoView({ 
                                    behavior: 'smooth',
                                    block: 'start'
                                  });
                                }
                              }}
                            >
                              <img 
                                src={cattle.img} 
                                alt={cattle.name}
                                className="w-full h-16 md:h-32 object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 right-0 p-1 md:p-2">
                                <div className="bg-yellow-400 text-gray-900 text-[7px] md:text-[10px] font-bold px-1 md:px-1.5 py-0.5 rounded-full inline-block mb-0.5">
                                  {cattle.code}
                                </div>
                                <p className="text-white text-[9px] md:text-xs font-semibold">{cattle.name}</p>
                              </div>
                              {/* Click indicator */}
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                                <div className="bg-yellow-400 text-gray-900 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[8px] md:text-xs font-bold">
                                  View Details
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Lal Bahadhur Crown Jewel Card */}
                        <motion.div
                          className="mt-2 md:mt-3 relative group overflow-hidden rounded-xl border-3 md:border-4 border-yellow-400 shadow-2xl cursor-pointer"
                          whileHover={{ scale: 1.03, y: -3 }}
                          transition={{ duration: 0.3 }}
                          animate={{ 
                            boxShadow: [
                              "0 10px 30px rgba(250, 204, 21, 0.4)",
                              "0 15px 40px rgba(250, 204, 21, 0.7)",
                              "0 10px 30px rgba(250, 204, 21, 0.4)"
                            ]
                          }}
                          onClick={() => {
                            // Scroll to the ultra premium cattle section
                            const cattleSection = document.getElementById('ultra-premium-cattle');
                            if (cattleSection) {
                              cattleSection.scrollIntoView({ 
                                behavior: 'smooth',
                                block: 'start'
                              });
                            }
                          }}
                        >
                          <div className="relative h-36 md:h-40">
                            <img 
                              src={lalBahadhurCattle.image}
                              alt={lalBahadhurCattle.name}
                              className="w-full h-full object-cover"
                              style={{ objectPosition: 'center center' }}
                              loading="eager"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                            
                            {/* Crown Jewel Badge */}
                            <div className="absolute top-1 md:top-2 left-1 md:left-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-full text-[8px] md:text-[10px] font-black flex items-center gap-1">
                              <Crown size={10} className="md:w-3 md:h-3" fill="currentColor" />
                              CROWN JEWEL
                            </div>

                            {/* Weight Badge */}
                            <div className="absolute top-1 md:top-2 right-1 md:right-2 bg-yellow-400 text-gray-900 px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-full text-[8px] md:text-[10px] font-black flex items-center gap-0.5 md:gap-1">
                              <Scale size={10} className="md:w-3 md:h-3" />
                              {lalBahadhurCattle.weight}kg
                            </div>

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-1.5 md:p-3 bg-gradient-to-t from-black/90 to-transparent">
                              <div className="flex justify-between items-end">
                                <div>
                                  <div className="bg-yellow-400 text-gray-900 text-[7px] md:text-[10px] font-bold px-1 md:px-1.5 py-0.5 rounded-full inline-block mb-0.5 md:mb-1">
                                    CODE: {lalBahadhurCattle.id.split('-')[1]}
                                  </div>
                                  <p className="text-white text-[10px] md:text-sm font-bold mb-0.5">{lalBahadhurCattle.name}</p>
                                  <p className="text-yellow-300 text-[7px] md:text-[10px] font-semibold">{lalBahadhurCattle.breed}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-yellow-400 text-xs md:text-lg font-black">৳{(lalBahadhurCattle.price / 1000).toFixed(0)}K</p>
                                  <p className="text-white/80 text-[7px] md:text-[9px]">#1 Best</p>
                                </div>
                              </div>
                            </div>

                            {/* Animated Shine Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent"
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                            />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Bottom Trust Indicators */}
                  <motion.div 
                    className="relative mt-2 md:mt-8 pt-2 md:pt-8 border-t border-white/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="flex flex-wrap justify-center gap-2 md:gap-6 items-center text-white/80 text-[10px] md:text-sm">
                      <div className="flex items-center gap-1 md:gap-2">
                        <CheckCircle2 className="w-3 h-3 md:w-5 md:h-5 text-yellow-400" />
                        <span>Licensed</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <Award className="w-3 h-3 md:w-5 md:h-5 text-yellow-400" />
                        <span>Certified</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <MapPin className="w-3 h-3 md:w-5 md:h-5 text-yellow-400" />
                        <span>Savar, Dhaka</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <TrendingUp className="w-3 h-3 md:w-5 md:h-5 text-yellow-400" />
                        <span>2+ Years</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Arrows - REMOVED */}
          {/* Dot Indicators - REMOVED */}
        </div>
      </div>
      {/* Phone Call Modal */}
      <PhoneCallModal isOpen={isPhoneModalOpen} onClose={() => setIsPhoneModalOpen(false)} />
    </div>
  );
}