import React from 'react';
import Hero from './Hero';
import QuickFinder from './QuickFinder'; 
import Stats from './Stats';
import Process from './Process';
import SafetyPolicy from './Safety';
import About from './About';
import Reviews from './Reviews';
import FAQ from './FAQ';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <Hero />
      <QuickFinder />
      <Stats />
      <Process />
      <SafetyPolicy />
      <Reviews />
      <About />
      <FAQ />
    </div>
  );
};

export default Home;