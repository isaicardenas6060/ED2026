import React, { useState } from 'react'

function Ejemplo2() {
    const [alumnos, setAlumnos]= useState([{id:1, nombre:"Isai", asistencia:1}]);
    const[nuevoNombre, setNuevoNombre]= useState("");

    //crear primera funcion

    const agregarAlumno=(e)=>{
        e.prevenDefaul();
        if(nuevoNombre.trim()=== "") return;
        const nuevoAlumno={
            id:date.now(),
            nombre:nuevoNombre,
            asistencia:0
        }

        //introducir valores al arreglo
        setAlumnos([...alumnos,setNuevoNombre]);
        setNuevoNombre("");
    }

    //Eliminar objeto
    const eliminarObjeto=(id)=>{
        const listaFilter=alumnos.filter((alumnos)=>alumnos.id===id);
        setAlumnos(listaFilter);
    }

  return (
    <div style={{padding:"20px", maxWidth:"500px", margin:"0 auto"}}>
   
    <h1>Opereciones con arreglos</h1>

    <form onSubmit={agregarAlumno} style={{marginBottom:"20PX"}}>
        <input type='text' value={nuevoNombre} onChange={(e)=>setNuevoNombre(e.target.value)} placeholder='Ingresa tu nombre' style={{padding:"8px 12px", margin:"10px", width:"60px"}} />
    <button type='text' style={{padding:"8px 12px", background:"#4CAF50", color:"white", border:"none", cursor:"pointer"}}>
        </button> 
        </form>
    
    <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        {alumnos.length===0?(
            <p style={{color:"999",textAlign:"center"}}>No hay que mostar datos</p>
        ):(alumnos.map((alumnos)=>))}

    </div>


    </div>
  )
}

export default Ejemplo2
