import React, { useEffect, useState } from 'react';
import { Button, Checkbox, List, ListItem, Typography } from '@material-tailwind/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import Schedule, { defaultDays } from './ScheduleDetail';

const defaultSchedule = {start: "07:00", duration: "00:30", days: [...defaultDays], valid:true};

const SelectSchedule = ({habitName, setEnableNext, saveSchedule, saveReminders}) => {
    const [reminderOpts, setReminderOpts] = useState([
        {timeBefore: "00:00:00", name: "A la hora", checked: false},
        {timeBefore: "00:05:00", name: "5 min. antes", checked: false},
        {timeBefore: "00:10:00", name: "10 min. antes", checked: false},
        {timeBefore: "01:00:00", name: "1 hora antes", checked: false},
    ]);

    const [schedules, setSchedules] = useState([defaultSchedule]);
    const [reminders, setReminders] = useState([]);
    
    const validateSchedules = (_schedules) => {
        if (_schedules.length < 1) { return false; }
        return _schedules
                .filter(s => s.valid )
                .length > 0;
    }

    useEffect(()=>{
        console.log(schedules);
        setEnableNext && setEnableNext( validateSchedules(schedules) );
        saveSchedule && saveSchedule(schedules);
    }, [schedules]);
    useEffect(()=>{
        setReminders(reminderOpts.filter(r => r.checked).map(r => r.timeBefore));
        saveReminders && saveReminders(reminders);
    }, [reminderOpts]);
    useEffect(()=>{
        console.log(reminders);
        saveReminders && saveReminders(reminders);
    }, [reminders]);


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
                            setEnableNext && setEnableNext( validateSchedules(schedules) );
                            saveSchedule && saveSchedule(schedules);
                            console.log(schedules);
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
                    {reminderOpts.map((r, i)=>
                        <ListItem className="p-0 w-fit" key={`rmd-${i}`}>
                            <Checkbox color="secondary"
                                className="hover:before:opacity-0"
                                size="sm"
                                labelProps={{
                                    className:"w-full pr-4 py-3",
                                }}
                                checked={r.checked}
                                value={r.timeBefore}
                                label={r.name}
                                ripple={false}
                                onChange={(e)=>{
                                    r.checked = e.target.checked;
                                    reminderOpts[i] = r;
                                    setReminderOpts([...reminderOpts]);
                                }}
                            />
                        </ListItem>
                    )}
                </List>
            </div>
        </>
    )
};

export default SelectSchedule;
export { defaultSchedule };