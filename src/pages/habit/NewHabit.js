import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Step, Stepper, Typography } from '@material-tailwind/react';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/solid';
import { DSidebar } from '../../components/Sidenav';
import SelectHabit, { selectedDefault } from '../../components/habit/SelectHabit';
import SelectSchedule, { defaultSchedule } from '../../components/habit/SelectSchedule';
import RegisterGoal, { defaultAdvanced } from '../../components/habit/RegisterGoal';
import { apiData } from '../../common/apiData';
import { UserContext } from '../../utils/UserConxtextProvider';

function NewHabit() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    const [habit, setHabit] = useState({
        userId: user.id,
        selectedHabit: selectedDefault,
        schedules: [defaultSchedule],
        reminders: [],
        advanced: defaultAdvanced,
    });
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);
    const [nextEnabled, setNextEnabled] = useState(false);

    const handleNext = () => {!isLastStep && setActiveStep((cur) => cur + 1)};
    const handlePrev = () => {!isFirstStep && setActiveStep((cur) => cur - 1)};
    const handleChangeStep = (step) => {
        if (nextEnabled) {
            setActiveStep(step);
        }
    };
    const handleSave = (event) => {
        event.preventDefault();
        
        if (!isFirstStep && nextEnabled) {
            if (habit.selectedHabit.id === -1) {
                habit.selectedHabit.name = habit.selectedHabit.name.trim();
                console.log("registering habit", habit.selectedHabit);
            };
            if (habit.advanced.goal.id === -1) {
                habit.advanced.goal.name = habit.advanced.goal.name.trim();
                habit.advanced.goal.description = habit.advanced.goal.description.trim();
                console.log("registering goal", habit.advanced.goal);
            };
            
            axios.post( apiData.baseUrl + '/habit', {...habit})
                .then(response => {
                    alert('Hábito registrado con éxito!');
                    console.log('saving', habit);
                    navigate('/today');
                })
                .catch(error => {
                    console.error('Error al registrar el hábito:', error);
                    alert('Error al registrar el hábito');
                });
        }
    };

    const steps = ['Seleccionar hábito', 'Horario', 'Avanzado'];
    const stepsCont = [
        <SelectHabit
            baseHabit={habit.selectedHabit}
            saveHabit={(h) => setHabit({...habit, selectedHabit: h}) }
            setEnableNext={(enabled) => setNextEnabled(activeStep===0 && enabled)}
        />,
        <SelectSchedule habitName={habit.selectedHabit.name}
            saveSchedule={(schedules) => setHabit({...habit, schedules: schedules}) }
            saveReminders={(reminders) => setHabit({...habit, reminders: reminders}) }
            setEnableNext={(enabled) => setNextEnabled(activeStep===1 && enabled)}
        />,
        <RegisterGoal habitName={habit.selectedHabit.name}
            saveGoal={(g) => setHabit({...habit, advanced:g}) }
        />
    ];

    useEffect(()=>{
        setNextEnabled(true);
    }, [nextEnabled==2]);
    useEffect(()=>{
        setNextEnabled(false);
    }, []);

  return (
    <div className='w-full h-full flex'>
        <DSidebar/>
        <div className="container py-4 px-8">
            <Stepper className='mx-8 mb-16 w-[calc(100%-2rem)]'
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                {steps.map((s,i)=>
                    <Step key={`step-${i}`} onClick={() => handleChangeStep(i)}>
                        <span> {i+1} </span>
                        <Typography variant="h6"
                        color={activeStep === 0 ? "blue-gray" : "gray"}
                        className="absolute -bottom-[2rem] w-max text-center"
                        > {s} </Typography>
                    </Step>
                )}
            </Stepper>
            
            <section className='steps-cont flex flex-col gap-8'>
                {activeStep >= 0 && activeStep < stepsCont.length?
                    stepsCont[activeStep] : <></> }
            </section>

            <div className="mt-16 flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                    Anterior
                </Button>
                <div className='flex gap-2'>
                    <Button onClick={handleSave} disabled={isFirstStep || !nextEnabled} color='primary'>
                        <CheckIcon/>
                        Guardar
                    </Button>
                    <Button onClick={handleNext} disabled={isLastStep || !nextEnabled} color='secondary'>
                        <ArrowRightIcon/>
                        Siguiente
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewHabit