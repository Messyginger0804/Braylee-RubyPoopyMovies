import Slideshow from "../slideshow/Slideshow"


function Home({ movies }) {
    return (
        <div>
            <Slideshow movies={movies} />
        </div>
    )
}

export default Home