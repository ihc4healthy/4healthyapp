import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Chip, Popover, PopoverContent, PopoverHandler, Radio, Typography } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBaseball, faBasketball, faBed, faBicycle, faBook, faBookOpenReader, faBowlingBall, faBriefcase, faBullseye, faChalkboardUser, faCloud, faCow, faDragon, faDumbbell, faFaceSmileBeam, faFeather, faFishFins, faFootball, faFutbol, faGlassWater, faGlasses, faGolfBallTee, faGraduationCap, faHandshakeSimple, faHeart, faKeyboard, faLanguage, faMap, faMusic, faPalette, faPaw, faPersonRays, faPersonRunning, faPersonSkating, faPersonSwimming, faPersonWalking, faTicket, faTooth, faVolleyball, faWheelchairMove } from '@fortawesome/free-solid-svg-icons';
import { CheckIcon, PencilSquareIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { regex } from '../../utils/regexs';
import Input from '../Input';
import ToggleButton from '../ToggleButton';

function SelectHabit({setEnableNext}) {
    const defaultHabits = [
        {
            type: "Salud general",
            list: [
                {id: 1, icon: <FontAwesomeIcon icon={faBed} />, name:"Dormir"},
                {id: 2, icon: <FontAwesomeIcon icon={faCloud} />, name:"Meditar"},
                {id: 3, icon: <FontAwesomeIcon icon={faGlassWater} />, name:"Beber agua"},
                {id: 4, icon: <FontAwesomeIcon icon={faTooth} />, name:"Usar hilo dental"},
            ]
        },
        {
            type: "Ejercicios",
            list: [
                {id: 5, icon: <FontAwesomeIcon icon={faPersonRunning} />, name:"correr"},
                {id: 6, icon: <FontAwesomeIcon icon={faBicycle} />, name:"manejar bicicleta"},
                {id: 7, icon: <FontAwesomeIcon icon={faPersonSkating} />, name:"Usar patines"},
                {id: 8, icon: <FontAwesomeIcon icon={faPersonWalking} />, name:"caminar"},
                {id: 9, icon: <FontAwesomeIcon icon={faPersonSwimming} />, name:"Nadar"},
            ]
        },
        {
            type: "Crecimiento personal",
            list: [
                {id: 10, icon: <FontAwesomeIcon icon={faBookOpenReader} />, name:"Leer"},
                {id: 11, icon: <FontAwesomeIcon icon={faGraduationCap} />, name:"Estudiar"},
                {id: 12, icon: <FontAwesomeIcon icon={faBook} />, name:"Escribir un diario"},
                {id: 13, icon: <FontAwesomeIcon icon={faLanguage} />, name:"practicar nuevo idioma"},
            ]
        },
    ];
    
    library.add(
        faFaceSmileBeam, faGlasses, faBriefcase, faMap,
        faDumbbell, faPersonWalking, faHandshakeSimple, faWheelchairMove,
        faMusic, faTicket, faPalette, faFeather,
        faKeyboard, faPersonRays, faChalkboardUser, faHeart,
        faPaw, faCow, faFishFins, faDragon,
        faFutbol, faBasketball, faVolleyball, faFootball,
        faBowlingBall, faGolfBallTee, faBaseball, faBullseye
    );
    const defaultIcons = [
        "face-smile-beam", "glasses", "briefcase", "map",
        "dumbbell", "person-walking", "handshake-simple", "wheelchair-move",
        "music", "ticket", "palette", "feather",
        "keyboard", "person-rays", "chalkboard-user", "heart",
        "paw", "cow", "fish-fins", "dragon",
        "futbol", "basketball", "volleyball", "football",
        "bowling-ball", "golf-ball-tee", "baseball", "bullseye"

    ];
    const selectedDefault = {id: -1, name:"", icon:""};

    const [selected, setSelected] = useState(selectedDefault);
    const [open, setOpen] = useState(false);
    const [pHabitText, setPHabitText] = useState("");
    const [pHabitIcon, setPHabitIcon] = useState(defaultIcons[0]);
    const [habitInput, setHabitInput] = useState({helper:"", color:""});
    
    useEffect(()=>{
        // alert(selected.name)
        if (setEnableNext) {
            // console.log(selected, selected.id >= 0 && selected.name !== "");
            setEnableNext(selected.id >= 0 && selected.name !== "");
        }
    },[selected]);
    useEffect(()=>{
        setHabitInput({helper:"", color:""});
    },[pHabitText.length > 2]);
    
    const handleClose = ()=>setOpen(false);
    const handleOpen = ()=>setOpen(true);
    const handleSave = ()=>{
        if (pHabitText.length > 2 && regex.oneLetter.test(pHabitText)) {
            handleClose();
            setSelected({...selected, id:0, name:pHabitText, icon:pHabitIcon})
        }
        else {
            setHabitInput({helper:"Usar mínimo 2 letras", color:"danger"});
        }
    };

    const FAIcon = ({iconName})=><FontAwesomeIcon icon={`fa-solid fa-${iconName}`} />;
    const ChipButton = ({name, icon, id, className})=>
        <button className={`${className} btn-chip ${selected.name == name ? 'active':''}`}
            onClick={()=>{
                if(setSelected){
                    setSelected({id:id, name:name, icon:icon});
                }
            }}
        >
            {icon} {name}
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
                    name={pHabitText} icon={<FAIcon iconName={pHabitIcon}/>}/>
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
                            // {icon: <BriefcaseIcon/>, value:"trabajo"},
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
}

export default SelectHabit