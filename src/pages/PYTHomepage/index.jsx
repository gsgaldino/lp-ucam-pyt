import React from 'react';

import Header from '../components/Header';
import FirstSection from '../components/FirstSection';
import GoalsSection from '../components/GoalsSection';
import ForWhoContainer from '../components/ForWhoContainer';
import ModulesSection from '../components/ModulesSection';

export default function PYTHomepage(){
  return (
    <div className="Homepage">
      <Header />
      <FirstSection />
      <GoalsSection />
      <ForWhoContainer />
      <ModulesSection />
    </div>
  )
}
