import { todas_cartas } from "./data.js";
import { item } from "./item.js";

function cargar_Cartas() {
    let div = document.createElement("div");
    div.className = "div-tablero";

    if (!Array.isArray(todas_cartas) || todas_cartas.length === 0) {
        console.error("Error: `todas_cartas` no es un array válido o está vacío.");
        return div; // Retorna un div vacío en caso de error
    }

    todas_cartas.forEach((letra) => {
        div.appendChild(item(letra));
    });

    return div;
}

export { cargar_Cartas };
