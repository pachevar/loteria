// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import logo from './assets/img/logo.png';
// import cadejo from './assets/img/cadejo.jpg';
import imagenes from './imagenes.json';
// import gif from './assets/img/tombola.gif';
import sonidoTombola from './audio/tombola_sonido.mp3';

function App() {
  const [arreglo] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]);
  var [cuenta, setCuenta] = useState(arreglo.length);
  var [random, setRandom] = useState();
  var [imagen, setImagen] = useState('./assets/img/tombola.png');
  var [terminar, setTerminar] = useState(false);
  var [arregloImagenes, setArregloImagenes] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const audioTombola = new Audio(sonidoTombola);
  
  function handleOnClick(){
    audioTombola.play();
    console.log(random); // Esto evitará el warning, aunque solo lo uses para logging
    // esto calcula el numero aleatorio
    var ran = arreglo.splice(Math.floor(Math.random() * (cuenta)), 1)[0];
    // resta uno a la cuenta de la cantidad de numeros que tiene el arreglo
    setCuenta(cuenta - 1)
    // busco el gif y lo cambio en el path de la imagen
    setImagen('./assets/img/tombola.gif');
    // si la cuenta es 0 ya no se puede buscar un numero aleatorio
    if (cuenta === 1) { // Cambiado de 0 a 1
      setTimeout(function() {
        setRandom(ran);
        searchImage(ran);
        alert('Se terminaron las cartas');
        setTerminar(true);
      }, 2000);
    } else {
      setTimeout(function() {
        setRandom(ran);
        searchImage(ran);
      }, 2000);
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); // Llamada inicial para establecer el estado correcto
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

function handleReiniciar() {
  // Reinicia todos los estados a sus valores iniciales
  setCuenta(arreglo.length);
  setRandom(undefined);
  setImagen('./assets/img/tombola.png');
  setTerminar(false);
  setArregloImagenes([]);
}

function searchImage(numero){
  // voy a buscar el numero al imagenes.json y seteo el path de la imagen 
  // a la etiqueta img para que me muestre la foto de la carta
  let numeroEncontrado = null;
  
  imagenes.forEach(element => {
    if (element.numero === numero) {
      let foto = element.foto;
      setImagen(foto);
      arregloImagenes.push(foto);
      numeroEncontrado = element; // Ahora número encontrado tiene el elemento correspondiente
    }
  });

  console.log(numeroEncontrado); // Esto mostrará el objeto encontrado si existe
}


  return (
    <div className="App">
<nav>
  <input type="checkbox" id="check" />
  <label htmlFor="check" className="checkmenu">
    <i className="fa-solid fa-bars-staggered"></i>
  </label>
  <a href="https://www.lluviadeideaseditorial.com/lluvia-de-ideas-3/" className="enlace">
    <img src={logo} alt="lluvia logo" className="logo" />
  </a>
  <div className='container'>
    {window.innerWidth > 920 ? (
      <ul className="menu-items">
        <li><a className="active" href="https://www.lluviadeideaseditorial.com/">Inicio</a></li>
        <li><a href="https://www.lluviadeideaseditorial.com/lluvia-de-ideas-3/">Nosotros</a></li>
        <li><a href="https://www.lluviadeideaseditorial.com/">Lotería de las Leyendas</a></li>
        <li><a href="https://www.lluviadeideaseditorial.com/lluvia-de-ideas-3/">Contacto</a></li>
      </ul>
    ) : (
      <button className="menu-button" onClick={toggleMenu}>Menú</button>
    )}
  </div>
</nav>
<div className='menu-container'>
    {/* Menu desplegable para pantallas pequeñas */}
{window.innerWidth <= 920 && isMenuOpen && (
  <ul className="menu-items-dropdown">
    <li><a className="active" href="https://www.lluviadeideaseditorial.com/">Inicio</a></li>
    <li><a href="https://www.lluviadeideaseditorial.com/lluvia-de-ideas-3/">Nosotros</a></li>
    <li><a href="https://www.lluviadeideaseditorial.com/">Lotería de las Leyendas</a></li>
    <li><a href="https://www.lluviadeideaseditorial.com/lluvia-de-ideas-3/">Contacto</a></li>
  </ul>
)}
</div>
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
                  {!terminar && (
                    <button className="botongirar" onClick={handleOnClick}>
                      Gira la tómbola
                    </button>
                  )}
                  {(terminar || arregloImagenes.length > 0) && (
                    <button className="botongirar" onClick={handleReiniciar}>
                      Reiniciar
                    </button>
                  )}
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
