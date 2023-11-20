import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Input from '../components/Input';
import clock from '../svgs/clock.svg';
import { regex } from '../utils/regexs';
import { UserContext } from '../utils/UserConxtextProvider';
import { apiData } from '../common/apiData';

function Signup() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const existentUsernames = ['aaaa','bbbb','cccc'];

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    
    const [passwordComp, setPasswordComp] = useState({color:"primary", helper:"Usar letras y números", isReady:false});
    const [userComp, setUserComp] = useState({color:"primary", helper:"Debe ser mayor a 4 caracteres", isReady:false});
    const [canSignup, setCanSignup] = useState(false);

    const handleSave = (event)=>{
        event.preventDefault();
        if (canSignup) {
            axios.post( apiData.baseUrl + '/user', {
                name: username,
                password: password,
            })
            .then(response => {
                console.log('Signed up!', response.data.user);
                // {id: 1, username: username, password: password, profilePic:1, level:1, levelProgress:10}
                setUser(response.data.user);
                navigate("/welcome");
            })
            .catch(error => {
                console.error('Error en check del hábito:', error);
            });
        }
    };
    
    useEffect(()=>{
        let isOk = false;
        if (password.length === 0) {
            isOk = true;
            passwordComp.isReady = false;
        }
        else if (password.length < 4){
            passwordComp.helper = "Debe ser mayor a 4 caracteres";
        }
        else if (username.length > 32) {
            passwordComp.helper = "Máximo 32 caracteres";
        }
        else {
            if (!regex.oneLetter.test(password)) {
                passwordComp.helper = "Debe contener al menos 1 letra";
            }
            else if (!regex.oneNumber.test(password)){
                passwordComp.helper = "Debe contener al menos 1 número";
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
        if (username.length === 0) {
            isOk = true;
            userComp.isReady = false;
        }
        if (username.length < 4) {
            userComp.helper = "Debe ser mayor a 4 caracteres";
        }
        else if (username.indexOf('@')>=0) {
            if (!regex.email.test(username)){
                userComp.helper = "Correo no válido";
            }
            else {
                isOk = true;
                userComp.isReady = true;
            }
        }
        else {
            if (username.length > 16) {
                userComp.helper = "Máximo 16 caracteres";
            }
            else if (!regex.userName.test(username)){
                userComp.helper = "Solo usar letras, números, o los caracteres _ . -";
            }
            else if (existentUsernames.includes(username)) {
                userComp.helper = "Usuario ya existente";
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
        setCanSignup(userComp.isReady && passwordComp.isReady);
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

                <form name='Signup' id='Signup' className='flex flex-col gap-y-4'>
                    <Input label="Nombre de usuario" placeholder="nomusuario" helpText={userComp.helper}
                        type="text" color={userComp.color} setValue={(val)=>{setUsername(val.toLowerCase());}}/>
                    <Input label="Contraseña" placeholder="******" helpText={passwordComp.helper}
                        type="password" color={passwordComp.color} setValue={setPassword}/>

                    <p>¿Ya eres parte de 4Healty? <Link to="/login" className='text-secondary-dark'>Ingresa</Link></p>

                    <Button color='primary' className='w-full' disabled={!canSignup} onClick={handleSave}>
                        <ArrowRightOnRectangleIcon/>
                        Únete
                    </Button>
                </form>
            </div>
        </main>
        <Footer/>
    </div>
    )
}

export default Signup;
