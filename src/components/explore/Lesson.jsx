import React from 'react'
import Etiqueta from './Etiqueta'
const Lesson = () => {
  return (
    <div className='container mt-3'>
      <form action="" 
        className='md:w-full lg:w-4/5 inline-flex border-solid border-sky-500 rounded-3xl p-5 to-background-paper shadow-xl'>
        <div className='w-4/5'>
          <div className='px-4'>
            <p>
              <span class="material-symbols-outlined align-text-bottom">school</span>{'  '}
              [Lesson {'____________________'} n]
            </p>
          </div>
          <div className="mt-1 flex flex-col text-sm sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-3">
            <div className='mt-2 flex items-center'>
              ETIQUETAS: 
            </div> 
            <Etiqueta/>
          </div>
        </div>
        <button className="inline-flex items-center h-12 rounded-md bg-secondary-light px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-secondary-dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
          Iniciar
        </button>
      </form>
    </div>
  )
}

export default Lesson
