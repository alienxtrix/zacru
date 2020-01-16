import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          En contrucción<code></code>
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/ZACRUTM/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactanos en facebook
        </a>
        <a
          className="App-link"
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactanos en twitter
        </a>
        <a
          className="App-link"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactanos en instagram
        </a>
        
      </header>
      <footer className="App-footer">
  <p>Posted by: Kevin Cruz & Josh Fuentes </p>
  <p>Contact information: <a className="App-link" href="mailto:someone@example.com">info@zacru.com.mx</a>.</p>
<a>© 2020 zacru</a>
</footer>
    </div>
  );
}

export default App;
