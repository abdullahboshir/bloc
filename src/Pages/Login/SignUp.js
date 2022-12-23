import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';

const SignUp = () => {


    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const [newUser, setNewUser] = useState();
    const [newUserError, setNewUserError] = useState();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const location = useLocation();
    const navigate = useNavigate();
    // const from = location.state?.from?.pathname || '/';
    // console.log(from)

    useEffect(() => {
        if (user) {
            navigate('/usersPost')
        }
    }, [navigate, user])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const singnupInfo = {
            firstName,
            lastName,
            emailOrPhoneNumber,
            password,
            confirmPassword
        };
        console.log("this is user info", singnupInfo)

        await axios.post('http://localhost:5000/user/signup', singnupInfo)
        .then(res =>  {
            console.log( 'this is signup', res.data)
        })
        .catch(error => {
            setNewUserError(error.response.data)
            console.log(error.response)
        })
    };
    console.log('this is new user', newUser)
  


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div className="hero min-h-screen py-10">
                    <div className="hero-content flex-col lg:flex-row-reverse card shadow-2xl bg-base-100 w-[30%] min-h-[520px]">
                        <div>

                            <div className="card-body">
                                <div className="form-control text-left w-[300px]">
                                    <h1 className='text-4xl font-semibold text-[#843d59] mb-6'>Sign up</h1>
                                    <p>Stay updated on your professional world</p>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { mt: 1, width: '40ch', borderRadius: '0px' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <label className="label p-0 mb-4 flex justify-start mb-[13px]">
                                            <TextField
                                                value={firstName}
                                                onInput={e => setFirstName(e.target.value)}
                                                style={{ width: 150, paddingRight: 4 }}
                                                size="small"
                                                id="outlined-email-input"
                                                label="First Name"
                                                type="email"
                                                autoComplete="current-email"
                                            />

                                            <TextField
                                                value={lastName}
                                                onInput={e => setLastName(e.target.value)}
                                                style={{ width: 150, paddingLeft: 4 }}
                                                size="small"
                                                id="outlined-email-input"
                                                label="Last Name"
                                                type="email"
                                                autoComplete="current-email"
                                            />
                                        </label>


                                        <label className="label p-0">
                                            <TextField
                                                value={emailOrPhoneNumber}
                                                onInput={e => setEmailOrPhoneNumber(e.target.value)}
                                                style={{ width: 300 }}
                                                size="small"
                                                name='password'
                                                id="outlined-password-input"
                                                label="Mobile number or Email address"
                                                type="email"
                                                autoComplete="current-password"
                                            />
                                        </label>


                                        <label className="label p-0">
                                            <TextField
                                                value={password}
                                                onInput={e => setPassword(e.target.value)}
                                                style={{ width: 300, marginTop: 5 }}
                                                size="small"
                                                name='password'
                                                id="outlined-password-input"
                                                label="Password"
                                                type="password"
                                                autoComplete="current-password"
                                            />
                                        </label>

                                        <label className="label p-0">
                                            <TextField
                                                value={confirmPassword}
                                                onInput={e => setConfirmPassword(e.target.value)}
                                                style={{ width: 300, marginTop: 5 }}
                                                size="small"
                                                name='password'
                                                id="outlined-password-input"
                                                label="Confirm password"
                                                type="password"
                                                autoComplete="current-password"
                                            />
                                        </label>
                                    </Box>
                                    <p className='text-red-400'>{newUserError?.error}</p>


                                    <button className="rounded-full mt-6 bg-secondary text-xl text-white h-12 hover:bg-[#0578b6]">Sign up</button>

                                    <div className="divider">or</div>

                                    <Link to='/login' className="btn normal-case text-base px-6 btn-outline text-lower text-secondary rounded-full hover:text-secondary hover:bg-opacity-10">Alredy have an account?</Link>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default SignUp;