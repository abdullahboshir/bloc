import React from 'react';
import CreatePost from './CreatePost';
import SideNavbar from './SideNavbar';

const LeftBar = () => {
    return (
        <div className='sticky top-0 z-50'>
            <SideNavbar/>
            <CreatePost/>
        </div>
    );
};

export default LeftBar;