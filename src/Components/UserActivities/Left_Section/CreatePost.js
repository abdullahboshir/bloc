import { FormControl, Select, MenuItem, FormHelperText } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAuthContext } from '../../../context/AuthContextProvider';
import auth from '../../../firebase.init';
import { GiWorld } from 'react-icons/gi';
import { GrSecure } from 'react-icons/gr';
import { IoIosPeople, IoIosArrowDown } from 'react-icons/io';
import Swal from 'sweetalert2';
// import '../../../CSS/commonCss.css'

const CreatePost = ({ isModalOpen, setisModalOpen }) => {

    const options = [
        {
            name: 'Public',
            description: 'Your post see any public',
            icon: <GiWorld />
        },
        {
            name: 'Private',
            description: 'Your post see any public',
            icon: <GrSecure />
        },
        {
            name: 'Friends',
            description: 'Your post see any public',
            icon: <IoIosPeople />
        },
    ]

    const { localStorageUser } = useAuthContext();
    const [user] = useAuthState(auth);

    const [isOpen, setIsOpen] = React.useState(false);
    const [age, setAge] = React.useState('');

    const sliceOption = options.slice(0, 1)

    const handleChange = (event) => {
        setAge(event.target.value);
    };



    return (
        <section>

            {isModalOpen && <section>

                <input type="checkbox" id="5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box py-0 mx-6">
                        <div className='flex items-center justify-between border-b-2 pt-16'>
                            <label onClick={() => setisModalOpen(false)} className='btn btn-sm btn-circle absolute right-4 top-4'>✕</label>
                            <h3 className="text-lg font-bold absolute top-4">Create a post!</h3>

                        </div>

                        <div className='mt-4'>
                            <div className='flex items-center'>

                                <label className=" z-50 bg-none avatar">
                                    <div className="w-[52px] rounded-full z-50-">
                                        {
                                            user ? <img src={user?.photoURL} /> : <img src="https://placeimg.com/80/80/people" />
                                        }
                                    </div>
                                </label>

                                <div className='flex flex-col items-start ml-3'>
                                    <h3 className="text-base  mr-3 font-bold">{user && user?.displayName || localStorageUser?.others?.firstName + ' ' + localStorageUser?.others?.lastName}</h3>


                                    <label htmlFor="my-modal-3" className='border w-28 h-8  rounded-2xl border hover:border-[3px] relative hover:border-gray-300 hover:bg-gray-100 bg-gray-300 cursor-pointer  align-center items-center flex'>
                                        {
                                            sliceOption.map((option, index) => <span key={index} className='absolute left-1'>
                                                <div className='flex align-center items-center'>
                                                    <span className='text-lg ml-[2px]'>{option.icon}</span>
                                                    <p className='text-base ml-1'>{option.name}</p>
                                                    <IoIosArrowDown className='ml-2' />
                                                </div>
                                            </span>)
                                        }
                                    </label>

                                    {/* Put this part before </body> tag */}
                                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative">
                                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <h3 className="text-lg font-bold">Who do you want to show this post to?</h3>

                                            <div className='flex flex-col'>
                                                <div> {
                                                    options.map((option, index) => <div key={index} className='hover:bg-gray-300 flex py-4 pl-4'>
                                                        
                                                           <span className='text-3xl mr-4'> {option.icon}</span>
                                                            <div className='flex items-start flex-col'><span className='text-xl font-semibold'>{option.name}</span> <span>{option.description}</span></div>
                                                         
                                                   
                                                        <input type="radio" value="Male" name="gender" className='ml-28 w-10' />
                                                        </div>)
                                                }</div>
                                            </div>

                                        </div>
                                    </div>


                                </div>



                            </div>
                            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-4" ></textarea>

                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        </div>

                    </div>
                </div>
            </section>}

        </section>
    );
};

export default CreatePost;