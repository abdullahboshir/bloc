import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const PrivateRoute = ({ children }) => {
    const [gUser, loading, error] = useAuthState(auth);

    const location = useLocation();
    const { userToken } = useAuthContext();

    const localStorageUser =  JSON.parse(localStorage.getItem('accessToken'))

    if (loading) {
        return <p>Page is Loading</p>
    };

    // if (!userToken) {
    //     return <Navigate to='/login' state={{ from: location }} replace />
    // };


    return localStorageUser?.token? (
        children) : (<Navigate to='/login' state={{ from: location }} replace />)
};

export default PrivateRoute;