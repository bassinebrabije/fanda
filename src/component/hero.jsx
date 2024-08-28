import React, { useEffect, useState } from "react";
import Heroimg from "../images/home.jpg";
import { useNavigate } from "react-router-dom";
import Appartement from "../images/svg/Appartement.svg";
import Bureau from "../images/svg/Bureau.svg";
import Immeuble from "../images/svg/immeuble.svg";
import Localcommercial from "../images/svg/Local commercial.svg";
import Maison from "../images/svg/Maison.svg";
import Terrain from "../images/svg/Terrain.svg";
import Acheter from "../images/svg/Acheter.svg";
import Louer from "../images/svg/Louer.svg";
import Villa from "../images/svg/villa.svg";


function Hero() {
    const [selectedType, setSelectedType] = useState(null);
    const [selectedAction, setSelectedAction] = useState(null);
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [isActionOpen, setIsActionOpen] = useState(false);
    const navigate = useNavigate();



    const options = [
        { label: "Appartement", imgSrc: Maison, value: "Appartement" },
        { label: "Bureau", imgSrc: Bureau, value: "Bureau" },
        { label: "Immeuble", imgSrc: Appartement, value: "Immeuble" },
        { label: "Local commercial", imgSrc: Localcommercial, value: "Local commercial" },
        { label: "Hôtel", imgSrc: Immeuble, value: "Hôtel" },
        { label: "Terrain", imgSrc: Terrain, value: "Terrain" },
        { label: "Villa", imgSrc: Villa, value: "Villa" },
    ];

    const actions = [
        { label: "Acheter", imgSrc: Acheter, value: "Acheter" },
        { label: "Louer", imgSrc: Louer, value: "Louer" },
    ];

    const handleTypeSelectChange = (option) => {
        setSelectedType(option);
        setIsTypeOpen(false);
    };

    const handleActionSelectChange = (action) => {
        setSelectedAction(action);
        setIsActionOpen(false);
    };

    const handleSearchClick = () => {
        if (selectedType && selectedAction) {
            navigate(`/${selectedAction.value}?type=${selectedType.value}`);
        }
    };

    return (
        <section
            className="container py-20 mx-auto text-center sm:rounded-lg bg-cover bg-center  mt-16 sm:mt-24"
            style={{ backgroundImage: `url(${Heroimg})` }}

        >
            <div className="relative z-10 max-w-4xl mx-auto p-10 rounded-lg" >
                <h1
                    style={{ fontFamily: '"Playfair Display", serif' }}
                    className="text-3xl font-bold text-[#FFF] lg:text-4xl"
                >
                    Trouvez la Maison de Vos Désirs
                </h1>
                <p className="mt-6 text-[#FFF]" >
                    À Prestige F&A Immobilier, nous trouvons la propriété idéale pour
                    votre style de vie avec un service exceptionnel.
                </p>

                {/* Container for Dropdowns and Button */}
                <div className="flex flex-col  sm:flex-row justify-center gap-4 mt-6" >
                    {/* Type Dropdown */}
                    <div className="relative w-full  max-w-screen-sm sm:max-w-xs">
                        <div
                            className="relative cursor-pointer"
                            onClick={() => setIsTypeOpen(!isTypeOpen)}
                        >
                            <div className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm">
                                <div className="flex items-center">
                                    {selectedType ? (
                                        <>
                                            <img
                                                src={selectedType.imgSrc}
                                                alt={selectedType.label}
                                                className="w-6 h-6 mr-2"
                                            />
                                            <span className="text-gray-700">{selectedType.label}</span>
                                        </>
                                    ) : (
                                        <span className="text-gray-500">Type de Bien</span>
                                    )}
                                </div>
                                <svg
                                    className={`w-4 h-4 text-gray-500 transition-transform transform ${isTypeOpen ? "rotate-180" : "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                            {isTypeOpen && (
                                <div className="absolute left-0 right-0 z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                                    {options.map((option) => (
                                        <div
                                            key={option.value}
                                            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleTypeSelectChange(option)}
                                        >
                                            <img
                                                src={option.imgSrc}
                                                alt={option.label}
                                                className="w-6 h-6 mr-2"
                                            />
                                            <span className="text-gray-700">{option.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Action Dropdown */}
                    <div className="relative w-full max-w-screen-sm sm:max-w-xs">
                        <div
                            className="relative cursor-pointer"
                            onClick={() => setIsActionOpen(!isActionOpen)}
                        >
                            <div className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm">
                                <div className="flex items-center">
                                    {selectedAction ? (
                                        <>
                                            <img
                                                src={selectedAction.imgSrc}
                                                alt={selectedAction.label}
                                                className="w-6 h-6 mr-2"
                                            />
                                            <span className="text-gray-700">{selectedAction.label}</span>
                                        </>
                                    ) : (
                                        <span className="text-gray-500">Choisissez votre projet</span>
                                    )}
                                </div>
                                <svg
                                    className={`w-4 h-4 text-gray-500 transition-transform transform ${isActionOpen ? "rotate-180" : "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                            {isActionOpen && (
                                <div className="absolute left-0 right-0 z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                                    {actions.map((action) => (
                                        <div
                                            key={action.value}
                                            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleActionSelectChange(action)}
                                        >
                                            <img
                                                src={action.imgSrc}
                                                alt={action.label}
                                                className="w-6 h-6 mr-2"
                                            />
                                            <span className="text-gray-700">{action.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="relative w-full max-w-screen-sm sm:max-w-xs">
                        <button
                            type="button"
                            onClick={handleSearchClick}
                            className="flex items-center justify-center px-4 py-2 text-white bg-[#2db34a] rounded-md hover:bg-[#0b7d89] shadow-sm"
                            style={{ width: '100%' }}

                        >
                            Rechercher
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
