import { voltearcarta } from "./mesclarCartas.js";

function item(contenido) {
    let div = document.createElement("div");
    div.className = "div-item";
    
    let front = document.createElement("div");
    front.className = "front";
    front.innerText = contenido;

    let back = document.createElement("div");
    back.className = "back";
    back.innerText = "$";

    // Agregar en orden correcto
    div.appendChild(front);
    div.appendChild(back);

    div.addEventListener("click", () => {
        if (!div.classList.contains("fliped")) {
            voltearcarta(div); // Ahora sí llama a la función para voltear la carta
        }
    });

    return div;
}

export { item };

