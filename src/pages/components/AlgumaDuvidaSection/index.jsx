import React from 'react';
import LogosSection from '../LogosSection';
import SocialSection from '../SocialSection';

import { FaWhatsapp, FaMobileAlt } from 'react-icons/fa';

import './responsive.css';

export default function AlgumaDuvidaSection(){
  return (
    <div className="Question__Section">
      <p><strong>Alguma dúvida?</strong></p>
      <p>Fale conosco, vamos adorar te atender.</p>

      <div className="media">
        <div className="item">
          <FaWhatsapp
            color="var(--text-color)"
            size="40"
          />
          <p>+55 11 97121-1053</p>
        </div>

        <div className="item">
          <FaMobileAlt
            color="var(--text-color)"
            size="40"
          />
          <p>+55 11 3375-0044</p>
        </div>
      </div>
      
      <SocialSection />
      <LogosSection />

    </div>
  )
}
