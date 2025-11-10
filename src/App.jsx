import React from 'react';
import Hero3D from './components/Hero3D';
import TimelineStory from './components/TimelineStory';
import VisualJourney from './components/VisualJourney';
import PastelContact from './components/PastelContact';

function App() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#FFF8F2' }}>
      <Hero3D />
      <TimelineStory />
      <VisualJourney />
      <PastelContact />
    </div>
  );
}

export default App;
