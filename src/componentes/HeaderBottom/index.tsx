import React from 'react';
import logo from './logo.svg';
import './style.css';
import IconDownSet from '../Icons/IconDownSet';



export default function HeaderBottom() {
  return (
    <div className="header-bottom">
        <ul className='list-orange'>
          <li className='inf-orange-start'><a href="#" target="_blank" rel="noopener noreferrer" className='box-orange'>DEPARTAMENTOS</a> <IconDownSet /></li>
          <li className='inf-orange'><a href="#" target="_blank" rel="noopener noreferrer" className='box-orange'>MONTE O SEU PC</a></li>
          <li className='border'></li>
          <li className='inf-orange'><a href="#" target="_blank" rel="noopener noreferrer" className='box-orange'>OFERTA DO DIA</a></li>
          <li className='border'></li>
          <li className='inf-orange'><a href="#" target="_blank" rel="noopener noreferrer" className='box-orange'>LANÇAMENTOS</a></li>
          <li className='border'></li>
          <li className='inf-orange'><a href="#" target="_blank" rel="noopener noreferrer" className='box-orange'>PC GAMER</a></li>
          <li className='border'></li>
          <li className='inf-orange'><a href="#" target="_blank" rel="noopener noreferrer" className='box-orange'>OPENBOX</a></li>
          <li className='border'></li>
          <li className='inf-orange'><a href="#" target="_blank" rel="noopener noreferrer" className='box-orange'>SEJA PRIME</a></li>
          <li className='border'></li>
          <li className='inf-orange'><a href="#" target="_blank" rel="noopener noreferrer" className='box-orange'>CARTÃO KABUM!</a></li>
          <li className='border'></li>
          <li className='inf-orange'><a href="#" target="_blank" rel="noopener noreferrer" className='box-orange'>BAIXE O APP</a></li>
          <li className='border'></li>
          <li className='inf-orange-end'><a href="#" target="_blank" rel="noopener noreferrer" className='box-orange'>GIFT CARD</a></li>
        </ul>
    </div>
  );
}

