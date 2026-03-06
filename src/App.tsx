import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import WhyChooseUs from './components/WhyChooseUs';
import PropertyCategories from './components/PropertyCategories';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import PropertyDetails from './components/PropertyDetails';
import ContactModal from './components/ContactModal';

const LandingPage = ({ onContactClick }) => (
  <div className="min-h-screen bg-navy-950">
    <Hero />
    <FeaturedProperties />
    <WhyChooseUs />
    <PropertyCategories />
    <Testimonials />
    <CallToAction onContactClick={onContactClick} />
  </div>
);

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-navy-950">
        <Navbar onContactClick={() => setIsContactOpen(true)} />
        
        <Routes>
          <Route path="/" element={<LandingPage onContactClick={() => setIsContactOpen(true)} />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>

        <Footer />

        <ContactModal 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
          propertyTitle="General Inquiry"
        />
      </div>
    </Router>
  );
}

export default App;
