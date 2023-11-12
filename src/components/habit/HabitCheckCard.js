import React from 'react';
import { Card, Checkbox, Progress, Tooltip, Typography } from '@material-tailwind/react';
import FAIcon from '../FAIcon';
import { defaultGoal, goalDifficulties } from './RegisterGoal';

// habit icon, name, checked
const habitStates = { PENDING: "pending", DONE: "done", LATE: "late" };

const HabitCheckCard = ({icon="face-smile-beam", habitName="hábito",
                        progress=10, difficulty=goalDifficulties.MEDIUM, activitiesToGoal=10,
                        goalName=defaultGoal.name, goalDescription=defaultGoal.description,
                        state=habitStates.PENDING, onChange}) => {
    const color = state === habitStates.DONE ? "secondary" :
                    state === habitStates.LATE ? "danger" :
                    "blue-gray";
    const difficultyIcon = difficulty === goalDifficulties.EASY ? "moon" :
                            difficulty === goalDifficulties.HARD ? "sun" :
                            "circle";
    return (
        <Card className='min-w-fit max-w-xl w-1/2 cursor-default text-text-secondary'>
            <div className='flex gap-8 items-center px-4 py-2'>
                <Typography variant='small' className='flex items-center gap-3 font-heading'>
                    <FAIcon iconName={icon} className={"text-4xl"}/>
                    {habitName}
                </Typography>
                <div className='text-center grow'>
                    <Typography variant='small'>
                        A casi {activitiesToGoal} repeticiones para verificar objetivo:
                    </Typography>
                    <Tooltip placement="top" content={<>
                        <FAIcon iconName={difficultyIcon} className="text-xs mr-1"/>
                        {goalDescription}
                    </>}>
                        <Typography className='font-heading text-text-primary'>
                            {goalName}
                        </Typography>
                    </Tooltip>
                </div>
                <Checkbox className='w-8 h-8' color={color}
                    {...(onChange && {checked: state === habitStates.DONE})}
                    onChange={onChange}/>
            </div>
            <Progress color={color} className='text-center'
                label={" "} value={progress}
            />
        </Card>
    )
};

export default HabitCheckCard;
export {habitStates};