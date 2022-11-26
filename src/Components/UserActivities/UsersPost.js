import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { IoIosVideocam } from 'react-icons/io';
import { MdNotifications } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import Rightbar from './Rightbar';




const UsersPost = () => {

    // const [data, setData] = useState([]);
    // let [page, setPage] = useState(1);
    // const [loading, setLoading] = useState(true);


    // useEffect(() => {
    //     fetchData(page)
    // }, [])

    // console.log(data)

    // function fetchData(page) {
    //   fetch(`https://randomuser.me/api?page=${page}&results=2`)
    //   .then((res) => {
    //     console.log('is this res', res.url)
    //       if(res.ok){
    //           return res.json();
    //         }
    //         else{
    //             return Promise.reject({status: res.status, stattusText: res.statusText})
    //         }  
    //     })
    //     .then(res => {
    //         if(page > 1){
    //             let resultAr = [
    //                 ...data, ...res.results
    //             ]
    //                 console.log('this is data', ...data)
    //                 console.log('this is res.result', ...res.results)
    //             setData(resultAr)
    //         }
    //         else{
    //             setData(res.results)
    //         }
    //         setLoading(false)
    //      })
    //      .catch(err => console.log('error, with message', err.stattusText))
    // }


    // function loadMoreHandle(e) {
    //     let bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 50;
    //     console.log('this for bottom',  bottom )
    //     if (bottom) {
    //         let page_ = page + 1;
    //         fetchData(page_)
    //         setLoading(true)
    //         setPage(page_)
    //     }
    // }


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



    // const loadMoreHandle = (e) => {
    //     console.log(document.body.scrollTop)
    //     let bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 5;
    //     let bottom2 = e.target.scrollTop ;
    //     console.log('this is bottom2 or scroll top', bottom2)
    //     if (bottom && bottom2 > 2000) {
    //         setCurrentPage(currentPage + 1);
    //         console.log('this is work increse page no.', currentPage + 1)
    //     }
    // }


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
        <section>
            <div className='flex justify-between min-h-screen'>

                <leftbar className='min-w-[420px] min-h-screen transition duration-700 ease-in-out'>
                  <Rightbar/>
                </leftbar>

                <middlebar className='min-w-[420px] pt-6'>
                    <div>
                        {
                            data.map(item =>
                                <div class="card w-96 bg-base-100 shadow-xl container mb-6">
                                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                    <div class="card-body">
                                        <h2 class="card-title">{item.title['first']}</h2>
                                        <p>{item.body}</p>
                                        <div class="card-actions justify-end">
                                            <button class="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </middlebar>

                <rightbar className='min-w-[420px]'>
                    <div class="navbar bg-base-100 px-16 flex flex-col sticky top-16">
                        <div class="flex-1 mb-10">
                            <Link to='/' className='w-[73px] h-8 rounded-md bg-sky-600 flex justify-center items-center'> <a className="normal-case text-3xl font-bold text-white">bloc</a></Link>
                            <div class="form-control w-52 h-10 relative flex items-center flex-row ml-4 focus-within:text-gray-600 text-gray-400">
                                <BiSearchAlt className='absolute ml-2 text-lg' />
                                <input type="text"
                                    placeholder="Search"
                                    aria-label='Search'
                                    class="input input-bordered pr-3 py-2 pl-8 h-10" />
                            </div>
                        </div>

                        <div class="flex-none gap-2">
                            <div className='flex flex-col'>
                                <a className='flex justify-end items-center px-4 cursor-pointer text-lg'>Home <FaHome className='text-4xl text-gray-600 hover:text-sky-600 ml-4' /></a>

                                <a className='flex justify-end items-center px-4 cursor-pointer text-lg my-6'> Watch <IoIosVideocam className='text-4xl text-gray-600 hover:text-sky-600 ml-4' /></a>

                                <a className='flex justify-end items-center px-4 cursor-pointer text-lg'>Message <RiMessage2Fill className='text-4xl hover:text-sky-600 ml-4' /></a>

                                <a className='flex justify-end items-center px-4 cursor-pointer text-lg py-6'>Notifications <MdNotifications className='text-4xl hover:text-sky-600 ml-4' /></a>
                            </div>
                        </div>
                    </div>
                </rightbar>

            </div>
        </section>
    );
};

export default UsersPost;