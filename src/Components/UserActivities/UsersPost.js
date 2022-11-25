import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    const [postsPerPage, setPostPerPage] = useState(5);
    const [data, setData] = useState([]);


    useEffect(() => {
        (async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setCoinData(response.data);

            if(currentPage > 1 && postsPerPage > 5){
                console.log('it less then 1?')
                setData(response.data)
               }
               else{
                console.log('it more then 1?')
                const lastPostIndex = currentPage * postsPerPage;
                const saveData = [...coinData]
                const currentPosts = saveData.slice(0, lastPostIndex);
                setData(currentPosts);
               }         
        })();
    }, [coinData, data]);



    function loadMoreHandle(e) {
        let bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 1;
        let bottom2 = e.target.scrollTop ;
        console.log('this is bottom2 or scroll top', bottom2)
        if (bottom && bottom2 > 2000) {
            setCurrentPage(currentPage + 1);
            console.log('this is work increse page no.', currentPage + 1)
        }
    }



    return (
        <section className='flex justify-between min-h-screen'>
            <leftbar>
                <div class="card w-96 bg-base-100 shadow-xl sticky top-0">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </leftbar>

          <middlebar className='h-[400px] p-10 overflow-auto' onScroll={loadMoreHandle}>
                <div  >
                    {
                        data.map(item =>
                            <div class="card w-96 bg-base-100 shadow-xl container">
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">{item.title['first']}</h2>
                                    <p>{item.body}</p>
                                    {/* <img src={item.picture} /> */}
                                    <div class="card-actions justify-end">
                                        <button class="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </middlebar> 

            <rightbar>
                <div class="card w-96 bg-base-100 shadow-xl sticky top-0">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </rightbar>
        </section>
    );
};

export default UsersPost;