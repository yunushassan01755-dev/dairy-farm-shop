import { motion } from 'motion/react';
import { Beef, Milk, ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const businessCategories = [
  {
    id: 1,
    title: "Beef & Meat Sales",
    description: "Premium quality fresh beef from our grass-fed cattle. Halal certified and locally sourced.",
    icon: Beef,
    gradient: "from-red-500 to-red-700",
    lightGradient: "from-red-100 to-red-50",
  },
  {
    id: 2,
    title: "Dairy Milk Production",
    description: "Fresh, pure dairy milk collected daily from our healthy cattle. 100% natural with no preservatives.",
    icon: Milk,
    gradient: "from-blue-500 to-blue-700",
    lightGradient: "from-blue-100 to-blue-50",
  },
  {
    id: 3,
    title: "Food & Lifestyle Products",
    description: "Wide range of quality food and lifestyle products to meet your daily needs.",
    icon: ShoppingCart,
    gradient: "from-green-500 to-green-700",
    lightGradient: "from-green-100 to-green-50",
  },
];

export function OurBusiness() {
  return (
    <section className="py-4 md:py-12 bg-white" id="business">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Our Business</h2>
          <div className="w-16 md:w-24 h-1 bg-[#2E6B3F] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Comprehensive agricultural and dairy solutions for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {businessCategories.map((category, index) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.gradient}`}
                ></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.lightGradient}`}
                ></div>
                <motion.div
                  className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-3xl md:text-5xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <category.icon size={50} className="text-white" />
                </motion.div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#2E6B3F] transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 leading-relaxed">
                  {category.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#2E6B3F] text-[#2E6B3F] hover:bg-[#2E6B3F] hover:text-white group/btn text-xs md:text-sm py-2 md:py-2.5"
                >
                  Read More
                  <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform md:hidden" />
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform hidden md:inline" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}