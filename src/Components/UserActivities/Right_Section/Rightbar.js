import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const RightBar = () => {

    const [user] = useAuthState(auth);
    const [isActive, setIsActive] = useState(false);

    return (
        <section className='flex justify-start top-28 sticky ml-10'>
            <div class="dropdown dropdown-end">
                <label onClick={() => setIsActive(!isActive)} tabindex="0" class="btn btn-ghost z-50 btn-circle avatar online">
                    <div class="w-10 rounded-full z-50">
                        {
                            user ? <img src={user?.photoURL} /> : <img src="https://placeimg.com/80/80/people" />
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
        </section>
    );
};

export default RightBar;