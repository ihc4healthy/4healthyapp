import React, { useContext, useEffect, useState } from 'react';
import Input from '../components/Input';
import axios from 'axios';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import moment from 'moment/moment';
import 'moment/locale/es';
import { DSidebar } from '../components/Sidenav';
import { Badge, Button, Card, CardBody, Dialog, DialogBody, DialogFooter, DialogHeader, Progress, Typography } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import { regex } from '../utils/regexs';
import { UserContext } from '../utils/UserConxtextProvider';
import { apiData } from '../common/apiData';
import SocialCheckCard from '../components/social/SocialCheckCard'; // Asegúrate de usar la ruta correcta
moment.locale('es');



const CommunityList = () => {
    const [comments, setComments] = useState([]);
    const navigate = useNavigate(); // Importa useNavigate para redirigir a otras rutas
    const { user, setUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [dialogStep, setDialogStep] = useState(0);
    const [dialogContent, setDialogContent] = useState("");
    const existentUsernames = ['aaaa','bbbb','cccc'];

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    
    const [passwordComp, setPasswordComp] = useState({color:"primary", helper:"Usar letras y números", isReady:false});
    const [userComp, setUserComp] = useState({color:"primary", helper:"Debe ser mayor a 4 caracteres", isReady:false});
    const [canSignup, setCanSignup] = useState(false);


    const currentDate = moment().format('dddd DD [de] MMMM [del] YYYY');

    // Función para abrir el cuadro de diálogo y establecer el contenido
    const handleOpenDialog = (content) => {
        setDialogContent(content);
        setOpen(true);
    };

    const handleSave = (event)=>{
        event.preventDefault();
        if (canSignup) {
            axios.patch( apiData.baseUrl + '/user/social', {
                id:'1',
                email: username,
                password: password,
            })
            .then(response => {
                console.log('Signed up!', response.data.user);
                // {id: 1, username: username, password: password, profilePic:1, level:1, levelProgress:10}
                setUser(response.data.user);
                alert("Cuenta Vinculada");
            })
            .catch(error => {
                console.error('Error al vincular cuenta:', error);
                alert('Error al vincular cuenta:', error);
            });
        }
    };
    
    useEffect(()=>{
        let isOk = false;
        if (password.length === 0) {
            isOk = true;
            passwordComp.isReady = false;
        }else{
            isOk = true;
            passwordComp.isReady = true;
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
        if (username.indexOf('@')>=0) {
            if (!regex.email.test(username)){
                userComp.helper = "Correo no válido";
            }
            else {
                isOk = true;
                userComp.isReady = true;
            }
        }
        else {
            isOk = true;
            userComp.isReady = true;
        }
        if (isOk) { userComp.helper = ""; }
        setUserComp({...userComp, color:isOk?'primary':'danger'});
    }, [username]);

    useEffect(()=>{
        setCanSignup(userComp.isReady && passwordComp.isReady);
    },[userComp.isReady, passwordComp.isReady]);


    return (
        <div className='w-full h-full flex'>
            <DSidebar />
            <div className="container py-4 px-8 flex flex-col gap-8">
                <div className='flex justify-between items-baseline gap-2'>
                    <Typography variant='h1'>Añade tu redes sociales</Typography>
                    <Typography variant='h5' className='text-text-secondary'>
                        {currentDate}
                    </Typography>
                </div>

                {/* Ejemplos de CommentCheckCard */}
                <SocialCheckCard
                    commentTitle="Facebook"
                    commentButton= "Facebook"
                    onChange={() => handleOpenDialog()}
                    icon="facebook"
                />

                <SocialCheckCard
                    commentTitle="Instagram"
                    commentButton= "Instagram"
                    onChange={() => handleOpenDialog()}
                    icon="instagram"
                />

                <SocialCheckCard
                    commentTitle="Google"
                    commentButton= "Google"
                    onChange={() => handleOpenDialog()}
                    icon="google"
                />

                {/* Resto del contenido de tu página CommunityList */}
            
                {/* Agrega el cuadro de diálogo */}
            <Dialog open={open} handler={() => setOpen(!open)}>
                <DialogHeader className='text-text-primary justify-center'>
                    {/* Puedes personalizar el encabezado según tus necesidades */}
                    Ingresa tus Credenciales
                </DialogHeader>
                <DialogBody className='text-text-primary px-8'>
                    {/* Muestra el contenido del comentario en el cuerpo del cuadro de diálogo */}
                    <Typography>{dialogContent}</Typography>
                    <div className='flex flex-col gap-y-8'>
                <form name='Signup' id='Signup' className='flex flex-col gap-y-4'>
                    <Input label="Nombre de usuario" placeholder="nomusuario" helpText={userComp.helper}
                        type="text" color={userComp.color} setValue={(val)=>{setUsername(val.toLowerCase());}}/>
                    <Input label="Contraseña" placeholder="******" helpText={passwordComp.helper}
                        type="password" color={passwordComp.color} setValue={setPassword}/>

                    <Button color='primary' className='w-full' disabled={!canSignup} onClick={handleSave}>
                        <ArrowRightOnRectangleIcon/>
                        Vincular
                    </Button>
                </form>
            </div>
                </DialogBody>
                <DialogFooter className='pr-1'>
                    {/* Agrega botones u otras acciones según tus necesidades */}
                    <Button variant="contained" onClick={() => setOpen(!open)}>
                        Cerrar
                    </Button>
                </DialogFooter>
            </Dialog>
            </div>
        </div>
    );
};

export default CommunityList;
