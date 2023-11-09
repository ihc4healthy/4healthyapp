import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Chip, Popover, PopoverContent, PopoverHandler, Radio, Typography } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBaseball, faBasketball, faBed, faBicycle, faBook, faBookOpenReader, faBowlingBall, faBriefcase, faBullseye, faChalkboardUser, faCloud, faCow, faDragon, faDumbbell, faFaceSmileBeam, faFeather, faFishFins, faFootball, faFutbol, faGlassWater, faGlasses, faGolfBallTee, faGraduationCap, faHandshakeSimple, faHeart, faKeyboard, faLanguage, faMap, faMusic, faPalette, faPaw, faPersonRays, faPersonRunning, faPersonSkating, faPersonSwimming, faPersonWalking, faTicket, faTooth, faVolleyball, faWheelchairMove } from '@fortawesome/free-solid-svg-icons';
import { CheckIcon, FaceSmileIcon, PencilSquareIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Input from '../Input';
import { regex } from '../../utils/regexs';
import ToggleButton from '../ToggleButton';

function SelectHabit() {
    const radioName = "habits-opts";
    const defaultHabits = [
        {
            type: "Salud general",
            list: [
                {icon: <FontAwesomeIcon icon={faBed} />, name:"Dormir"},
                {icon: <FontAwesomeIcon icon={faCloud} />, name:"Meditar"},
                {icon: <FontAwesomeIcon icon={faGlassWater} />, name:"Beber agua"},
                {icon: <FontAwesomeIcon icon={faTooth} />, name:"Usar hilo dental"},
            ]
        },
        {
            type: "Ejercicios",
            list: [
                {icon: <FontAwesomeIcon icon={faPersonRunning} />, name:"correr"},
                {icon: <FontAwesomeIcon icon={faBicycle} />, name:"manejar bicicleta"},
                {icon: <FontAwesomeIcon icon={faPersonSkating} />, name:"Usar patines"},
                {icon: <FontAwesomeIcon icon={faPersonWalking} />, name:"caminar"},
                {icon: <FontAwesomeIcon icon={faPersonSwimming} />, name:"Nadar"},
            ]
        },
        {
            type: "Crecimiento personal",
            list: [
                {icon: <FontAwesomeIcon icon={faBookOpenReader} />, name:"Leer"},
                {icon: <FontAwesomeIcon icon={faGraduationCap} />, name:"Estudiar"},
                {icon: <FontAwesomeIcon icon={faBook} />, name:"Escribir un diario"},
                {icon: <FontAwesomeIcon icon={faLanguage} />, name:"practicar nuevo idioma"},
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
    const [usingDefault, setUsingDefault] = useState(true);
    const [pHabitText, setPHabitText] = useState("");
    const [pHabitIcon, setPHabitIcon] = useState(defaultIcons[0]);
    const [habitInput, setHabitInput] = useState({helper:"", color:""});
    
    useEffect(()=>{
        // alert(selected.name)
    },[selected]);
    useEffect(()=>{
        setHabitInput({helper:"", color:""});
    },[pHabitText.length > 2]);
    
    const handleClose = ()=>setOpen(false);
    const handleOpen = ()=>setOpen(true);
    const handleSave = ()=>{
        if (pHabitText.length > 2 && regex.oneLetter.test(pHabitText)) {
            setUsingDefault(false);
            handleClose();
            setSelected({...selected, name:pHabitText, icon:pHabitIcon})
        }
        else {
            setHabitInput({helper:"Usar mínimo 2 letras", color:"danger"});
        }
    };

    const FAIcon = ({iconName})=><FontAwesomeIcon icon={`fa-solid fa-${iconName}`} />;
    
    return (
    <>
        <Typography variant='h1'>¡Elige el hábito que deseas realizar!</Typography>

        {defaultHabits.map((ht, i)=><div className='flex flex-col gap-3' key={`ht-${i}`}>
            <Typography variant='h3'>
                {ht.type}
            </Typography>
            <div className="flex gap-2">
                {ht.list.map((h,j)=>
                    <Chip variant="ghost"
                        className="rounded-full flex items-center"
                        key={`h-${i}-${j}`}
                        value={h.name}
                        icon={h.icon}
                        // open={true}
                        action = {
                            <Radio name={radioName}
                                color="secondary"
                                containerProps={{ className: "p-0 ml-2", }}
                                checked={usingDefault && selected.name == h.name}
                                onChange={(e)=>{
                                    if(e.target.value && setSelected){
                                        setSelected({id:[i,j], name:h.name, icon:h.icon});
                                        setUsingDefault(true);
                                    }
                            }}/>
                        }
                    />
                )}
            </div>
        </div>)}

        {/* //=================================/ */}
        
        <div>
            <Typography variant='h3'>Personalizado</Typography>
            <div className={`${open?"hidden":"flex"} items-center gap-2`}>
                <div className={usingDefault?"hidden":"flex gap-2"}>
                    <Radio name={radioName}
                        containerProps={{ className: "p-0 ml-2", }}
                        checked={!usingDefault}
                        color="secondary"
                        readOnly
                    />
                    <h3>{selected.name}</h3>
                    <FAIcon iconName={pHabitIcon}/>
                </div>
                <Button variant='text'
                    hidden={open} onClick={handleOpen}>
                    {
                        usingDefault?
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