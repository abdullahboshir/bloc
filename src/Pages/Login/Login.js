import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import {  useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const location = useLocation();
    const navigate = useNavigate();
    // const from = location.state?.from?.pathname || '/';
    // console.log(from)

    useEffect(() => {
        if(user){  
            navigate('/usersPost')
    }
    }, [navigate, user])

    const handleLoginBlur = event => {
        event.preventDefault();
        signInWithGoogle()
    }

    return (
        <div>
            <form onSubmit={handleLoginBlur}>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse card shadow-2xl bg-base-100 w-[400px] h-[520px]">
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
                                               value={email}
                                               onInput={ e=>setEmail(e.target.value)}
                                                style={{ width: 300 }}
                                                id="outlined-email-input"
                                                label="email"
                                                type="email"
                                                autoComplete="current-email"
                                            />
                                        </label>

                                        <label className="label p-0">

                                            <TextField
                                                value={password}
                                                onInput={ e=>setPassword(e.target.value)}
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
                                    <button type='submit' className="btn normal-case text-base px-6 btn-outline text-lower text-secondary rounded-full hover:text-secondary hover:bg-opacity-10 mb-4"> <FcGoogle className='mr-2 text-xl' /> Sign in with Google</button>

                                    <a className="btn normal-case text-base px-6 btn-outline text-lower text-secondary rounded-full hover:text-secondary hover:bg-opacity-10">New to Bloc? Join now</a>

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