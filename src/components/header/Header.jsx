import React from 'react'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { BiCameraMovie } from "react-icons/bi";
import { Link } from '@mui/material';


function Header() {
    return (
        <nav className='bg-black/90 text-yellow-600 p-2'>
            <div className='flex justify-items-center justify-between'>
                <Link style={{ textDecoration: 'none' }} textDec className='text-yellow-600 decoration-0' href='/'>
                    <div className='text-yellow-600 font-sans flex flex-wrap md:gap-2 decoration-0 justify-start items-center md:text-2xl underline-offset-0'>
                        <FontAwesomeIcon icon={faVideoSlash} />
                        Braylee & Ruby💩 Movies
                    </div>
                </Link>
                <div className='flex justify-end mr-2 mb-1 gap-4 text-sm'>
                    <a className='rounded-xl border-2 border-yellow-600 p-1 cursor-pointer active:bg-yellow-600 active:text-black'>Login</a>
                    <a className='rounded xl border-2 border-yellow-600 p-1 cursor-pointer active:bg-yellow-600 active:text-black'>Register</a>
                </div>
            </div>
        </nav>
    )
}

export default Header