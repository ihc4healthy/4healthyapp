import React from 'react'
import "./list.css";
import { Input } from '@material-tailwind/react';

export const ListProgress = () => {
  return (

    <div className='progress-form'>

         <div className='flextop'>
          <h2>Esta semana:</h2>
          <button className='buttons'>Seleccionar Fecha</button>

          </div>
          <ul className="listhabits">
          <div className='habit-form'>
           <h3>Hábito 1</h3> 
           <img src="./images/logros/GoalProgress.png" className="goal" alt="logro" />
           <h3>xx.x%</h3> 
           </div>

           <div className='habit-form'>
           <h3>Hábito 2</h3> 
           <img src="./images/logros/GoalProgress.png" className="goal" alt="logro" />
           <h3>xx.x%</h3> 
           </div>

           <div className='habit-form'>
           <h3>Hábito 3</h3> 
           <img src="./images/logros/GoalProgress.png" className="goal" alt="logro" />
           <h3>xx.x%</h3> 
           </div>

          </ul>
          <div className='flexbuttons'>
          <button className='buttons'>Ver pendientes</button>
          <button className='buttons'>Ver atrasados</button>

          </div>
    </div>

  )
}
