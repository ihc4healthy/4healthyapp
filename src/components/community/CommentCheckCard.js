import React from 'react';
import { Badge, Card, Typography, Button } from '@material-tailwind/react';
import FAIcon from '../FAIcon';  // Asegúrate de importar el componente adecuado aquí

const CommentCheckCard = ({ commentTitle, commentCategory, onChange, icon="face-smile-beam" }) => {
    return (
        <Card className='min-w-fit max-w-xl w-1/2 cursor-default text-text-secondary'>
            <div className='flex gap-8 items-center px-4 py-2'>
                <Typography variant='small' className='flex items-center gap-3 font-heading'>
                    <FAIcon iconName={icon} className={"text-4xl"}/>
                    {commentTitle}
                </Typography>
                <div className='text-center grow'>
                    <Typography variant='small'>
                        Categoría: {commentCategory}
                    </Typography>
                </div>
            </div>
            <div className='flex items-center justify-end mt-4'>
                <Button color='primary' onClick={onChange}>
                    Ver Detalles
                </Button>
            </div>
        </Card>
    );
};

export default CommentCheckCard;
