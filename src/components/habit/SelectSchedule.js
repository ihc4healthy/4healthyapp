import React, { useEffect, useState } from 'react';
import { Button, Checkbox, List, ListItem, Typography } from '@material-tailwind/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import Schedule from './ScheduleDetail';

const SelectSchedule = ({habitName, setEnableNext}) => {
    const reminders = [
        {timeBefore: 0, name: "A la hora"},
        {timeBefore: 60*5, name: "5 min. antes"},
        {timeBefore: 60*10, name: "10 min. antes"},
        {timeBefore: 60*60, name: "1 hora antes"},
    ];

    const defaultSchedule = {start: "07:00", duration: "00:30", days:[], valid:true};
    const [schedules, setSchedules] = useState([defaultSchedule]);

    const validateSchedules = (_schedules) => {
        if (_schedules.length < 1) { return false; }
        return _schedules
                .filter(s => s.valid )
                .length > 0;
    }

    useEffect(()=>{
        // schedules.forEach(element => {
        //     console.log(`sch ${element.start}`)
        // });
        if (setEnableNext) {
            setEnableNext( validateSchedules(schedules) );
        }
    }, [schedules]);

    return (
        <>
            <Typography variant='h3'>Elige el horario para {habitName}</Typography>

            <div className='flex flex-col gap-2'>
                <Typography variant='h4'>Horarios</Typography>
                {schedules.map((s, i)=>
                    <Schedule index={i} key={`sch-${i}`}
                        schedule={s}
                        setSchedule={(sch)=>{
                            schedules[i] = sch;
                            if (setEnableNext) {
                                setEnableNext( validateSchedules(schedules) );
                            }
                            setSchedules(schedules);
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