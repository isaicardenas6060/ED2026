import React, { useState } from 'react'

function Pila() {
    const [Stack, setStack]= useState([])
    const [inputValue, setInputValue]=useState("")

    //agregar valores a la pla o arreglo
    const handlePush=(e)=>{
        e.preventDedault();
        if(inputValue.trim()==="") return
        setStack([inputValue,...Stack])
        setInputValue(``)
    }
    //eliminar valores del arreglo .pop
    const handlePop0=()=>{
        if(Stack.length===0)return

        //filtrar los elementos y eliminamos el tope de la pila
        const nuevoStack=Stack.slice(1)
        setStack(nuevoStack);
    }

    const elementoTope=Stack.length>0 ? Stack[0]:`la pila esta vacia`

  return (
    <>
    <div style={{padding:`20px`, frontFamily:`Arial, sans-serif`, maxWidth:`400px`,margin:`auto`}}></div>
       <h2>visualizar los datos de la pila</h2>
       {/* inicializamos el formulario para introducir datos */}
       <form>
        <imput type='text' value={inputValue} onCharge=(e)=>setInputValue(e.target.value) placeholder=`Introduce un dato` style={{padding:`8px,` marginRight:`10px`}}/>
        <button type='submit' style={{padding:`8px 12px`, background}}></button>
        push
       </form>
    </>
  )
}

export default Pila