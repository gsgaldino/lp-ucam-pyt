import React from 'react';

import Header from '../components/Header';
import FirstSection from '../components/FirstSection';
import GoalsSection from '../components/GoalsSection';
import ForWhoContainer from '../components/ForWhoContainer';
import ModulesSection from '../components/ModulesSection';
import Teachers from '../components/Teachers';
import FAQSection from '../components/FAQSection';
import CTA from '../components/CTA';
import AlgumaDuvidaSection from '../components/AlgumaDuvidaSection';
import MobileMatriculese from '../components/MobileMatriculese';

export default function PYTHomepage(){
  return (
    <div className="Homepage">
      <Header />
      <FirstSection />
      <GoalsSection />
      <ForWhoContainer />
      <ModulesSection />
      <Teachers />
      <FAQSection />
      <CTA />
      <AlgumaDuvidaSection />
      <MobileMatriculese />
    </div>
  )
}
