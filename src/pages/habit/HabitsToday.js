import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import 'moment/locale/es';
import { Typography } from '@material-tailwind/react';
import { DSidebar } from '../../components/Sidenav';
import HabitCheckCard, { habitStates } from '../../components/habit/HabitCheckCard';
import { defaultGoal, goalDifficulties } from '../../components/habit/RegisterGoal';
import LevelUp from '../../components/popups/LevelUp';
moment.locale('es')

const HabitsToday = () => {
    const [todayHabits, setTodayHabits] = useState([
        {   id: 0, icon: "face-smile-beam", habitName: "hábito1", time: "15:00",
            difficulty: goalDifficulties.MEDIUM, goalPercentage: 10, progress:20,
            goalName: defaultGoal.name, goalDescription: defaultGoal.description,
            done:false
        },
        {   id: 1, icon: "face-smile-beam", habitName: "hábito2", time: "13:00",
            difficulty: goalDifficulties.EASY, goalPercentage: 10, progress:20,
            goalName: defaultGoal.name, goalDescription: defaultGoal.description,
            done:true
        },
        {   id: 2, icon: "face-smile-beam", habitName: "hábito3", time: "10:00",
            difficulty: goalDifficulties.HARD, goalPercentage: 10, progress:20,
            goalName: defaultGoal.name, goalDescription: defaultGoal.description,
            done:false
        },
    ]);
    const [open, setOpen] = useState(false);
    const [time, setTime] = useState(moment());

    const handleCheck = (th)=>{
        th.done = !th.done;
        const index = todayHabits.findIndex((v)=>v.id === th.id);
        if (index >= 0) {
            todayHabits[index] = th;
            if (th.done) { handleOpen(); };
            setTodayHabits([...todayHabits]);
        }
    };
    const handleOpen = () => setOpen(!open);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment())
        }, 60000)
        // Clean up the interval when the component unmounts
        return () => clearInterval(interval)
    }, [])

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
                    <Typography variant='lead'>
                        | {time.format('HH:mm')}
                    </Typography>
                </div>

                {/* Pendientes */}
                <div className='flex flex-col gap-2'>
                    <Typography variant='h4'>Pendientes</Typography>
                    {todayHabits
                        .filter(th => !th.done && moment(th.time, "HH:mm").isSameOrAfter(time))
                        .map((th, i) =>
                            <HabitCheckCard key={`th-${th}`}
                                habitName={th.habitName} icon={th.icon} time={th.time}
                                progress={th.progress} difficulty={th.difficulty}
                                activitiesToGoal={(100-th.progress)/th.goalPercentage}
                                state={habitStates.PENDING} onChange={(e)=>handleCheck(th)}
                            />
                    )}
                </div>
                {/* Atrasados */}
                <div className='flex flex-col gap-2'>
                    <Typography variant='h4'>Atrasados</Typography>
                    {todayHabits
                        .filter(th => !th.done && moment(th.time, "HH:mm").isBefore(time))
                        .map((th, i) =>
                            <HabitCheckCard key={`th-${th}`}
                                habitName={th.habitName} icon={th.icon} time={th.time}
                                progress={th.progress} difficulty={th.difficulty}
                                activitiesToGoal={(100-th.progress)/th.goalPercentage}
                                state={habitStates.LATE} onChange={(e)=>handleCheck(th)}
                            />
                    )}
                </div>
                {/* Hechos */}
                <div className='flex flex-col gap-2'>
                    <Typography variant='h4'>Hechos</Typography>
                    {todayHabits
                        .filter(th => th.done)
                        .map((th, i) =>
                            <HabitCheckCard key={`th-${th}`}
                                habitName={th.habitName} icon={th.icon} time={th.time}
                                progress={th.progress} difficulty={th.difficulty}
                                activitiesToGoal={(100-th.progress)/th.goalPercentage}
                                state={habitStates.DONE} onChange={(e)=>handleCheck(th)}
                            />
                    )}
                </div>
                
                <LevelUp open={open} handleOpen={handleOpen}/>
            </div>
        </div>
    )
};

export default HabitsToday;