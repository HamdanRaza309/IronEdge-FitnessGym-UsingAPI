import React from 'react'
import { Link } from 'react-router-dom'

export default function LetsTalk() {
    return (
        <div className='bg-white p-6 sm:p-10 md:p-14 lg:p-20 xl:p-28 rounded-lg shadow-lg text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold my-3'>
                Ready to Achieve Your Fitness Goals?
                <span className="text-orange-600 text-3xl sm:text-4xl md:text-5xl px-2 py-1 inline-block rounded-md font-bold my-3">
                    Join Us Today!
                </span>
            </h1>
            <p className='text-base sm:text-lg md:text-xl mb-10'>
                Discover personalized training and top-notch facilities at IronEdge. Start your fitness journey with us!
            </p>
            <Link to="/contact" className="bg-gray-800 text-white font-bold py-2 px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 rounded-full transition duration-300 hover:bg-gray-900">
                Contact Us
            </Link>
        </div>
    )
}
