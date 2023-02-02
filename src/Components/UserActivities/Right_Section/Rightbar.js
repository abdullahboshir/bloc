import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate} from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContextProvider';

const RightBar = () => {

    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [isActive, setIsActive] = useState(false);
    const localStorageUser = JSON.parse(localStorage.getItem('accessToken'));


    function logOut(gUserAuth){
        signOut(gUserAuth)
        localStorage.clear();
        navigate('/login')
    }


    return (
        <section className='flex justify-start items-center top-28 sticky ml-10'>

          <div className='flex justify-center items-center hover:underline cursor-pointer'>
          <div className="dropdown dropdown-end">
                <label onClick={() => setIsActive(!isActive)} tabIndex="0" className="btn btn-ghost z-50 btn-circle avatar online">
                    <div className="w-10 rounded-full z-50-">
                        {
                            user ? <img src={user?.photoURL} /> : <img src="https://placeimg.com/80/80/people" />
                        }
                    </div>
                </label>
                {
                    isActive && <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={() => logOut(auth)}><a>Logout</a></li>
                    </ul>
                }
            </div>

            <p className='ml-3 font-bold mr-28'>{user && user?.displayName || localStorageUser?.others?.firstName + ' ' + localStorageUser?.others?.lastName}</p>
          </div>

            <div className= 'flex justify-start items-center'>
                <button className='font-bold hover:underline' onClick={() => logOut(auth)}><a>Logout</a></button>
            </div>

        </section>
    );
};

export default RightBar;