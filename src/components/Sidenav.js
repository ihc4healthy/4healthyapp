import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip } from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  HeartIcon,
  GlobeAltIcon
} from "@heroicons/react/24/solid";
import Header from "./Header";
import Footer from "./Footer";
import UserStats from './UserStats';

export const DSidebar = () => {
  const tabs = [
    {
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
      text: "HOY",
      url: "/today",
    },
    {
      icon: <ShoppingBagIcon className="h-5 w-5" />,
      text: "MIS HÁBITOS",
      url: "/habits/new",
    },
    {
      icon: <InboxIcon className="h-5 w-5" />,
      text: "ESTADÍSTICAS",
      badge: 14,
      url: "/logros",
    },
    {
      icon: <UserCircleIcon className="h-5 w-5" />,
      text: "COMUNIDAD",
      url: "/Comunitylist",
    },
    {
      icon: <Cog6ToothIcon className="h-5 w-5" />,
      text: "EXPLORA",
      url: "/explora",
    },
    {
      icon: <Cog6ToothIcon className="h-5 w-5" />,
      text: "CUENTA",
      url: "/configuration",
    },
    {
      icon: <GlobeAltIcon className="h-5 w-5" />,
      text: "CONECTA",
      url: "/Links",
    },
    {
      icon: <PowerIcon className="h-5 w-5" />,
      text: "Log Out",
      onClick: () => {},
    },
  ];

  const location = useLocation();
  const getFirstRoute = (path) => path?.split('/')[1];

  const [user, setUser] = useState({ id: -1, name: "Usuario", email: "", level: 1, levelProgress: 10, avatar: 1 });

  return (
    <Card className="sticky top-0 h-[calc(100vh-1rem)] w-full max-w-[20rem] p-4 flex flex-col shadow-xl shadow-blue-gray-900/5">
      <Header />

      <UserStats user={user} />

      <List className="font-heading">
        {tabs.map((tab, i) => (
          <Link to={tab.url} className="text-text-primary" key={`li-${i}`}>
            <ListItem
              selected={getFirstRoute(tab.url) === getFirstRoute(location.pathname)}
            >
              <ListItemPrefix>{tab.icon}</ListItemPrefix>
              {tab.text}
              {tab.badge && (
                <ListItemSuffix>
                  <Chip value={tab.badge} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                </ListItemSuffix>
              )}
            </ListItem>
          </Link>
        ))}
      </List>

      <div className="grow"></div>

      <Footer showLogo={false} />
    </Card>
  );
};
