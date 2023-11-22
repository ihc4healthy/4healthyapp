import React, { useState } from 'react';
import { Typography, Textarea, Input } from '@material-tailwind/react';

const AddContent = ({ title, content, saveContent, width = '70%', setEnableNext }) => {
    const [commentTitle, setCommentTitle] = useState(title);
    const [commentContent, setCommentContent] = useState(content);

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setCommentTitle(newTitle);
        saveContent(newTitle, commentContent);

        // Verifica si ambos el título y el contenido están presentes para habilitar el siguiente paso
        setEnableNext(newTitle.trim() !== '' && commentContent.trim() !== '');
    };

    const handleContentChange = (e) => {
        const newContent = e.target.value;
        setCommentContent(newContent);
        saveContent(commentTitle, newContent);

        // Verifica si ambos el título y el contenido están presentes para habilitar el siguiente paso
        setEnableNext(commentTitle.trim() !== '' && newContent.trim() !== '');
    };

    const inputStyle = {
        width,
        border: '1px solid #ccc',
        borderRadius: '5px',
        outline: 'none',
    };

    const textareaStyle = {
        width,
        border: '1px solid #ccc',
        borderRadius: '5px',
        outline: 'none',
    };

    return (
        <div>
            <Typography variant='h4'>Añade el título de tu comentario:</Typography>
            <Input
                type='text'
                placeholder='Título del comentario...'
                value={commentTitle}
                onChange={handleTitleChange}
                className='mb-4'
                style={inputStyle}
            />
            <Typography variant='h4'>Añade el contenido de tu comentario:</Typography>
            <Textarea
                placeholder='Escribe tu comentario aquí...'
                value={commentContent}
                onChange={handleContentChange}
                style={textareaStyle}
            />
        </div>
    );
};

export default AddContent;
