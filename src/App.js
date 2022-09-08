// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import logo from './assets/img/logo.png';
// import cadejo from './assets/img/cadejo.jpg';
import imagenes from './imagenes.json';

function App() {
  const [arreglo] = useState([0, 1, 2, 3, 4]);
  var [cuenta, setCuenta] = useState(arreglo.length);
  var [random, setRandom] = useState();
  var [imagen, setImagen] = useState('./assets/img/tombola.png');
  
  function handleOnClick(){
    console.log('arreglo: ', arreglo);
    console.log('cuenta: ', cuenta);
    console.log('random: ', random )
    // setCuenta(arreglo.length);
    // var arreglo = ; 
    // setCuenta(arreglo.length)
    // console.log(cuenta)
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];
      
    // }
    // for (arreglo, cuenta; cuenta--; ) {
    var ran = arreglo.splice(Math.floor(Math.random() * (cuenta)), 1)[0];
    setCuenta(cuenta - 1)
    setRandom(ran)
    console.log('random: ', random )
    console.log(ran);
    console.log('imagenes json:', imagenes)
    searchImage(ran)
    // if(ran === 1){
    //   setImagen(cadejo)
    // }
    // }
    // setArreglo()
    // console.log('palabra')  
    // let suma = numero1 + numero2;
    // console.log(suma)
  }
  function searchImage(numero){
    // let hola = 'hola'
    // console.log(hola)
    // setImagen(hola)
    // console.log('desde imagen: ',imagen)
    // descomentar para que vuelva a funcionar
    let numeroEncontrado = imagenes.filter(element => {
        if(element.numero === numero){
          console.log(typeof(element.foto))
          console.log(element.foto)
          let foto = element.foto
          setImagen(foto)
          console.log('desde search:', imagen)
        }
      } 
    );
    console.log('numeroencontrado', numeroEncontrado)
    // este codigo esta bien pero es poco eficiente
    // if(numero === 1){
    //   setImagen(cadejo)
    // }
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
          <div id="instruc">
            {/* <h1> Para que tu experiencia sea más interesante la tombóla esta en mantenimiento, el viernes 9 de septiembre del 2022 estará lista para que disfrutes de este juego en familia y amigos.</h1> */}
            {/* <h1> La figura que salio es la</h1> */}
                {/* <img src="img/fondo tombola.png" alt="Figurita"/> */}

            <div className="tombo">
              <img src={require(`${ imagen }`)} alt="Imagen" />   
            </div>
            <div className="fondo">
            </div>
                {/* <img src="img/1-01.jpg" alt="Cadejo"/>
                <img src="img/1-02.jpg" alt="La Campana"/>
                <img src="img/1-03.jpg" alt="El Gringo"/>
                <img src="img/1-04.jpg" alt="El Elote Loco"/> */}
            </div>

            <div id="boton">                
                <button className="botongirar" onClick={handleOnClick}>Gira la tómbola</button>
            </div>

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
