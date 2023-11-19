
import React, { createContext, useEffect, useState } from 'react';

const UserContext = createContext();
const UserContextProvider = (props) => {
    const savedUser = localStorage.getItem('user');
    //https://stackoverflow.com/questions/34493531/how-to-store-and-retrieve-json-data-into-local-storage
    // {id: number, name: string, password: string, profilePic:number, level:number, levelProgress:number}
    const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : null);
    useEffect(()=>{
        if (user === null) {
            console.log('forgetting', user);
            localStorage.removeItem('user');
            return;
        }
        if (user.username) {
            user.name = user.username.at(0).toUpperCase() + user.username.slice(1);
        }
        else if (user.email) {
            user.name = user.email;
        }
        setUser({...user, name: user.name});
        localStorage.setItem('user', JSON.stringify(user));
        console.log('saving', user);
    }, [user && (user.id || user.username || user.email)]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
export {UserContext};