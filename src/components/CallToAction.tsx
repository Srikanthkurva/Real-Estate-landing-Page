import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  onContactClick: () => void;
}

const CallToAction = ({ onContactClick }: CallToActionProps) => {
  return (
    <section id="cta" className="py-16 md:py-20 relative overflow-hidden bg-navy-950 px-4">
      <div className="max-w-5xl mx-auto relative">
        {/* Compact Glass Card */}
        <div className="glass-card rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl border border-white/5">
          {/* Subtle Background Glows */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-indigo-600/5" />
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/10 rounded-full blur-[60px]" />
          
          {/* Content Container */}
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/5 text-accent text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Start Your Journey
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
              Ready to Find Your <span className="gradient-text">Perfect Home?</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Connect with our professionals for personalized property recommendations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                variant="accent"
                size="xl"
                onClick={onContactClick}
                className="w-full sm:w-auto rounded-xl px-10 h-16"
              >
                <Phone className="w-5 h-5 mr-1" />
                Contact Agent
              </Button>

              <Button
                variant="outline"
                size="xl"
                asChild
                className="w-full sm:w-auto rounded-xl px-10 h-16 border-white/10 text-white font-bold hover:bg-white/5 transition-all group"
              >
                <a href="#properties">
                  Browse Properties
                  <ArrowRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1.5 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
