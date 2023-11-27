import React from 'react'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BiCameraMovie } from "react-icons/bi";


function Header() {
    return (
        <nav className='bg-black/90 text-yellow-600 p-2'>
            <div className='flex justify-items-center justify-between'>
                <div className='font-sans flex gap-2 justify-start items-center text-2xl'>
                    <FontAwesomeIcon icon={faVideoSlash} />
                    Braylee & Ruby 💩 Movies
                </div>
                <div className='flex justify-end mr-2 mb-1 gap-4'>
                    <a className='rounded-xl border-2 border-yellow-600 p-1 cursor-pointer active:bg-yellow-600 active:text-black'>Login</a>
                    <a className='rounded xl border-2 border-yellow-600 p-1 cursor-pointer active:bg-yellow-600 active:text-black'>Register</a>
                </div>
            </div>
        </nav>
    )
}

export default Header