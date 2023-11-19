import React, { useState } from 'react';
import moment from 'moment/moment';
import 'moment/locale/es';
import { Badge, Button, Card, CardBody, Dialog, DialogBody, DialogFooter, DialogHeader, Progress, Typography } from '@material-tailwind/react';
import { DSidebar } from '../../components/Sidenav';
import HabitCheckCard, { habitStates } from '../../components/habit/HabitCheckCard';
import { defaultGoal, goalDifficulties } from '../../components/habit/RegisterGoal';
import { CheckIcon, FaceSmileIcon, HeartIcon, StarIcon, TrophyIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
moment.locale('es')

const HabitsList = () => {
    const states = [
        {title: "Pendientes", state: habitStates.PENDING},
        {title: "Atrasados", state: habitStates.LATE},
        {title: "Hechos", state: habitStates.DONE},
    ];
        
    const [todayHabits, setTodayHabits] = useState([
        {   id: 0, icon: "face-smile-beam", habitName: "hábito1",
            difficulty: goalDifficulties.MEDIUM, goalPercentage: 10, progress:20,
            goalName: defaultGoal.name, goalDescription: defaultGoal.description,
            state:habitStates.PENDING
        },
        {   id: 1, icon: "face-smile-beam", habitName: "hábito2",
            difficulty: goalDifficulties.EASY, goalPercentage: 10, progress:20,
            goalName: defaultGoal.name, goalDescription: defaultGoal.description,
            state:habitStates.DONE
        },
        {   id: 2, icon: "face-smile-beam", habitName: "hábito3",
            difficulty: goalDifficulties.HARD, goalPercentage: 10, progress:20,
            goalName: defaultGoal.name, goalDescription: defaultGoal.description,
            state:habitStates.LATE
        },
    ]);
    const [open, setOpen] = useState(false);
    const [dialogStep, setDialogStep] = useState(0);

    const handleCheck = (th)=>{
        if (th.state !== habitStates.DONE) {
            th.state = habitStates.DONE;
        }
        else {
            th.state = habitStates.PENDING;
        }
        const index = todayHabits.findIndex((v)=>v.id === th.id);
        if (index >= 0) {
            todayHabits[index] = th;
            if (th.state == habitStates.DONE) { handleOpen(); };
            setTodayHabits([...todayHabits]);
        }
    };
    const handleOpen = () => setOpen(!open);

    return (
        <div className='w-full h-full flex'>
            <DSidebar/>
            <div className="container py-4 px-8 flex flex-col gap-8">
                <div className='flex flex-wrap items-baseline gap-2'>
                    <Typography variant='h1'>
                        Hábitos de hoy,
                    </Typography>
                    <Typography variant='h5' className='text-text-secondary'>
                        {moment().format('dddd DD [de] MMMM [del] YYYY')}
                    </Typography>
                </div>

                {states.map((hs) => 
                    <div className='flex flex-col gap-2'>
                        <Typography variant='h4'>{hs.title}</Typography>
                        {todayHabits
                            .filter(th => th.state===hs.state)
                            .map((th, i) =>
                                <HabitCheckCard key={`th-${th}`}
                                    habitName={th.habitName} icon={th.icon}
                                    progress={th.progress} difficulty={th.difficulty}
                                    activitiesToGoal={(100-th.progress)/th.goalPercentage}
                                    state={th.state} onChange={(e)=>handleCheck(th)}
                                />
                        )}
                    </div>
                )}

                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader className='text-text-primary justify-center'>
                        ¡{dialogStep === 0 ? "Felicitaciones" : "Obtuviste..."}!
                    </DialogHeader>
                    <DialogBody className='text-text-primary px-8'>
                        {
                            dialogStep === 0 ?
                            <div className={`${dialogStep===0?'flex':'hidden'} flex-col items-center gap-8`}>
                                <div className='text-center max-w-full w-96'>
                                    <Typography variant='lead'>
                                        Completaste el <span className='font-bold'>100%</span> del nivel {1}
                                    </Typography>
                                    <div className="relative w-[calc(100%-1.5rem)] mt-2">
                                        <HeartIcon
                                            className="absolute right-[-1rem] w-8 h-8 inset-y-[-0.67rem]
                                                        drop-shadow-lg text-primary stroke-background-paper stroke-1"
                                        />
                                        <Progress value={100} color='primary'/>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Typography>Continúas al nivel:</Typography>
                                    <div className='relative w-24 m-[-0.5rem]'>
                                        <Typography variant='h2'
                                            className='absolute inset-1/4 text-center z-50
                                                    text-background-paper'>
                                            {2}
                                        </Typography>
                                        <HeartIcon className='w-24 h-24 drop-shadow-lg
                                                        text-text-primary stroke-[0.33pt] stroke-primary'/>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className={`${dialogStep===1?'grid':'hidden'} grid-cols-2 gap-8`}>
                                <Card className='text-text-primary'>
                                    <CardBody>
                                        <StarIcon className='h-20 w-20'/>
                                        <Badge content="+1">
                                            <Typography variant="h5" className="w-full pr-4">
                                                Consejo para [habito1]
                                            </Typography>
                                        </Badge>
                                        <Typography className='mt-2 text-text-secondary'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                        </Typography>
                                    </CardBody>
                                </Card>
                                <Card className='text-text-primary'>
                                    <CardBody>
                                        <FontAwesomeIcon icon={faUtensils} className='h-20 w-20'/>
                                        <Badge content="+1">
                                            <Typography variant="h5" className="w-full pr-4">
                                                Consejo NUTRITIVO
                                            </Typography>
                                        </Badge>
                                        <Typography className='mt-2 text-text-secondary'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                        </Typography>
                                    </CardBody>
                                </Card>
                                <div className='col-span-2'>
                                    Encuentra más consejos en la sección "Explora"
                                </div>
                            </div>
                        }
                    </DialogBody>
                    <DialogFooter className='pr-1'>
                        {
                            dialogStep === 0 ?
                            <Button variant="text" className='w-48 text-secondary-contrast' onClick={()=>{setDialogStep(1)}}>
                                <TrophyIcon/> Ver premios
                            </Button>
                            :
                            <Button variant="text" onClick={()=>{handleOpen(); setDialogStep(0)}}>
                                <CheckIcon/> Aceptar
                            </Button>
                        }
                    </DialogFooter>
                </Dialog>
            </div>
        </div>
    )
};

export default HabitsList;