import React from 'react'
import "./list.css";

export const ListDatos = () => {
  return (

    <div className="contenedor-datos">
      <h2>Datos</h2>

           <div className='datos-form'>
           <h3>Hábito registrado con más horas:[HabitName1] (XX,X Hrs)</h3> 
           </div>

           <div className='datos-form'>
           <h3>Hábito registrado con menos horas: [HabitName3] (XX,X Hrs)</h3> 
           </div>

           <div className='datos-form'>
           <h3>Tiempo total realizado : XX : xx : xx </h3> 
           </div>

           <div className='datos-form'>
           <h3>Racha seguida de hábitos realizados: xx días</h3>    
           </div>
    
    </div>


  )
}
