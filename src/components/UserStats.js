import React from 'react';
import { Chip, Progress, Tooltip, Typography } from '@material-tailwind/react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { avatars } from "../common/avatars";

function UserStats({user}) {
  const avatar = avatars[user?.profilePic ?? 1];

  return (
    <div className="flex py-4 items-center">

      <img className="h-40 w-40 ml-[-2rem] mr-[-1.25rem]"
        src={`images/${avatar.imageSrc}`} alt={avatar.text}
      />

      <div className="w-full">
        <Typography variant="h5" color="blue-gray" className="center">
          {user?.name}
        </Typography>
        
        <div className="w-full text-text-secondary">
          <div className="mb-2 flex items-center justify-between gap-1">
            <Chip variant="ghost" color="blue-gray" size="sm"
              className="rounded-full"
              value={`Healtier Nivel ${user?.level}`}/>
            <Typography variant="small">{user?.levelProgress}%</Typography>
          </div>
          <div className="relative w-[calc(100%-1.5rem)]">
            <Tooltip placement="top" className="w-32 text-center"
              content={`${100 - user?.levelProgress}% restante para el nivel ${user?.level+1}`}
            >
              <HeartIcon className="absolute right-[-1.5rem] w-8 h-8 inset-y-[-0.67rem] drop-shadow text-primary"/>
            </Tooltip>
            <Progress color="primary" value={user?.levelProgress} barProps={{className:"text-xs"}}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserStats;