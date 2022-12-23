import React from 'react';

const CreatePost = ({ isModalOpen, setisModalOpen }) => {
    return (
        <section>

            {isModalOpen && <section>
                <input type="checkbox" id="5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box p-0">
                        <div className='flex items-center justify-between border-b-2 pt-16'>
                            <label onClick={() => setisModalOpen(false)} className='btn btn-sm btn-circle absolute right-4 top-4'>✕</label>
                            <h3 className="text-lg font-bold absolute top-4 left-4">Create a post!</h3>
                        </div>

                        <div className='mt-4'>
                            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        </div>

                    </div>
                </div>
            </section>}

        </section>
    );
};

export default CreatePost;