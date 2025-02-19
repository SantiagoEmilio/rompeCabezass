function mezclarCartas() {
    let carta_pa1 = ["🥚", "🍊", "🍎", "🍏", "🍓"];
    let carta_pa2 = ["🥚", "🍊", "🍎", "🍏", "🍓"];
    let todas_cartas = carta_pa1.concat(carta_pa2);

    // Mezcla las cartas al azar
    for (let i = todas_cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [todas_cartas[i], todas_cartas[j]] = [todas_cartas[j], todas_cartas[i]];
    }

    return todas_cartas;
}

let todas_cartas = mezclarCartas(); // Aquí generamos el array con las cartas mezcladas

export { todas_cartas };
