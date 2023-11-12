<<<<<<< HEAD
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {Card,Typography,List,ListItem,ListItemPrefix,ListItemSuffix,Chip} from "@material-tailwind/react";
=======
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {Card,List,ListItem,ListItemPrefix,ListItemSuffix,Chip, Progress, Tooltip} from "@material-tailwind/react";
>>>>>>> feature/SCRUM-4-Marcado-de-Habito-realizado
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import Header from "./Header";
import Footer from "./Footer";
import UserStats from './UserStats';

export const DSidebar = ()=> {
  const tabs = [
    {
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
      text: "HOY", url: "/today",
    },
    {
      icon: <ShoppingBagIcon className="h-5 w-5" />,
<<<<<<< HEAD
      text: "MIS HÁBITOS", url: "/habits/new",
=======
      text: "MIS HÁBITOS", url: "/habits",
>>>>>>> feature/SCRUM-4-Marcado-de-Habito-realizado
    },
    {
      icon: <InboxIcon className="h-5 w-5" />,
      text: "ESTADÍSTICAS", badge:14, url: "#",
    },
    {
      icon: <UserCircleIcon className="h-5 w-5" />,
      text: "COMUNIDAD", url: "#",
    },
    {
      icon: <Cog6ToothIcon className="h-5 w-5" />,
      text: "EXPLORA", url: "#",
    },
    {
      icon: <PowerIcon className="h-5 w-5" />,
      text: "Log Out", onClick: ()=>{},
    },
  ];
  
  const location = useLocation();
  const getFirstRoute = (path) => path?.split('/')[1];
<<<<<<< HEAD
  // const [selected, setSelected] = React.useState(location.pathname);
  // useEffect(() => {
  //   // console.log(location.pathname);
  //   setSelected(location.pathname);
  // }, [location])
=======
>>>>>>> feature/SCRUM-4-Marcado-de-Habito-realizado

  const [user, setUser] = useState({id: -1, name: "Usuario", email:"", level:1, levelProgress:10, avatar:1});
  // const [selected, setSelected] = React.useState(1);
  // const setSelectedItem = (value) => setSelected(value);
  
  return (
    <Card className="sticky top-0 h-[calc(100vh-1rem)] w-full max-w-[20rem] p-4
                    flex flex-col shadow-xl shadow-blue-gray-900/5">
      <Header/>

      <UserStats user={user}/>

      <List className="font-heading">
        {tabs.map((tab, i) =>
<<<<<<< HEAD
        <Link href={tab.url} className="text-text-primary" key={`li-${i}`}>
          <ListItem onClick={tab.onClick} selected={getFirstRoute(tab.url) === getFirstRoute(location.pathname)}>
=======
        <Link to={tab.url} className="text-text-primary" key={`li-${i}`}>
          <ListItem onClick={tab.onClick} selected={getFirstRoute(tab.url) == getFirstRoute(location.pathname)}>
>>>>>>> feature/SCRUM-4-Marcado-de-Habito-realizado
            <ListItemPrefix>{tab.icon}</ListItemPrefix>
            {tab.text}
            {tab.badge && 
              <ListItemSuffix>
                <Chip value={tab.badge} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>}
          </ListItem>
        </Link>
        )}
      </List>
      
      <div className="grow"></div>
      
      <Footer showLogo={false}/>
    </Card>
  );
}