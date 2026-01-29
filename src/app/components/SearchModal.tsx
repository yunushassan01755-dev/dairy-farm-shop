import { motion, AnimatePresence } from 'motion/react';
import { X, Search, ShoppingCart, Loader2, Filter, ArrowRight, Package, Beef, Milk } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect, useRef } from 'react';
import { useCart } from './CartContext';
import { toast } from 'sonner';

// Product data from FeaturedProducts
const foodProducts = [
  {
    id: 1,
    name: "Premium Fresh Milk",
    price: 120,
    unit: "per liter",
    rating: 5,
    image: "https://myimgs.org/storage/images/15934/WhatsApp Image 2026-01-18 at 12.jpeg",
    badge: "Fresh",
    category: "Milk Products",
    description: "Pure, fresh cow milk collected daily from our farm.",
    keywords: ["milk", "fresh", "dairy", "liter", "120"]
  },
  {
    id: 2,
    name: "Organic Cow Ghee",
    price: 650,
    unit: "per 500g",
    rating: 5,
    image: "https://myimgs.org/storage/images/15678/WhatsApp Image 2026-01-15 at 02.jpeg",
    badge: "Organic",
    category: "Milk Products",
    description: "Traditional pure cow ghee made from organic milk.",
    keywords: ["ghee", "organic", "butter", "500g", "650"]
  },
  {
    id: 3,
    name: "Fresh Beef (Premium Cut)",
    price: 920,
    unit: "per kg",
    rating: 4,
    image: "https://myimgs.org/storage/images/15677/WhatsApp Image 2026-01-15 at 02.jpeg",
    badge: "Premium",
    category: "Meat Products",
    description: "Premium quality fresh beef from grass-fed cattle.",
    keywords: ["beef", "meat", "fresh", "premium", "kg", "920"]
  },
  {
    id: 4,
    name: "Farm Fresh Yogurt",
    price: 120,
    unit: "per 500g",
    rating: 5,
    image: "https://myimgs.org/storage/images/15687/WhatsApp Image 2026-01-15 at 03.jpeg",
    badge: "Fresh",
    category: "Milk Products",
    description: "Creamy, delicious yogurt made from pure farm milk.",
    keywords: ["yogurt", "doi", "fresh", "dairy", "500g", "120"]
  },
  {
    id: 5,
    name: "Fresh Chicken",
    price: 480,
    unit: "per 1000-1200g",
    rating: 4,
    image: "https://myimgs.org/storage/images/15941/WhatsApp Image 2026-01-18 at 12.jpeg",
    badge: "Fresh",
    category: "Meat Products",
    description: "Farm-raised fresh chicken, antibiotic-free and healthy.",
    keywords: ["chicken", "meat", "fresh", "poultry", "480"]
  }
];

