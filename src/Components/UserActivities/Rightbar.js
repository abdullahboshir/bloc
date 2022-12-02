import React, { useEffect, useState } from 'react';
import { IoIosVideocam } from 'react-icons/io';
import { MdNotifications } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import { MdAddComment } from 'react-icons/md';
import '../../CSS/commonCss.css'


const Rightbar = () => {

    const menuItems = [
        {
            name: 'Home',
            path: '/',
            icon: <FaHome />,
  
        },
        {
            name: 'Search',
            path: '/',
            icon: <BiSearchAlt />,
            id: 2
        },
        {
            name: 'Message',
            path: '/',
            icon: <RiMessage2Fill />,

        },
        {
            name: 'Notifications',
            path: '/',
            icon: <MdNotifications />,

        },
        {
            name: 'Create',
            path: '/',
            icon: <MdAddComment />,
            id: 5
        }
    ];

    
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setisModalOpen] = useState(false);

    const toggleModal = (id) => {
            if(!id){
                return;
            }
           else if(id === 2){
                setIsOpen(!isOpen)
                console.log('true 2', isOpen)
            }
            else if(id === 5){
                setisModalOpen(!isModalOpen);
                console.log('true 5', isModalOpen)
            }
    };



    return (
        <div class="min-h-screen sticky top-0 flex-row flex min-w-[420px]">

            <div class="flex">
                <div className='flex flex-col h-screen justify-center bg-gray-200 hover:w-52 w-[50px] overflow-hidden' style={{ transition: '.700s ease-in-out .2s' }}>

                    <div>
                        {
                            menuItems.map((item, index) => <label key={index} htmlFor="5" className='flex py-2 items-center hover:w-[250px] pl-2 bg-gray-300 hover:bg-gray-400 my-[4px] transition duration-300 ease-in-out' onClick={() => toggleModal(item?.id)}>
                                <div className='text-3xl mr-4'>{item.icon}</div>
                                <div className='text-lg'>{item.name}</div>
                            </label>)
                        }
                    </div>

                </div>
            </div>


            <div className=' w-[550px] break-words' >
        {  isOpen && <div class="mt-6">
                        <div class="form-control w-[80%] relative flex items-center flex-row focus-within:text-gray-600 text-gray-400">
                            <BiSearchAlt className='absolute ml-2 text-lg' />
                            <input type="text"
                                placeholder="Search"
                                aria-label='Search'
                                class="input input-bordered pr-3 py-2 pl-8 h-10 w-[100%] aaa" />
                        </div>
                    </div>}

                    <h1>dsfsdofhsdkfjhsdfsadjhpasiodufhysadfjhsafjhfsdddsfsdafasdfasdfsadfasdfasdfasdfsdafsadfsadfsadfasdfasdfgdagafsdgfdgfdgsdfsdfjkfhsdfhsdafoksdahfasdfhsdkljfhakjf</h1>
        </div>



{       isModalOpen && <section>
            <input type="checkbox" id="5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </section>}
        </div>
    );
};

export default Rightbar;