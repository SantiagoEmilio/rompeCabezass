let primeracarta = null;
let segundacarta = null;
let bloqueo = false;
let punteo = 0;

function voltearcarta(carta) {
    if (bloqueo || carta.classList.contains("flipped")) return; // Evitar más de 2 clics

    carta.classList.add("flipped");

    if (!primeracarta) {
        primeracarta = carta;
    } else {
        segundacarta = carta;
        compararcartas();
    }
}

function compararcartas() {
    bloqueo = true; // Bloquear clics mientras se verifica

    let valor1 = primeracarta.querySelector(".front").innerText;
    let valor2 = segundacarta.querySelector(".front").innerText;

    if (valor1 === valor2) {
        punteo++;
        primeracarta = null;
        segundacarta = null;
        bloqueo = false;
    } else {
        punteo--;

        setTimeout(() => {
            primeracarta.classList.remove("flipped");
            segundacarta.classList.remove("flipped");

            primeracarta = null;
            segundacarta = null;
            bloqueo = false;
        }, 1000);
    }
}

export { voltearcarta, compararcartas };
