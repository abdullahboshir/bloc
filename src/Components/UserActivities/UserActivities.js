import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LeftBar from './Left_Section/LeftBar';
import MiddleBar from './Middle_Section/MiddleBar';
import Rightbar from './Right_Section/Rightbar';


const UserActivities = () => {


    const [coinData, setCoinData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(3);
    const [data, setData] = useState([]);



    useEffect(() => {
        (async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setCoinData(response.data);

            if (currentPage > 1 && postsPerPage > 5) {
                setData(response.data)
            }
            else {
                const lastPostIndex = currentPage * postsPerPage;
                const saveData = [...coinData]
                const currentPosts = saveData.slice(0, lastPostIndex);
                setData(currentPosts);
            }
        })();
    }, [coinData, data]);


    const handleSroll = () => {
        let bottom = window.innerHeight + document.documentElement.scrollTop + 3 >= document.documentElement.scrollHeight;
        // let bottom2 = document.documentElement.clientHeight - document.documentElement.scrollHeight - document.documentElement.scrollTop;
        let bottom2 = document.documentElement.scrollHeight;
        if (bottom) {
            setCurrentPage((prev) => prev + 1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleSroll)
    }, [])

  

    return (
        <main className='min-w-screen min-h-screen'>
        <div className='flex min-w-screen min-h-screen'>

            <section className='min-w-[33%] min-h-screen'>
                <LeftBar />
            </section>


            <section className='min-w-[34%] flex justify-center min-h-screen border-x-2'>
               <MiddleBar/>
            </section>


            <section className='min-w-[33%] bg-yellow-400 min-h-screen z-40'>
                <Rightbar/>
            </section>
        </div>
    </main>
    );
};

export default UserActivities;