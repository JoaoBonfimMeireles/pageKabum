import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import HeaderBottom from './componentes/HeaderBottom';
import Vitrini from './componentes/Vitrini';
import Countdown from './componentes/Countdown';
import Product from './componentes/Products';
import ProductList from './componentes/ProductList/ProductList';

function App() {

  return (
    <div className="App">
      <Header />
      <HeaderBottom />
      <Vitrini />
      <Countdown />
      <ProductList />
    </div>
  );
}

export default App;
