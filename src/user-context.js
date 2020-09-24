import React, { useState, useEffect } from 'react';
import axios from "axios";

const UserStateContext = React.createContext();
const UserSetStateContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ credentials: {} });

    useEffect(() => {
        axios.get("/user")
            .then(response => {
                setUser(response.data);
            })
    }, []);

    return (
        <UserSetStateContext.Provider value={setUser}>
            <UserStateContext.Provider value={user}>
                {children}
            </UserStateContext.Provider>
        </UserSetStateContext.Provider>
    );
}

function useUserState() {
    const context = React.useContext(UserStateContext);

    return context;
}

function useUserSetState() {
    const context = React.useContext(UserSetStateContext);

    return context;
}

export { UserProvider, useUserState, useUserSetState };