import React, { useState } from 'react';
import { Card, Typography, Button } from '@material-tailwind/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import FAIcon from '../../components/FAIcon';
import { DSidebar } from '../../components/Sidenav';
import { Link } from 'react-router-dom';

const HabitsList = () => {
    const [habits, setHabits] = useState([
        {   id: 0, icon: "face-smile-beam", habitName: "hábito1",
        },
        {   id: 1, icon: "face-smile-beam", habitName: "hábito2",
        },
        {   id: 2, icon: "face-smile-beam", habitName: "hábito3",
        },
    ]);

    return (
        <div className='w-full h-full flex'>
            <DSidebar/>
            <div className="container py-4 px-8 flex flex-col gap-8">
                <Typography variant='h1'>
                    Hábitos
                </Typography>
                
                <Link to="/habits/new">
                    <Button className='w-64' color='secondary'>
                        <PlusIcon/>
                        Nuevo hábito
                    </Button>
                </Link>

                {habits.map((h,i)=>
                <Card
                    className='min-w-fit max-w-l w-64 cursor-default flex flex-row items-center gap-3
                    text-text-secondary hover:text-text-primary transition'
                >
                    <FAIcon iconName={h.icon} className={"text-4xl"}/>
                    <Typography variant='small' className='font-heading grow text-center'>
                        {h.habitName}
                    </Typography>
                </Card>
                )}
            </div>
        </div>
    );
}

export default HabitsList;