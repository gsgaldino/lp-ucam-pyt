import React from 'react';
import { Link } from 'react-router-dom';

import aluraLogo from '../../../assets/alura-dark.png';
import ucamLogo from '../../../assets/logo-ucam.png';

import './styles.css';
import './responsive.css';

export default function Header(){
  return (
    <div className="Header">
      <div className="Header__logos">
        <img
          src={ucamLogo}
          alt="UCAM Logo"
          title="UCAM logo"
        />

        <img 
          src={aluraLogo}
          alt="Alura logo"
          title="Alura logo"
        />  
      </div>
      <nav className="menu">
        <Link to="/formacao-gerente-agil">Gerente ágil</Link><br></br>
        <Link to="/">Digital e Agile Thinking</Link>
      </nav>
    </div>
  )
}
