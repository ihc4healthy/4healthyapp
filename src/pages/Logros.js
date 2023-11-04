import React, { useState } from 'react';
import Header from '../components/Header';
import { ListLogros } from '../components/ListLogros';
import { DSidebar } from '../components/Sidenav';
import { ListDatos } from '../components/ListDatos';
import { ListProgress } from '../components/ListProgress';


function Logros() {

    return (
    <div className='full-page'>
        <Header/> 
        
        <div className='logros-content'>
            <DSidebar>
            </DSidebar>

            <div className='logros'>
            <h5>Estadisticas</h5>
               <div classNme="logros-icon">
                 <ListLogros></ListLogros>
               </div>

            
               <div className="info-data">
                <ListDatos></ListDatos>
                <ListProgress></ListProgress>
               </div>

            </div>

        </div>



    </div>
    )
}

export default Logros;