import React from 'react'
import Buy from '../images/buy.jpg'
import Family from '../images/family.jpg'
import Happy from '../images/happy.jpg'
import Fiable from '../images/Fiable.jpg'
import Relaxing from '../images/relaxing.jpg'
function Decouvrez() {
    return (
        <>
            <div className=" justify-between  flex  px-8 sm:pt-10 sm:px-20 ">
                <h1 className="text-left text-3xl text-[#2db34a] sm:text-4xl font-bold " style={{ fontFamily: '"Playfair Display", serif' }}>Vivez l'Immobilier
                </h1>
            </div>
            <section className="bg-white">
                <div className="py-4 px-8 mx-auto max-w-screen-xl sm:py-10 lg:px-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src={Relaxing} alt={Relaxing} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    title={Relaxing}
                                    loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Simple</h3>
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                <img src={Buy} alt={Buy} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    title={Buy}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">En Confiance</h3>
                            </div>
                            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src={Happy} alt={Happy} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        title={Happy}
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Heureux</h3>
                                </div>
                                <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src={Fiable} alt={Fiable} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        title={Fiable}
                                        loading="lazy" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Fiable</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src={Family} alt={Family} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    title={Family}
                                    loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Serein</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Decouvrez