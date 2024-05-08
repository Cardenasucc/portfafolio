// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  const handleChangeLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="language-button" onClick={handleChangeLanguage}>
          Change Language
        </button>
      </header>
      <p>
        {language === 'en' ? 'Hello, World!' : '¡Hola, Mundo!'}
      </p>
    </div>
  );
}

export default App;
