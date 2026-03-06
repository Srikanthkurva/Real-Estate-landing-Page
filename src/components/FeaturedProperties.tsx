import { MapPin, Bed, Bath, Maximize, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import type { Property } from '../data/properties';
import { useProperties } from '../hooks/use-properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => (
  <div className="group glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300">
    <div className="relative h-64 bg-navy-800">
      <img 
        src={property.image} 
        alt={property.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter bg-accent text-navy-950 shadow-lg">
        {property.tag}
      </span>
      <div className="absolute bottom-4 left-4">
        <span className="text-2xl font-bold text-white tracking-tight">{property.price}</span>
      </div>
    </div>
    <div className="p-6 space-y-4">
      <div className="h-16 overflow-hidden">
        <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors leading-tight">{property.title}</h3>
        <div className="flex items-center gap-1 text-gray-400 text-sm mt-1">
          <MapPin className="w-4 h-4 text-accent shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-gray-400 text-xs border-y border-white/5 py-4">
        {property.beds > 0 && <div className="flex items-center gap-1.5"><Bed className="w-4 h-4 text-accent/70" /><span>{property.beds} Beds</span></div>}
        <div className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-accent/70" /><span>{property.baths} Baths</span></div>
        <div className="flex items-center gap-1.5"><Maximize className="w-4 h-4 text-accent/70" /><span>{property.area}</span></div>
      </div>
      <Button 
        asChild
        variant="outline"
        className="w-full py-6 rounded-xl border-white/10 text-white font-bold hover:bg-accent hover:text-navy-950 hover:border-accent transition-all text-sm group/btn active:scale-[0.98]"
      >
        <Link to={`/property/${property.id}`}>
          View Details <ArrowRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  </div>
);

const FeaturedProperties = () => {
  const { data: propertiesList, loading, error } = useProperties();

  return (
    <section id="properties" className="py-24 bg-navy-950 px-4 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent text-sm font-bold uppercase tracking-[0.3em]">Our Exclusive Collection</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-white">Featured <span className="gradient-text">Listings</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-indigo-600 mx-auto rounded-full" />
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <Loader2 className="w-12 h-12 text-accent animate-spin" />
            <p className="text-gray-400 animate-pulse font-medium">Fetching premium properties...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-red-500/10 rounded-3xl border border-red-500/20">
            <p className="text-red-400 font-bold">{error}</p>
            <Button variant="outline" className="mt-4 border-red-500/20" onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {propertiesList.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;
