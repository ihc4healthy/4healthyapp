import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AcademicCapIcon, BriefcaseIcon, CheckIcon, NewspaperIcon } from '@heroicons/react/24/solid'
import Footer from '../components/Footer';
import Header from '../components/Header';
import ToggleButton from '../components/ToggleButton';
import welcome from '../svgs/welcome.svg';
import { avatars } from '../common/avatars';
import { UserContext } from '../utils/UserConxtextProvider';
import { Button } from '@material-tailwind/react';

function Welcome() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [persona, setPersona] = useState("");
    const [avatar, setAvatar] = useState("");

    return (
    <div className='full-page'>
        <Header/>
        <main className='w-auto grow min-h-full flex justify-center items-center gap-x-32  text-text-primary'>
            
            <div className='flex flex-col gap-y-8'>
                <p className='font-bold bold-big text-2xl text-center'>
                    <span className='text-4xl'>
                        {user.name ?? 'Anónimo'}
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
                        {icon: <BriefcaseIcon/>, text:"trabajo", value:"WORK"},
                        {icon: <AcademicCapIcon/>, text:"estudios", value:"STUDIES"},
                        {icon: <NewspaperIcon/>, text:"ambos", value:"ANY"},
                    ]} setChoosed={setPersona}/>
                </div>
                
                <div className='flex flex-col gap-y-4'>
                    <p>¡Elige un avatar para tu perfil!</p>
                    <ToggleButton buttons={avatars} defaultSelected={1} setChoosed={setAvatar}/>
                </div>

                <Button color='primary' disabled={persona===""}
                    onClick={(event)=>{
                        event.preventDefault();
                        if (persona!=="") {
                            navigate("/habits");
                        }
                    }}
                >
                    <CheckIcon/>
                    ¡A crear hábitos!
                </Button>
            </form>
        </main>
        <Footer/>
    </div>
    )
}

export default Welcome;