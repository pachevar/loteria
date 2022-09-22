// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import logo from './assets/img/logo.png';
// import cadejo from './assets/img/cadejo.jpg';
import imagenes from './imagenes.json';
// import gif from './assets/img/tombola.gif';

function App() {
  const [arreglo] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]);
  var [cuenta, setCuenta] = useState(arreglo.length);
  var [random, setRandom] = useState();
  var [imagen, setImagen] = useState('./assets/img/tombola.png');
  var [terminar, setTerminar] = useState(false);
  var [arregloImagenes, setArregloImagenes] = useState([]);
  const buttons = () => {
    if(terminar){
      <div id="boton">
        <button disabled={terminar} className="botongirar" onClick={handleOnClick}>Gira la tómbola</button>
        <button disabled={!terminar} className="botongirar" onClick={handleOnClick}>Reiniciar</button>
      </div>
    } else{
      <div id="boton">
        <button disabled={!terminar} className="botongirar" onClick={handleOnClick}>Gira la tómbola</button>
        <button disabled={terminar} className="botongirar" onClick={handleOnClick}>Reiniciar</button>
      </div>
    }
  }
  
  function handleOnClick(){
    // esto calcula el numero aleatorio
    var ran = arreglo.splice(Math.floor(Math.random() * (cuenta)), 1)[0];
    // resta uno a la cuenta de la cantidad de numeros que tiene el arreglo
    setCuenta(cuenta - 1)
    // busco el gif y lo cambio en el path de la imagen
    setImagen('./assets/img/tombola.gif');
    // si la cuenta es 0 ya no se puede buscar un numero aleatorio
    if(cuenta === 0){
      alert('se terminaron las cartas')
      setTerminar(true);
    }else {
      // detiene el tiempo 3 segundos para hacer aparecer el gif
      setTimeout(function(){
        // seteo el numero aleatorio a la variable random
        setRandom(ran)
        // busco imagen y la seteo para cambiarla en la pagina
        searchImage(ran)
      }, 2000)
    }


    
  }
  function searchImage(numero){
    // voy a buscar el numero al imagenes.json y seteo el path de la imagen 
    // a la etiqueta img para que me muestre la foto de la carta
    let numeroEncontrado = imagenes.filter(element => {
        if(element.numero === numero){
          let foto = element.foto
          setImagen(foto)
          arregloImagenes.push(foto);
        }
      } 
    );
  }
  return (
    <div className="App">
      <nav>
          <input type="checkbox" id="check"/>
          <label htmlFor="check" className="checkmenu">
              <i className="fa-solid fa-bars-staggered"></i>
          </label>
              <a a href="https://www.lluviadeideaseditorial.com/lluvia-de-ideas-3/" className="enlace">
                <img src={logo} alt="lluvia logo" class="logo"/>
              </a>
          <ul>
              <li><a className="active" href="https://www.lluviadeideaseditorial.com/">Inicio</a></li>
              <li><a href="https://www.lluviadeideaseditorial.com/lluvia-de-ideas-3/">Nosotros</a></li>
              <li><a href="#">Lotería de las Leyendas</a></li>
              <li><a href="#">Contacto</a></li>
          </ul>
      </nav>
      <body>
        <header>
        <div className="titulo">
             <h1>Tómbola de las Leyendas</h1>
        </div>
          <div id="instruc">
            {/* <h1> Para que tu experiencia sea más interesante la tombóla esta en mantenimiento, el viernes 9 de septiembre del 2022 estará lista para que disfrutes de este juego en familia y amigos.</h1> */}
            {/* <h1> La figura que salio es la</h1> */}
                {/* <img src="img/fondo tombola.png" alt="Figurita"/> */}

            <div className="tombo">
              <img src={require(`${ imagen }`)} alt="Imagen" />   
              {/* <img src={gif} alt="gif" />    */}
            </div>
            <div className="fondo">
            </div>
                {/* <img src="img/1-01.jpg" alt="Cadejo"/>
                <img src="img/1-02.jpg" alt="La Campana"/>
                <img src="img/1-03.jpg" alt="El Gringo"/>
                <img src="img/1-04.jpg" alt="El Elote Loco"/> */}
            </div>
            <div id="boton">
              <button disabled={terminar} className="botongirar" onClick={handleOnClick}>Gira la tómbola</button>
              {/* <button disabled={!terminar} className="botongirar" onClick={handleOnClick}>Reiniciar</button> */}
            </div>
            <ul className='lista'>
            {arregloImagenes.map(name => (
              <li>
                <img height="177px" width="115px" src={require(`${ name }`)} alt="Imag" />  
              </li>
            ))}
            </ul>
            <div className="rndmImage"></div>
        </header>
      </body>
      {/* <body>
        
        <header>
            <div id="instruc">
                <img src="img/fondo tombola.png" alt="Figurita">
            <h1> Para que tu experiencia sea más interesante la tombóla esta en mantenimiento, el viernes 9 de septiembre del 2022 estará lista para que disfrutes de este juego en familia y amigos.</h1>
            </div>
            <div class="tombo">
            <div class="fondo">
            </div>
             
                <img src="img/1-01.jpg" alt="Cadejo">
                <img src="img/1-02.jpg" alt="La Campana">
                <img src="img/1-03.jpg" alt="El Gringo">
                <img src="img/1-04.jpg" alt="El Elote Loco">
            </div>

            <div id="boton">                
                <button class="botongirar" onclick="chooseImg() ">Gira la tómbola</button>
            </div>

            <div class="rndmImage"></div>
        </header>

    </body> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}


export default App;
