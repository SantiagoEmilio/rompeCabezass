import { mezclarCartas } from "./data.js";
function item(contenido) {
    let div = document.createElement("div");
    div.textContent = contenido;
    div.className = "carta";
    return div;
}

function cargar_Cartas() {
    let div = document.createElement("div");
    div.className = "div-tablero";

    let todas_cartas = mezclarCartas();

    todas_cartas.forEach((letra) => {
        div.appendChild(item(letra));
    });

    return div;
}

export { cargar_Cartas };