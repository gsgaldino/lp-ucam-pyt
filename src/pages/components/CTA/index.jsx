import React from 'react';

import './styles.css';
import './responsive.css';

export default function CTA(){
  return (
    <div className="CTA__Container">
      <a 
        href="https://cursos.alura.com.br/compra/candido-mendes-python-linguagem" className="button"
        rel="noopener noreferrer"
        target="_blank"
      >
        Matricule-se já!
      </a>
    </div>
  )
}
