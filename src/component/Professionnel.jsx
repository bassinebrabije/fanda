import React from 'react'

import V from '../images/bureau.png'
import V2 from '../images/commerce2.png'
import V3 from '../images/industrie.png'

function Professionnel() {
    return (
        <div className="mt-10">

            <div className="text-center mb-4 ">
                <h1 classNameName="mt-10 text-2xl sm:text-4xl font-bold text-gray-800">Immobilier Professionnel
                </h1>
                <p className="mt-2 text-gray-600">Discover a variety of options tailored to your needs.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-4 pb-8 mx-auto">
                <div className="z-10 max-w-sm p-6 text-center">
                    <img src={V} className="w-28 mx-auto text-black" />
                    <h2 className="mt-2 text-lg font-semibold text-gray-800">Bureaux</h2>
                    <p className="mt-2 text-gray-800">
                        Experience the power of Tailwind CSS - Play around in our playground, with live preview and a user-friendly code editor.
                    </p>
                </div>

                <div className="z-10 max-w-sm p-6 text-center">
                    <img src={V2} className="w-28 mx-auto text-black" />
                    <h2 className="mt-2 text-lg font-semibold text-gray-800">Locaux commerciaux</h2>
                    <p className="mt-2 text-gray-800">
                        Create, save, share and organize your components with ease. Save your components, share them with others, and keep your favorites at hand for easy access.
                    </p>
                </div>

                <div className="z-10 max-w-sm p-6 text-center">
                    <img src={V3} className="w-28 mx-auto text-black" />
                    <h2 className="mt-2 text-lg font-semibold text-gray-800">Industriel / Entrepôts</h2>
                    <p className="mt-2 text-gray-800">
                        Make a name for yourself - Create a good profile and showcase your designing skills to the world.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Professionnel