import React from "react"
import Lesson from "../components/explore/Lesson"
import Header from '../components/Header';
import { DSidebar } from '../components/Sidenav';

const Explora = () => {

  

  return (
    <div className='full-page '>
        <Header/> 
      <div className="flex w-screem">
            <DSidebar>
            </DSidebar>
            <div className="flex flex-col w-full overflow-scroll ">
              <h2 className="font-bold text-3xl">Explora</h2>
              <p className="text-xl mt-5 mb-1">Mis hábitos</p>
              <div className="mt-1 flex flex-col text-sm sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-3">
                <div className="mt-2 flex items-center text-gray-500">
                  <a className="rounded-3xl bg-state-success px-3.5 py-2 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  <span class="material-symbols-outlined align-text-bottom mr-1">bed</span>
                    Dormir
                  </a>
                </div>
                <div className="mt-2 flex items-center text-gray-500">
                  <a className="rounded-3xl bg-state-success px-3.5 py-2 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  <span class="material-symbols-outlined align-text-bottom mr-1">directions_run</span>
                    Correr
                  </a>
                </div>
                <div className="mt-2 flex items-center text-gray-500">
                  <a className="rounded-3xl bg-state-success px-3.5 py-2 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  <span class="material-symbols-outlined align-text-bottom mr-1">translate</span>
                    Nuevo idioma
                  </a>
                </div>
              </div>
              <div className="text-right">
                ORDENAR POR:
              </div>
              <div>
                <Lesson/>
                <Lesson/>
                <Lesson/>
                <Lesson/>
                <Lesson/>
                <Lesson/>
                <Lesson/>
                <Lesson/>
              </div>
            </div>
        </div>

    </div>

    
  )
}

export default Explora
