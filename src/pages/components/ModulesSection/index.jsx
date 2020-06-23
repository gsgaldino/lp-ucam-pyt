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
        <p>I. Introdução a Linguagem

Curso Python parte 1: Introdução a nova versão da linguagem
Curso Python parte 2: Avançado na linguagem
Post: Trabalhando com precisão em números decimais no Python
Curso Python: Introdução a Orientação a objetivos
Vídeo: A linguagem Python
Post: Quais as diferenças entre Python 2 e 3
II.Aprofundamento em detalhes da linguagem

Curso Python: Avançado na orientado a objetos
Post: Como comparar objetivos no Python?
Post: Python datetime: Lidando com datas e horários
Curso Python: Manipulação de StringsCurso Python Collections parte 1: Listas e tuplas
Curso Python Collections parte 2: Conjuntos e dicionários
Post: O que são iteradores no Python?
Post: Trabalhando com dicionários
Post: Ordenando Listas no Python

III. Trabalho com formato de dados

Curso Python Brasil: Validação de dados no padrão nacional
Post: Formatação de moeda e internacionalização com Python
Podcast: Python 
Post: A diferença das funções input e raw_input no Python
 IV.Testes automatizados

Curso testes automatizados: TDD com Python

Post: Montando cenários de testes com Pytest</p>
        
      </div>
    </div>
  )
}
