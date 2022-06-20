// Traigo la libreria de react o lo que necesite
// import <algo> es una variable from "ruta relativa/ruta paquete"
// El programa esta instalado en node_modules
import React from 'react'; // sin el ./ le decimos que lo busque en algun lugar que exista

// Traigo la libreria de ReactDom
import ReactDOM from 'react-dom/client';

import App from "./App" // Importo App.js que va ser donde cree mis componentes

import "./styles.css"

import 'react-loading-skeleton/dist/skeleton.css'

// Agarrar una app que ya exista de React

// const App = () => "Hola Mundo con JSX y Arrow Function" // Componente

// Mostrar la APP en el DOM
// Crea un punto inicial (root) en donde la app se va a montar (dibujar) en el unico index que se encuentra en la carpeta public
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>); // Ahora las funciones se declaran por ejemplo de App() a <App/> que es JSX



