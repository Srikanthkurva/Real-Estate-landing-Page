import { useState, useEffect } from 'react';
import { Menu, X, Phone, Building2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Properties', href: isHome ? '#properties' : '/#properties' },
    { name: 'Why Us', href: isHome ? '#why-us' : '/#why-us' },
    { name: 'Categories', href: isHome ? '#categories' : '/#categories' },
    { name: 'Testimonials', href: isHome ? '#testimonials' : '/#testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'glass py-3 shadow-2xl'
          : 'bg-navy-950/20 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-indigo-600 flex items-center justify-center transform group-hover:rotate-6 transition-transform">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold font-heading text-white tracking-tight hidden xs:block">
              Elite<span className="text-accent">Homes</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <Button
              variant="accent"
              size="default"
              onClick={onContactClick}
              className="rounded-xl px-6 py-2.5 h-auto text-navy-950 font-bold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Agent
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[72px] transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
          }`}
        >
          <div className="mx-4 p-4 rounded-2xl glass shadow-2xl space-y-2 border-t border-white/10">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-lg font-medium text-gray-200">Home</Link>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-lg font-medium text-gray-200 hover:text-accent hover:bg-white/5 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="accent"
              className="w-full mt-4 p-6 rounded-xl font-bold"
              onClick={() => { setIsOpen(false); onContactClick(); }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
