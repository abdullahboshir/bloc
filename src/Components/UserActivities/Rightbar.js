import React from 'react';
import { IoIosVideocam } from 'react-icons/io';
import { MdNotifications } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const Rightbar = () => {

    const menuItems = [
        {
            name: 'Home',
            path: '/',
            icon: <FaHome />
        },
        {
            name: 'Search',
            path: '/',
            icon: <BiSearchAlt />
        },
        {
            name: 'Message',
            path: '/',
            icon: <RiMessage2Fill />
        },
        {
            name: 'Notifications',
            path: '/',
            icon: <MdNotifications />
        },
        {
            name: 'Create',
            path: '/',
            icon: <MdNotifications />
        }
    ];


    return (
        <div class="min-h-screen sticky top-0 ">
        {/* <div class="flex mb-10">
            <div class="form-control w-52 h-10 relative flex items-center flex-row ml-4 focus-within:text-gray-600 text-gray-400">
                <BiSearchAlt className='absolute ml-2 text-lg'/>
                <input type="text" 
                placeholder="Search" 
                aria-label='Search'
                class="input input-bordered pr-3 py-2 pl-8 h-10" />
            </div>
        </div> */}

        <div class="flex">
            <div className='flex flex-col h-screen justify-center drop-shadow-lg'>
                {
                    menuItems.map((item, index) => <NavLink key={index} to={item.path} className='flex py-2 bg-gray-500 items-center hover:w-60 w-[50px] pl-2 overflow-hidden border-y-2 hover:border-y-2 border-gray-300'>
                        <div className='text-3xl mr-4'>{item.icon}</div>
                        <div className='text-lg'>{item.name}</div>
                    </NavLink>)
                }
            </div>

             <div className='ml-10'>
                <h1>slfkjsd;ofhsadfohsdpfsdpf</h1>
                <h1>slfkjsd;ofhsadfohsdpfsdpf</h1>
                <h1>slfkjsd;ofhsadfohsdpfsdpf</h1>
                <h1>slfkjsd;ofhsadfohsdpfsdpf</h1>
                <h1>slfkjsd;ofhsadfohsdpfsdpf</h1>
                <h1>slfkjsd;ofhsadfohsdpfsdpf</h1>
                <h1>slfkjsd;ofhsadfohsdpfsdpf</h1>
                <h1>slfkjsd;ofhsadfohsdpfsdpf</h1>
                <h1>slfkjsd;ofhsadfohsdpfsdpf</h1>
                <h1>slfkjsd;ofhsadfohsdpfsdpf</h1>
                <h1>slfkjsd;ofhsadfohsdpfsdpf</h1>
                <h1>slfkjsd;ofhsadfohsdpfsdpf</h1>
                <h1>slfkjsd;ofhsadfohsdpfsdpf</h1>
                <h1>slfkjsd;ofhsadfohsdpfsdpf</h1>
            </div>
        </div>
    </div>
    );
};

export default Rightbar;