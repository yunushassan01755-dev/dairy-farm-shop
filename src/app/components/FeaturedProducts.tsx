import { motion, AnimatePresence } from 'motion/react';
import { Star, ShoppingCart, ChevronDown, ChevronUp, X, Info, Package, Leaf, Thermometer, Award, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from './CartContext';
import { toast } from 'sonner';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Premium Fresh Milk",
    price: 120,
    unit: "per liter",
    rating: 5,
    image: "https://myimgs.org/storage/images/15934/WhatsApp Image 2026-01-18 at 12.jpeg",
    badge: "Fresh",
    description: "Pure, fresh cow milk collected daily from our farm. Rich in calcium, protein, and essential vitamins.",
    benefits: ["100% Pure & Natural", "No Preservatives", "Farm Fresh Daily", "Rich in Nutrients"],
    storage: "Store at 4°C or below. Best consumed within 2 days of opening.",
    origin: "Mozzammel Dairy and Agro, Savar"
  },
  {
    id: 2,
    name: "Organic Cow Ghee",
    price: 650,
    unit: "per 500g",
    rating: 5,
    image: "https://myimgs.org/storage/images/15678/WhatsApp Image 2026-01-15 at 02.jpeg",
    badge: "Organic",
    description: "Traditional pure cow ghee made from organic milk. Perfect for cooking and health benefits.",
    benefits: ["100% Organic", "Traditional Method", "No Additives", "Rich Aroma"],
    storage: "Store in cool, dry place. No refrigeration needed.",
    origin: "Made from organic milk, Mozzammel Dairy and Agro"
  },
  {
    id: 3,
    name: "Fresh Beef (Premium Cut)",
    price: 920,
    unit: "per kg",
    rating: 4,
    image: "https://myimgs.org/storage/images/15677/WhatsApp Image 2026-01-15 at 02.jpeg",
    badge: "Premium",
    description: "Premium quality fresh beef from grass-fed cattle. Tender, flavorful cuts perfect for all your cooking needs.",
    benefits: ["Grass-Fed Cattle", "Halal Certified", "Premium Cuts", "Fresh Daily"],
    storage: "Keep refrigerated at 0-4°C. Use within 2 days or freeze immediately.",
    origin: "Grass-fed cattle from Mozzammel Dairy and Agro"
  },
  {
    id: 4,
    name: "Farm Fresh Yogurt",
    price: 120,
    unit: "per 500g",
    rating: 5,
    image: "https://myimgs.org/storage/images/15687/WhatsApp Image 2026-01-15 at 03.jpeg",
    badge: "Fresh",
    description: "Creamy, delicious yogurt made from pure farm milk with live active cultures.",
    benefits: ["Probiotic Rich", "Natural Cultures", "No Artificial Flavors", "Digestive Health"],
    storage: "Refrigerate at 4°C. Best before date on package.",
    origin: "Fresh milk from Mozzammel Dairy and Agro"
  },
  {
    id: 5,
    name: "Fresh Chicken",
    price: 480,
    unit: "per 1000-1200g",
    rating: 4,
    image: "https://myimgs.org/storage/images/15941/WhatsApp Image 2026-01-18 at 12.jpeg",
    badge: "Fresh",
    description: "Farm-raised fresh chicken, antibiotic-free and healthy. Perfect for all recipes.",
    benefits: ["Antibiotic Free", "Farm Raised", "Halal Certified", "Tender & Fresh"],
    storage: "Keep refrigerated. Use within 24 hours or freeze.",
    origin: "Farm-raised chickens, Mozzammel Dairy and Agro"
  }
];

