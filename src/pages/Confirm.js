import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Input from '../components/Input';
import { Link } from 'react-router-dom';
import { regex } from '../utils/regexs';
import '../css/styles.css';

function Confirm() {
    const [password, setPassword] = useState("");    
    const [passwordComp, setPasswordComp] = useState({color:"primary", helper:"Usar letras y números", isReady:false});
    
    const [password2, setPassword2] = useState("");    
    const [passwordComp2, setPasswordComp2] = useState({color:"primary", helper:"Usar letras y números", isReady:false});
 
    const [canSignin, setCanSignin] = useState(false);

    useEffect(()=>{
        let isOk = false;
        if (password.length == 0) {
            isOk = true;
            passwordComp.isReady = false;
        }
        else if (password.length < 4){
            passwordComp.helper = "Debe ser mayor a 4 caracteres";
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
        if (password2.length == 0) {
            isOk = true;
            passwordComp2.isReady = false;
        }
        else if (password2.length < 4){
            passwordComp2.helper = "Debe ser mayor a 4 caracteres";
        }
        else {
            if (!regex.oneLetter.test(password2)) {
                passwordComp2.helper = "Debe contener al menos 1 letra";
            }
            else if (!regex.oneNumber.test(password2)){
                passwordComp2.helper = "Debe contener al menos 1 número";
            }
            else if (password2!= password) {
                passwordComp2.helper = "Las contraseñas deben ser iguales";
            }
            else {
                isOk = true;
                passwordComp2.isReady = true;
            }
        }
        if (isOk) { passwordComp2.helper = ""; }
        setPasswordComp2({...passwordComp2, color:isOk?"primary":"danger"});
    }, [password2.length]);

    useEffect(()=>{
        setCanSignin(passwordComp.isReady && passwordComp2.isReady);
    },[passwordComp.isReady, passwordComp2.isReady]);

    return (
        <div className='full-page'>
            <Header />
            <main className='w-auto grow min-h-full flex justify-center items-center gap-x-32'>
                <div className="centered-box">
                    <div className="restore-container">
                        <h1 className="restore-title">Establecer una nueva contraseña</h1>
                        <br />
                        <p className="restore-description">
                            Establezca una contraseña segura que no esté utilizando en otros sitios web. Si restablece su contraseña, se cerrará automáticamente su sesión en todos los dispositivos excepto el navegador que esté utilizando actualmente
                        </p>
                        <br />
                        <br />
                        <p className="email-label">Nueva contraseña</p>
                        <br />
                        <form name='restore' id='restore' className='flex flex-col gap-y-4'>
                            <Input label="Nueva contraseña" helpText={passwordComp.helper}
                            type="text" color={passwordComp.color} setValue={setPassword}/>
                        </form>
                        <br />
                        <p className="email-label">Escriba la contraseña otra vez</p>
                        <br />
                        <form name='restore' id='restore' className='flex flex-col gap-y-4'>
                            <Input label="Confirmar contraseña" helpText={passwordComp2.helper}
                            type="text" color={passwordComp2.color} setValue={setPassword2}/>

                            <Link to="/Signin">
                                <button className='btn-primary w-full' type='submit' disabled={!canSignin}>
                                    ENVIAR
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Confirm;