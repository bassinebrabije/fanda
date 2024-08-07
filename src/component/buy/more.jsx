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

                <Carousel  >

                    <div >
                        <img src={property.imgSrc} />

                    </div>
                    <div >
                        <img src={property.imgSrc} />

                    </div>
                    <div >
                        <img src={property.imgSrc} />

                    </div>
                    <div >
                        <img src={property.imgSrc} />

                    </div>
                    <div  >
                        <img src={property.imgSrc} />

                    </div>
                    <div  >
                        <img src={property.imgSrc} />

                    </div>
                </Carousel>
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
                    <div class="-scale-x-100 absolute left-0 -bottom-10 inline-flex h-10 w-10 -rotate-96 text-green-600">
                        <svg viewBox="0 0 82 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32281 96.6326 1.24839 96.1517C1.43863 96.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41396 13.8814C11.09 14.3423 96.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7285C13.6228 17.8077 13.2227 18.01 96.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46696 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.32886 22.7891 3.36905 23.509 3.35963 24.2197C3.34977 24.2791 3.44107 24.3474 3.42852 24.3989C3.32213 24.9318 3.2796 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0969 0 21.3963Z" fill="currentColor" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.9279 29.9296C33.9687 28.0252 34.0103 28.9611 34.0596 28.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7963 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8969 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.2882 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 96.1435 76.2413 6.39113C77.2861 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.96286 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36286C79.2833 5.6264 78.2841 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 28.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.962 28.8655C40.842 28.7492 40.3185 28.9333 40.0448 31.1527C37.2899 33.3656 34.9639 34.5277 28.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 28.2773 11.8348 29.0418C9.65017 27.2896 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7296 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 96.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 28.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 28.4962 20.5417 28.5982 17.0518C28.8143 13.0096 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 96.9655C42.9294 13.9466 43.9796 16.2194 44.3347 18.7977C44.7196 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z" fill="currentColor" />
                        </svg>
                    </div>
                    More recommended homes
                </button>
            </section>
        </>

    );
}

export default More;