import React, { useState } from 'react';
import { Typography, Button } from '@material-tailwind/react';

const AddImage = ({ selectedImages, saveImages }) => {
    const [images, setImages] = useState(selectedImages);

    const handleImageChange = (e) => {
        const newImages = Array.from(e.target.files);
        setImages(newImages);
        saveImages(newImages);
    };

    return (
        <div>
            <input type='file' accept='image/*' multiple onChange={handleImageChange} />
            {images.length > 0 && (
                <div>
                    <Typography variant='subtitle'>Imágenes seleccionadas:</Typography>
                    {images.map((image, index) => (
                        <Typography key={index} variant='body2'>
                            {image.name}
                        </Typography>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AddImage;
