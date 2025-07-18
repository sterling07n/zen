import React from 'react';
import Header from './components/Header';
import MovingBanner from './components/MovingBanner';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import Pricing from './components/Pricing';
import Features from './components/Features';
import DetailedFeatures from './components/DetailedFeatures';
import ProductSections from './components/ProductSections';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <MovingBanner />
      <Header />
      <Hero />
      <VideoShowcase />
      <Features />
      <DetailedFeatures />
      <Pricing />
      <ProductSections />
      <Testimonials />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;