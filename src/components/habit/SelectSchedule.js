import { Button, Checkbox, List, ListItem, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import Input from '../Input';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';

const Schedule = ({index, schedules, setSchedules})=>{
    const days = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    const defaultSchedule = {start: "07:00", duration: "00:30", days:[0,2,3]};
    const [startTime, setStartTime] = useState(defaultSchedule.start);
    const [duration, setDuration] = useState(defaultSchedule.duration);
    const [daysChecked, setDaysChecked] = useState([false,false,false,false,false,false,false]);
    
    useEffect(()=>{
        schedules[index].start = startTime;
        setSchedules(schedules);
        console.log(`editing ${index} (${schedules[index].start})`);
    },[startTime]);
    useEffect(()=>{
        schedules[index].duration = duration;
        setSchedules(schedules);
    },[duration]);
    useEffect(()=>{
        schedules[index].days = daysChecked.map((d, i) => d ? i : undefined).filter(x => x != undefined);
        setSchedules(schedules);
        console.log(`editing ${index} (${schedules[index].days})`);
    },[daysChecked]);
    
    useEffect(()=>{
        let schedule = schedules[index];
        if (!schedule.start) { schedule.start = defaultSchedule.start; }
        if (!schedule.duration) { schedule.start = defaultSchedule.duration; }
        if (!schedule.days) { schedule.days = defaultSchedule.days; }
        
        daysChecked.fill(false);
        schedule.days.forEach(i=>daysChecked[i]=true);
        setStartTime(schedule.start);
        setDuration(schedule.duration);
        setDaysChecked(daysChecked);
        // console.log('index change ' + index);
    }, [schedules.length]);

    return (<>
        <div className='flex gap-2 items-center text-text-secondary'>
            <Typography variant='h5'>{index+1}</Typography>
            <Input label="Hora inicio" placeholder="hh:mm"
                value={startTime} setValue={setStartTime}
                required={true} type={"time"}
            />
            <Input label="Duración" placeholder="hh:mm"
                value={duration} setValue={setDuration}
                required={true} type={"time"}
            />
            <div className='flex flex-col'>
                <Typography variant='small'>Días</Typography>
                <List className="flex-row">
                    {days.map((d,i)=>
                    <ListItem className="p-0 w-fit" key={`d-${i}`}>
                        <Checkbox color="secondary"
                            className="hover:before:opacity-0"
                            labelProps={{
                                className:"w-full pr-2 py-2 text-xs font-light",
                            }}
                            containerProps={{
                                className:"p-2",
                            }}
                            checked={daysChecked[i]}
                            label={d}
                            ripple={false}
                            onChange={(e)=>{
                                daysChecked[i] = e.target.checked;
                                setDaysChecked([...daysChecked]);
                            }}
                        />
                    </ListItem>)}
                </List>
            </div>
            <Button disabled={index==0} onClick={()=>{
                setSchedules(schedules.filter((item, i) => i !== index));
                console.log("Removing " + index);
            }}>
                <MinusIcon/>
            </Button>
        </div>
    </>);
};

const SelectSchedule = ({habitName}) => {
    const reminders = [
        {timeBefore: 0, name: "A la hora"},
        {timeBefore: 60*5, name: "5 min. antes"},
        {timeBefore: 60*10, name: "10 min. antes"},
        {timeBefore: 60*60, name: "1 hora antes"},
    ];

    const [schedules, setSchedules] = useState([]);
    useEffect(()=>{
        schedules.forEach(element => {
            console.log(`sch ${element.start}`)
        });
    }, [schedules]);

    return (
        <>
            <Typography variant='h3'>Elige el horario para {habitName}</Typography>

            <div className='flex flex-col gap-2'>
                <Typography variant='h4'>Horarios</Typography>
                {schedules.map((s, i)=>
                    <Schedule index={i} key={`sch-${i}`}
                        setSchedules={setSchedules}
                        schedules={schedules}
                    />
                )}
                <Button className='w-64' variant='text'
                    onClick={()=>{
                        setSchedules([...schedules, {}])
                    }}
                >
                    <PlusIcon/>
                    Otro horario
                </Button>
            </div>

            <div>
                <Typography variant='h4'>Recordatorios</Typography>
                <List className="flex-row text-text-secondary">
                    {reminders.map((tb, i)=>
                        <ListItem className="p-0 w-fit" key={`rmd-${i}`}>
                            <Checkbox color="secondary"
                                className="hover:before:opacity-0"
                                size="sm"
                                labelProps={{
                                    className:"w-full pr-4 py-3",
                                }}
                                value={tb.timeBefore}
                                label={tb.name}
                                ripple={false}
                            />
                        </ListItem>
                    )}
                </List>
            </div>
        </>
    )
}

export default SelectSchedule