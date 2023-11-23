import api from './api/axiosConfig'
import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'

function App() {
  const [movies, setMovies] = useState()

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies")
      console.log(response.data)

      setMovies(response.data)
    } catch (error) {
      console.error(error)

    }


  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />} ></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
