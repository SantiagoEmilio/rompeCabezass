import { mezclarCartas } from "./data.js";

function item(contenido) {
    let div = document.createElement("div");
    div.className = "carta";
    div.dataset.content = contenido;
    div.textContent = "?";
    div.addEventListener("click", voltearCarta);
    return div;
}

let cartasVolteadas = [];
let parejasEncontradas = 0;

function voltearCarta() {
    if (this.classList.contains("voltea") || this.classList.contains("fija") || cartasVolteadas.length === 2) {
        return;
    }
    
    this.classList.add("volteada");
    this.textContent = this.dataset.content;
    cartasVolteadas.push(this);
    
    if (cartasVolteadas.length === 2) {
        setTimeout(verificarPareja, 500);
    }
}

function verificarPareja() {
    let [carta1, carta2] = cartasVolteadas;
    
    if (carta1.dataset.content === carta2.dataset.content) {
        carta1.classList.add("fija");
        carta2.classList.add("fija");
        cartasVolteadas = [];
    } else {
        setTimeout(() => {
            carta1.classList.remove("volteada");
            carta2.classList.remove("volteada");
            carta1.textContent = "?";
            carta2.textContent = "?";
            cartasVolteadas = [];
        }, 500);
    }
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
