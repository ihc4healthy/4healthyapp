import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Typography, Button } from '@material-tailwind/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import FAIcon from '../../components/FAIcon';
import { DSidebar } from '../../components/Sidenav';
import { Link } from 'react-router-dom';
import { apiData } from '../../common/apiData';
import { UserContext } from '../../utils/UserConxtextProvider';

const HabitsList = () => {
    const { user, setUser } = useContext(UserContext);
    // "userId": number,
    // "goalId": number,
    // "goalName": string,
    // "goalDescription": string,
    // "goalProgress": number,
    // "id": number,
    // "name": string,
    // "icon": string,
    // "difficulty": enum,
    // "goalPerc": number,
    // "reminders": "hh:mm"[]
    const [habits, setHabits] = useState([]);
    useEffect(() => {
        axios.get(apiData.baseUrl + '/habits', {
            params: {
                userId: user.id,
            }
        })
            .then(response => {
                setHabits(response.data.habits);
            })
            .catch(error => {
                console.error('Error al obtener los hábitos:', error);
            });
    }, []);

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
                        {h.name}
                    </Typography>
                </Card>
                )}
            </div>
        </div>
    );
}

export default HabitsList;