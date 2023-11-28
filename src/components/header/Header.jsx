import React from 'react'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { BiCameraMovie } from "react-icons/bi";
import { Link } from '@mui/material';
// import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


{/* <button onClick={register} type="button">Register</button>
<button onClick={login} type="button">Log In</button> */}


function Header() {
    // const { login, register } = useKindeAuth();


    return (
        <nav className='bg-black/90 text-yellow-600 p-2'>
            <div className='flex justify-items-center justify-between'>
                <Link style={{ textDecoration: 'none' }} textDec className='text-yellow-600 decoration-0' href='/'>
                    <div className='text-yellow-600 font-sans flex flex-wrap md:gap-2 decoration-0 justify-start items-center md:text-2xl underline-offset-0'>
                        <FontAwesomeIcon icon={faVideoSlash} />
                        Braylee & Ruby💩 Movies
                    </div>
                </Link>
                {/* <div className='flex justify-end mr-2 mb-1 gap-4 text-sm'>
                    <button onClick={register} type="button" className='rounded-xl border-2 border-yellow-600 p-1 cursor-pointer active:bg-yellow-600 active:text-black'>Login</button>
                    <button onClick={login} type="button" className='rounded xl border-2 border-yellow-600 p-1 cursor-pointer active:bg-yellow-600 active:text-black'>Register</button>
                </div> */}

                <div className='flex gap-4 text-3xl'>
                    <a target="_blank" rel='https://github.com/Messyginger0804'> <FaGithub className='cursor-pointer hover:text-slate-100' /></a>
                    <a target="_blank" rel='https://github.com/Messyginger0804'> <FaLinkedin className='cursor-pointer hover:text-slate-100' /></a>
                    <a target="_blank" rel='https://github.com/Messyginger0804'> <CgProfile className='cursor-pointer hover:text-slate-100' /></a>

                </div>
            </div>
        </nav>
    )
}

export default Header