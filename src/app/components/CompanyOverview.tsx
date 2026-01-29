import { Award, Users, TrendingUp, MapPin } from 'lucide-react';

export function CompanyOverview() {
  return (
    <section className="py-4 md:py-12 bg-gradient-to-b from-white to-[#EAF4EC]">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-2 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">About Mozzammel Dairy and Agro</h2>
          <div className="w-16 md:w-24 h-1 bg-[#2E6B3F] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto px-2 md:px-4">
            Premium dairy farm and agro business in Savar, Dhaka, Bangladesh
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {/* Company Introduction */}
          <div className="bg-gradient-to-br from-[#2E6B3F] to-[#1f4a2a] rounded-lg p-2.5 md:p-6 mb-3 md:mb-8 shadow-md">
            <div className="flex items-center gap-2.5 md:gap-6">
              <div className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-white/10 border-2 md:border-4 border-white/20 overflow-hidden flex-shrink-0">
                {/* TODO: Replace with actual owner photo */}
                <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://myimgs.org/storage/images/15508/PXL_20260113_041053658~3.jpg" 
                    alt="Trade License" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-2xl font-bold text-white mb-0.5 md:mb-1">MD. Mozzammel Haque</h3>
                <p className="text-yellow-400 font-semibold mb-1 md:mb-2 text-xs md:text-base">Founder & Owner</p>
                <p className="text-white/90 text-[10px] md:text-sm leading-snug md:leading-normal">Leading Mozzammel Dairy and Agro with dedication to sustainable farming and quality agricultural products.</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-3 md:gap-8 items-start">
            {/* Left Content */}
            <div className="space-y-2 md:space-y-4">
              <p className="text-gray-700 leading-snug md:leading-relaxed text-xs md:text-base">
                <strong className="text-[#2E6B3F]">MOZZAMMEL DAIRY AND AGRO</strong> is a government-licensed dairy farm operating under the authority of Bhakurta Union Parishad. We are dedicated to providing the highest quality dairy products and sustainable cattle farming solutions.
              </p>
              
              <p className="text-gray-700 leading-snug md:leading-relaxed text-[10px] md:text-sm">
                Our farm specializes in <strong>sustainable cattle fattening</strong> and <strong>pure milk production</strong>. We maintain the highest standards of animal welfare and employ ethical farming practices.
              </p>

              <div className="bg-white p-2 md:p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="bg-[#2E6B3F] p-1 md:p-1.5 rounded-lg flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[11px] md:text-sm font-semibold text-gray-900 mb-0.5 md:mb-1">
                      Government Licensed & Certified
                    </h4>
                    <p className="text-[9px] md:text-xs text-gray-600 mb-1.5 md:mb-2 leading-snug md:leading-normal">
                      Officially recognized agricultural enterprise, licensed and certified by the Government of Bangladesh.
                    </p>
                    <div className="flex flex-wrap gap-1 md:gap-1.5 text-xs">
                      <span className="bg-gray-100 text-gray-700 px-1.5 md:px-2 py-0.5 rounded font-medium text-[9px] md:text-xs">
                        Trade Licensed
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-1.5 md:px-2 py-0.5 rounded font-medium text-[9px] md:text-xs">
                        Quality Certified
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-1.5 md:px-2 py-0.5 rounded font-medium text-[9px] md:text-xs">
                        Halal Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Grid */}
            <div className="space-y-2 md:space-y-4">
              <div className="bg-gradient-to-br from-[#2E6B3F] to-[#1f4a2a] p-3 md:p-6 rounded-lg text-white">
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4">Our Business Services</h3>
                <div className="space-y-2 md:space-y-4">
                  <div className="space-y-1 md:space-y-1.5">
                    <p className="text-yellow-400 font-semibold mb-1 md:mb-2 text-[10px] md:text-xs uppercase tracking-wide">
                      Meat Products
                    </p>
                    <div className="space-y-1 md:space-y-1.5">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="bg-yellow-500 rounded-full p-0.5">
                          <Award size={10} className="text-gray-900 md:hidden" />
                          <Award size={12} className="text-gray-900 hidden md:block" />
                        </div>
                        <span className="text-white text-[10px] md:text-sm">Beef & Meat Sales</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="bg-yellow-500 rounded-full p-0.5">
                          <Award size={10} className="text-gray-900 md:hidden" />
                          <Award size={12} className="text-gray-900 hidden md:block" />
                        </div>
                        <span className="text-white text-[10px] md:text-sm">Quality Halal Products</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 md:space-y-1.5">
                    <p className="text-yellow-400 font-semibold mb-1 md:mb-2 text-[10px] md:text-xs uppercase tracking-wide">
                      Dairy
                    </p>
                    <div className="space-y-1 md:space-y-1.5">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="bg-yellow-500 rounded-full p-0.5">
                          <Award size={10} className="text-gray-900 md:hidden" />
                          <Award size={12} className="text-gray-900 hidden md:block" />
                        </div>
                        <span className="text-white text-[10px] md:text-sm">Dairy Milk Production</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="bg-yellow-500 rounded-full p-0.5">
                          <Award size={10} className="text-gray-900 md:hidden" />
                          <Award size={12} className="text-gray-900 hidden md:block" />
                        </div>
                        <span className="text-white text-[10px] md:text-sm">Fresh Milk Supply</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 md:space-y-1.5">
                    <p className="text-yellow-400 font-semibold mb-1 md:mb-2 text-[10px] md:text-xs uppercase tracking-wide">
                      Products
                    </p>
                    <div className="space-y-1 md:space-y-1.5">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="bg-yellow-500 rounded-full p-0.5">
                          <Award size={10} className="text-gray-900 md:hidden" />
                          <Award size={12} className="text-gray-900 hidden md:block" />
                        </div>
                        <span className="text-white text-[10px] md:text-sm">Food & Lifestyle Products</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="bg-yellow-500 rounded-full p-0.5">
                          <Award size={10} className="text-gray-900 md:hidden" />
                          <Award size={12} className="text-gray-900 hidden md:block" />
                        </div>
                        <span className="text-white text-[10px] md:text-sm">Quality Agro Products</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <div className="bg-[#FFF8E7] p-2 md:p-4 rounded-lg text-center border border-yellow-200">
                  <div className="text-lg md:text-2xl font-bold text-[#2E6B3F] mb-0.5 md:mb-1">2+</div>
                  <div className="text-[9px] md:text-xs text-gray-600">Years Experience</div>
                </div>
                <div className="bg-[#FFF8E7] p-2 md:p-4 rounded-lg text-center border border-yellow-200">
                  <div className="text-lg md:text-2xl font-bold text-[#2E6B3F] mb-0.5 md:mb-1">500+</div>
                  <div className="text-[9px] md:text-xs text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}