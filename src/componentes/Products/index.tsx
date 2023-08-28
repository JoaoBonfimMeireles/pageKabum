import React from 'react';

import './style.css';
import Iconshop from '../Icons/Iconshop';
import IconHeart from '../Icons/IconHeart';
import IconSellCar from '../Icons/IconSellCar';
import IconSellCarWhite from '../Icons/IconSellCarWhite';

interface Props {
  img: string;
  productText: string;
  productValue: number;
  paymentMethod?: string;
}

const Products = ({img, productText, productValue}:Props) => {

  function limitadorText(text: string) {
    if (text.length <= maxCharacter) {
      return text;
    } else {
      return text.substring(0, maxCharacter) + "..."
    }
  }

  const maxCharacter = 75;

  function formatBRL(value: number): string {
    const formartvalueBRL = new Intl.NumberFormat('pr-BR', { 
      style: 'currency',
      currency: 'BRL' 
    }).format(value);

    return formartvalueBRL;
  }

  return (
    <div className="product-box">
      <div className='product-box-top'>
        <div className='product-box-icons-top'>
          <IconHeart />
          <IconSellCar />
        </div>
      </div>
      <div className='product-box-img'>
        <img className='product-img' src={img} alt="" />
      </div>
      <div className='product-box-text'>
        <span className='product-text-first'>{limitadorText(productText)}</span>
        <span className='product-text-cust'>{formatBRL(productValue)}</span>
        <span className='product-text-pix'>À vista no PIX</span>
      </div>
      <div className='product-box-bottom'>
        <button className='product-button'>
          <IconSellCarWhite /><p className='product-button-text'> COMPRAR</p>
        </button>
      </div>
    </div>
  );
}

export default Products;
