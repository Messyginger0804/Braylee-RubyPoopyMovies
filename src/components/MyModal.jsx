import React from 'react'

function MyModal({ isVisible, onClose }) {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    return (
        <div onClick={handleClose} id='wrapper' className='fixed insert-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center text-black'>
            <div className='w-[600px] flex justify-center `my-[5%] max-h-c p-2 h-auto text-center left-0 bottom-0 bg-opacity-50 overflow-auto'>
                <button onClick={() => onClose()} className='place-self-center bg-red-200 '>X</button>
                <div className='flex justify-center bg-yellow-700 p-2 rounded w-[350px]'>
                    <div className='flex flex-col justify-center'>

                        <h3 className='text-xl font-semibold text-gray-800'>Modal Title</h3>


                        <input type="text" placeholder='name' className='w-full text-center my-2' />
                        <input type="text" placeholder='password' className='w-full text-center border-2' />

                        <button>login</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyModal