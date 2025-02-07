import { cargar_Cartas } from "./componentes/tablero/tablero.js";

let DOM = document.querySelector("#root");

let contenedor = document.createElement(`div`);
contenedor.className = "contenedor";

let divHeader= document.createElement(`div`);  //para crear un div (cuadro) 
divHeader.className = "div-header";  //para crear clase en js 
contenedor.appendChild(divHeader);

let divProgreso =  document.createElement(`div`);
divProgreso.className = "div-progreso";
contenedor.appendChild (divProgreso);

let divTablero =  document.createElement(`div`);
divTablero.className = "div-tablero";
divTablero.appendChild(cargar_Cartas());
contenedor.appendChild (divTablero);

let divFooter =  document.createElement(`div`);
divFooter.className = "div-foouter";
contenedor.appendChild (divFooter);


DOM.appendChild(contenedor)