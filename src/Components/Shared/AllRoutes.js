import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import PrivateRoute from '../../Pages/Login/PrivateRoute';
import Navbar from '../homeComponents/Navbar';
import UsersPost from '../UserActivities/UsersPost';
import Test from './Test';

const AllRoutes = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='home' element={<Home/>} />
                <Route path='login' element={<Login/>} />
                <Route path='test' element={<Test/>} />
                <Route path='usersPost' element= {
                    <PrivateRoute>
                        <UsersPost/>
                    </PrivateRoute>
                } />
            </Routes>
        </div>
    );
};

export default AllRoutes;