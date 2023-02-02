import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import { MdAddComment, MdOutlineReadMore } from 'react-icons/md';
import '../../../CSS/commonCss.css'
import CreatePost from './CreatePost';


const SideNavbar = () => {


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
        },
        {
            name: 'More',
            path: '/',
            icon: <MdOutlineReadMore />,
            id: 6
        }
    ];



    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setisModalOpen] = useState(false);

    const toggleModal = (id) => {
        if (!id) {
            return;
        }
        else if (id === 5) {
            setisModalOpen(true);
        }
        else if (id === 2) {
            setIsOpen(!isOpen)
        }
    };


    return (
        <section className='min-h-screen flex'>
            <CreatePost isModalOpen={isModalOpen} setisModalOpen={setisModalOpen} />

            <aside className='w-[11%] hover:w-[80%] h-screen flex flex-col justify-center bg-gray-200' style={{ transition: '.700s ease-in-out .2s' }}>
                {
                    menuItems.map((item, index) => <label key={index} htmlFor="5" className='flex py-2 items-center pl-2 bg-gray-300 hover:bg-gray-400 my-[4px]  overflow-hidden' onClick={() => toggleModal(item?.id)}>
                        <div className='text-3xl mr-[10px]'>{item.icon}</div>
                        <div className='text-lg'>{item.name}</div>
                    </label>)
                }
            </aside>

            <div className='flex w-[100%] justify-center items-start'>
                {isOpen && <div className="mt-6 break-words w-[80%] sticky top-6">
                    <div className="form-control w-[100%] relative flex items-center flex-row focus-within:text-gray-600 text-gray-400">
                        <BiSearchAlt className='absolute ml-2 text-lg' />
                        <input type="text"
                            placeholder="Search"
                            aria-label='Search'
                            className="input input-bordered pr-3 py-2 pl-8 h-10 w-[100%] aaa" />
                    </div>
                </div>}
            </div>
        </section>
    );
};

export default SideNavbar;