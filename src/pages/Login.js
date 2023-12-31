import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import clock from '../svgs/clock.svg';
import Input from '../components/Input';
//import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { regex } from '../utils/regexs';

function Login() {
    const registeredUsernames = ['aaaa','bbbb','cccc'];
    const registeredPasswords = ['pass1', 'pass2', 'pass3']; // Add your registered passwords here

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    
    const [passwordComp, setPasswordComp] = useState({color:"primary", helper:"Ingresa tu contraseña", isReady:false});
    const [userComp, setUserComp] = useState({color:"primary", helper:"Ingresa tu usuario", isReady:false});
    const [canLogin, setCanLogin] = useState(false);
    
    useEffect(()=>{
        let isOk = false;
        if (password.length == 0) {
            isOk = true;
            passwordComp.isReady = false;
        }
        else {
            if (!registeredPasswords.includes(password)) {
                passwordComp.helper = "Clave incorrecta";
            }
            else {
                isOk = true;
                passwordComp.isReady = true;
            }
        }
        if (isOk) { passwordComp.helper = ""; }
        setPasswordComp({...passwordComp, color:isOk?"primary":"danger"});
    }, [password.length]);

    useEffect(()=>{
        let isOk = false;
        if (username.length == 0) {
            isOk = true;
            userComp.isReady = false;
        }
        else {
            if (!registeredUsernames.includes(username)) {
                userComp.helper = "Usuario no existe";
            }
            else {
                isOk = true;
                userComp.isReady = true;
            }
        }
        if (isOk) { userComp.helper = ""; }
        setUserComp({...userComp, color:isOk?'primary':'danger'});
    }, [username]);

    useEffect(()=>{
        setCanLogin(userComp.isReady && passwordComp.isReady);
    },[userComp.isReady, passwordComp.isReady]);

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

                    <form name='login' id='login' className='flex flex-col gap-y-4'>
                        <Input label="Nombre de usuario" placeholder="nomusuario" helpText={userComp.helper}
                            type="text" color={userComp.color} setValue={setUsername}/>
                        <Input label="Contraseña" placeholder="******" helpText={passwordComp.helper}
                            type="password" color={passwordComp.color} setValue={setPassword}/>
                            <a href='#/restore' className='text-secondary'>¿Has olvidado tu contraseña?</a>

                        <p>¿Aun no eres parte de 4Healty? <Link to="/" className='text-secondary'>Únete</Link></p>

                        <Link to="/logros">
                            <button className='btn-primary w-full' type='submit' disabled={!canLogin}>
                                INICIA SESIÓN
                            </button>
                        </Link>
                    </form>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Login;