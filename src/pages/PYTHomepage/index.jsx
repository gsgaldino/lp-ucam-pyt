import React from 'react';

import Header from '../components/Header';
import FirstSection from '../components/FirstSection';
import GoalsSection from '../components/GoalsSection';

export default function PYTHomepage(){
  return (
    <div className="Homepage">
      <Header />
      <FirstSection />
      <GoalsSection />
    </div>
  )
}
