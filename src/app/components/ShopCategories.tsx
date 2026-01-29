import { Package, Milk, ShoppingBag } from 'lucide-react';

const categories = [
  {
    title: "Beef Products",
    icon: Package,
    color: "from-red-500 to-red-600",
    count: "15+ Items"
  },
  {
    title: "Milk Products",
    icon: Milk,
    color: "from-blue-500 to-blue-600",
    count: "8+ Items"
  },
  {
    title: "Food Products",
    icon: ShoppingBag,
    color: "from-green-500 to-green-600",
    count: "20+ Items"
  }
];

export function ShopCategories() {
  return (
    <section className="py-4 md:py-8 bg-white">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop By Categories</h2>
          <p className="text-gray-600">Browse our quality products by category</p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                className="group relative overflow-hidden rounded-lg sm:rounded-2xl p-3 sm:p-6 md:p-8 bg-white border-2 border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-98"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="bg-gray-100 group-hover:bg-white/20 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:rotate-12">
                    <Icon size={20} className="sm:hidden text-gray-700 group-hover:text-white transition-colors" />
                    <Icon size={28} className="hidden sm:block md:hidden text-gray-700 group-hover:text-white transition-colors" />
                    <Icon size={36} className="hidden md:block text-gray-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xs sm:text-base md:text-xl font-bold text-gray-900 group-hover:text-white mb-1 sm:mb-2 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                    {category.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}