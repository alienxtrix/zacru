import React from 'react';
import logo from './z2.png';
import fb from './fb.svg';
import tw from './tw.svg';
import ins from './ins.svg';
import ml from './ml.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p margin="10px">
          En construcción
        </p>
        <a
          className="App-link"
        >
          Contactános </a>
         <div className="Flex-socialmedia">
          <a className="App-sm"
          href="https://www.facebook.com/ZACRUTM/"
          target="_blank"
          rel="noopener noreferrer"><img src={fb} className="App-socialmedia" alt="logo" /></a> 
          <a  className="App-sm"
          href="https://twitter.com/ZacruTM/"
          target="_blank"
          rel="noopener noreferrer"><img src={tw} className="App-socialmedia" alt="logo" />
          </a>
          <a className="App-sm"
           href="https://www.instagram.com/zacrutm/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={ins} className="App-socialmedia" alt="ins" />
        </a>
          </div>
     
        <a
          className="App-link"
        >
          Visualiza nuestros productos en</a>
          <a href="https://listado.mercadolibre.com.mx/_CustId_417292318"
          target="_blank"
          rel="noopener noreferrer">
          <img src={ml} alt="ml" padding="5px" />
        </a>
        
      </header>
      <footer className="App-footer">
  <p>Posted by: Kevs, Josh & Dan</p>
  <p>Contact information: <a className="App-link" href="mailto:someone@example.com">info@zacru.com.mx</a>.</p>
<a>© 2020 zacru</a>
</footer>
    </div>
  );
}

export default App;
