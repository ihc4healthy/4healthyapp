import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import 'moment/locale/es';
import axios from 'axios';
import { Typography } from '@material-tailwind/react';
import { DSidebar } from '../../components/Sidenav';
import HabitCheckCard, { habitStates } from '../../components/habit/HabitCheckCard';
import { defaultGoal, goalDifficulties } from '../../components/habit/RegisterGoal';
import LevelUp from '../../components/popups/LevelUp';
import { apiData } from '../../common/apiData';
moment.locale('es');

const HabitsToday = () => {
    const [todayHabits, setTodayHabits] = useState([]);
    // [
    //     {   id: 0, habitIcon: "face-smile-beam", habitName: "hábito1", time: "15:00",
    //         difficulty: goalDifficulties.MEDIUM, habitGoalPerc: 10, goalProgress:20,
    //         goalName: defaultGoal.name, goalDescription: defaultGoal.description,
    //         done:false, "doneId": null, "doneDay": null
    //     },
    //     {   id: 1, habitIcon: "face-smile-beam", habitName: "hábito2", time: "13:00",
    //         difficulty: goalDifficulties.EASY, habitGoalPerc: 10, goalProgress:20,
    //         goalName: defaultGoal.name, goalDescription: defaultGoal.description,
    //         done:true
    //     },
    //     {   id: 2, habitIcon: "face-smile-beam", habitName: "hábito3", time: "10:00",
    //         difficulty: goalDifficulties.HARD, habitGoalPerc: 10, goalProgress:20,
    //         goalName: defaultGoal.name, goalDescription: defaultGoal.description,
    //         done:false
    //     },
    // ]
    const today = moment();
    const todayDay = today.isoWeekday();

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
        axios.get(apiData.baseUrl + '/habit/check', {
            params: {
                userId: 1,
                todayDay: todayDay,
                today: today.format("YYYY-MM-DD"),
            }
        })
            .then(response => {
                let _habits = response.data.habitsCheck.map((hc)=>{
                    return ({...hc, done:hc.doneId!==null});
                });
                setTodayHabits(_habits);
                console.error('Habitos de hoy ', today.format("YYYY-MM-DD"), ' d'+todayDay, 'cargados');
            })
            .catch(error => {
                console.error('Error al obtener los hábitos para confirmar:', error);
            });
    }, []);
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
                                habitName={th.habitName} icon={th.habitIcon} time={th.time}
                                progress={th.goalProgress} difficulty={th.difficulty}
                                activitiesToGoal={(100-th.goalProgress)/th.habitGoalPerc}
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
                                habitName={th.habitName} icon={th.habitIcon} time={th.time}
                                progress={th.goalProgress} difficulty={th.difficulty}
                                activitiesToGoal={(100-th.goalProgress)/th.habitGoalPerc}
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
                                habitName={th.habitName} icon={th.habitIcon} time={th.time}
                                progress={th.goalProgress} difficulty={th.difficulty}
                                activitiesToGoal={(100-th.goalProgress)/th.habitGoalPerc}
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