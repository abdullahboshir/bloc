import React, { useEffect, useState } from 'react';

const ContentTopics = () => {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        fetch('contentTopicDatas.json')
            .then(res => res.json())
            .then(data => setContents(data))
    });


    return (
        <section>
         <div className=' card-body pl-12 bg-black bg-opacity-5 pb-10 pt-20'>
         <div>
                <h1 className='text-5xl text-left font-light mb-6'>Explore topics you are interested in</h1>
                <h4 className='text-lg text-left'>CONTENT TOPICS</h4>
            </div>
            <div className='text-start'>
                <span className="btn h-14 normal-case text-lg font-bold px-6 btn-outline text-secondary rounded-full hover:text-secondary hover:bg-opacity-10 m-1">See All Topics</span>

                {
                    contents.map((content, index) => <a className='btn h-14 normal-case text-lg  px-6 btn-outline  rounded-full hover:text-black hover:bg-opacity-10 m-1' href={content.sl} key={index}>{content.name}</a>)
                }
            </div>
         </div>
        </section>
    );
};

export default ContentTopics;

