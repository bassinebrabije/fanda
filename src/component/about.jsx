import React from 'react'


import About from '../images/about.png'
function about() {
    return (
        <>
            <section class="">
                <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div class="max-w-lg">
                            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                            <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                                eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                                Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                                malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                        </div>
                        <div class="mt-12 md:mt-0">
                            <img src={About} alt="About Us Image" class="object-cover rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default about