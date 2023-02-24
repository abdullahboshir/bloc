import { FormControl, Select, MenuItem, FormHelperText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAuthContext } from '../../../context/AuthContextProvider';
import auth from '../../../firebase.init';
import { GiWorld } from 'react-icons/gi';
import { GrSecure } from 'react-icons/gr';
import { RiAttachmentFill } from 'react-icons/ri';
import { AiFillPicture } from 'react-icons/ai';
import { RiVideoAddFill } from 'react-icons/ri';
import { IoIosPeople, IoIosArrowDown } from 'react-icons/io';
import axios from '../../../api/axios';
// import '../../../CSS/commonCss.css'

const CreatePost = ({ isModalOpen, setisModalOpen }) => {

    const options = [
        {
            name: 'Public',
            description: 'Any Public can see your Post',
            icon: <GiWorld />,
            checked: true
        },
        {
            name: 'Private',
            description: 'No one but you can see this post',
            icon: <GrSecure />
        },
        {
            name: 'Friends',
            description: 'Only your friends can see this Post.',
            icon: <IoIosPeople />
        },
    ];



    const { localStorageUser, users } = useAuthContext();
    const [user] = useAuthState(auth);

    // console.log('this is user from context idddddd', users.data?.others?._id)

    const [selectedValue, setSelectedValue] = useState('Public');
    const [saveSelected, setSaveSelected] = useState('');
    // const [postImg, setPostImg] = useState({file: null, preview: ''});
    const [postImg, setPostImg] = useState([]);
    const [getPost, setGetPost] = useState([]);
    const sliceOption = options.slice(0, 1);


    useEffect(() => {

    }, [selectedValue, selectedValue])



    function handleSaveAudience() {
        const findIcon = options.find(option => { return option.name === selectedValue });
        setSaveSelected(findIcon);
    };


    async function handlePost(e) {
        e.preventDefault();
        const textArea = e.target.textArea.value;
        const formData = new FormData();

        for (const file of postImg) {
            formData.append('image', file);
        };

        formData.append('text', textArea);
        formData.append('authorId', users.data?.others?._id);
        formData.append('audience', saveSelected.name || selectedValue);

        await axios.post(`/userPost`, formData)
            .then(res => console.log('this is response', res))
    };





    useEffect(() => {
        const fetchUserPost = async () => {
            try {
                const response = await axios.get(`/userPost`);
                if (response) {
                    setGetPost(response?.data?.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserPost();
    }, [getPost, setGetPost]);

    console.log('this is response from backend', getPost)



    return (
        <form onSubmit={handlePost}>

            {isModalOpen && <section>

                <input type="checkbox" id="5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box py-0 mx-6">
                        <div className='flex items-center justify-between border-b-2 pt-16'>
                            <label onClick={() => setisModalOpen(false)} className='btn btn-sm btn-circle absolute right-4 top-4'>✕</label>
                            <h3 className="text-lg font-bold absolute top-4">Create a post!</h3>

                        </div>

                        <div className='mt-4'>
                            <div className='flex items-center'>

                                <label className=" z-50 bg-none avatar">
                                    <div className="w-[52px] rounded-full z-50-">
                                        {
                                            user ? <img src={user?.photoURL} /> : <img src="https://placeimg.com/80/80/people" />
                                        }
                                    </div>
                                </label>

                                <div className='flex flex-col items-start ml-3'>
                                    <h3 className="text-base  mr-3 font-bold">{user && user?.displayName || localStorageUser?.others?.firstName + ' ' + localStorageUser?.others?.lastName}</h3>


                                    <label htmlFor="my-modal-3" className='border w-[117px] h-8  rounded-2xl border hover:border-[3px] relative hover:border-gray-300 hover:bg-gray-100 bg-gray-300 cursor-pointer items-center flex'>
                                        {
                                            sliceOption.map((option, index) => <span key={index} className='absolute left-1'>
                                                <div className='flex items-center'>
                                                    <span className='text-lg ml-[2px]'>{saveSelected.icon || option.icon}</span>
                                                    <p className='text-base ml-1'>{saveSelected.name || option.name}</p>
                                                    <IoIosArrowDown className='ml-2' />
                                                </div>
                                            </span>)
                                        }
                                    </label>
                                </div>

                            </div>

                            <textarea placeholder="Write a Post..." name='textArea' className="textarea textarea-bordered textarea-xl w-[460px] h-44 max-w-lg mt-4" ></textarea>



                            <div className='flex flex-wrap flex-col'>
                                {
                                    postImg.map((file, index) => (
                                        <div >
                                            <img key={index} src={URL.createObjectURL(file)} alt="preview" className='border-4' />
                                        </div>
                                    ))
                                }
                            </div>

                            <div className='flex justify-between items-center py-6'>

                                <div className='flex gap-x-4 text-2xl'>

                                    <div data-tip="PDF" class="image-upload h-10 w-10 bg-gray-500  rounded-full flex items-center justify-center hover:bg-gradient-to-r from-cyan-500 to-blue-700 tooltip">
                                        <label for="for-pdf">
                                            <RiAttachmentFill className='cursor-pointer text-white' />
                                        </label>
                                        <input id="for-pdf" type="file" className='hidden' />
                                    </div>

                                    <div data-tip="PICTURE" class="image-upload h-10 w-10 bg-gray-500  rounded-full flex items-center justify-center hover:bg-gradient-to-r from-cyan-500 to-blue-700 tooltip">
                                        <label for="file-input">
                                            <AiFillPicture className='cursor-pointer text-white' />
                                        </label>
                                        <input id="file-input" name='image' type="file" multiple onChange={(e) => setPostImg([...e.target.files])} className='hidden' />
                                    </div>


                                    <div data-tip="VIDEO" class="image-upload h-10 w-10 bg-gray-500 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-cyan-500 to-blue-700 tooltip">
                                        <label for="for-video">
                                            <RiVideoAddFill className='cursor-pointer text-white' />
                                        </label>
                                        <input id="for-video" type="file" className='w-2 hidden' />
                                    </div>



                                </div>

                                <div>
                                    <button className=' rounded-md bg-gray-600 text-white border-none py-1 px-4 hover:bg-gradient-to-r from-cyan-500 to-blue-700'>Post</button>
                                </div>
                            </div>
                        </div>
                        {
                            getPost.map((post, index) => <div key={index}>
                                <h1>{post.audience}</h1>
                                {
                                    post.images.map(img => <img src='' />)
                                }
                               
                                </div>)
                        }

                    </div>

                </div>




                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />


                <div className="modal" id='closeModal'>
                    <div className="modal-box">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                        <h3 className="text-lg font-bold">Who do you want to show this post to?</h3>
                        <div className='flex flex-col'>
                            <div> {
                                options.map((option, index) => <div key={index} className='hover:bg-gray-300 flex py-4 px-4 items-center justify-between flex-start'>

                                    <div className='flex items-center'>
                                        <span className='text-3xl mr-4'> {option.icon}</span>

                                        <div className='flex items-start flex-col'><span className='text-xl font-semibold'>{option.name}</span> <span>{option.description}</span></div>
                                    </div>

                                    <input type="radio" value={option.name} checked={selectedValue === option.name} onChange={(e) => setSelectedValue(e.target.value)} className='w-8 h-8 bg-orange-600' />

                                </div>)
                            }</div>


                            <div className='flex justify-end gap-x-4 pt-6'>
                                <label className='btn' htmlFor="my-modal-3">Cancel</label>
                                <label className='btn' type="button" htmlFor="my-modal-3" onClick={handleSaveAudience}>Ok</label>
                            </div>
                        </div>

                    </div>
                </div>

            </section>}

        </form>
    );
};

export default CreatePost;