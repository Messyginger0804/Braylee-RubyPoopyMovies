import React from 'react'

function Footer() {
    return (
        <footer className='text-gray-900 w-full bg-yellow-600 p-8 m-2'>
            <div className="w-full mt-6 md:mt-10 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
                <span className="text-center">
                    © 2023 JC Software. All rights reserved. 😜
                </span>
                {/* <Link href='/sitemap.xml' className='text-center underline hover:font-bold'>
                    sitemap.xm
                </Link> */}
                <div className='text-center'>
                    Made with &hearts; by <a href='https://jcashleyportfolio.netlify.app/' target="_blank" className='underline hover:font-bold'>JC Ashley </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer