import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";

function Slideshow({ movies }) {
    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);
    }
    return (
        <div className='movie-carousel-container w-screen h-screen to-black/90 bg-black'>
            <Carousel>
                {
                    movies?.map((movie) => {

                        // {
                        //     const movieBackdrop = movie.backdrops;

                        //     const randomBackdrop = Math.floor(Math.random() * movieBackdrop.length);
                        // }
                        return (
                            <Paper key={movie.imdbId}>
                                <div className='movie-card-container h-[600px] bg-black bg-gradient-to-b from-transparent from-0% to-black/50'>
                                    <div className="movie-card bg-no-repeat w-full h-full bg-cover bgImg" style={{
                                        "--img": `url(
                                        ${movie?.backdrops[0]}
                                        )` }}>
                                        <div className="movie-detail absolute top-[200px] w-full flex flex-col items-center md:flex-row md:justify-between">
                                            <div className="movie-poster rounded md:m-2 h-[300px] border-[1px] border-solid border-yellow-600">
                                                <img className='h-full w-full object-contain rounded' src={movie?.poster} alt={movie?.title} />
                                            </div>
                                            <div className="invisible md:visible movie-title text-white flex items-center text-lg md:text-4xl font-serif ">
                                                <h4>{movie.title}</h4>
                                            </div>

                                            <div className="movie-buttons-container items-center w-[300px] space-y-[10%] flex justify-center md:flex-none">
                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>                                                    {/* <Link to={`/Trailer/${movie.trailerLink}` && console.log(movie.trailerLink)}> */}
                                                    <div className="play-button-icon-container p-0 m-0 w-[150px]">
                                                        <FontAwesomeIcon className="play-button-icon p-0 m-0 text-yellow-600 md:text-[3rem] text-[2rem] cursor-pointer md:hover:text-[4rem] hover:text-[3rem] hover:text-white"
                                                            icon={faCirclePlay}
                                                        />
                                                    </div>
                                                </Link>

                                                <div className="movie-review-button-container text-yellow-300 hover:text-slate-100">
                                                    <button className='underline' onClick={() => reviews(movie.imdbId)} >Reviews</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Slideshow