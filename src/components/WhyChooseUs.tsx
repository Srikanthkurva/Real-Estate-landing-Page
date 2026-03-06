import { Shield, Gem, Lock, Headphones } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Trusted Agents', desc: 'Expert guidance through every step of your home journey.', color: 'from-blue-500 to-cyan-500' },
  { icon: Gem, title: 'Best Deals', desc: 'Direct access to off-market premium property listings.', color: 'from-purple-500 to-pink-500' },
  { icon: Lock, title: 'Secure Buying', desc: 'Iron-clad legal and financial transparency guaranteed.', color: 'from-emerald-500 to-teal-500' },
  { icon: Headphones, title: '24/7 Priority', desc: 'Round-the-clock support for all your property needs.', color: 'from-amber-500 to-orange-500' },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-32 bg-navy-900 px-4 mt-[-2px]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <p className="text-accent text-sm font-bold uppercase tracking-widest">Client Benefits</p>
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight">
          Why Choose <span className="gradient-text">EliteHomes</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">Providing unmatched expertise in the luxury real estate market for over 15 years.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl text-center flex flex-col items-center hover:-translate-y-2 transition-transform shadow-xl">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg`}>
              <f.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{f.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
