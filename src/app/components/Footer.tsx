import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Mail, Facebook, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import logo from '/image/71b53793b370d33f12ab71412969dc8ab441b481.png';

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const linkMap: { [key: string]: string } = {
    'Home': 'home',
    'About Us': 'about',
    'Our Business': 'business',
    'Products': 'products',
    'Gallery': 'gallery',
    'Contact Us': 'contact'
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-3 md:px-4 py-4 md:py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 mb-6 md:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Mozzammel Dairy and Agro Logo" className="h-16 w-16 md:h-20 md:w-20 mb-4 md:mb-6 rounded-full object-cover scale-150" style={{ objectPosition: 'center' }} />
            
            <p className="text-gray-300 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
              Government licensed dairy farm providing quality milk products and sustainable cattle farming solutions.
            </p>

            <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin size={14} className="text-yellow-400 mt-1 flex-shrink-0 md:hidden" />
                <MapPin size={16} className="text-yellow-400 mt-1 flex-shrink-0 hidden md:block" />
                <span className="text-gray-300">
                  Shamlashi Bharalia Para,<br />
                  Shamlapur – 1310,<br />
                  Savar, Dhaka, Bangladesh
                </span>
              </div>
              
              <div className="flex items-center gap-2 md:gap-3">
                <Phone size={14} className="text-yellow-400 flex-shrink-0 md:hidden" />
                <Phone size={16} className="text-yellow-400 flex-shrink-0 hidden md:block" />
                <span className="text-gray-300">01924900128</span>
              </div>
              
              <div className="flex items-start gap-2 md:gap-3">
                <Clock size={14} className="text-yellow-400 mt-1 flex-shrink-0 md:hidden" />
                <Clock size={16} className="text-yellow-400 mt-1 flex-shrink-0 hidden md:block" />
                <div className="text-gray-300">
                  <p className="font-semibold">Business Hours:</p>
                  <p>Sat - Thu: 8:00 AM - 8:00 PM</p>
                  <p>Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-yellow-400">Useful Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {['Home', 'About Us', 'Our Business', 'Products', 'Gallery', 'Contact Us', 'Terms & Conditions', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-xs md:text-sm flex items-center gap-2"
                    onClick={(e) => handleNavClick(e, linkMap[link] || link.toLowerCase().replace(/\s+/g, '-'))}
                  >
                    <span className="w-1 h-1 bg-yellow-400 rounded-full"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-yellow-400">Our Services</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                'Cattle Fattening',
                'Milk Production',
                'Fresh Milk Supply',
                'Beef & Meat Sales',
                'Agro Products',
                'Farm Consultation',
                'Dairy Farm Tours'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-xs md:text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-yellow-400 rounded-full"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-yellow-400">Get In Touch</h4>
            <form className="space-y-3 md:space-y-4">
              <Input 
                type="text"
                placeholder="Your Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-sm md:text-base"
              />
              <Input 
                type="email"
                placeholder="Your Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-sm md:text-base"
              />
              <Textarea 
                placeholder="Your Message"
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-sm md:text-base"
              />
              <Button 
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold text-sm md:text-base py-2 md:py-2.5"
              >
                <Send size={14} className="mr-2 md:hidden" />
                <Send size={16} className="mr-2 hidden md:inline" />
                Send Message
              </Button>
            </form>

            <div className="flex gap-2 md:gap-3 mt-4 md:mt-6">
              <a 
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={16} className="md:hidden" />
                <Facebook size={18} className="hidden md:block" />
              </a>
              <a 
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="md:hidden">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="hidden md:block">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a 
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail size={16} className="md:hidden" />
                <Mail size={18} className="hidden md:block" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 md:pt-8 mt-6 md:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400">
            <p>© 2026 Mozzammel Dairy and Agro. All Rights Reserved.</p>
            <p className="text-center">
              Designed with <span className="text-red-500">❤</span> for a better agricultural future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}