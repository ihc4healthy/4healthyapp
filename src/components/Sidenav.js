import React from "react";
import { Link } from "react-router-dom";
import {Card,Typography,List,ListItem,ListItemPrefix,ListItemSuffix,Chip} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Header from "./Header";
import Footer from "./Footer";
import { avatars } from "../common/avatars";

export const DSidebar = ()=> {
  const avatar = avatars[1];
  const tabs = [
    {
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
      text: "HOY", url: "#",
    },
    {
      icon: <ShoppingBagIcon className="h-5 w-5" />,
      text: "MIS HÁBITOS", url: "#",
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
  
  const [selected, setSelected] = React.useState(1);
  const setSelectedItem = (value) => setSelected(value);

  return (
    <Card className="sticky top-0 h-[calc(100vh-1rem)] w-full max-w-[20rem] p-4
                    flex flex-col shadow-xl shadow-blue-gray-900/5">
      <Header/>

      <div className="flex py-4 items-center">
        <img src={`images/${avatar.imageSrc}`} alt={avatar.text} className="h-40"/>
        <Typography variant="h5" color="blue-gray" className="center">
          Usuario
        </Typography>
      </div>

      <List className="font-heading">
        {tabs.map((tab, i) =>
        <Link href={tab.url} className="text-text-primary" key={`li-${i}`}>
          <ListItem onClick={tab.onClick} selected={selected === i}>
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