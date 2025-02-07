function header11(){
    let header=document.createElement('header');
    header.className="header";
    
    let icon = document.createElement("img");
    icon.src = "https://static.vecteezy.com/system/resources/previews/021/768/107/non_2x/poker-card-icon-design-template-free-vector.jpg";
    icon.alt = "Icono del juego";
    icon.className = "logo";

    let title = document.createElement('h1');
    title.textContent = "aplicacion de cartas";
    title.className = "titulo";
    
    let progressContainer = document.createElement('div');
    progressContainer.className = "contenedor_numeral";

    let step1 = document.createElement('div');
    step1.className = "numeral";
    step1.textContent = "1";

    let step2 = document.createElement('div');
    step2.className = "numeral";
    step2.textContent = "2";

    let step3 = document.createElement('div');
    step3.className = "numeral";
    step3.textContent = "3";

    let step4 = document.createElement('div');
    step4.className = "numeral";
    step4.textContent = "4";

    let step5 = document.createElement('div');
    step5.className = "numeral";
    step5.textContent = "5";

    progressContainer.appendChild(step1);
    progressContainer.appendChild(step2);
    progressContainer.appendChild(step3);
    progressContainer.appendChild(step4);
    progressContainer.appendChild(step5);
    
    header.appendChild(icon);
    header.appendChild(title);

    header.appendChild(progressContainer);

    return header;
}
export{header11}