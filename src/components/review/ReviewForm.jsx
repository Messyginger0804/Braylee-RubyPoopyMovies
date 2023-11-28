import React from 'react'

function ReviewForm({ addReview, form, revText }) {
    return (
        <form
            ref={form} onSubmit={addReview}
            className='bg-black text-gray-100'
        // ref={form} onSubmit={sendEmail(e)}
        >
            <div className='shadow-lg shadow-yellow-50 w-80 md:w-96'>

                <p className='m-4'>Write a review?</p>

                <textarea ref={revText} className='p-1 border-2 w-full text-black border-yellow-600' rows={7} required></textarea>
            </div>
            <button type="submit" className='hover:bg-black rounded hover:text-yellow-600 bg-yellow-600 p-2 text-gray-800 border-2 border-yellow-600'>submit</button>
        </form>
    )
}

export default ReviewForm