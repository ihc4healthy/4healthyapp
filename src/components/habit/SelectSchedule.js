import React, { useEffect, useState } from 'react';
import { Button, Checkbox, List, ListItem, Typography } from '@material-tailwind/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import Input from '../Input';
import { useCallback } from 'react';

const Schedule = ({index, schedule, setSchedule, removeSchedule})=>{
    const days = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    const getDefaultDaysCheched = ()=>{
        let arr = [false,false,false,false,false,false,false];
        schedule?.days?.forEach(i=>arr[i]=true);
        return arr;
    };
    
    const [startTime, setStartTime] = useState(schedule.start ?? "07:00");
    const [duration, setDuration] = useState(schedule.duration ?? "00:30");
    const [daysChecked, setDaysChecked] = useState( getDefaultDaysCheched() );
    
    useEffect(()=>{
        schedule.start = startTime;
        setSchedule(schedule);
        console.log(`editing ${index} (${schedule.start})`);
    },[startTime]);
    useEffect(()=>{
        schedule.duration = duration;
        setSchedule(schedule);
    },[duration]);
    useEffect(()=>{
        schedule.days = daysChecked.map((d, i) => d ? i : undefined).filter(x => x != undefined);
        setSchedule(schedule);
        console.log(`editing ${index} (${schedule.days})`);
    },[daysChecked]);
    
    useEffect(()=>{
        setStartTime(schedule.start);
        setDuration(schedule.duration);
        daysChecked.fill(false);
        schedule.days.forEach(i=>daysChecked[i]=true);
        setDaysChecked(daysChecked);
        console.log('index change ' + index + '... ' + schedule.start + ' ' + schedule.days)
    }, [schedule]);

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
                    {days.map((d, i)=>
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
            <Button disabled={index==0} onClick={()=>{removeSchedule(); 
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

    const defaultSchedule = {start: "07:00", duration: "00:30", days:[5]};
    const [schedules, setSchedules] = useState([defaultSchedule]);
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
                        schedule={s}
                        setSchedule={()=>{
                            schedules[i] = s;
                            setSchedules(schedules)
                        }}
                        removeSchedule={()=>{
                            setSchedules(schedules.filter((item, j) => j !== i));
                            console.log("Removing " + i);
                        }}
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