// Cattle data from EidCattlePreOrder - ALL 12 CATTLE
const cattleProducts = [
  // ULTRA PREMIUM (3 cattle)
  {
    id: 'cattle-110',
    name: 'রাজা / Raja - The King',
    breed: 'Australian Brahman Cross',
    weight: 820,
    age: '4.5 years',
    price: 325000,
    image: 'https://myimgs.org/storage/images/15674/WhatsApp Image 2026-01-14 at 22.jpeg',
    badge: 'Ultra Premium',
    category: 'Cattle',
    description: 'Premium Genetics, Maximum Meat Yield, Vet Certified Excellence',
    keywords: ['raja', 'king', 'cattle', 'cow', 'brahman', 'australian', '820', '325000', 'premium', 'ultra']
  },
  {
    id: 'cattle-111',
    name: 'লাল বাহাদুর / Lal Bahadhur',
    breed: 'Brazilian Nelore Import',
    weight: 880,
    age: '5 years',
    price: 395000,
    image: 'https://myimgs.org/storage/images/15671/WhatsApp Image 2026-01-14 at 22.jpeg',
    badge: 'Ultra Premium',
    category: 'Cattle',
    description: 'Largest in Collection, World-Class Genetics, Premium Marbling',
    keywords: ['lal', 'bahadhur', 'cattle', 'cow', 'nelore', 'brazilian', '880', '395000', 'largest', 'premium', 'ultra']
  },
  {
    id: 'cattle-112',
    name: 'বাদশা / Badshah - The Supreme',
    breed: 'Belgian Blue Cross',
    weight: 850,
    age: '4.5 years',
    price: 295000,
    image: 'https://myimgs.org/storage/images/15673/WhatsApp Image 2026-01-14 at 22.jpeg',
    badge: 'Ultra Premium',
    category: 'Cattle',
    description: 'Muscular Build, Superior Quality, Premium Genetics',
    keywords: ['badshah', 'supreme', 'cattle', 'cow', 'belgian', 'blue', '850', '295000', 'premium', 'ultra']
  },
  // FEATURED CATTLE (9 cattle)
  {
    id: 'cattle-101',
    name: 'শবন / Shobon',
    breed: 'Natural Deshi Cow',
    weight: 450,
    age: '2.5 years',
    price: 155000,
    image: '/image/Cow1.png',
    badge: 'Featured',
    category: 'Cattle',
    description: 'Natural Breed, Healthy & Active, Farm Raised',
    keywords: ['shobon', 'cattle', 'cow', 'deshi', 'natural', '450', '155000', 'featured']
  },
  {
    id: 'cattle-102',
    name: 'পদ্মা / Padma',
    breed: 'Natural Deshi Cross Cow',
    weight: 480,
    age: '2.5 years',
    price: 165000,
    image: '/image/Cow2.png',
    badge: 'Featured',
    category: 'Cattle',
    description: 'Natural Cross Breed, Healthy & Active, Farm Raised',
    keywords: ['padma', 'cattle', 'cow', 'deshi', 'cross', 'natural', '480', '165000', 'featured']
  },
  {
    id: 'cattle-103',
    name: 'কাল্লু / Kallu',
    breed: 'Natural Deshi Cross Cow',
    weight: 500,
    age: '3 years',
    price: 172000,
    image: '/image/Cow3.png',
    badge: 'Featured',
    category: 'Cattle',
    description: 'Natural Cross Breed, Healthy & Active, Farm Raised',
    keywords: ['kallu', 'cattle', 'cow', 'deshi', 'cross', 'natural', '500', '172000', 'featured']
  },
  {
    id: 'cattle-104',
    name: 'বাহাদুর / Bahadhur',
    breed: 'Natural Deshi Cow',
    weight: 470,
    age: '2.5 years',
    price: 160000,
    image: '/image/Cow4.png',
    badge: 'Featured',
    category: 'Cattle',
    description: 'Natural Breed, Healthy & Active, Farm Raised',
    keywords: ['bahadhur', 'cattle', 'cow', 'deshi', 'natural', '470', '160000', 'featured']
  },
  {
    id: 'cattle-105',
    name: 'বাহামা বস / Bahama Boss',
    breed: 'Natural Deshi Cross Cow',
    weight: 490,
    age: '3 years',
    price: 168000,
    image: '/image/Cow5.png.jpeg',
    badge: 'Featured',
    category: 'Cattle',
    description: 'Natural Cross Breed, Healthy & Active, Farm Raised',
    keywords: ['bahama', 'boss', 'cattle', 'cow', 'deshi', 'cross', 'natural', '490', '168000', 'featured']
  },
  {
    id: 'cattle-106',
    name: 'লম্বু / Lambu',
    breed: 'Natural Deshi Cow',
    weight: 460,
    age: '2.5 years',
    price: 158000,
    image: '/image/Cow6.jpeg',
    badge: 'Featured',
    category: 'Cattle',
    description: 'Natural Breed, Healthy & Active, Farm Raised',
    keywords: ['lambu', 'cattle', 'cow', 'deshi', 'natural', '460', '158000', 'featured']
  },
  {
    id: 'cattle-107',
    name: 'ব্ল্যাক ডায়মন্ড / Black Diamond',
    breed: 'Premium Black Cross',
    weight: 520,
    age: '3 years',
    price: 190000,
    image: 'https://myimgs.org/storage/images/15660/WhatsApp Image 2026-01-14 at 20.jpeg',
    badge: 'Featured',
    category: 'Cattle',
    description: 'Premium Quality, Strong Build, Excellent Meat Quality',
    keywords: ['black', 'diamond', 'cattle', 'cow', 'cross', 'premium', '520', '190000', 'featured']
  },
  {
    id: 'cattle-108',
    name: 'রাজকুমার / Rajkumar',
    breed: 'Premium Deshi Cross',
    weight: 510,
    age: '3 years',
    price: 178000,
    image: 'https://myimgs.org/storage/images/15663/WhatsApp Image 2026-01-14 at 21.jpeg',
    badge: 'Featured',
    category: 'Cattle',
    description: 'Strong Build, Well Fed, Healthy & Active',
    keywords: ['rajkumar', 'prince', 'cattle', 'cow', 'deshi', 'cross', 'premium', '510', '178000', 'featured']
  },
  {
    id: 'cattle-109',
    name: 'ছোট সাহেব / Choto Saheb',
    breed: 'Premium Deshi',
    weight: 530,
    age: '3 years',
    price: 185000,
    image: 'https://myimgs.org/storage/images/15665/WhatsApp Image 2026-01-14 at 21.jpeg',
    badge: 'Featured',
    category: 'Cattle',
    description: 'Strong Build, Well Fed, Healthy & Active',
    keywords: ['choto', 'saheb', 'cattle', 'cow', 'deshi', 'premium', '530', '185000', 'featured']
  }
];

