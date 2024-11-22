import React from 'react'
import Navbar from './Navbar'
import pic from '../assets/banner.png'
import aboutPic from '../assets/about.png' // Make sure to add your about image

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img src={pic} alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

                <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-6">Explore the World</h2>
                    <p className="sm:text-lg text-base text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p>

                    <button
                        type="button"
                        className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
                        Book Now
                    </button>
                </div>
            </div>

            {/* About Section */}
            <div className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Image Column */}
                        <div className="relative">
                            <img 
                                src={aboutPic} 
                                alt="About Us" 
                                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg hidden md:block">
                                <p className="font-bold text-2xl">10+</p>
                                <p className="text-sm">Years of Excellence</p>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">About Our Travel Agency</h2>
                            <div className="w-20 h-1 bg-blue-600"></div>
                            <p className="text-gray-600">
                                Welcome to our world of adventure and discovery. We specialize in creating 
                                unforgettable travel experiences that cater to your unique preferences and dreams.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-gray-600">Personalized Travel Planning</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-gray-600">Luxury Accommodations</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-gray-600">24/7 Travel Support</p>
                                </div>
                            </div>
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home