import React from 'react';
import './App.css';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">

        <div>
        <h1>Cats to relax</h1>
        <p>Veja gatinhos fofos!</p>
        </div>

        <hr />
        <div className="gif-container">
          <img
            src="https://i.pinimg.com/originals/3a/2a/a1/3a2aa11b218ddb328fb1277f2d91dbfa.gif"
            alt="GIF animado"
            className="gif-image"
          />
          <p>Gatinho dançando</p>
        </div>

        <hr />
        <div className="gif-container">
          <img
            src="https://31.media.tumblr.com/f81af2c5c18950d411a4c6d4c39a5f06/tumblr_mvsx1npiXI1spnz0yo1_400.gif"
            alt="GIF animado"
            className="gif-image"
          />
          <p>Gatinho massagista</p>
        </div>

        <hr />

        <div className="gif-container">
          <img
            src="https://www.essaseoutras.com.br/wp-content/uploads/2011/11/gatinhos-gif-animado.gif"
            alt="GIF animado"
            className="gif-image"
          />
          <p>Gatinho lutador</p>
        </div>

        <hr />

      </header>
    </div>
  );
}

export default App;

