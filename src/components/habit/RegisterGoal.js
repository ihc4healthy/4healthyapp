import React, { useEffect, useState } from 'react'
import { Typography } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import Input from '../Input'
import ToggleButton from '../ToggleButton'

function RegisterGoal({habitName}) {
    const [goalName, setGoalName] = useState("");
    const [goalDescription, setGoalDescription] = useState("");
    const [goalPercentage, setGoalPercentage] = useState(10);
    const [goalDifficulty, setGoalDifficulty] = useState("");
    // const [advancedData, setAdvancedData] = useState({
    // });

    return (<>
        <Typography variant='h3'>Opciones Power para {habitName}</Typography>
        
        <div className='flex flex-col gap-2'>
            <Typography variant='h4'>Objetivo a cumplir</Typography>
            <div className='flex gap-4'>
                <Input label="Nombre" setValue={setGoalName} value={goalName}/>
                <Input label="Descripción" setValue={setGoalDescription} className="w-full"/>
            </div>
            <div className='flex gap-2'>
                <p>Para lograr el objetivo,
                    <br/>cada vez que realizo la actividad,
                    <br/>espero acumular:</p>
                <div>
                    <Input label="Porcentaje" placeholder="%"
                        setValue={setGoalPercentage}
                        type="number" afterInput={<>%</>}
                        min={1} max={100} step={1}
                    />
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-2'>
            <Typography variant='h4'>Dificulad</Typography>
            <div className='flex gap-2'>
                <p>Creo que la actividad tiene una dificultad:</p>
                <ToggleButton buttons={[
                        {icon: <FontAwesomeIcon icon={faMoon}/>, text:"fácil", value: "EASY"},
                        {icon: <FontAwesomeIcon icon={faCircle}/>, text:"medio", value: "MEDIUM"},
                        {icon: <FontAwesomeIcon icon={faSun}/>, text:"difícil", value: "HARD"},
                    ]}
                    defaultSelected={1} setChoosed={setGoalDifficulty}/>
            </div>
        </div>
    </>)
}

export default RegisterGoal