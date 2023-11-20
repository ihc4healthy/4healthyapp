
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, List, ListItem, Typography } from '@material-tailwind/react';
import { MinusIcon } from '@heroicons/react/24/solid';
import { days } from '../../common/time';
import Input from '../Input';

// schedule {start: "07:00", duration: "00:30", days:[5], valid:true}
const defaultDays = [false, false, false, false, false, false, false];

const Schedule = ({index, schedule, setSchedule, removeSchedule})=>{
    const [startTime, setStartTime] = useState(schedule.start ?? "07:00");
    const [duration, setDuration] = useState(schedule.duration ?? "00:30");
    const [daysChecked, setDaysChecked] = useState( schedule.days ?? [...defaultDays] );
    
    const validate = ()=>{
        const ndays = schedule.days?.filter(d => d===true).length;
        // tiempo de inicio
        if (startTime === "") { schedule.valid = false; }
        // duración mayor a 0
        else if (duration === "" || duration === "00:00") { schedule.valid = false; }
        // menos un día seleccionado
        else if (ndays === 0 || ndays > 7) { schedule.valid = false; }
        else { schedule.valid = true; }
    }
    useEffect(()=>{
        schedule.start = startTime;
        validate();
        setSchedule(schedule);
    },[startTime]);
    useEffect(()=>{
        schedule.duration = duration;
        validate();
        setSchedule(schedule);
    },[duration]);
    useEffect(()=>{
        schedule.days = daysChecked;
        //.map((d, i) => d ? i : undefined).filter(x => x != undefined)
        validate(schedule);
        setSchedule(schedule);
    },[daysChecked]);
    
    useEffect(()=>{
        setStartTime(schedule.start);
        setDuration(schedule.duration);
        // daysChecked.fill(false);
        // schedule.days.forEach(i=>daysChecked[i]=true);
        setDaysChecked(schedule.days);
        // console.log('index change ' + index + '... ' + schedule.start + ' ' + schedule.days)
    }, [schedule]);

    return (<>
        <div className='flex gap-2 items-center text-text-secondary'>
            <Typography variant='h5'>{index+1}</Typography>
            <Input label="Hora inicio" placeholder="hh:mm"
                type="time" min="00:00" max="23:59"
                value={startTime} setValue={setStartTime}
                required={true}
            />
            <Input label="Duración" placeholder="hh:mm"
                type="time" min="00:05"
                value={duration} setValue={setDuration}
                required={true}
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
                            value={daysChecked[i]}
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
            <Button disabled={index==0} onClick={removeSchedule}>
                <MinusIcon/>
            </Button>
        </div>
    </>);
};

export default Schedule;
export {defaultDays};