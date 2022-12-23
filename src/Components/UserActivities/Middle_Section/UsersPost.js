import React, { useEffect, useState } from 'react';
import axios from 'axios';



const UsersPost = () => {


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
                console.log('it less then 1?')
                setData(response.data)
            }
            else {
                console.log('it more then 1?')
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
            console.log('thsi is checkinh', currentPage)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleSroll)
    }, [])


    return (
                <section className='min-w-[34%] flex justify-center min-h-screen'>
                    <div>
                        {
                            data.map(item =>
                                <div class="card w-96 bg-base-100 shadow-xl container mb-6 pl-[2px] mt-6">
                                    <figure className='z-20'><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                    <div class="card-body z-20">
                                        <h2 class="card-title">{item.title['first']}</h2>
                                        <p>{item.body}</p>
                                        <div class="card-actions justify-end">
                                            <button class="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </section>
    );
};

export default UsersPost;