import React, { useState, useEffect } from 'react';
import axios from "axios";

const UserStateContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ credentials: {} });

    useEffect(() => {
        axios.get("/user")
            .then(response => {

                setUser(response.data);
            })
    }, []);

    return (
        <UserStateContext.Provider value={user}>
            {children}
        </UserStateContext.Provider>
    );
}

function useUserState() {
    const context = React.useContext(UserStateContext);

    return context;
}

export { UserProvider, useUserState };