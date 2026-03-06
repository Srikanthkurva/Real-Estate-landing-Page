import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  MapPin, Bed, Bath, Maximize, ArrowLeft, Check, 
  Sparkles, ShieldCheck, Loader2 
} from 'lucide-react';
import { useProperty } from '../hooks/use-properties';
import ContactModal from './ContactModal';
import { Button } from "@/components/ui/button";

const PropertyDetails = () => {
  const { id } = useParams();
  const { data: property, loading, error } = useProperty(id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-16 h-16 text-accent animate-spin" />
        <p className="text-gray-400 font-bold tracking-widest uppercase animate-pulse">Loading Details...</p>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center p-4">
        <div className="glass-card p-12 rounded-[2.5rem] text-center space-y-6 max-w-lg border border-red-500/10">
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto text-red-500 text-3xl font-bold">!</div>
          <h2 className="text-3xl text-white font-bold font-heading">{error || "Property Not Found"}</h2>
          <p className="text-gray-400">We couldn't find the property you're looking for. It might have been sold or removed.</p>
          <Button asChild variant="outline" className="border-accent/20">
            <Link to="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" /> Back to Listings
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Properties</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12 animate-fade-in-up">
            {/* Gallery / Main Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-video bg-navy-900 group shadow-2xl">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 rounded-full bg-accent text-navy-950 font-bold text-xs uppercase tracking-widest shadow-xl">
                  {property.tag}
                </span>
              </div>
            </div>

            {/* Title and Price */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium tracking-wide">{property.location}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">{property.title}</h1>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Pricing From</span>
                <span className="text-4xl font-bold gradient-text">{property.price}</span>
              </div>
            </div>

            {/* Fast Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Bed, label: 'Bedrooms', val: property.beds },
                { icon: Bath, label: 'Bathrooms', val: property.baths },
                { icon: Maximize, label: 'Total Area', val: property.area },
                { icon: ShieldCheck, label: 'Verification', val: 'Verified' },
              ].map((stat, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:bg-white/5 transition-colors">
                  <stat.icon className="w-6 h-6 text-accent mb-3" />
                  <span className="text-white font-bold">{stat.val}</span>
                  <span className="text-gray-500 text-[10px] mt-1 uppercase font-black tracking-tighter">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white font-heading underline decoration-accent underline-offset-8">Description</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="space-y-8 p-10 glass-card rounded-3xl border border-accent/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-[100px]" />
              <h2 className="text-2xl font-bold text-white font-heading flex items-center gap-3 relative">
                <Sparkles className="w-6 h-6 text-accent" />
                Premium Amenities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 relative">
                {property.amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Contact & Agent */}
          <div className="space-y-8 animate-fade-in-up animation-delay-200">
            <div className="glass-card p-8 rounded-3xl border border-white/10 sticky top-28 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              
              <h3 className="text-xl font-bold text-white mb-6">Listing Agent</h3>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {property.agent.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight">{property.agent.name}</h4>
                  <p className="text-accent text-sm font-medium">Verified Agent</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                    <Loader2 className="w-5 h-5 animate-pulse" /> {/* Placeholder for agent icon */}
                  </div>
                  <span className="font-medium">{property.agent.phone}</span>
                </div>
              </div>

              <Button 
                variant="accent"
                size="xl"
                className="w-full rounded-xl"
                onClick={() => setIsModalOpen(true)}
              >
                Schedule Viewing
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="w-full mt-3 rounded-xl uppercase tracking-widest text-xs"
                onClick={() => setIsModalOpen(true)}
              >
                Inquire Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        propertyTitle={property.title}
      />
    </div>
  );
};

export default PropertyDetails;
