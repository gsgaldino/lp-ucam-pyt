import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import './responsive.css';
import './styles.css';

export default function ModulesSection(){
  const [listState, ChangeListState] = useState(false);

  return (
    <div 
      className={`Modules__Section ${listState ? 'open' : ''}`}
      onClick={() => ChangeListState(!listState)}
    >
      <div className="container-text">
        <h2>Módulos</h2>
        <MdKeyboardArrowDown
          color="var(--primary-color)"
          size="30"
        />
      </div>

      <div className="content">
        <ol>
          <li><strong>Introdução a Linguagem</strong>
            <ul>
              <li>
                <strong>Curso Python parte 1:</strong>
                <p>Introdução a nova versão da linguagem</p>
              </li>

              <li>
                <strong>Curso Python parte 2:</strong>
                <p>Avançando na linguagem</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>Trabalhando com precisão em números decimais no Python</p>
              </li>

              <li>
                <strong>Curso Python:</strong>
                <p>Introdução a Orientação a Objetos</p>
              </li>

              <li>
                <strong>Vídeo: </strong>
                <p>A linguagem Python</p>
              </li>

              <li>
                <strong>Post: </strong>
                <p>Quais as diferenças entre Python 2 e 3</p>
              </li>
            </ul>
          </li>

          <li><strong>Aprofundamento em detalhes da linguagem</strong>
            <ul>
              <li>
                <strong>Curso Python:</strong>
                <p>Avançando na orientado a objetos</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>Como comparar objetos no Python?</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>Python datetime: Lidando com datas e horários</p>
              </li>

              <li>
                <strong>Curso Python: </strong>
                <p>Manipulação de Strings</p>
              </li>

              <li>
                <strong>Curso Python Collections parte 1:</strong>
                <p>Listas e tuplas</p>
              </li>

              <li>
                <strong>Curso Python Collections parte 2:</strong>
                <p>Conjuntos e dicionários</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>O que são iteradores no Python?</p>
              </li>
              
              <li>
                <strong>Post:</strong>
                <p>Trabalhando com dicionários</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>Ordenando Listas no Python</p>
              </li>
            </ul>
          </li>

          <li>
            <strong>Trabalho com formato de dados</strong>
            <ul>
              <li>
                <strong>Curso Python:</strong>
                <p>Validação de dados no padrão nacional</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>Formatação de moeda e internacionalização com Python</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>Python</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>A diferença das funções input e raw_input no Python IV.Testes automatizados</p>
              </li>

              <li>
                <strong>Curso testes automatizados:</strong>
                <p>TDD com Python</p>
              </li>

              <li>
                <strong>Post: </strong>
                <p>Montando cenários de testes com Pytest</p>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  )
}
