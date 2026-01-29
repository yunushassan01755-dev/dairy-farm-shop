import { motion, AnimatePresence } from 'motion/react';
import { Phone, X, PhoneCall, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

interface PhoneCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PhoneCallModal({ isOpen, onClose }: PhoneCallModalProps) {
  const phoneNumber = '01924900128';
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/88${phoneNumber}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden">
              {/* Header with gradient */}
              <div className="relative bg-gradient-to-br from-[#2E6B3F] via-[#1f4a2a] to-[#2E6B3F] px-6 py-6 text-center overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 50%, #FFF 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 50%, #FFF 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 50%, #FFF 0%, transparent 50%)',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Phone icon with animation */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mb-3 shadow-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <PhoneCall className="w-8 h-8 text-gray-900" />
                </motion.div>

                <h2 className="text-xl font-bold text-white mb-1">
                  Call Us Now
                </h2>
              </div>

              {/* Content */}
              <div className="px-6 py-6">
                {/* Phone number display */}
                <div className="text-center mb-5">
                  <motion.div
                    className="inline-block bg-gradient-to-r from-[#EAF4EC] to-[#FFF8E7] px-5 py-3 rounded-xl border-2 border-[#2E6B3F]/20 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <p className="text-2xl font-bold text-[#2E6B3F] tracking-wider">
                      {phoneNumber}
                    </p>
                  </motion.div>
                </div>

                {/* Call to action buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={handleCall}
                    className="w-full bg-gradient-to-r from-[#2E6B3F] to-[#1f4a2a] hover:from-[#1f4a2a] hover:to-[#2E6B3F] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Call Now
                  </Button>

                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}