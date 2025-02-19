import { cargar_Cartas } from "./componentes/tablero/tablero.js";
import { header11 } from "./componentes/header/header.js";

function cargarDOM() {
    // Seleccionar el contenedor principal en el DOM
    const DOM = document.querySelector("#root");

    // Crear el contenedor principal
    const contenedor = document.createElement('div');
    contenedor.className = "contenedor";

    // Crear y agregar el header
    const divHeader = document.createElement('div');
    divHeader.className = "div-header";
    divHeader.appendChild(header11());
    contenedor.appendChild(divHeader);

    // Crear y agregar el div de progreso
    const divProgreso = document.createElement('div');
    divProgreso.className = "div-progreso";
    contenedor.appendChild(divProgreso);

    // Crear y agregar el tablero de cartas
    const divTablero = document.createElement('div');
    divTablero.className = "div-tablero";
    divTablero.appendChild(cargar_Cartas());
    contenedor.appendChild(divTablero);

    // Crear y agregar el footer
    const divFooter = document.createElement('div');
    divFooter.className = "div-footer";
    contenedor.appendChild(divFooter);

    // Agregar el contenedor al DOM
    DOM.appendChild(contenedor);

    // Manejar eventos de las cartas
    const todasLasCartasDelDOM = document.querySelectorAll('.carta');
    todasLasCartasDelDOM.forEach(cadaCarta => {
        cadaCarta.addEventListener("click", () => {
            cadaCarta.classList.add("marcado");
        });
    });
}

cargarDOM();