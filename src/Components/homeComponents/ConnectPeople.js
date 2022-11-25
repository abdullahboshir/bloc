import React, { useEffect, useState } from 'react';
import img1 from '../../Assets/Find_People/Social media 04.jpg'
import img2 from '../../Assets/Find_People/33320502 (1).jpg'
import axios from 'axios';
import { IoMdArrowDropdown } from 'react-icons/io';


const ConnectPeople = (props) => {
    const {isActive, setIsActive} = props;

    const [skills, setSkills] = useState([]);
    
    useEffect(() => {
        axios.get('learnSkills.json').then((res) => {
            setSkills(res.data)
        })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='h-auto mt-12'>
            <div className='flex text-start justify-center bg-[#f1ece5] py-16 px-4 items-center'>
                <h1 className='text-5xl w-[500px] leading-tight text-[#b24020]'>Post your job for millions of people to see</h1>
                <a className='btn h-14 normal-case text-lg  px-6 btn-outline rounded-full hover:text-black hover:bg-opacity-10 m-1'>Fost a job</a>
            </div>


            <div  onClick={() => setIsActive(!isActive)} className='flex justify-around my-28'>
                <div className='w-[450px] text-start'>
                    <img src={img1} className='w-[350px] h-[290px]' />
                    <h1 className='text-5xl font-thin py-4'>Connect with people who can help</h1>
                    <a className='btn h-14 normal-case text-lg  px-6 btn-outline  rounded-full hover:text-black hover:bg-opacity-10 m-1 mt-4'>Find people you know</a>
                </div>


                <div className='w-[450px] text-start'>
                    <img src={img2} className='w-[310px] h-[290px]' />
                    <h1 className='text-5xl font-thin py-4'>Learn the skills you need to succeed</h1>


                    <div onClick={() => setIsActive(!isActive)} className='relative'>
                       <div className=' border-2 h-14 w-[350px] hover:text-black hover:bg-opacity-10 text-xl flex pl-4 items-center cursor-pointer mt-4'>Choose a topic to learn about <IoMdArrowDropdown className='text-2xl ml-8'/></div>
                   {
                    isActive &&  <ul className='flex flex-col border-2 drop-shadow-lg w-[350px] overflow-y-auto h-[380px] absolute z-20 bg-white'>
                    {
                        skills.map((skill, index) => <li key={index} className='pb-4 hover:underline pl-4'>
                            <a href={skill.link}>
                            <h2 className='text-base font-semibold'>{skill.title}</h2>
                            <p>{skill.count}</p>
                            </a>
                        </li>)
                    }
                </ul>
                   }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ConnectPeople;