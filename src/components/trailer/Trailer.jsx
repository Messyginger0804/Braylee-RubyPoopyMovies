import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

function Trailer() {

    const params = useParams();
    const key = params.ytTrailerId;

    console.log(key)

    return (
        <div className="react-player-container h-[90vh]">
            {(key != null) ? <ReactPlayer controls="true" playing={true} url={`https://www.youtube.com/watch?v=${key}`}
                /* {(key != null) ? <ReactPlayer controls="true" playing={true} url={`${key}`} */
                width='100%' height='100%' /> : null}
        </div>
    )
}

export default Trailer