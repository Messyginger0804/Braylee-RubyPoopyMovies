import React from 'react';
import Slideshow from "../slideshow/Slideshow"
import { LoadingComponent } from '../LoadingComponent'


function Home({ movies, loading, setLoading }) {
    return (
        <div>
            <div>

                <LoadingComponent loading={loading} setLoading={setLoading} />
            </div>
            <div>
                <Slideshow movies={movies} />
            </div>
        </div>
    )
}

export default Home