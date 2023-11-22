import React, { useState } from 'react';
import moment from 'moment/moment';
import 'moment/locale/es';
import { DSidebar } from '../../components/Sidenav';
import { Badge, Button, Card, CardBody, Dialog, DialogBody, DialogFooter, DialogHeader, Progress, Typography } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import CommentCheckCard from '../../components/community/CommentCheckCard'; // Asegúrate de usar la ruta correcta
moment.locale('es');

const CommunityList = () => {
    const [comments, setComments] = useState([]);
    const navigate = useNavigate(); // Importa useNavigate para redirigir a otras rutas

    const [open, setOpen] = useState(false);
    const [dialogStep, setDialogStep] = useState(0);
    const [dialogContent, setDialogContent] = useState("");

    const currentDate = moment().format('dddd DD [de] MMMM [del] YYYY');

    const handleNewComment = () => {
        // Redirige a la ruta '/NewComment' al hacer clic en el botón "Nuevo Comentario"
        navigate('/NewComment');
    };

    // Función para abrir el cuadro de diálogo y establecer el contenido
    const handleOpenDialog = (content) => {
        setDialogContent(content);
        setOpen(true);
    };

    return (
        <div className='w-full h-full flex'>
            <DSidebar />
            <div className="container py-4 px-8 flex flex-col gap-8">
                <div className='flex justify-between items-baseline gap-2'>
                    <Typography variant='h1'>Mira nuestra comunidad</Typography>
                    <Typography variant='h5' className='text-text-secondary'>
                        {currentDate}
                    </Typography>
                </div>
                <div className="flex justify-end">
                    <Button onClick={handleNewComment} color="primary">
                        Nuevo Comentario
                    </Button>
                </div>

                {/* Ejemplos de CommentCheckCard */}
                <CommentCheckCard
                    commentTitle="Ayuda con Estiramientos"
                    commentCategory="Ejercicio"
                    onChange={() => handleOpenDialog(
                        "Hola comunidad, estoy buscando algunos consejos para mejorar mis estiramientos. " +
                        "Suelo hacer estiramientos por la mañana, pero siento que necesito algunas rutinas más efectivas. " +
                        "¿Alguna sugerencia de estiramientos específicos o programas que hayan funcionado para ustedes?"
                        )}
                />

                <CommentCheckCard
                    commentTitle="Plan de rutina avanzado"
                    commentCategory="Ejercicio"
                    onChange={() => handleOpenDialog(
                        "¡Hola a todos! Quiero compartir mi plan de rutina avanzado para obtener sus opiniones y sugerencias. " +
                        "Mi objetivo es mejorar la fuerza y la resistencia. Actualmente, mi rutina incluye levantamiento de pesas, " +
                        "cardio y algunos ejercicios de flexibilidad. ¿Algún consejo para hacer mi rutina más efectiva?"
                    )}
                />

                <CommentCheckCard
                    commentTitle="Necesito un consejo"
                    commentCategory="Salud general"
                    onChange={() => handleOpenDialog(
                        "Estoy pasando por un momento difícil en mi vida y estoy buscando algunos consejos sobre cómo mantener " +
                        "una buena salud mental. ¿Alguno de ustedes ha pasado por situaciones similares y tiene estrategias para " +
                        "afrontar el estrés y la ansiedad? Aprecio cualquier consejo que puedan ofrecer. ¡Gracias!"
                    )}
                />

                {/* Resto del contenido de tu página CommunityList */}
            
                {/* Agrega el cuadro de diálogo */}
            <Dialog open={open} handler={() => setOpen(!open)}>
                <DialogHeader className='text-text-primary justify-center'>
                    {/* Puedes personalizar el encabezado según tus necesidades */}
                    Detalles del Comentario
                </DialogHeader>
                <DialogBody className='text-text-primary px-8'>
                    {/* Muestra el contenido del comentario en el cuerpo del cuadro de diálogo */}
                    <Typography>{dialogContent}</Typography>
                </DialogBody>
                <DialogFooter className='pr-1'>
                    {/* Agrega botones u otras acciones según tus necesidades */}
                    <Button variant="text" onClick={() => setOpen(!open)}>
                        Cerrar
                    </Button>
                </DialogFooter>
            </Dialog>
            </div>
        </div>
    );
};

export default CommunityList;
