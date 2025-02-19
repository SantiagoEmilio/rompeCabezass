import { voltearcarta } from "./mesclarCartas.js";

function item(contenido){
    let div=document.createElement("div")
    div.className = "div-item"
    
    let front=document.createElement("div")
    front.className="front"
    front.innerText=contenido

    let back =document.createElement("div")
    back.className="back"
    back.innerText="$"

    div.appendChild(back)
    div.append(front)

    div.addEventListener("click",()=>{
     if(div.classList.contains("fliped"))return
    })
    return div

}
export{item}
