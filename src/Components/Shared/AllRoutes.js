import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import PrivateRoute from '../../Pages/Login/PrivateRoute';
import Navbar from '../homeComponents/Navbar';
import UserActivities from '../UserActivities/UserActivities';
import UsersPost from '../UserActivities/Middle_Section/UsersPost';
import Modal from './Modal';
import Test from './Test';
import SignUp from '../../Pages/Login/SignUp';

const AllRoutes = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='signUp' element={<SignUp />} />
                <Route path='test' element={<Test />} />
                <Route path='modal' element={<Modal />} />
                <Route path='userActivities' element={
                    <PrivateRoute>
                        <UserActivities />
                    </PrivateRoute>
                } />

                <Route path='*' element={<h2>No Route found</h2>} />
            </Routes>
        </div>
    );
};

export default AllRoutes;