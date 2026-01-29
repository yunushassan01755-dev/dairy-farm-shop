import { ShopCategories } from '../ShopCategories';
import { FeaturedProducts } from '../FeaturedProducts';

export function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-32 md:scroll-mt-36 py-8 md:py-12">
      <ShopCategories />
      <FeaturedProducts />
    </section>
  );
}
