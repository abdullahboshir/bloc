import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';



const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/JyY3V8V/07-Januari2021-06-generated.jpg" className="max-w-xl rounded-lg" />
                    <div>

                        <div className="card-body text-start">
                            <div className="form-control">
                                <h1 className='text-5xl text-left text-[#843d59] font-light mb-6'>Welcome to your professional community</h1>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { mt:1, width: '50ch', borderRadius: '0px' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <label className="label p-0 mb-4">
                                        <TextField
                                            style={{ width: 400 }}
                                            id="outlined-email-input"
                                            label="email"
                                            type="email"
                                            autoComplete="current-email"
                                        />
                                    </label>

                                    <label className="label p-0">
                                        <TextField
                                            style={{ width: 400 }}
                                            id="outlined-password-input"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                        />
                                    </label>
                                </Box>

                                <Link className='text-left mt-2 hover:text-secondary hover:underline' to='#'>Forgot password?</Link>
                           
                             <button style={{ width: 400 }} className="rounded-full mt-6 bg-secondary text-xl text-white h-14 hover:bg-[#0578b6]">Sign in</button>
                    
                               <div className="divider  w-[400px]">or</div>
                                <a className="btn w-[400px] normal-case text-base px-6 btn-outline text-lower text-secondary rounded-full hover:text-secondary hover:bg-opacity-10 mb-4"> <FcGoogle className='mr-2 text-xl'/> Sign in with Google</a>

                                <a className="btn w-[400px] normal-case text-base px-6 btn-outline text-lower text-secondary rounded-full hover:text-secondary hover:bg-opacity-10">New to Bloc? Join now</a>
                         
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;