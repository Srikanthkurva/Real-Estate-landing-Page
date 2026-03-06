import { ArrowRight, Building, Castle, Store, Crown } from 'lucide-react';

const categories = [
  {
    title: 'Apartments',
    count: '520+ Properties',
    description: 'Modern living spaces in prime urban locations',
    icon: Building,
    image: '/images/property1.png',
    gradient: 'from-blue-600/80 to-cyan-600/80',
  },
  {
    title: 'Villas',
    count: '340+ Properties',
    description: 'Spacious estates with premium amenities',
    icon: Castle,
    image: '/images/property2.png',
    gradient: 'from-purple-600/80 to-pink-600/80',
  },
  {
    title: 'Commercial',
    count: '180+ Properties',
    description: 'Strategic business locations for growth',
    icon: Store,
    image: '/images/property6.png',
    gradient: 'from-emerald-600/80 to-teal-600/80',
  },
  {
    title: 'Luxury Homes',
    count: '250+ Properties',
    description: 'Exclusive residences beyond compare',
    icon: Crown,
    image: '/images/property5.png',
    gradient: 'from-amber-600/80 to-orange-600/80',
  },
];

const PropertyCategories = () => {
  return (
    <section id="categories" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            Browse By Type
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-4">
            Property <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Find exactly what you're looking for across our diverse property portfolio
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                    <p className="text-white/70 text-sm mb-2">{category.description}</p>
                    <span className="text-white/90 text-xs font-semibold">{category.count}</span>

                    <div className="flex items-center gap-2 mt-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
