import React, { useState } from 'react';
import ConnectPeople from '../../Components/homeComponents/ConnectPeople';
import ContentTopics from '../../Components/homeComponents/ContentTopics';
import FindJob from '../../Components/homeComponents/FindJob';
import Footer from '../../Components/homeComponents/Footer';
import Hero from '../../Components/homeComponents/Hero';
import Navbar from '../../Components/homeComponents/Navbar';
import Youtube from '../../Components/homeComponents/Youtube';
import Carousel from '../../Components/Shared/Carousel';

const Home = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <Hero/>
            <ContentTopics/>
            <Carousel/>
            <FindJob/>
            <ConnectPeople isActive={isActive} setIsActive={setIsActive}/>
            <Youtube isActive={isActive} setIsActive={setIsActive}/>
            <Footer/>
        </div>
    );
};

export default Home;