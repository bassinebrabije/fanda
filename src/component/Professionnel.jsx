import React from 'react'

import V from '../images/buyahome.png'
import V2 from '../images/sell.png'
import V3 from '../images/rent.png'

function Professionnel() {
    return (
        <>
            <div className='bg-[#f7f7f7] pt-1 pb-12 '>
                <ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start px-12 sm:px-20 mt-10">
                    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start shadow-lg border rounded-xl p-5 bg-white	">
                        <div class="order-1 sm:ml-6 xl:ml-0">
                            <h3 class="mb-1 text-xl text-slate-900 font-bold">
                                Buy a home
                            </h3>
                            <div class="prose prose-slate prose-sm text-slate-600">
                                <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                            </div><a
                                class="group inline-flex items-center h-9  hover:scale-105 rounded-xl  text-sm font-semibold whitespace-nowrap px-3 bg-[#2db34a] text-white  mt-6"
                                href="">Browse homes
                                <svg class="overflow-visible ml-3 text-white "
                                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M0 0L3 3L0 6"></path>
                                </svg></a>
                        </div>
                        <img src={V} alt="" class="mb-6  rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
                    </li>
                    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start shadow-lg border rounded-xl p-5  bg-white">
                        <div class="order-1 sm:ml-6 xl:ml-0">
                            <h3 class="mb-1 text-xl text-slate-900 font-bold">
                                Sell a home
                            </h3>
                            <div class="prose prose-slate prose-sm text-slate-600">
                                <p>No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
                            </div><a
                                class="group inline-flex items-center h-9 hover:scale-105  rounded-xl text-sm font-semibold whitespace-nowrap px-3 bg-[#2db34a] text-white  mt-6"
                                href="">See your options
                                <svg class="overflow-visible ml-3 text-white "
                                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M0 0L3 3L0 6"></path>
                                </svg></a>
                        </div>
                        <img src={V2} alt="" class="mb-6  rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
                    </li>
                    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start shadow-lg border rounded-xl p-5  bg-white">
                        <div class="order-1 sm:ml-6 xl:ml-0">
                            <h3 class="mb-1 text-xl text-slate-900 font-bold">
                                Rent a home
                            </h3>
                            <div class="prose prose-slate prose-sm text-slate-600">
                                <p>We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>

                            </div><a
                                class="group inline-flex hover:scale-105 items-center h-9 rounded-xl text-sm font-semibold whitespace-nowrap px-3 bg-[#2db34a] text-white  mt-6"
                                href="">Find rentals

                                <svg class="overflow-visible ml-3 text-white "
                                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M0 0L3 3L0 6"></path>
                                </svg></a>
                        </div>
                        <img src={V3} alt="" class="mb-6  rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Professionnel