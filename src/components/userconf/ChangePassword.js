import React,{ useState,useEffect } from "react";
import axios from "axios";

import { regex } from '../../utils/regexs';
import Input from '../../components/Input';

export const ChangePassword = () => {
    const [showModal, setShowModal] = React.useState(false);

    //cambio de contraseña
    const [password, setPassword] = useState("");
    const [passwordComp, setPasswordComp] = useState({ color: "primary", helper: "Usar letras y números", isReady: false });
    const [password2, setPassword2] = useState("");
    const [passwordComp2, setPasswordComp2] = useState({ color: "primary", helper: "Usar letras y números", isReady: false });
    const [canIn, setCanIn] = useState(false);

    useEffect(() => {
        let isOk = false;
        if (password.length === 0) {
            isOk = true;
            passwordComp.isReady = false;
        } else if (password.length < 4) {
            passwordComp.helper = "Debe ser mayor a 4 caracteres";
        } else {
            if (!regex.oneLetter.test(password)) {
                passwordComp.helper = "Debe contener al menos 1 letra";
            } else if (!regex.oneNumber.test(password)) {
                passwordComp.helper = "Debe contener al menos 1 número";
            } else {
                isOk = true;
                passwordComp.isReady = true;
            }
        }
        if (isOk) {
            passwordComp.helper = "";
        }
        setPasswordComp({ ...passwordComp, color: isOk ? "primary" : "danger" });
    }, [password.length]);

    useEffect(() => {
        let isOk = false;
        if (password2.length === 0) {
            isOk = true;
            passwordComp2.isReady = false;
        } else if (password2.length < 4) {
            passwordComp2.helper = "Debe ser mayor a 4 caracteres";
        } else {
            if (!regex.oneLetter.test(password2)) {
                passwordComp2.helper = "Debe contener al menos 1 letra";
            } else if (!regex.oneNumber.test(password2)) {
                passwordComp2.helper = "Debe contener al menos 1 número";
            } else if (password2 !== password) {
                passwordComp2.helper = "Las contraseñas deben ser iguales";
            } else {
                isOk = true;
                passwordComp2.isReady = true;
            }
        }
        if (isOk) {
            passwordComp2.helper = "";
        }
        setPasswordComp2({ ...passwordComp2, color: isOk ? "primary" : "danger" });
    }, [password2.length]);

    useEffect(() => {
        setCanIn(passwordComp.isReady && passwordComp2.isReady);
    }, [passwordComp.isReady, passwordComp2.isReady]);

    const handleConfirmSubmit = (event) => {
        event.preventDefault();
  //PROBAMOS CON EMAIL TEST
        if (canIn) {
            axios.put('http://localhost:3000/updatepassword', { id:"1", password:password })
            
            .then(response => {
              alert("La Solicitud de cambio fue exitosa, puede volver al inicio");
          
            })
            .catch(error => {
              console.error("Error al registrar:", error);
              alert("Error al registrar");
            });
        } else {
            alert("Asegúrese de que ambas contraseñas sean válidas y coincidan.");
        }
    };


  return (
    <form name='restore'  className='flex flex-row gap-y-4 w-3/4  mb-10 ml-40 ' >
    <h1 className='w-1/2 pt-5 pl-20' > CONTRASEÑA: </h1>


    <div className='flex-row w-full'>
    <Input label="Contraseña" placeholder="***********" 
                    type="text" color="Yellow" className="w-full" />
 <button className='btn-primary mt-3 ml-auto'  type='submit' onClick={() => setShowModal(true)}>
                            Cambiar contraseña</button>    {showModal ? (

                //MODAL
<>
  <div
    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
  >
    <div className="relative w-auto my-6 mx-auto max-w-4xl " >
      {/*content*/}
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
        {/*header*/}
        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
          <h3 className="text-3xl font-semibold">
            Cambiar Contraseña:
          </h3>
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>
        <div className="px-28 py-4 ">
            <div >
                <h1 className="restore-title">Establecer una nueva contraseña</h1>
                <p >
                    Establezca una contraseña segura que no esté utilizando en otros sitios web. Si restablece su contraseña, se cerrará automáticamente su sesión en todos los dispositivos excepto el navegador que esté utilizando actualmente
                </p>
                <br />
                <p className="email-label">Nueva contraseña</p>
                <br />
                <form name='restore' id='restore' className='flex flex-col gap-y-4'>
                    <Input label="Nueva contraseña" helpText={passwordComp.helper}
                        type="text" color={passwordComp.color} setValue={setPassword} />
                </form>
                <br />
                <p className="email-label">Escriba la contraseña otra vez</p>
                <br />
                <form name='restore' id='restore' className='flex flex-col gap-y-4'>
                    <Input label="Confirmar contraseña" helpText={passwordComp2.helper}
                        type="text" color={passwordComp2.color} setValue={setPassword2} />
                    <button className='btn-primary w-full' type='button' onClick={handleConfirmSubmit} disabled={!canIn}>
                        ENVIAR
                    </button>
                </form>
            </div>
            </div>
        <div className="relative  flex-auto">
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
<ul className="flex-col ">

</ul>
          </p>
        </div>

        <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
          <button
            className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(false)}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</>
) : null}

    </div>
     </form>
   
  )
}
