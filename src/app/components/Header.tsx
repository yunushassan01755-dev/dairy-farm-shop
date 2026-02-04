import { motion } from 'motion/react';
import { Phone, MapPin, Facebook, ShoppingCart, Search } from 'lucide-react';
import { Button } from './ui/button';
import logo from '/image/fdf5d3c47585db940962797a77c27cc5d0c257b7.png';
import { useCart } from './CartContext';
import { useState, useEffect } from 'react';
import { CartDrawer } from './CartDrawer';
import { SearchModal } from './SearchModal';

export function Header() {
  const { cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false); // Track programmatic scrolling

  // Advanced Intersection Observer Spy Navigation - Accurate & Performant
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navHeight = 120; // Header height offset
    
    const observerOptions = {
      root: null,
      rootMargin: `-${navHeight}px 0px -50% 0px`, // Trigger when section reaches below header
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    let intersectingSections = new Map<string, number>();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Skip intersection updates during programmatic scrolling
      if (isScrolling) return;
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Store intersection ratio for each section
          intersectingSections.set(entry.target.id, entry.intersectionRatio);
        } else {
          // Remove section when it's no longer intersecting
          intersectingSections.delete(entry.target.id);
        }
      });

      // Find the section with highest intersection ratio
      if (intersectingSections.size > 0) {
        let maxRatio = 0;
        let topSection = '';
        
        intersectingSections.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            topSection = id;
          }
        });
        
        // If no clear winner, use the first one in DOM order
        if (topSection) {
          setActiveSection(topSection);
        } else {
          const firstSection = Array.from(intersectingSections.keys())[0];
          if (firstSection) setActiveSection(firstSection);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [isScrolling]); // Re-run when isScrolling changes

  // Keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, []);

  // Simple, robust smooth scroll navigation
  const scrollToSection = (targetId: string) => {
    console.log(`🎯 Attempting to scroll to: ${targetId}`);
    
    // Set scrolling flag to disable intersection observer
    setIsScrolling(true);
    
    // Update active state immediately
    setActiveSection(targetId);
    
    const element = document.getElementById(targetId);
    if (!element) {
      console.error(`❌ Section with id "${targetId}" not found`);
      setIsScrolling(false);
      return;
    }
    
    console.log(`✅ Found element:`, element);
    
    // Use smooth scroll with animation transition
    element.scrollIntoView({
      behavior: 'smooth', // Smooth animated scroll
      block: 'start'
    });
    
    // Re-enable intersection observer after scroll completes
    // Increased timeout to ensure even long-distance scrolls complete
    setTimeout(() => {
      setIsScrolling(false);
      console.log(`✅ Scrolling complete, observer re-enabled`);
    }, 1500);
    
    console.log(`📜 Smooth scroll to ${targetId}`);
  };

  // Handle logo click to scroll to home
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToSection('home');
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 shadow-lg">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-[#2E6B3F]/95 to-[#1f4a2a]/95 text-white py-1.5 md:py-2 border-b border-white/10">
          <div className="container mx-auto px-3 md:px-4 flex justify-between items-center">
            <div className="flex items-center gap-3 md:gap-6">
              <div className="flex items-center gap-1.5 md:gap-2 group">
                <div className="group-hover:scale-110 transition-all duration-300">
                  <MapPin size={12} className="text-yellow-400 drop-shadow-lg md:hidden" />
                  <MapPin size={16} className="text-yellow-400 drop-shadow-lg hidden md:block" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[7px] md:text-[8px] uppercase tracking-wider text-white/70 font-medium drop-shadow">Location</span>
                  <span className="text-[9px] md:text-[11px] font-medium text-white drop-shadow-md">Shamlashi Bharalia Para, Shamlapur – 1310, Savar, Dhaka</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 group">
                <div className="group-hover:scale-110 transition-all duration-300">
                  <Phone size={12} className="text-yellow-400 drop-shadow-lg md:hidden" />
                  <Phone size={16} className="text-yellow-400 drop-shadow-lg hidden md:block" />
                </div>
                <a href="tel:+8801924900128">
                  <div className="flex flex-col">
                    <span className="text-[7px] md:text-[8px] uppercase tracking-wider text-white/70 font-medium drop-shadow">Call Us</span>
                    <span className="text-[9px] md:text-[11px] font-semibold text-white drop-shadow-md">+8801924900128</span>
                  </div>
                </a>
              </div>
              <div className="h-3 md:h-4 w-px bg-white/20"></div>
              <div className="flex gap-1 md:gap-1.5">
                <a href="https://www.facebook.com/profile.php?id=61587228752743" target='_blank' className="hover:bg-yellow-500/20 p-1 md:p-1.5 rounded-lg hover:scale-110 transition-all duration-300 group">
                  <Facebook size={12} className="text-white group-hover:text-yellow-400 drop-shadow-lg md:hidden" />
                  <Facebook size={16} className="text-white group-hover:text-yellow-400 drop-shadow-lg hidden md:block" />
                </a>
                {/* whatsapp link +8801913640506 */}
                <a href="https://wa.me/8801913640506" target='_blank' className="hover:bg-yellow-500/20 p-1 md:p-1.5 rounded-lg hover:scale-110 transition-all duration-300 group">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-yellow-400 drop-shadow-lg md:hidden">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-yellow-400 drop-shadow-lg hidden md:block">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-3 md:px-4 bg-gradient-to-r from-[#2E6B3F]/85 to-[#1f4a2a]/85">
          <div className="flex items-center justify-between py-1.5 md:py-2">
            {/* Logo */}
            <motion.div 
              className="flex items-center cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={handleLogoClick}
            >
              <motion.img 
                src={logo} 
                alt="Mozzammel Dairy and Agro Logo" 
                className="h-8 w-8 md:h-12 md:w-12 rounded-xl object-cover drop-shadow-xl" 
                style={{ objectPosition: 'center' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>

            {/* Navigation Menu */}
            <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide max-w-[55%] sm:max-w-[60%] md:max-w-none pb-0.5">
              <button 
                onClick={() => scrollToSection('home')}
                className={`relative text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold transition-all duration-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-2 md:py-2 rounded-lg drop-shadow-lg whitespace-nowrap flex-shrink-0 touch-manipulation min-h-[32px] flex items-center justify-center ${
                  activeSection === 'home' 
                    ? 'text-yellow-400 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 shadow-lg border border-yellow-400/30' 
                    : 'hover:text-yellow-400 hover:bg-white/10'
                }`} 
              >
                Home
                {activeSection === 'home' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`relative text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold transition-all duration-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-2 md:py-2 rounded-lg drop-shadow-lg whitespace-nowrap flex-shrink-0 touch-manipulation min-h-[32px] flex items-center justify-center ${
                  activeSection === 'about' 
                    ? 'text-yellow-400 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 shadow-lg border border-yellow-400/30' 
                    : 'hover:text-yellow-400 hover:bg-white/10'
                }`} 
              >
                About
                {activeSection === 'about' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button 
                onClick={() => scrollToSection('cows')}
                className={`relative text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold transition-all duration-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-2 md:py-2 rounded-lg drop-shadow-lg whitespace-nowrap flex-shrink-0 touch-manipulation min-h-[32px] flex items-center justify-center ${
                  activeSection === 'cows' 
                    ? 'text-yellow-400 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 shadow-lg border border-yellow-400/30' 
                    : 'hover:text-yellow-400 hover:bg-white/10'
                }`} 
              >
                Cattle
                {activeSection === 'cows' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className={`relative text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold transition-all duration-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-2 md:py-2 rounded-lg drop-shadow-lg whitespace-nowrap flex-shrink-0 touch-manipulation min-h-[32px] flex items-center justify-center ${
                  activeSection === 'products' 
                    ? 'text-yellow-400 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 shadow-lg border border-yellow-400/30' 
                    : 'hover:text-yellow-400 hover:bg-white/10'
                }`} 
              >
                Products
                {activeSection === 'products' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className={`relative text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold transition-all duration-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-2 md:py-2 rounded-lg drop-shadow-lg whitespace-nowrap flex-shrink-0 touch-manipulation min-h-[32px] flex items-center justify-center ${
                  activeSection === 'reviews' 
                    ? 'text-yellow-400 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 shadow-lg border border-yellow-400/30' 
                    : 'hover:text-yellow-400 hover:bg-white/10'
                }`} 
              >
                Reviews
                {activeSection === 'reviews' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`relative text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold transition-all duration-300 px-1.5 sm:px-2 md:px-3 lg:px-4 py-2 md:py-2 rounded-lg drop-shadow-lg whitespace-nowrap flex-shrink-0 touch-manipulation min-h-[32px] flex items-center justify-center ${
                  activeSection === 'contact' 
                    ? 'text-yellow-400 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 shadow-lg border border-yellow-400/30' 
                    : 'hover:text-yellow-400 hover:bg-white/10'
                }`} 
              >
                Contact
                {activeSection === 'contact' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-0.5 md:gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-yellow-400 hover:bg-white/10 transition-all duration-300 rounded-lg h-7 w-7 md:h-9 md:w-9 relative group" 
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={14} className="md:hidden" />
                <Search size={18} className="hidden md:block" />
                {/* Tooltip hint */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden group-hover:block">
                  <div className="bg-gray-900 text-white text-[9px] px-2 py-1 rounded whitespace-nowrap">
                    Ctrl+K
                  </div>
                </div>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-yellow-400 hover:bg-white/10 relative transition-all duration-300 rounded-lg h-7 w-7 md:h-9 md:w-9"
                onClick={() => setIsCartOpen(true)}
                data-cart-button
              >
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <ShoppingCart size={14} className="md:hidden" />
                  <ShoppingCart size={18} className="hidden md:block" />
                </motion.div>
                {cartCount > 0 && (
                  <motion.span 
                    className="absolute -top-0.5 -right-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 text-[8px] md:text-[10px] font-bold rounded-full w-3.5 h-3.5 md:w-4 md:h-4 flex items-center justify-center shadow-xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.3 }}
                    key={cartCount}
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}