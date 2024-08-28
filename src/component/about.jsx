import React, { useEffect } from 'react';
import AboutImage from '../images/about.png';
import Simplicité from '../images/heureux.png';
import Rapidité from '../images/temps-rapide.png';
import Confiance from '../images/poignee-de-main.png';
import AOS from "aos";
import "aos/dist/aos.css";

function About() { // Capitalized the component name
    useEffect(() => {
        AOS.init({
            duration: 2000, // animation duration // whether animation should happen only once
        });
    }, []);

    return (
        <>
            <div className=" justify-between  flex  px-8 sm:px-20 mt-10" data-aos="fade-up">
                <h1 className="text-left text-3xl text-[#2db34a] sm:text-4xl font-bold " style={{ fontFamily: '"Playfair Display", serif' }}>
                    Vous avez la clé d'un projet immobilier réussi!
                </h1>
            </div>
            <section data-aos="fade-up">
                <div className="container mx-auto pt-12 px-10 sm:px-6 lg:px-16" >
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <div className="flex items-center mb-4">
                                <img src={Simplicité} className="h-10 mr-2" alt="Simplicité" title="Simplicité" loading="lazy" />
                                <h2 className="text-2xl font-semibold text-[#000]">Simplicité</h2>
                            </div>
                            <p className="text-[#000] text-sm mb-3">
                                Une plateforme digitale fiable et facile d'utilisation pour vous offrir le service que vous méritez.
                            </p>
                            <div className="flex items-center mb-4">
                                <img src={Rapidité} className="h-10 mr-2" alt="Rapidité" title="Rapidité" loading="lazy" />
                                <h2 className="text-2xl font-semibold text-[#000]">Rapidité</h2>
                            </div>
                            <p className=" text-[#000] text-sm mb-3">
                                Nos conseillers professionnels assurent un suivi rapide de votre projet. Vos rêves immobiliers se réalisent en un clin d'œil.
                            </p>

                            <div className="flex items-center mb-4">
                                <img src={Confiance} className="h-10 mr-2" alt="Confiance" title="Confiance" loading="lazy" />
                                <h2 className="text-2xl font-semibold text-[#000]">Confiance</h2>
                            </div>
                            <p className=" text-[#000] text-sm">
                                Votre tranquillité est notre priorité. Notre plateforme regroupe tous les acteurs de confiance dans l'immobilier, assurant une expérience sécurisée et transparente.
                            </p>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <img src={AboutImage} className="object-cover hidden sm:block rounded-lg shadow-md" alt="About" title="About" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About; // Updated the export statement
