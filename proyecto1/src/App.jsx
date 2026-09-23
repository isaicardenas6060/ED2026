import { useEffect, useState } from "react";

function App(){
//Iniciamos con un estado para un arreglo
const [elementos,setElementos]=useState([]);

//Funcion para agregar datos
const agregarDatos=()=>{
const nuevoNumero=Math.floor(Math.random()*50);
setElementos([...elementos, nuevoNumero])
}

//Recorrer funcion flecla
const datos=(elementos,index)=>(
  <li key={index} style={{margin:`5px 0`,fontsize:`18px`}}>
     Elemeto #{index+1}<strong>{elementos}</strong>
  </li>
)

//Hook por defecto
useEffect(()=>{
  console .log("El arreglo de datos actual es:",elementos)
},[elementos])

  return (
<>
<h1>Mi primer arreglo de datos</h1>
<div style={{padding:`20px`}}>
    <h2>paso 1. Agregar datos al arreglo</h2>
    <button onClick={agregarDatos}>agrear numero aleatorio</button>
    <ul> 
      {/*si el arreglo esta vacio enviar un mensaj */}

      { elementos.length===o?(
        <>
      <p>Aun no hay nada en el arreglo</p>
      <p>presiona el boton de agregar datos</p>
       </>
      ):(elementos.map(datos))}
    </ul>
    </div>
</>
 )
}
export default App
