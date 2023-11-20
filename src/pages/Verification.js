import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Input from '../components/Input';
import { Link , useLocation } from 'react-router-dom';
import '../css/styles.css';

function Verification() {
    const [code, setCode] = useState('');
    const [codeComp, setCodeComp] = useState({color:"primary", helper:"Por favor, complete el campo de correo electrónico", isReady:false});
    const [canIn, setCanIn] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    const validCodes = ['1234', '5678', '9876', '4321'];

    
    useEffect(()=>{
        
        let isOk = false;
        if (code.length == 0) {
            isOk = true;
            codeComp.isReady = false;
        }
        if (!/^\d+$/.test(code)) {
            codeComp.helper = "Solo se permiten números";
        }
        else {
            if (code.length !== 4) {
                codeComp.helper = "El código debe tener 4 dígitos";
            }
            else if (validCodes.includes(code)){
                isOk = true;
                codeComp.isReady = true;
            }
            else {
                codeComp.helper = "El código debe ser el correcto";
                isOk = false;
                codeComp.isReady = false;
            }
        }
        if (isOk) { codeComp.helper = ""; }
        setCodeComp({...codeComp, color:isOk?'primary':'danger'});
    }, [code]);

    useEffect(()=>{
        setCanIn(codeComp.isReady);
    },[codeComp.isReady]);

    return (
        <div className='full-page'>
            <Header />
            <main className='w-auto grow min-h-full flex justify-center items-center gap-x-32'>
                <div className="centered-box">
                    <div className="restore-container">
                        <h1 className="restore-title">Introducir tu código de verificación</h1>
                        <br />
                        <p className="restore-description">
                            Tu código de verificación ha sido enviado a {email}. Por favor, introduzca el código recibido.
                        </p>
                        <br />
                        <div className="contact-support">
                            <p>
                            Si no recibió el correo electrónico, verifique todos sus correos electrónicos, incluida la carpeta de correo no deseado.
                            </p>
                        </div>
                        <br />
                        <br />
                        <p className="email-label">Código de verificación</p>
                        <br />
                        <form name='restore' id='restore' className='flex flex-col gap-y-4'>
                    <       Input label="Código de verificación" helpText={codeComp.helper}
                            type="text" color={codeComp.color} setValue={setCode}/>

                            <Link to={`/Confirm?email=${email}`}>
                                <button className='btn-primary w-full' type='submit' disabled={!canIn}>
                                    PRÓXIMO
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

export default Verification;