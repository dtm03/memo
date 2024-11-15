import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import {serverURL} from '../constants';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const response = await axios.post(`${serverURL}user`);
                setUserId(response.data);
            } catch (error) {
                console.error("Error fetching user ID:", error);
            }
        };
        // fetchUserId();
        setUserId(1);
    }, []);

    return (
        <UserContext.Provider value={{userId}}>
            {children}
        </UserContext.Provider>
    );
};