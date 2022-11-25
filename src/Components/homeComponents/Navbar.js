import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { IoIosVideocam } from 'react-icons/io';
import { MdNotifications } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';

const Navbar = () => {

    const [userr, setUserr] = useState({})

    const [isActive, setIsActive] = useState(false);

    const [user] = useAuthState(auth);
    const location = useLocation();
    
 console.log(user?.photoURL)

    return (
        <section>
            {
                user && location.pathname === '/usersPost' ?

                    <div class="navbar bg-base-100 w-11/12 m-auto mt-3">
                        <div class="flex-1">
                           <Link to='/' className='w-[87px] h-10 rounded-md bg-sky-600 flex justify-center items-center'> <a className="normal-case text-4xl font-bold text-white">bloc</a></Link>
                            <div class="form-control w-52 h-10 relative flex items-center flex-row ml-4 focus-within:text-gray-600 text-gray-400">
                                <BiSearchAlt className='absolute ml-2 text-lg'/>
                                <input type="text" 
                                placeholder="Search" 
                                aria-label='Search'
                                class="input input-bordered pr-3 py-2 pl-8" />
                            </div>
                        </div>
                        <div class="flex-none gap-2">

                            <div className='flex '>
                                <a className='flex flex-col justify-center items-center px-4 cursor-pointer'><FaHome className='text-3xl text-gray-600 hover:text-sky-600' />Home</a>
                                <a className='flex flex-col justify-center items-center px-4 cursor-pointer'> <IoIosVideocam className='text-3xl text-gray-600 hover:text-green-400' />Watch</a>
                                <a className='flex flex-col justify-center items-center px-4 cursor-pointer'><RiMessage2Fill className='text-3xl hover:text-green-400' />Message</a>
                                <a className='flex flex-col justify-center items-center px-4 cursor-pointer'><MdNotifications className='text-3xl hover:text-green-400' />Notifications</a>
                            </div>
                            <div class="dropdown dropdown-end">
                                <label onClick={() => setIsActive(!isActive)} tabindex="0" class="btn btn-ghost z-10 btn-circle avatar online">
                                    <div class="w-10 rounded-full z-50">
                                       {
                                        user? <img src={user?.photoURL } />: <img src="https://placeimg.com/80/80/people" />
                                       }
                                    </div>
                                </label>
                                {
                                    isActive && <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a class="justify-between">
                                                Profile
                                                <span class="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li onClick={() => signOut(auth)}><a>Logout</a></li>
                                    </ul>
                                }

                            </div>
                        </div>
                    </div>
                    :
                    <div className="navbar bg-base-100 w-11/12 m-auto mt-3">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                            </div>
                            <a className="normal-case text-3xl font-bold text-secondary">bloc</a>
                        </div>
                        <div className="navbar-end">
                           <Link to='/test'>
                           <a className="btn bg-white text-black hover:bg-opacity-10 border-none hover:text-black normal-case rounded-full mr-8 text-base font-semibold">Join Now</a>
                           </Link>

                            <Link to='/login'>
                                <a className="btn normal-case text-base px-6 btn-outline text-lower text-secondary rounded-full hover:text-secondary hover:bg-opacity-10">Sign in</a>
                            </Link>

                            <Link to='/usersPost'>
                                <a className="btn normal-case text-base px-6 btn-outline text-lower text-secondary rounded-full hover:text-secondary hover:bg-opacity-10">All Post</a>
                            </Link>
                        </div>
                    </div>

            }

        </section>
    );
};

export default Navbar;