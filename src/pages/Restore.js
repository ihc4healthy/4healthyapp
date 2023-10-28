import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Input from '../components/Input';
import { Link } from 'react-router-dom';
import { regex } from '../utils/regexs';
import '../css/styles.css';

function Restore() {
    const [email, setEmail] = useState("");
    
    const [emailComp, setEmailComp] = useState({color:"primary", helper:"Por favor, complete el campo de correo electrónico", isReady:false});
    const [canSignin, setCanSignin] = useState(false);

    useEffect(()=>{
        let isOk = false;
        if (email.length == 0) {
            isOk = true;
            emailComp.isReady = false;
        }
        if (email.length < 4) {
            emailComp.helper = "Por favor, complete el campo de correo electrónico";
        }
        else if (email.indexOf('@')>=0) {
            if (!regex.email.test(email)){
                emailComp.helper = "Correo no válido";
            }
            else {
                isOk = true;
                emailComp.isReady = true;
            }
        }
        else {
            if (!regex.userName.test(email)){
                emailComp.helper = "Solo usar letras, números, o los caracteres _ . -";
            }
            else {
                isOk = true;
                emailComp.isReady = true;
            }
        }
        if (isOk) { emailComp.helper = ""; }
        setEmailComp({...emailComp, color:isOk?'primary':'danger'});
    }, [email]);

    useEffect(()=>{
        setCanSignin(emailComp.isReady);
    },[emailComp.isReady]);

    return (
        <div className='full-page'>
            <Header />
            <main className='w-auto grow min-h-full flex justify-center items-center gap-x-32'>
                <div className="centered-box">
                    <div className="restore-container">
                        <h1 className="restore-title">Introducir la dirección de correo electrónico</h1>
                        <br />
                        <p className="restore-description">
                            Ingrese la dirección de correo electrónico registrada en su cuenta.
                        </p>
                        <br />
                        <div className="contact-support">
                            <p>
                                Si no puede utilizar su dirección de correo electrónico registrada, comuníquese con{' '}
                                <a href="mailto:h6931495@gmail.com">Soporte.</a>
                            </p>
                        </div>
                        <br />
                        <br />
                        <p className="email-label">Dirección de correo electrónico</p>
                        <br />
                        <form name='restore' id='restore' className='flex flex-col gap-y-4'>
                    <       Input label="Correo electronico" helpText={emailComp.helper}
                            type="text" color={emailComp.color} setValue={setEmail}/>
                            <Link to={`/verification?email=${email}`}>
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

export default Restore;