// Combine all products
const allProducts = [...foodProducts, ...cattleProducts];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { addToCart } = useCart();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Initialize results when modal opens
  useEffect(() => {
    if (isOpen) {
      // Show all products when modal first opens
      if (selectedCategory === 'all') {
        setSearchResults(allProducts);
      } else {
        setSearchResults(allProducts.filter(p => p.category === selectedCategory));
      }
    }
  }, [isOpen]);

  // Search functionality
  useEffect(() => {
    // Skip if modal is not open
    if (!isOpen) return;

    // If no search query, show all products based on category filter
    if (searchQuery.trim() === '') {
      if (selectedCategory === 'all') {
        setSearchResults(allProducts);
      } else {
        setSearchResults(allProducts.filter(p => p.category === selectedCategory));
      }
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    // Debounce search
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase().trim();

      // Filter products based on search query
      const filtered = allProducts.filter(product => {
        // Apply category filter first
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
        }

        // Search in name, breed, description, keywords
        const searchIn = [
          product.name.toLowerCase(),
          product.description.toLowerCase(),
          product.category.toLowerCase(),
          ...product.keywords
        ];

        // Add breed for cattle
        if ('breed' in product) {
          searchIn.push((product as any).breed.toLowerCase());
        }

        // Check if query matches any field
        return searchIn.some(field => field.includes(query));
      });

      setSearchResults(filtered);
      setIsSearching(false);
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory, isOpen]);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cattle':
        return <Package className="w-4 h-4" />;
      case 'Meat Products':
        return <Beef className="w-4 h-4" />;
      case 'Milk Products':
        return <Milk className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  const handleClose = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSelectedCategory('all');
    onClose();
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape to close
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-0 left-0 right-0 z-[101] flex justify-center pt-4 md:pt-16 px-3 md:px-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#2E6B3F] to-[#1f4a2a] p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                    <Search className="w-6 h-6" />
                    Search Products
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClose}
                    className="text-white hover:bg-white/20 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search cattle, milk, meat products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl border-2 border-white/20 bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  />
                  {isSearching && (
                    <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 animate-spin" />
                  )}
                </div>

                {/* Category Filter */}
                <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${selectedCategory === 'all'
                      ? 'bg-yellow-400 text-gray-900'
                      : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                  >
                    All Products
                  </button>
                  <button
                    onClick={() => setSelectedCategory('Cattle')}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${selectedCategory === 'Cattle'
                      ? 'bg-yellow-400 text-gray-900'
                      : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                  >
                    <Package className="w-4 h-4" />
                    Cattle
                  </button>
                  <button
                    onClick={() => setSelectedCategory('Milk Products')}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${selectedCategory === 'Milk Products'
                      ? 'bg-yellow-400 text-gray-900'
                      : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                  >
                    <Milk className="w-4 h-4" />
                    Milk
                  </button>
                  <button
                    onClick={() => setSelectedCategory('Meat Products')}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${selectedCategory === 'Meat Products'
                      ? 'bg-yellow-400 text-gray-900'
                      : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                  >
                    <Beef className="w-4 h-4" />
                    Meat
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-250px)]">
                {searchResults.length === 0 && searchQuery.trim() !== '' ? (
                  <div className="text-center py-12">
                    <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No products found</p>
                    <p className="text-gray-400 text-sm mt-2">Try different keywords or check spelling</p>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-gray-600 mb-4">
                      {searchQuery.trim() === '' ? (
                        <>Showing <span className="font-bold text-[#2E6B3F]">{searchResults.length}</span> product{searchResults.length !== 1 ? 's' : ''}</>
                      ) : (
                        <>Found <span className="font-bold text-[#2E6B3F]">{searchResults.length}</span> product{searchResults.length !== 1 ? 's' : ''}</>
                      )}
                    </p>
                    <div className="space-y-3">
                      {searchResults.map((product) => (
                        <motion.div
                          key={product.id}
                          className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-3 md:p-4 hover:shadow-lg transition-all cursor-pointer group"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.01 }}
                        >
                          <div className="flex gap-3 md:gap-4">
                            {/* Product Image */}
                            <div className="relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-200">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute top-1 left-1">
                                <span className="px-2 py-0.5 bg-[#2E6B3F] text-white text-[9px] md:text-[10px] font-bold rounded-full">
                                  {product.badge}
                                </span>
                              </div>
                            </div>

                            {/* Product Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 mb-1">
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-bold text-gray-900 text-sm md:text-base truncate">
                                    {product.name}
                                  </h3>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <span className="flex items-center gap-1 text-[10px] md:text-xs text-gray-600">
                                      {getCategoryIcon(product.category)}
                                      {product.category}
                                    </span>
                                  </div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                  <p className="text-base md:text-lg font-black text-[#2E6B3F]">
                                    ৳{product.price.toLocaleString()}
                                  </p>
                                  {product.category === 'Cattle' && (
                                    <p className="text-[9px] md:text-[10px] text-gray-500">
                                      {product.weight} kg
                                    </p>
                                  )}
                                  {product.unit && (
                                    <p className="text-[9px] md:text-[10px] text-gray-500">
                                      {product.unit}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Description */}
                              <p className="text-[11px] md:text-xs text-gray-600 mb-2 line-clamp-1">
                                {product.description}
                              </p>

                              {/* Breed for Cattle */}
                              {product.category === 'Cattle' && (
                                <p className="text-[10px] md:text-xs text-gray-500 mb-2">
                                  🏆 {product.breed} • {product.age}
                                </p>
                              )}

                              {/* Action Button */}
                              <Button
                                size="sm"
                                onClick={() => handleAddToCart(product)}
                                className="w-full md:w-auto bg-gradient-to-r from-[#2E6B3F] to-[#1f4a2a] hover:from-[#1f4a2a] hover:to-[#2E6B3F] text-white text-xs md:text-sm h-8 md:h-9"
                              >
                                <ShoppingCart className="w-3 h-3 md:w-4 md:h-4 mr-1.5" />
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="bg-gray-50 border-t border-gray-200 p-3 md:p-4">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Press <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-semibold">ESC</kbd> to close</span>
                  <span className="hidden md:inline">Press <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-semibold">Ctrl+K</kbd> to search anytime</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}