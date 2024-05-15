import React from 'react';
import logo from './logo.svg';
import './styles.css';

import IconMenuHamburguer from '../Icons/menu';
import IconKabum from '../Icons/kabum';
import IconSeta from '../Icons/IconSeta';
import IconPerfil from '../Icons/IconPerfil';
import IconPerson from '../Icons/IconPerson';
import IconHandPhone from '../Icons/IconHandPhone';
import IconHeart from '../Icons/IconHeart';
import IconStore from '../Icons/IconStore';
import HeaderBottom from '../HeaderBottom';

export default function Header() {
  return (
    <div className='bgblue'>
      <div className="header">
        <div className='header-left'>
          <IconMenuHamburguer /> <IconKabum />
        </div>
          <IconSeta/>
        <div className='header-right'>
          <div className="perfil">
          <IconPerfil /> <p className='header-text-perfil'>Faça <a href="#"> LOGIN</a> ou<br/> crie seu <a href="#">CADASTRO</a></p>
          </div>
          <div className="icons">
          <IconPerson /> <IconHandPhone /> <IconHeart /> <IconStore />
          </div>
        </div>
      </div>
    </div>
  );
}

