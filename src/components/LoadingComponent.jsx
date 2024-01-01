import React from 'react'
import { ClipLoader, ClockLoader } from 'react-spinners'

export const LoadingComponent = ({ loading, setLoading }) => {

    if (loading) {
        return (
            <section className='loading text-yellow-600 items-center text-center'>
                <div
                    className='flex items-center gap-2 justify-center'
                >
                    <h3 className='text-3xl'>The data is loading. </h3>
                    <ClipLoader
                        color='gold'
                        loading={loading}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
                <p className='text-sm'>Sorry I can't afford to pay for hosting of the database. So I repurposed my Chromebook as a server. It takes a minute for it to bootup and send the data. I hope you enjoy the project. 😁</p>
            </section>
        )
    }
}