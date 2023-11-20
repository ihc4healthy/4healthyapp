import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Option, Select, Slider, Typography } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import Input from '../Input'
import ToggleButton from '../ToggleButton'
import { CheckIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid'

const goalDifficulties = {EASY: "EASY", MEDIUM: "MEDIUM", HARD: "HARD"};
const defaultGoal = {id: 0, name: "vida saludable", description: "mejorar mi calidad de vida"};
const defaultAdvanced = {goal: defaultGoal, difficulty: goalDifficulties.MEDIUM, goalPercentage: 10};

function RegisterGoal({habitName, saveGoal}) {
    const [goals, setGoals] = useState([
        {id: 1, name: "Reducir 15 Kg", description: "lorem ipsum"},
        {id: 2, name: "Ganar músculo", description: "marcar abdominales"},
    ]);
    
    const [open, setOpen] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState(defaultGoal);
    const [newGoal, setNewGoal] = useState({id: -1, name: "", description: "", error: ""});

    const [goalDifficulty, setGoalDifficulty] = useState(goalDifficulties.MEDIUM);
    const [goalPercentage, setGoalPercentage] = useState(10);
    const [advancedData, setAdvancedData] = useState({
        goal: defaultGoal, difficulty: goalDifficulty, goalPercentage: goalPercentage
    });

    const handleOpen = () => setOpen(!open);
    const handleNew = () => {
        if (newGoal.error === "") {
            setOpen(!open);
            setGoals([...goals, newGoal]);
            setSelectedGoal(newGoal);
        }
    };

    useEffect(() => {
        newGoal.error = newGoal.name.length < 3 ? "Mínimo deben ser 3 caracteres" : "";
    }, [newGoal.name]);
    useEffect(() => {
        setAdvancedData({...advancedData, goal : selectedGoal});
    }, [selectedGoal]);
    useEffect(() => {
        setAdvancedData({...advancedData, difficulty : goalDifficulty});
    }, [goalDifficulty]);
    useEffect(() => {
        setAdvancedData({...advancedData, goalPercentage : goalPercentage});
    }, [goalPercentage]);
    useEffect(()=>{
        console.log(advancedData);
        saveGoal(advancedData);
    }, [advancedData]);

    return (<>
        <Typography variant='h3'>Opciones Power para {habitName}</Typography>
        
        <div className='flex flex-col gap-4'>

            <Typography variant='h4'>Objetivo a cumplir</Typography>
            
            <div className='flex gap-8 items-center'>
                <div className='flex gap-4 items-center'>
                    <div className='w-96'>
                        <Select variant="standard" label="Objetivos registrados" value={selectedGoal.name}>
                            <Option onClick={()=>{setSelectedGoal(defaultGoal)}}>
                                General
                            </Option>
                            {goals.map((g, i) =>
                                <Option value={g.name} key={`goal-${i}`} onClick={()=>{setSelectedGoal(g)}}>
                                    {g.name}
                                </Option>
                            )}
                        </Select>
                        <Typography className='mt-2 text-text-secondary'>{selectedGoal.description}</Typography>
                    </div>
                    <Button onClick={handleOpen} className='w-48'><PlusIcon/> Nuevo objetivo</Button>
                </div>
                
                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Nuevo objetivo</DialogHeader>
                    <DialogBody className='flex gap-4'>
                        <Input label="Nombre"
                            value={newGoal.name}
                            setValue={(name) => setNewGoal({...newGoal, name: name})}
                            helpText={newGoal.error} />
                        <Input label="Descripción" className="w-full"
                            value={newGoal.description}
                            setValue={(desc) => setNewGoal({...newGoal, description: desc})}/>
                    </DialogBody>
                    <DialogFooter className='text-text-primary'>
                        <Button className="mr-1" variant="text" onClick={handleOpen}>
                            <XMarkIcon/> Cancelar
                        </Button>
                        <Button variant="text" onClick={handleNew} disabled={newGoal.error!==""}>
                            <CheckIcon/> Agregar
                        </Button>
                    </DialogFooter>
                </Dialog>

                <div hidden={selectedGoal.name === defaultGoal.name}>
                    <p>Cada vez que realizo la actividad, espero acumular:</p>
                    <div className="w-64">
                        <Input label="Porcentaje del objetivo" placeholder="%"
                            value={goalPercentage}
                            setValue={setGoalPercentage}
                            type="number" afterInput={<>%</>}
                            min={1} max={100} step={1}
                        />
                        <Slider size="sm" value={goalPercentage}
                            onChange={(e)=>{ setGoalPercentage(Math.round(e.target.value)) }}
                            className="text-secondary" barClassName="bg-secondary"/>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-2'>
            <Typography variant='h4'>Dificulad</Typography>
            <div className='flex gap-2'>
                <p>Creo que la actividad tiene una dificultad:</p>
                <ToggleButton buttons={[
                        {icon: <FontAwesomeIcon icon={faMoon}/>, text:"fácil", value: goalDifficulties.EASY },
                        {icon: <FontAwesomeIcon icon={faCircle}/>, text:"media", value: goalDifficulties.MEDIUM},
                        {icon: <FontAwesomeIcon icon={faSun}/>, text:"difícil", value: goalDifficulties.HARD},
                    ]}
                    defaultSelected={1} setChoosed={setGoalDifficulty}/>
            </div>
        </div>
    </>)
}

export default RegisterGoal;
export {goalDifficulties, defaultAdvanced, defaultGoal};