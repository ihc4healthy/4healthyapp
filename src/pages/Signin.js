import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import clock from '../svgs/clock.svg';
import Input from '../components/Input';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'

function Signin() {
  return (
    <div className='full-page'>
        <Header/>
        <main className='w-auto grow min-h-full flex justify-center items-center gap-x-32'>
            <img src={clock} className="block max-w-xs" alt="clock" />
            
            <div className='flex flex-col gap-y-8'>
                <p className='font-bold bold-big text-2xl text-center'>
                    <span className='text-4xl'>
                        Sé un <span className='text-primary'>healtier</span>
                    </span>
                    <br/>
                    y haz del <span className='text-secondary'>bienestar</span> <br/>
                    un <span className='text-text-secondary'>hábito</span>
                </p>

                <form name='signin' id='signin' className='flex flex-col gap-y-4'>
                    <Input label="Nombre de usuario" placeholder="nomusuario"
                        type="text" color="primary"/>
                    <Input label="Contraseña" placeholder="****" helpText="Utilizar letras y números"
                        type="password" color="primary"/>

                    <p>¿Ya eres parte de 4Healty? <a href='#' className='text-secondary-dark'>Ingresa</a></p>

                    <button className='btn-primary w-full' type='submit'>
                        <ArrowRightOnRectangleIcon/>
                        Únete
                    </button>
                </form>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Signin;