import React from 'react';
import Hero3D from './components/Hero3D';
import WorkShowcase from './components/WorkShowcase';
import BioCTA from './components/BioCTA';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero3D />
      <WorkShowcase />
      <BioCTA />
      <ContactFooter />
    </div>
  );
}

export default App;
