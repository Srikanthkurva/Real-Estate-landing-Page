import { Building2, MapPin, Phone, Mail, Clock, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  'Quick Links': ['Home', 'Properties', 'About Us', 'Services', 'Blog', 'Careers'],
  'Property Types': ['Apartments', 'Villas', 'Commercial', 'Luxury Homes', 'Townhouses', 'Condos'],
  'Resources': ['Buyer Guide', 'Seller Guide', 'Mortgage Calculator', 'Market Trends', 'FAQs', 'Support'],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-indigo-500 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-heading text-white">
                Elite<span className="gradient-text">Homes</span>
              </span>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted partner in finding exceptional properties. With over 15 years of experience,
              we've helped thousands of families find their dream homes.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>123 Fifth Avenue, New York, NY 10160</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>info@elitehomes.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-accent transition-colors duration-300 hover:pl-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 EliteHomes. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-accent to-indigo-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-accent/30 transform hover:-translate-y-1 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
