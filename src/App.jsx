import React from 'react';
import api from './api/axiosConfig'
import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import NotFound from './components/noFound/NotFound'
import Trailer from './components/trailer/Trailer'
import Header from './components/header/Header'
import Reviews from './components/review/Reviews'
import Footer from './components/footer/Footer'





function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true)


  const getMovies = async () => {

    try {

      const response = await api.get("/api/v1/movies");

      setMovies(response.data);
      setLoading(false)

    }
    catch (err) {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {

    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);

      const singleMovie = response.data;

      setMovie(singleMovie);

      setReviews(singleMovie.reviews);

      setLoading(false)



    }
    catch (error) {
      console.error(error);
    }

  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <body>

      <Header />
      <main className='flex flex-col min-h-[100vh]'>
        {/* <KindeProvider
        clientId="aa5bf8bd52534f0d995ef17ea9286047"
        domain="https://dfwsoftware.kinde.com"
        // redirectUri="http://localhost:5173"
        // logoutUri="http://localhost:5173"
        logoutUri={window.location.origin}
        redirectUri={window.location.origin}
      > */}





        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home loading={loading} setLoading={setLoading} movies={movies} />} ></Route>
            {/* <Route path="/Login-Register" element={<LoginRegister />} ></Route> */}
            <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
            <Route path="/Reviews/:movieId" element={<Reviews
              getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}
            />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </main>
      <Footer />
    </body>
  )
}

export default App
