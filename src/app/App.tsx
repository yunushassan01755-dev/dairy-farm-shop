import { Header } from './components/Header';
import { HomeSection } from './components/sections/HomeSection';
import { AboutSection } from './components/sections/AboutSection';
import { CowsSection } from './components/sections/CowsSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { ContactSection } from './components/sections/ContactSection';
import { CartProvider } from './components/CartContext';
import { Toaster } from './components/ui/sonner';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { useEffect } from 'react';

// Mozzammel Dairy and Agro - Professional Dairy Farm Website v2
export default function App() {
  // Prevent mobile zoom and optimize for touch
  useEffect(() => {
    // Add viewport meta tag if not present
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <ScrollProgress />
        <Header />
        <main>
          <HomeSection />
          <AboutSection />
          <CowsSection />
          <ProductsSection />
          <ReviewsSection />
        </main>
        <ContactSection />
        <ScrollToTop />
        <Toaster position="top-right" richColors />
      </div>
    </CartProvider>
  );
}