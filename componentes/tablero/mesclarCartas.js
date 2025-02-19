let primeracarta=null
let segundacarta=null
let bloqueo=false
let punteo=0

function voltearcarta(carta){
    carta.classList.add(`fliped`)
    if(!primeracarta){
        primeracarta=carta
    }else{
        segundacarta=carta
        compararcartas()
    }
}
function compararcartas(){
    bloqueo=true
    if(primeracarta.querySelector(".front").innerText==segundacarta.querySelector(".front").innerText){
        punteo++ 
        primeracarta=null
        segundacarta=null
        bloqueo=false
    }else{
        punteo--

        setTimeout(()=>{
            primeracarta.classList.remove(".fñiped")
            segundacarta.classList.remove(".fñiped")
            primeracarta=null
            segundacarta=null
            bloqueo=false

        },1000)
    }
}
export{voltearcarta,compararcartas}