export function FeaturedProducts() {
  const { addToCart } = useCart();
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 1));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setZoomLevel(1);
  };

  const displayedProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="py-4 md:py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-4 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Featured Products</h2>
          <div className="w-16 md:w-24 h-1 bg-[#2E6B3F] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Fresh, natural, and high-quality products directly from our farm
          </p>
        </div>

        {/* Products Grid - Horizontal scroll on mobile, grid on desktop */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-6 max-w-7xl mx-auto">
          {/* Mobile: Horizontal Scroll */}
          <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-3 -mx-3">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex-shrink-0 w-[280px] snap-center"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden bg-gray-50 aspect-[940/788]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 md:top-3 right-2 md:right-3">
                    <span className="bg-yellow-500 text-white text-[10px] md:text-xs font-semibold px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                  {/* Info Icon Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Info size={32} className="mx-auto mb-2" />
                      <p className="text-xs md:text-sm font-semibold">Click for Details</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 md:p-5">
                  <h3 className="font-bold text-gray-900 mb-1.5 md:mb-2 text-sm md:text-lg group-hover:text-[#2E6B3F] transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-0.5 md:gap-1 mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={`${i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`}
                      />
                    ))}
                    <span className="text-[10px] md:text-xs text-gray-500 ml-0.5 md:ml-1">({product.rating}.0)</span>
                  </div>

                  <div className="flex items-baseline gap-1.5 md:gap-2 mb-3 md:mb-4">
                    <span className="text-lg md:text-2xl font-bold text-[#2E6B3F]">৳{product.price}</span>
                    <span className="text-xs md:text-sm text-gray-500">{product.unit}</span>
                  </div>

                  <Button 
                    className="w-full bg-[#2E6B3F] hover:bg-[#1f4a2a] text-white text-xs md:text-sm py-2 md:py-2.5"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    <ShoppingCart size={14} className="mr-1.5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Grid */}
          <div className="hidden lg:contents">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden bg-gray-50 aspect-[940/788]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 md:top-3 right-2 md:right-3">
                    <span className="bg-yellow-500 text-white text-[10px] md:text-xs font-semibold px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                  {/* Info Icon Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Info size={32} className="mx-auto mb-2" />
                      <p className="text-xs md:text-sm font-semibold">Click for Details</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 md:p-5">
                  <h3 className="font-bold text-gray-900 mb-1.5 md:mb-2 text-sm md:text-lg group-hover:text-[#2E6B3F] transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-0.5 md:gap-1 mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={`${i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"} md:hidden`}
                      />
                    ))}
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"} hidden md:block`}
                      />
                    ))}
                    <span className="text-[10px] md:text-xs text-gray-500 ml-0.5 md:ml-1">({product.rating}.0)</span>
                  </div>

                  <div className="flex items-baseline gap-1.5 md:gap-2 mb-3 md:mb-4">
                    <span className="text-lg md:text-2xl font-bold text-[#2E6B3F]">৳{product.price}</span>
                    <span className="text-xs md:text-sm text-gray-500">{product.unit}</span>
                  </div>

                  <Button 
                    className="w-full bg-[#2E6B3F] hover:bg-[#1f4a2a] text-white text-xs md:text-sm py-2 md:py-2.5"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    <ShoppingCart size={14} className="mr-1.5 md:hidden" />
                    <ShoppingCart size={16} className="mr-2 hidden md:inline" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#2E6B3F] text-[#2E6B3F] hover:bg-[#2E6B3F] hover:text-white px-6 md:px-8 text-sm md:text-base py-2 md:py-3"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? <ChevronUp size={14} className="mr-1.5 md:hidden" /> : <ChevronDown size={14} className="mr-1.5 md:hidden" />}
            {showAll ? <ChevronUp size={16} className="mr-2 hidden md:inline" /> : <ChevronDown size={16} className="mr-2 hidden md:inline" />}
            {showAll ? "Show Less" : "View All Products"}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => closeModal()}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Image */}
              <div className="relative h-80 md:h-[500px] overflow-hidden rounded-t-2xl bg-gray-100">
                <div className="w-full h-full flex items-center justify-center overflow-auto p-4">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-auto object-contain transition-transform duration-300"
                    style={{ transform: `scale(${zoomLevel})` }}
                  />
                </div>
                
                {/* Zoom Controls */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg disabled:opacity-50"
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                  >
                    <ZoomIn size={18} className="text-gray-700" />
                  </button>
                  <button
                    className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg disabled:opacity-50"
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 1}
                  >
                    <ZoomOut size={18} className="text-gray-700" />
                  </button>
                  <button
                    className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg"
                    onClick={handleResetZoom}
                  >
                    <RotateCw size={18} className="text-gray-700" />
                  </button>
                </div>
                
                {/* Close Button */}
                <button
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg z-10"
                  onClick={() => closeModal()}
                >
                  <X size={20} className="text-gray-700" />
                </button>

                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-yellow-500 text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    {selectedProduct.badge}
                  </span>
                </div>

                {/* Product Name & Rating Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 pt-16">
                  <h2 className="text-xl md:text-3xl font-bold text-white mb-2">{selectedProduct.name}</h2>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < selectedProduct.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-400 text-gray-400"}`}
                      />
                    ))}
                    <span className="text-xs md:text-sm text-white ml-2">({selectedProduct.rating}.0 Rating)</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-8">
                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-gray-200">
                  <span className="text-3xl md:text-4xl font-bold text-[#2E6B3F]">৳{selectedProduct.price}</span>
                  <span className="text-base md:text-lg text-gray-500">{selectedProduct.unit}</span>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Package size={20} className="text-[#2E6B3F]" />
                    <h3 className="text-base md:text-lg font-bold text-gray-900">Product Description</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{selectedProduct.description}</p>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={20} className="text-[#2E6B3F]" />
                    <h3 className="text-base md:text-lg font-bold text-gray-900">Key Benefits</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProduct.benefits.map((benefit: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm md:text-base text-gray-700 bg-green-50 p-3 rounded-lg">
                        <div className="bg-[#2E6B3F] rounded-full p-1 flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Storage Info */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Thermometer size={20} className="text-[#2E6B3F]" />
                    <h3 className="text-base md:text-lg font-bold text-gray-900">Storage Instructions</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    {selectedProduct.storage}
                  </p>
                </div>

                {/* Origin */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Leaf size={20} className="text-[#2E6B3F]" />
                    <h3 className="text-base md:text-lg font-bold text-gray-900">Origin</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    📍 {selectedProduct.origin}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  className="w-full bg-[#2E6B3F] hover:bg-[#1f4a2a] text-white text-sm md:text-base py-5 md:py-6 text-base font-semibold shadow-lg"
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    closeModal();
                  }}
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart - ৳{selectedProduct.price}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}