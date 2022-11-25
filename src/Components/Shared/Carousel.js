import React, { useEffect, useState } from 'react';

const Carousel = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('jobInfo.json')
            .then(res => res.json()
                .then(data => setDatas(data)))
    }, [])

    let box = document.querySelector(".slider-conteiner");

    const btnpresspre = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    };

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    };


    return (
        <div className='card-body pl-12 bg-black bg-opacity-5 pb-20'>
            <div className='relative overflow-hidden mt-4'>
                <span className='text-lg text-left left-0 absolute'>CAREER ADVICE ON BLOC
                </span>
                <p className='absolute top-0 right-24 mt-2 hover:underline cursor-pointer text-lg'>See all</p>
                <button className='text-[black] text-4xl absolute w-[60px] top-0 h-[100%]flex right-0 pb-14' onClick={btnpressnext}><p>&gt;</p></button>
                <button className='text-[black] text-4xl absolute top-0 w-[60px] h-[100%]flex right-10 pb-14' onClick={btnpresspre}><p>&lt;</p></button>

                <div className='py-0 overflow-x-hidden scroll-smooth slider-conteiner flex flex-row mt-4'>
                    {
                        datas.map(data =>
                            <div className='min-w-[260px] max-w-[300px] h-[350px] bg-primary mt-10 mr-2 text-[white]'>
                                <img src={data.img} />
                                <h3 className='text-xl'>{data.title}</h3>
                                <p>{data.des}</p>

                            </div>
                        )
                    }
                </div>
            </div>
        </div>

    );
};

export default Carousel;