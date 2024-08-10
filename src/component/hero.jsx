import React, { useState } from 'react';
import Heroimg from '../images/home.jpg';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const [selectedType, setSelectedType] = useState('');
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleSearchClick = () => {
        if (selectedType) {
            navigate(`/Acheter?type=${selectedType}`); // Navigate to Buy page with selected type
        }
    };

    return (
        <div className="relative container sm:mt-2 px-6 py-16 mx-auto text-center">
            <img
                src={Heroimg}
                alt="Background"
                className="absolute inset-0 object-cover w-full h-full sm:rounded-lg"
            />
            <div className="relative z-10 max-w-lg mx-auto p-8">
                <h1 style={{ fontFamily: '"Playfair Display", serif' }} className="text-3xl font-bold text-[#FFF] lg:text-4xl">
                    Trouvez la Maison de Vos Désirs
                </h1>
                <p className="mt-6 text-[#FFF]">
                    À Prestige F&A Immobilier, nous trouvons la propriété idéale pour votre style de vie avec un service exceptionnel.
                </p>
                <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md">
                    <form className="flex flex-col md:flex-row">
                        <select
                            id="type-bien"
                            className="flex-1 py-2 sm:px-4 sm:py-2 m-1 text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none"
                            onChange={handleSelectChange}
                            defaultValue=""
                        >
                            <option value="" disabled hidden>Type de Bien</option>
                            <option>Appartement</option>
                            <option>Studio</option>
                            <option>Villa</option>
                            <option>Maison</option>
                            <option>Immo Neuf</option>
                        </select>

                        <button
                            type="button"
                            onClick={handleSearchClick} // Handle click on search button
                            className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-[#2db34a] rounded-md hover:bg-[#0b7d89] focus:outline-none"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Hero;
