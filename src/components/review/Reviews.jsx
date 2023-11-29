import React from 'react'
import ReviewForm from './ReviewForm'
// import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import Braylee from '../../../public/braylee-removebg-cropped.png'
import Ruby from '../../../public/ruby-removebg-preview.png'



const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {

    console.log(movie)

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, [])

    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText.current;

        try {
            const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: movieId });

            const updatedReviews = [...reviews, { body: rev.value }];

            rev.value = "";

            setReviews(updatedReviews);
            console.log(response);
        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <section className='my-16 grid col-span-2'>
            <div className='m-6 flex flex-wrap md:grid md:grid-cols-2 md:justify-items-center mt-10'>

                <div className="movie-poster rounded w-fit md:h-[500px] border-[1px] border-solid border-yellow-600">
                    <img className='h-full w-full object-contain rounded' src={movie?.poster} alt={movie?.title} />
                </div>

                <div className='flex flex-col'>
                    <div className='flex m-4'>

                        <img className='h-20 w-20' src={Braylee} />

                        <p className='text-white m-6'>
                            {movie?.brayleeReview}
                        </p>
                    </div>
                    <div className='flex m-4'>

                        <img className='h-20 w-20' src={Ruby} />

                        <p className='text-white m-6'>
                            {movie?.rubyReview}
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className='md:ml-36'> */}

            {/* <div className='flex flex-col md:flex-row md:ml-40 md:gap-16 items-center m-6'> */}
            <div className='m-6 flex flex-wrap md:grid md:grid-cols-2 md:justify-items-center mt-10'>
                <div className='mr-14'>

                    <ReviewForm revText={revText} addReview={addReview} movie={movie} />
                </div>


                <div className='overflow-scroll max-h-80'>
                    {
                        reviews?.map((review) => {
                            console.log(review)
                            return (
                                <div key={review.id} className='text-white border-solid m-2 p-2 border-yellow-700 border-2 right h-fit flex flex-col justify-end w-[300px]'>
                                    {review.body}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* </div> */}

        </section>
    )
}

export default Reviews