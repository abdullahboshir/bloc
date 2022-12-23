import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';

const Login = () => {
    const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [userError, setUserError] = useState();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const location = useLocation();
    const navigate = useNavigate();
    // const from = location.state?.from?.pathname || '/';
    // console.log(from)

    useEffect(() => {
        if (user) {
            navigate('/userActivities')
        }
    }, [navigate, user])

    const handleLoginBlur = async (event) => {
        event.preventDefault();

        const loginInfo = {
            emailOrPhoneNumber,
            password
        };

        await axios.post('http://localhost:5000/user/login', loginInfo)
        .then(res =>  {
            console.log('this is login info', res)
        })
        .catch(error => {
            setUserError(error.response.data)
            console.log(error.response)
        })
    }

    return (
        <div>
            <form onSubmit={handleLoginBlur}>
                <div className="hero min-h-screen py-12">
                    <div className="hero-content flex-col lg:flex-row-reverse card shadow-2xl bg-base-100  w-[30%] h-[550px]">
                        <div>

                            <div className="card-body">
                                <div className="form-control text-left w-[300px]">
                                    <h1 className='text-4xl font-semibold text-[#843d59] mb-6'>Sign in</h1>
                                    <p>Stay updated on your professional world</p>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { mt: 1, width: '40ch', borderRadius: '0px' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <label className="label p-0 mb-4">
                                            <TextField
                                                value={emailOrPhoneNumber}
                                                onInput={e => setEmailOrPhoneNumber(e.target.value)}
                                                style={{ width: 300 }}
                                                id="outlined-email-input"
                                                label="email or phone number"
                                                type="email"
                                                autoComplete="current-email"
                                            />
                                        </label>

                                        <label className="label p-0">

                                            <TextField
                                                value={password}
                                                onInput={e => setPassword(e.target.value)}
                                                style={{ width: 300 }}
                                                name='password'
                                                id="outlined-password-input"
                                                label="Password"
                                                type="password"
                                                autoComplete="current-password"
                                            />
                                        </label>
                                    </Box>

                                    <Link className='text-left mt-2 hover:text-secondary hover:underline' to='#'>Forgot password?</Link>
                                    <button className="rounded-full mt-6 bg-secondary text-xl text-white h-12 hover:bg-[#0578b6]">Sign in</button>

                                    <div className="divider">or</div>
                                    <button onClick={() => signInWithGoogle()} type='submit' className="btn normal-case text-base px-6 btn-outline text-lower text-secondary rounded-full hover:text-secondary hover:bg-opacity-10 mb-4"> <FcGoogle className='mr-2 text-xl' /> Sign in with Google</button>

                                    <Link to='/signUp' className="btn normal-case text-base px-6 btn-outline text-lower text-secondary rounded-full hover:text-secondary hover:bg-opacity-10">New to Bloc? Join now</Link>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;