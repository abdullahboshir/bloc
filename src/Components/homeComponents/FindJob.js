import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

const FindJob = () => {

    const [jobDetails, setJobDetails] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const collapse = showMore? jobDetails : jobDetails.slice(0, 10)

    useEffect(() => {
        fetch('suggetionJob.json')
            .then(res => res.json())
            .then(data => setJobDetails(data))
    });


    return (
        <section className=' w-[100%] card-body pl-12 flex flex-row mt-16'>
            <div>
                <h1 className='text-5xl text-left font-light mb-6 w-[500px]'>Find the right job or internship for you</h1>
            </div>
            <div className='text-start'>
                <h4 className='text-lg text-left'>SUGGESTED SEARCHES</h4>
                {
                    collapse.map((jobDetail, index) => <a 
                    className='btn h-14 normal-case text-lg  px-6 btn-outline  rounded-full hover:text-black hover:bg-opacity-10 m-1' href={jobDetail.details} key={index}>{jobDetail.name}</a>)
                }
                <br />
                <button className=" h-14 normal-case text-lg font-bold px-6 text-secondary hover:text-secondary hover:bg-opacity-10 m-1" onClick={() => setShowMore(!showMore)}>{showMore? <span className='flex items-center justify-center'>Show less  <MdOutlineKeyboardArrowUp className='ml-1 text-2xl'/></span> : <span className='flex items-center justify-center'>Show more <MdOutlineKeyboardArrowDown className='ml-1 text-2xl'/></span> }</button>
            </div>
        </section>
    );
};

export default FindJob;