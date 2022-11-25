// import axios from "axios";
// import { current } from "daisyui/src/colors";
// import { useEffect, useState } from "react";


// const Test = () => {


//     // const [data, setData] = useState([]);
//     // let [page, setPage] = useState(1);
//     // const [loading, setLoading] = useState(true);


//     // useEffect(() => {
//     //     fetchData(page)
//     // }, [])

//     // console.log(data)

//     // function fetchData(page) {
//     //   fetch(`https://randomuser.me/api?page=${page}&results=2`)
//     //   .then((res) => {
//     //     console.log('is this res', res.url)
//     //       if(res.ok){
//     //           return res.json();
//     //         }
//     //         else{
//     //             return Promise.reject({status: res.status, stattusText: res.statusText})
//     //         }  
//     //     })
//     //     .then(res => {
//     //         if(page > 1){
//     //             let resultAr = [
//     //                 ...data, ...res.results
//     //             ]
//     //                 console.log('this is data', ...data)
//     //                 console.log('this is res.result', ...res.results)
//     //             setData(resultAr)
//     //         }
//     //         else{
//     //             setData(res.results)
//     //         }
//     //         setLoading(false)
//     //      })
//     //      .catch(err => console.log('error, with message', err.stattusText))
//     // }


//     // function loadMoreHandle(e) {
//     //     let bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 50;
//     //     console.log('this for bottom',  bottom )
//     //     if (bottom) {
//     //         let page_ = page + 1;
//     //         fetchData(page_)
//     //         setLoading(true)
//     //         setPage(page_)
//     //     }
//     // }



    
//     const [coinData, setCoinData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage, setPostPerPage] = useState(10);
//     const [data, setData] = useState([]);


//     useEffect(() => {
//         (async () => {
//             const response = await axios.get(
//                 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
//             );
//             setCoinData(response.data)
//         })();
//     }, [data]);


//    function loadDataDivided(){
//     const lastPostIndex = currentPage * postsPerPage;
//     const saveData = [...coinData]
//     const currentPosts = saveData.slice(0, lastPostIndex);
//     setData(currentPosts);
//    }


//    useEffect(() =>{
//     loadDataDivided()
//    }, [data])


//     function loadMoreHandle(e) {
//         let bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 5;
//         console.log('this is bottom', bottom)
//         if (bottom) {
//             setCurrentPage(currentPage + 1)
//             loadDataDivided()
//             console.log('this is work', currentPage + 1)
//         }
//     }



//     return (
//         <div className='h-sreen flex flex-col justify-center items-center'>
//             <h1 className='text-4xl'>This is Test page</h1>


//             <div className='text-2xl h-[250px] w-60 bg-primary overflow-auto' id='check' onScroll={loadMoreHandle}>
//                 <h1 className="text-xl">datas length {data.length}</h1>
//                 {
//                     data.map(d => <div><h1>{d.name}</h1></div>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Test;