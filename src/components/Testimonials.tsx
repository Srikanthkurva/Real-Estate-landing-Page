import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'First-Time Buyer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=38bdf8',
    rating: 5,
    text: 'EliteHomes made buying my first home an absolute breeze. Their team guided me through every step with patience and expertise. I found my dream apartment within two weeks!',
    location: 'Manhattan, NY',
  },
  {
    name: 'James Rodriguez',
    role: 'Property Investor',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james&backgroundColor=818cf8',
    rating: 5,
    text: 'As an investor, I need reliable partners. EliteHomes consistently delivers the best deals. Their market insights have helped me build a portfolio worth millions.',
    location: 'Beverly Hills, CA',
  },
  {
    name: 'Emily Chen',
    role: 'Luxury Home Buyer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily&backgroundColor=c084fc',
    rating: 5,
    text: 'The level of personalized service is outstanding. They understood exactly what I was looking for and presented options that exceeded all my expectations. Truly premium service!',
    location: 'Miami Beach, FL',
  },
  {
    name: 'Robert Anderson',
    role: 'Commercial Client',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=robert&backgroundColor=34d399',
    rating: 4,
    text: 'Finding the perfect commercial space seemed impossible until I connected with EliteHomes. Their expertise in commercial properties is unmatched. Highly recommended for businesses!',
    location: 'Chicago, IL',
  },
  {
    name: 'Lisa Thompson',
    role: 'Relocating Family',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa&backgroundColor=fbbf24',
    rating: 5,
    text: 'Moving across the country was daunting, but EliteHomes made our relocation seamless. They found us a beautiful family home near great schools. We couldn\'t be happier!',
    location: 'Austin, TX',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : typeof window !== 'undefined' && window.innerWidth >= 640 ? 2 : 1;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real stories from real people who found their perfect homes through us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${currentIndex}`}
              className="glass-card rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-500 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-navy-700 ring-2 ring-accent/20"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  <p className="text-accent/70 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="p-3 rounded-xl glass hover:bg-accent/10 text-gray-400 hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-accent'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 rounded-xl glass hover:bg-accent/10 text-gray-400 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
