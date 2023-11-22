import React, { useState } from 'react';
import { Select, Option } from '@material-tailwind/react';

function SelectCategory() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    function handleCategoryChange(value) {
        setSelectedCategory(value);
        setAdditionalInfo(getAdditionalInfo(value));
    }

    // Función de ejemplo para obtener información adicional basada en la categoría seleccionada.
    function getAdditionalInfo(category) {
        // Realiza una condicional para asignar información adicional según la categoría.
        if (category === 'Categoria1') {
            return '¡Cuida de ti, comparte salud!.';
        } else if (category === 'Categoria2') {
            return '¡Comparte tu rutina, inspira movimiento!.';
        } else if (category === 'Categoria3') {
            return '¡Reflexiona, comparte, crece!.';
        } else {
            // Si no es ninguna de las categorías anteriores, puedes devolver un mensaje genérico.
            return 'No hay información adicional para esta categoría.';
        }
    }
    

    return (
        <div className="flex gap-8 items-center">
            <div className="w-96">
                <Select
                    variant="standard"
                    label="Seleccionar categoría"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <Option value="" disabled>
                        Seleccione una categoría
                    </Option>
                    <Option value="Categoria1">Salud general</Option>
                    <Option value="Categoria2">Ejercicios</Option>
                    <Option value="Categoria3">Crecimiento personal</Option>
                    {/* Agrega más opciones según tus necesidades */}
                </Select>
                {/* Puedes mostrar información adicional según la categoría seleccionada, si es necesario */}
                {selectedCategory && (
                    <p>{getAdditionalInfo(selectedCategory)}</p>
                )}
            </div>
        </div>
    );    
}

export default SelectCategory;