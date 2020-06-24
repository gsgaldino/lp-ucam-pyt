import React from 'react';

import './styles.css';
import './responsive.css';

export default function FirstSection(){
  const HubspotForm = React.lazy(() => import('react-hubspot-form'));

  return (
    <div className="First__Section">
      <div className="container">
        <div className="text">
          <h3>Formação</h3>
          <h1>Python</h1>
          <p>A formação em Python está dentro das principais linguagens de programação e te dará o conhecimento necessário para ingressar nesse mercado.</p>
          <a 
            href="https://cursos.alura.com.br/compra/candido-mendes-python-linguagem" 
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matricule-se já!
          </a>
        </div>
      </div>

      <div className="container">
        <div className="form">
          <p>Inscreva-se para mais informações!</p>
          <React.Suspense fallback={<p>Carregando ...</p>}>
            <HubspotForm
              portalId='6331207'
              formId='8cbb93dd-332b-4d93-b17d-dabd9963c5f1'
            />
          </React.Suspense>
        </div>
      </div>
    </div>
  )
}
