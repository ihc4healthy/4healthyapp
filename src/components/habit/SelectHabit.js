import React, { useEffect, useState } from 'react'
import { Button, Popover, PopoverContent, PopoverHandler, Typography } from '@material-tailwind/react';
import { CheckIcon, PencilSquareIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { regex } from '../../utils/regexs';
import FAIcon from '../FAIcon';
import Input from '../Input';
import ToggleButton from '../ToggleButton';

const selectedDefault = {id: -1, name:"", icon:"face-smile-beam"};

const SelectHabit = ({setEnableNext, saveHabit, baseHabit}) => {
    const defaultHabits = [
        {
            type: "Salud general",
            list: [
                {id: 1, icon: "bed", name:"Dormir"},
                {id: 2, icon: "cloud", name:"Meditar"},
                {id: 3, icon: "glass-water", name:"Beber agua"},
                {id: 4, icon: "tooth", name:"Usar hilo dental"},
            ]
        },
        {
            type: "Ejercicios",
            list: [
                {id: 5, icon: "person-running", name:"correr"},
                {id: 6, icon: "bicycle", name:"manejar bicicleta"},
                {id: 7, icon: "person-skating", name:"Usar patines"},
                {id: 8, icon: "person-walking", name:"caminar"},
                {id: 9, icon: "person-swimming", name:"Nadar"},
            ]
        },
        {
            type: "Crecimiento personal",
            list: [
                {id: 10, icon: "book-open-reader", name:"Leer"},
                {id: 11, icon: "graduation-cap", name:"Estudiar"},
                {id: 12, icon: "book", name:"Escribir un diario"},
                {id: 13, icon: "language", name:"practicar nuevo idioma"},
            ]
        },
    ];
    
    const defaultIcons = [
        "face-smile-beam", "glasses", "briefcase", "map",
        "dumbbell", "person-walking", "handshake-simple", "wheelchair-move",
        "music", "ticket", "palette", "feather",
        "keyboard", "person-rays", "chalkboard-user", "heart",
        "paw", "cow", "fish-fins", "dragon",
        "futbol", "basketball", "volleyball", "football",
        "bowling-ball", "golf-ball-tee", "baseball", "bullseye"
    ];

    const [selected, setSelected] = useState(baseHabit??selectedDefault);
    const [open, setOpen] = useState(false);
    const [pHabitText, setPHabitText] = useState(baseHabit && baseHabit.id == -1 ? baseHabit.name : "");
    const [pHabitIcon, setPHabitIcon] = useState(baseHabit && baseHabit.id == -1 ? baseHabit.icon : defaultIcons[0]);
    const [habitInput, setHabitInput] = useState({helper:"", color:""});
    
    useEffect(()=>{
        // alert(selected.name)
        if (setEnableNext) {
            console.log(selected);
            setEnableNext(selected.name !== "");
        }
        saveHabit && saveHabit(selected);
    },[selected]);
    useEffect(()=>{
        setHabitInput({helper:"", color:""});
    },[pHabitText.length > 2]);
    
    // Custom habit ---
    const handleClose = ()=>setOpen(false);
    const handleOpen = ()=>setOpen(true);
    const handleSave = ()=>{
        if (pHabitText.length > 2 && regex.oneLetter.test(pHabitText)) {
            handleClose();
            setSelected({...selected, id:-1, name:pHabitText, icon:pHabitIcon})
        }
        else {
            setHabitInput({helper:"Usar mínimo 2 letras", color:"danger"});
        }
    };
    // ---

    const ChipButton = ({name, icon, id, className})=>
        <button className={`${className} btn-chip ${selected.name == name ? 'active':''}`}
            onClick={()=>{
                if(setSelected){
                    setSelected({id:id, name:name, icon:icon});
                }
            }}
        >
            <FAIcon iconName={icon}/> {name}
        </button>;
    
    return (
    <>
        <Typography variant='h1'>¡Elige el hábito que deseas realizar!</Typography>

        {defaultHabits.map((ht, i)=><div className='flex flex-col gap-3' key={`ht-${i}`}>
            <Typography variant='h3'>
                {ht.type}
            </Typography>
            <div className="flex gap-2">
                {ht.list.map((h,j)=>
                <ChipButton key={`h-${i}-${j}`} id={h.id}
                    name={h.name} icon={h.icon}/>
                )}
            </div>
        </div>)}

        {/* //=================================/ */}
        
        <div>
            <Typography variant='h3'>Personalizado</Typography>
            <div className={`${open?"hidden":"flex"} items-center gap-2`}>
                <ChipButton id={0} className={pHabitText === "" ? 'hidden' :
                                    selected.name === pHabitText ? 'active': ''}
                    name={pHabitText} icon={pHabitIcon}/>
                <Button variant='text'
                    hidden={open} onClick={handleOpen}>
                    {
                        pHabitText === ""?
                        <><PlusIcon/> Crear hábito diferente</>
                        : <><PencilSquareIcon/></>
                    }
                </Button>
            </div>

            <div className={`${open?"flex":"hidden"} items-center gap-2`}>
                <Input label="Hábito" setValue={setPHabitText}
                    helpText={habitInput.helper}
                    type="text" color={habitInput.color}
                />
                
                <Popover placement="bottom">
                    <PopoverHandler>
                        <Button variant='text'>
                            <FAIcon iconName={pHabitIcon}/> 
                        </Button>
                    </PopoverHandler>
                    <PopoverContent className='text-text-secondary'>
                        {/* //className='grid grid-cols-4 divide-none' */}
                        <ToggleButton cols={4} buttons={
                            defaultIcons.map((ic, i)=>{return ({
                                icon: <FAIcon iconName={ic}/>,
                                value: ic
                            })})
                        } setChoosed={setPHabitIcon} defaultSelected={0}/>
                    </PopoverContent>
                </Popover>

                <Button variant='text' onClick={handleSave}>
                    <CheckIcon/> Guardar
                </Button>
                <Button variant='text' onClick={handleClose}>
                    <XMarkIcon/>
                </Button>
            </div>
        </div>
    </>
    )
};

export default SelectHabit;
export { selectedDefault };