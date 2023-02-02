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

    const [gUser] = useAuthState(auth);
    const localStorageUser = JSON.parse(localStorage.getItem('accessToken'))
    const location = useLocation();
    
    function pathDirector(){
        const path = gUser || localStorageUser;
        const director = path && location?.pathname === '/userActivities';
        return director; 
    }
    
 console.log('ptahName is here' ,location?.pathname)


    return (
        <section className='sticky top-0 z-10'>
            {
                pathDirector() ?
               '' :

                    // <div className="navbar bg-base-100 max-w-screen m-auto mt-0 px-16 py-0 min-h-2">
                    //     <div className="flex-1">
                    //        <Link to='/' className='w-[73px] h-8 rounded-md bg-sky-600 flex justify-center items-center'> <a className="normal-case text-3xl font-bold text-white">bloc</a></Link>
                    //         <div className="form-control w-52 h-10 relative flex items-center flex-row ml-4 focus-within:text-gray-600 text-gray-400">
                    //             <BiSearchAlt className='absolute ml-2 text-lg'/>
                    //             <input type="text" 
                    //             placeholder="Search" 
                    //             aria-label='Search'
                    //             className="input input-bordered pr-3 py-2 pl-8 h-10" />
                    //         </div>
                    //     </div>
                    //     <div className="flex-none gap-2">

                    //         <div className='flex '>
                    //             <a className='flex flex-col justify-center items-center px-4 cursor-pointer text-sm'><FaHome className='text-2xl text-gray-600 hover:text-sky-600' />Home</a>
                    //             <a className='flex flex-col justify-center items-center px-4 cursor-pointer text-sm'> <IoIosVideocam className='text-2xl text-gray-600 hover:text-sky-600' />Watch</a>
                    //             <a className='flex flex-col justify-center items-center px-4 cursor-pointer text-sm'><RiMessage2Fill className='text-2xl hover:text-sky-600' />Message</a>
                    //             <a className='flex flex-col justify-center items-center px-4 cursor-pointer text-sm'><MdNotifications className='text-2xl hover:text-sky-600' />Notifications</a>
                    //         </div>
                    //         <div className="dropdown dropdown-end">
                    //             <label onClick={() => setIsActive(!isActive)} tabIndex="0" className="btn btn-ghost z-10 btn-circle avatar online">
                    //                 <div className="w-10 rounded-full z-50">
                    //                    {
                    //                     user? <img src={user?.photoURL } />: <img src="https://placeimg.com/80/80/people" />
                    //                    }
                    //                 </div>
                    //             </label>
                    //             {
                    //                 isActive && <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    //                     <li>
                    //                         <a className="justify-between">
                    //                             Profile
                    //                             <span className="badge">New</span>
                    //                         </a>
                    //                     </li>
                    //                     <li><a>Settings</a></li>
                    //                     <li onClick={() => signOut(auth)}><a>Logout</a></li>
                    //                 </ul>
                    //             }

                    //         </div>
                    //     </div>
                    // </div>
    
                    <div className="navbar bg-base-100 max-w-screen m-auto mt-3 px-16">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                            </div>
                            <Link to='/home' className="normal-case text-3xl font-bold text-secondary">bloc</Link>
                        </div>
                        <div className="navbar-end">
                           <Link to='/test'>
                           <a className="btn bg-white text-black hover:bg-opacity-10 border-none hover:text-black normal-case rounded-full mr-4 text-base font-semibold">Join Now</a>
                           </Link>

                            <Link to='/login'>
                                <a className="btn normal-case text-base px-6 mr-4 btn-outline text-lower text-secondary rounded-full hover:text-secondary hover:bg-opacity-10">Sign in</a>
                            </Link>

                            <Link to='/userActivities'>
                                <a className="btn normal-case text-base px-6 btn-outline text-lower text-secondary rounded-full hover:text-secondary hover:bg-opacity-10">All Post</a>
                            </Link>
                        </div>
                    </div>

            }

        </section>
    );
};

export default Navbar;