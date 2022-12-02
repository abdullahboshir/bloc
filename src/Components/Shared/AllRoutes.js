import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import PrivateRoute from '../../Pages/Login/PrivateRoute';
import Navbar from '../homeComponents/Navbar';
import UsersPost from '../UserActivities/UsersPost';
import Modal from './Modal';
import Test from './Test';

const AllRoutes = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='test' element={<Test />} />
                <Route path='modal' element={<Modal />} />
                <Route path='usersPost' element={
                    <PrivateRoute>
                        <UsersPost />
                    </PrivateRoute>
                } />

                <Route path='*' element={<h2>No Route found</h2>} />
            </Routes>
        </div>
    );
};

export default AllRoutes;