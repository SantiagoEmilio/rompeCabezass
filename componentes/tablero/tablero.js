import{todas_cartas}from"./data.js"
import { item } from "./item.js"

function cargar_Cartas(){
    let div=document.createElement("div")
    div.className="div-tablero"

    todas_cartas.forEach((letra)=>{
        div.appendChild(item(letra))
    })
    return div
}

export{cargar_Cartas}