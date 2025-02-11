import { cargar_Cartas } from "./componentes/tablero/tablero.js";
import {  header11 } from "./componentes/header/header.js";
let DOM = document.querySelector("#root");

let contenedor = document.createElement(`div`);
contenedor.className = "contenedor";

let divHeader= document.createElement(`div`);  
divHeader.className = "div-header"; 
contenedor.appendChild(divHeader);
divHeader.appendChild(header11()); 

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

let todasLASCartasDelDOM = document.querySelectorAll(`.carta`)
todasLASCartasDelDOM.forEach(cadaCarta => {

    cadaCarta.addEventListener("click",()=>{
        cadaCarta.classList.add("marcaado")
    })

})
    
