import React, { createContext, useContext, useEffect, useState } from 'react';

const authContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [users, setUsers] = useState('');

    const userToken = users?.data?.token;
    const localStorageUser = JSON.parse( localStorage.getItem('accessToken'));

    console.log('got token from user Context', localStorageUser)

    return (
        <authContext.Provider value={{ setUsers, users, userToken, localStorageUser }}>
            {children}
        </authContext.Provider>
    );
};



export const useAuthContext = () => {
    return useContext(authContext)
}


