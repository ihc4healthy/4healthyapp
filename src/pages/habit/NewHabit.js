import React, { useEffect, useState } from 'react'
import { Button, Step, Stepper, Typography } from '@material-tailwind/react';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/solid';
import { DSidebar } from '../../components/Sidenav';
import SelectHabit from '../../components/habit/SelectHabit';
import SelectSchedule from '../../components/habit/SelectSchedule';
import RegisterGoal from '../../components/habit/RegisterGoal';

function NewHabit() {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);
    
    const handleNext = () => {!isLastStep && setActiveStep((cur) => cur + 1)};
    const handlePrev = () => {!isFirstStep && setActiveStep((cur) => cur - 1)};
    

    const steps = ['Seleccionar hábito', 'Horario', 'Avanzado'];
    const stepsCont = [
        <SelectHabit/>,
        <SelectSchedule habitName={"AA"}/>,
        <RegisterGoal/>
    ];

  return (
    <div className='w-full h-full flex'>
        <DSidebar/>
        <div className="container py-4 px-8">
            <Stepper className='mx-8 mb-12 w-[calc(100%-2rem)]'
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                {steps.map((s,i)=>
                    <Step onClick={() => setActiveStep(i)} key={`step-${i}`}>
                        <span> {i+1} </span>
                        <Typography variant="h6"
                        color={activeStep === 0 ? "blue-gray" : "gray"}
                        className="absolute -bottom-[2rem] w-max text-center"
                        > {s} </Typography>
                    </Step>
                )}
            </Stepper>
            
            <section className='steps-cont flex flex-col gap-6'>
                {activeStep >= 0 && activeStep < stepsCont.length?
                    stepsCont[activeStep] : <></> }
            </section>

            <div className="mt-16 flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                    Anterior
                </Button>
                <div className='flex gap-2'>
                    <Button onClick={handleNext} disabled={isFirstStep} color='primary'>
                        <CheckIcon/>
                        Guardar
                    </Button>
                    <Button onClick={handleNext} disabled={isLastStep} color='secondary'>
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