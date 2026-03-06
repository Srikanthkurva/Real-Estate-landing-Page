import { useState } from 'react';
import { X, Send, User, Mail, Phone, MessageSquare, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { PropertyService } from '../services/property-service';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle: string;
}

const ContactModal = ({ isOpen, onClose, propertyTitle }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await PropertyService.sendInquiry({
        ...formData,
        propertyId: 1 // In a real app, pass the actual ID
      });
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({ fullName: '', email: '', phone: '', message: '' });
      }, 2500);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy-950/80 backdrop-blur-sm transition-all duration-300">
      
      <div className="relative w-full max-w-lg bg-navy-900 border border-white/10 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl animate-fade-in-up flex flex-col my-auto">
        
        {isSuccess ? (
          <div className="p-12 text-center space-y-6 flex flex-col items-center justify-center animate-fade-in">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-white font-heading">Thank You!</h2>
            <p className="text-gray-400">Our agent will contact you within the next 24 hours regarding <span className="text-white font-medium">{propertyTitle}</span>.</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-accent to-indigo-600 p-5 sm:p-7 text-white shrink-0">
              <button 
                onClick={onClose}
                disabled={isSubmitting}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors z-10 disabled:opacity-50"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <div className="pr-8">
                <h2 className="text-xl sm:text-2xl font-bold font-heading">Contact Agent</h2>
                <p className="text-white/80 text-xs sm:text-sm mt-1 line-clamp-1 italic">
                  Re: {propertyTitle}
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 sm:space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-black text-gray-500 uppercase tracking-[0.2em] px-1">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                    <input 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      type="text" required placeholder="John Doe"
                      className="w-full bg-navy-950 border border-white/5 rounded-xl py-3 pl-11 pr-4 text-sm sm:text-base text-white outline-none focus:border-accent/40 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] sm:text-xs font-black text-gray-500 uppercase tracking-[0.2em] px-1">Email</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                      <input 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" required placeholder="john@email.com"
                        className="w-full bg-navy-950 border border-white/5 rounded-xl py-3 pl-11 pr-4 text-sm text-white outline-none focus:border-accent/40 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] sm:text-xs font-black text-gray-500 uppercase tracking-[0.2em] px-1">Phone</label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                      <input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel" required placeholder="+1 (234) 567"
                        className="w-full bg-navy-950 border border-white/5 rounded-xl py-3 pl-11 pr-4 text-sm text-white outline-none focus:border-accent/40 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-black text-gray-500 uppercase tracking-[0.2em] px-1">Your Message</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required rows={3} placeholder="Tell us about your requirements..."
                      className="w-full bg-navy-950 border border-white/5 rounded-xl py-3 pl-11 pr-4 text-sm sm:text-base text-white outline-none focus:border-accent/40 transition-all resize-none"
                    />
                  </div>
                </div>
              </div>

              <Button 
                type="submit"
                variant="accent"
                size="xl"
                disabled={isSubmitting}
                className="w-full rounded-xl active:scale-95"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-1" />
                    Send Inquiry
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
