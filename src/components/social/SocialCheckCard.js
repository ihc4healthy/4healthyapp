import React from 'react';
import { Badge, Card, Typography, Button } from '@material-tailwind/react';
import FAIbcon from '../FAIbcon';  // Asegúrate de importar el componente adecuado aquí

const SocialCheckCard = ({ commentTitle, commentButton, onChange, icon }) => {
    return (
        <Card className='min-w-fit max-w-xl w-1/2 cursor-default text-text-secondary'>
            <div className='flex gap-8 items-center px-4 py-2'>
                <Typography variant='small' className='flex items-center gap-3 font-heading'>
                    <FAIbcon iconName={icon} className={"text-4xl"}/>
                    {commentTitle}
                </Typography>
            </div>
            <div className='flex items-center justify-end mt-4'>
                <Button color='primary' onClick={onChange}>
                    Conectar con {commentButton}
                </Button>
            </div>
        </Card>
    );
};

export default SocialCheckCard;
