import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import welcome from '../svgs/welcome.svg';
import { AcademicCapIcon, BriefcaseIcon, CheckIcon, NewspaperIcon } from '@heroicons/react/24/solid'
import ToggleButton from '../components/ToggleButton';

function Welcome() {
    const [persona, setPersona] = useState("");
    const [avatar, setAvatar] = useState("");
    
    return (
    <div className='full-page'>
        <Header/>
        <main className='w-auto grow min-h-full flex justify-center items-center gap-x-32  text-text-primary'>
            
            <div className='flex flex-col gap-y-8'>
                <p className='font-bold bold-big text-2xl text-center'>
                    <span className='text-4xl'>
                        [Username]
                    </span>
                    <br/>
                    ¡4Healty te da la Bienvenida!
                </p>
                <img src={welcome} className="block max-w-xs" alt="gente de la mano" />
            </div>
            
            <form name='Welcome2' id='Welcome2' className='flex flex-col gap-y-8'>
                <div className='flex flex-col gap-y-4'>
                    <p>Quiero usar 4Healty para organizar mis hábitos saludables y...</p>
                    <ToggleButton buttons={[
                        {icon: <BriefcaseIcon/>, text:"trabajo", value:"trabajo"},
                        {icon: <AcademicCapIcon/>, text:"estudios", value:"estudios"},
                        {icon: <NewspaperIcon/>, text:"ambos", value:"ambos"},
                    ]} setChoosed={setPersona}/>
                </div>
                
                <div className='flex flex-col gap-y-4'>
                    <p>¡Elige un avatar para tu perfil!</p>
                    <ToggleButton buttons={[
                        {imageSrc: "avatars/avatar_female.png", value:"avatar1", text:"avatar with long hair"},
                        {imageSrc: "avatars/avatar_inter.png", value:"avatar2", text:"avatar with medium hair"},
                        {imageSrc: "avatars/avatar_male.png", value:"avatar3", text:"avatar with short hair"},
                    ]} defaultSelected={1} setChoosed={setAvatar}/>
                </div>

                <button className='btn-primary w-full' type='submit' disabled={persona==""}>
                    <CheckIcon/>
                    ¡A crear hábitos!
                </button>
            </form>
        </main>
        <Footer/>
    </div>
    )
}

export default Welcome;