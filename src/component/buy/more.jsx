import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function More() {
    const location = useLocation();
    const { property } = location.state;

    return (
        <>

            <div className=" px-10 sm:px-20 mt-5">
                <NavLink to="/buy">
                    <h1 className="text-sm  text-[#2db34a]">  Back to Home</h1>
                </NavLink>
                <div className='flex items-center justify-center '>
                    <div className='sm:h-[60%] sm:w-[60%]'>
                        <Carousel>
                            <div>
                                <img src={property.imgSrc} className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <img src={property.imgSrc} className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <img src={property.imgSrc} className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <img src={property.imgSrc} className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <img src={property.imgSrc} className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <img src={property.imgSrc} className='w-full h-full object-cover' />
                            </div>
                        </Carousel>
                    </div>
                </div>

                <h2 className="text-2xl font-bold ">Property Details</h2>
                <img src={property.imgSrc} alt={`Property at ${property.address}`} className="w-full h-48 object-cover" />
                <p className="text-lg font-medium">{property.price}</p>
                <p className="text-md">{property.address}</p>
                <p className="text-md">{property.details.size}</p>
                <p className="text-md">{property.details.beds}</p>
                <p className="text-md">{property.details.baths}</p>

            </div>

            <h2 className=" px-10 sm:px-20 text-2xl font-bold items-start">Similar Listings</h2>
            <section className="flex flex-col items-center bg-white">

                <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:gap-8">
                    <article className="mb-4  cursor-pointer  overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl">
                        <div className="relative">
                            <img src="https://componentland.com/images/BVthksHI2Avvq3KHofBLS.png" alt="Beautiful property in Baton Rouge" className="w-full h-48 object-cover hover:scale-110 hover:rotate-1		" />
                            <span className="absolute top-0 left-0 m-2 rounded-full bg-green-600 px-2 text-center text-sm font-medium text-white">New</span>
                        </div>
                        <div className="p-4">
                            <div className="pb-6">
                                <a href="#" className="text-lg hover:text-green-600 font-medium duration-500 ease-in-out">$50000</a> <br />
                                <a href="#" className=" hover:text-green-600 font-medium duration-500 ease-in-out">238 Baton Rouge, LA 70809, USA</a> <br />
                                <a href="#" className="text-sm text-[#808080] font-medium duration-500 ease-in-out">238 Baton Rouge, LA 70809, USA</a>

                            </div>
                            <ul className="box-border flex list-none items-center border-t border-solid border-gray-200 px-0 pt-4">
                                <li className="mr-4 flex items-center text-left">
                                    <i className="mr-2 text-2xl text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" />
                                        </svg>
                                    </i>
                                    <span className="text-xs">9600 sq ft</span>
                                </li>
                                <li className="mr-4 flex items-center text-left">
                                    <i className="mr-2 text-2xl text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22 96c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h96.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z" /></svg>
                                    </i>
                                    <span className="text-xs">4 Beds</span>
                                </li>
                                <li className="flex items-center text-left">
                                    <i className="mr-2 text-2xl text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" /></svg>
                                    </i>
                                    <span className="text-xs">4 Baths</span>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className="mb-4  cursor-pointer  overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl">
                        <div className="relative">
                            <img src="https://componentland.com/images/BVthksHI2Avvq3KHofBLS.png" alt="Beautiful property in Baton Rouge" className="w-full h-48 object-cover hover:scale-110 hover:rotate-1		" />
                            <span className="absolute top-0 left-0 m-2 rounded-full bg-green-600 px-2 text-center text-sm font-medium text-white">New</span>
                        </div>
                        <div className="p-4">
                            <div className="pb-6">
                                <a href="#" className="text-lg hover:text-green-600 font-medium duration-500 ease-in-out">$50000</a> <br />
                                <a href="#" className=" hover:text-green-600 font-medium duration-500 ease-in-out">238 Baton Rouge, LA 70809, USA</a> <br />
                                <a href="#" className="text-sm text-[#808080] font-medium duration-500 ease-in-out">238 Baton Rouge, LA 70809, USA</a>

                            </div>
                            <ul className="box-border flex list-none items-center border-t border-solid border-gray-200 px-0 pt-4">
                                <li className="mr-4 flex items-center text-left">
                                    <i className="mr-2 text-2xl text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" />
                                        </svg>
                                    </i>
                                    <span className="text-xs">9600 sq ft</span>
                                </li>
                                <li className="mr-4 flex items-center text-left">
                                    <i className="mr-2 text-2xl text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22 96c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h96.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z" /></svg>
                                    </i>
                                    <span className="text-xs">4 Beds</span>
                                </li>
                                <li className="flex items-center text-left">
                                    <i className="mr-2 text-2xl text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" /></svg>
                                    </i>
                                    <span className="text-xs">4 Baths</span>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className="mb-4  cursor-pointer  overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl">
                        <div className="relative">
                            <img src="https://componentland.com/images/BVthksHI2Avvq3KHofBLS.png" alt="Beautiful property in Baton Rouge" className="w-full h-48 object-cover hover:scale-110 hover:rotate-1		" />
                            <span className="absolute top-0 left-0 m-2 rounded-full bg-green-600 px-2 text-center text-sm font-medium text-white">New</span>
                        </div>
                        <div className="p-4">
                            <div className="pb-6">
                                <a href="#" className="text-lg hover:text-green-600 font-medium duration-500 ease-in-out">$50000</a> <br />
                                <a href="#" className=" hover:text-green-600 font-medium duration-500 ease-in-out">238 Baton Rouge, LA 70809, USA</a> <br />
                                <a href="#" className="text-sm text-[#808080] font-medium duration-500 ease-in-out">238 Baton Rouge, LA 70809, USA</a>

                            </div>
                            <ul className="box-border flex list-none items-center border-t border-solid border-gray-200 px-0 pt-4">
                                <li className="mr-4 flex items-center text-left">
                                    <i className="mr-2 text-2xl text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" />
                                        </svg>
                                    </i>
                                    <span className="text-xs">9600 sq ft</span>
                                </li>
                                <li className="mr-4 flex items-center text-left">
                                    <i className="mr-2 text-2xl text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22 96c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h96.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z" /></svg>
                                    </i>
                                    <span className="text-xs">4 Beds</span>
                                </li>
                                <li className="flex items-center text-left">
                                    <i className="mr-2 text-2xl text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" /></svg>
                                    </i>
                                    <span className="text-xs">4 Baths</span>
                                </li>
                            </ul>
                        </div>
                    </article>

                </div>
                <button class="relative mt-4 rounded-lg border-2 border-green-600 w-[16rem] hover:scale-105 bg-green-600  px-6 py-2 font-medium text-white transition">
                    More recommended homes
                </button>
            </section>
        </>

    );
}

export default More;
