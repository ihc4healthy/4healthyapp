import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {Card,List,ListItem,ListItemPrefix,ListItemSuffix,Chip} from "@material-tailwind/react";
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
import { UserContext } from "../utils/UserConxtextProvider";

export const DSidebar = ()=> {
  const { user, setUser } = useContext(UserContext);
  const tabs = [
    {
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
      text: "HOY", url: "/today",
    },
    {
      icon: <ShoppingBagIcon className="h-5 w-5" />,
      text: "MIS HÁBITOS", url: "/habits",
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
      text: "Log Out",
      onClick: ()=>{setUser(null);},
    },
  ];
  
  const location = useLocation();
  const getFirstRoute = (path) => path?.split('/')[1];
  // const [selected, setSelected] = React.useState(location.pathname);
  // useEffect(() => {
  //   // console.log(location.pathname);
  //   setSelected(location.pathname);
  // }, [location])
  
  // const [selected, setSelected] = React.useState(1);
  // const setSelectedItem = (value) => setSelected(value);
  
  return (
    <Card className="sticky top-0 h-[calc(100vh-1rem)] w-full max-w-[20rem] p-4
                    flex flex-col shadow-xl shadow-blue-gray-900/5">
      <Header/>

      <UserStats user={user}/>

      <List className="font-heading">
        {tabs.map((tab, i) =>
        <Link to={tab.url} className="text-text-primary" key={`li-${i}`}>
          <ListItem onClick={tab.onClick} selected={getFirstRoute(tab.url) == getFirstRoute(location.pathname)}>
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