import React, { useState } from 'react';
import moment from 'moment/moment';
import 'moment/locale/es';
import { Typography } from '@material-tailwind/react';
import { DSidebar } from '../../components/Sidenav';
import HabitCheckCard, { habitStates } from '../../components/habit/HabitCheckCard';
import { defaultGoal, goalDifficulties } from '../../components/habit/RegisterGoal';
moment.locale('es')

const HabitsList = () => {
    const [todayHabits, setTodayHabits] = useState([
        {   id: 0, icon: "face-smile-beam", habitName: "hábito1",
            difficulty: goalDifficulties.MEDIUM, goalPercentage: 10, progress:20,
            goalName: defaultGoal.name, goalDescription: defaultGoal.description,
            state:habitStates.PENDING
        },
        {   id: 1, icon: "face-smile-beam", habitName: "hábito2",
            difficulty: goalDifficulties.MEDIUM, goalPercentage: 10, progress:20,
            goalName: defaultGoal.name, goalDescription: defaultGoal.description,
            state:habitStates.DONE
        },
        {   id: 2, icon: "face-smile-beam", habitName: "hábito3",
            difficulty: goalDifficulties.MEDIUM, goalPercentage: 10, progress:20,
            goalName: defaultGoal.name, goalDescription: defaultGoal.description,
            state:habitStates.LATE
        },
    ]);

    const states = [
        {title: "Pendientes", state: habitStates.PENDING},
        {title: "Atrasados", state: habitStates.LATE},
        {title: "Hechos", state: habitStates.DONE},
    ];

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
                                    state={th.state} onChange={(e)=>{
                                        console.log("e.target ", e.target);
                                        if (th.state !== habitStates.DONE) {
                                            th.state = habitStates.DONE;
                                        }
                                        else {
                                            th.state = habitStates.PENDING;
                                        }
                                        const index = todayHabits.findIndex((v)=>v.id === th.id);
                                        if (index >= 0) {
                                            todayHabits[index] = th;
                                            setTodayHabits([...todayHabits]);
                                        }
                                    }}
                                />
                        )}
                    </div>
                )
                    
                }
            </div>
        </div>
    )
};

export default HabitsList;