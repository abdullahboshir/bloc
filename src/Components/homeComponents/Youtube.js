import React from 'react';

const Youtube = (props) => {

    const {isActive, setIsActive} = props;

    return (
        <section onClick={() => setIsActive(false)} className='h-[630px] flex items-center mb-28 my-32 relative'>
           <div className='h-[630px] w-[900px] bg-[#f4faff] absolute right-0'></div>
           <div className='flex justify-evenly items-center text-start z-10'>
                <div className='ml-16'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NXL9jlHvHLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='ml-12'>
                    <h1 className=' leading-tight text-[#b24020] text-5xl'>3 ways to find your job</h1>
                    <h2 className='text-4xl font-thin w-[500px]'>Check out these steps to help you get started.</h2>
            </div>
           </div>
        </section>
    );
};

export default Youtube;