import React, { useState } from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { DSidebar } from '../../components/Sidenav';
import SelectCategory from '../../components/community/SelectCategory';
import AddImage from '../../components/community/AddImage';
import AddContent from '../../components/community/AddContent';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory

function NewComment() {
    const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

    const [comment, setComment] = useState({
        category: '',
        images: [],
        content: '',
    });

    const [nextEnabled, setNextEnabled] = useState(false);

    const handleSave = () => {
        console.log('saving', comment);
        // Aquí podrías enviar el comentario al servidor o realizar cualquier otra acción

        // Redirige a la página que desees
        navigate('/Comunitylist'); // Reemplaza '/tu-ruta-especifica' con la ruta a la que deseas redirigir
    };

    const updateNextEnabled = () => {
        const { category, content } = comment;
        const isValid = !!category && !!content.title && !!content.content;
        setNextEnabled(isValid);
    };

    return (
        <div className='w-full h-full flex'>
            <DSidebar />
            <div className='container py-4 px-8'>
                <Typography variant='h2' className='mb-8'>
                    Comparte tu opinión con el resto
                </Typography>

                <div className='flex mb-4'>
                    <Typography variant='h4' className='mr-4'>
                        Categoría
                    </Typography>
                    <SelectCategory
                        selectedCategory={comment.category}
                        saveCategory={(category) => {
                            setComment({ ...comment, category });
                            updateNextEnabled();
                        }}
                        setEnableNext={(enabled) => setNextEnabled(enabled)}
                    />
                </div>

                <Typography variant='h4' className='mt-8 mb-4'>
                    Agrega la imagen que desees
                </Typography>
                <AddImage
                    selectedImages={comment.images}
                    saveImages={(images) => setComment({ ...comment, images })}
                    setEnableNext={(enabled) => setNextEnabled(enabled)}
                />

                <Typography variant='h4' className='mt-8 mb-4'>
                    Añadir Contenido
                </Typography>
                <AddContent
                    content={comment.content}
                    saveContent={(content) => {setComment({ ...comment, content });}}
                    setEnableNext={(enabled) => setNextEnabled(enabled)}
                />

                <div className='mt-16 flex justify-between'>
                    <Button onClick={handleSave} disabled={!nextEnabled} color='primary'>
                        <CheckIcon />
                        Guardar
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NewComment;
