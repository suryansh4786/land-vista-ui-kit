
import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import RegistrationForm from '../components/RegistrationForm';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <AboutSection />
      <RegistrationForm />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
