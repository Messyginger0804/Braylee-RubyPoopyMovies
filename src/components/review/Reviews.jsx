import React, { useState } from 'react'
import ReviewForm from './ReviewForm'
// import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import Braylee from '../../../public/braylee-removebg-cropped.png'
import Ruby from '../../../public/ruby-removebg-preview.png'
import { LoadingComponent } from '../LoadingComponent';



const Reviews = ({ getMovieData, movie, reviews, setReviews,
    // loading, setLoading
}) => {

    const [loading, setLoading] = useState(true)

    // let loading = true
    // let setLoading = 'loading'


    // console.log(movie)


    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId)
        setTimeout(function async() {
            setLoading(false)
            console.log('Boolean is now false after 3 seconds.');
        }, 1000);
    }, [movieId])
    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText.current;

        try {
            const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: movieId });

            const updatedReviews = [...reviews, { body: rev.value }];

            rev.value = "";

            setReviews(updatedReviews);
            // setLoading(false)

            // console.log(response);
        }
        catch (err) {
            console.error(err);
        }
    }
    if (loading) {
        return (
            <div className='m-10 text-yellow-600 '>
                <LoadingComponent loading={loading} setLoading={setLoading} />
            </div>
        )
    } else {
        return (
            <section className='my-16 grid col-span-2 text-white'>
                <div className='m-6 flex flex-wrap md:grid md:grid-cols-2 md:justify-items-center mt-10'>

                    <div className="movie-poster rounded w-52 md:w-fit md:h-[500px] border-[1px] border-solid border-yellow-600">
                        <img className='h-full w-full object-contain rounded' src={movie?.poster} alt={movie?.title} />
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex m-4'>

                            <img className='h-20 w-20' src={Braylee} />

                            <div className='m-6'>
                                <h2 className='text-white text-center border-b-2 w-[75%] mb-4 text-3xl'>Braylee's Review</h2>
                                <p className='text-white text-xs md:text-base'>
                                    {movie?.brayleeReview}
                                </p>
                            </div>
                        </div>
                        <div className='flex m-4'>

                            <img className='h-20 w-20' src={Ruby} />
                            <div className='m-6'>
                                <h2 className='text-white text-center border-b-2 w-[75%] mb-4 text-3xl'>Ruby's Review</h2>
                                <p className='text-white text-xs md:text-base'>
                                    {movie?.rubyReview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='md:ml-36'> */}

                {/* <div className='flex flex-col md:flex-row md:ml-40 md:gap-16 items-center m-6'> */}
                <div className='m-6 flex flex-wrap md:grid md:grid-cols-2 md:justify-items-center mt-10'>
                    <div className='mr-14'>

                        <ReviewForm revText={revText} addReview={addReview} movie={movie} />
                    </div>


                    <div className='overflow-auto max-h-80 mt-4'>
                        {
                            reviews?.map((review) => {
                                // console.log(review)
                                return (
                                    <div key={review.id} className='text-white border-solid m-2 p-2 border-yellow-700 border-2 right h-fit flex flex-col justify-end w-[300px] rounded'>
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
}

export default Reviews