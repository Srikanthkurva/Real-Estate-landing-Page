import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-navy-900">
      {/* Background with robust fallbacks */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt=""
          className="w-full h-full object-cover opacity-60"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent/20 text-accent text-sm font-semibold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Premium Real Estate
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-4xl mx-auto">
            Find Your Dream
            <br />
            <span className="gradient-text">Home Today</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover luxury properties with our expert guidance. 
            Your journey to the perfect address begins here.
          </p>

          {/* Compact Optimized Search Bar */}
          <div className="max-w-4xl mx-auto mt-12 px-2">
            <div className="glass-card rounded-2xl md:rounded-full p-1.5 shadow-2xl border border-white/5">
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-1">
                <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-white/10">
                  <MapPin className="w-4 h-4 text-accent" />
                  <div className="text-left w-full">
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Location</p>
                    <input type="text" placeholder="Where to?" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500" />
                  </div>
                </div>

                <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-white/10">
                  <Home className="w-4 h-4 text-accent" />
                  <div className="text-left w-full">
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Type</p>
                    <select className="w-full bg-transparent text-sm text-white outline-none cursor-pointer appearance-none">
                      <option className="bg-navy-900">All Types</option>
                      <option className="bg-navy-900">Villas</option>
                      <option className="bg-navy-900">Apartments</option>
                    </select>
                  </div>
                </div>

                <div className="flex-1 flex items-center gap-3 px-4 py-2">
                  <DollarSign className="w-4 h-4 text-accent" />
                  <div className="text-left w-full">
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Price</p>
                    <select className="w-full bg-transparent text-sm text-white outline-none cursor-pointer appearance-none">
                      <option className="bg-navy-900">Any Range</option>
                      <option className="bg-navy-900">$500k+</option>
                      <option className="bg-navy-900">$1M+</option>
                    </select>
                  </div>
                </div>

                <Button 
                  variant="accent"
                  className="rounded-xl md:rounded-full px-6 py-5 h-auto shadow-lg shadow-accent/20 text-sm font-bold"
                >
                  <Search className="w-4 h-4 mr-1.5" />
                  <span className="md:hidden lg:inline">Search Properties</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
