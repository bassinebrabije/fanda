import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import data from './apijson/fa.json';

const HowWeWork = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // Shuffle the data and select the first three articles
            const shuffledData = data.sort(() => 0.5 - Math.random());
            const randomArticles = shuffledData.slice(0, 3);
            setArticles(randomArticles);
        };
        fetchData();
    }, [data]); // Add `data` as a dependency if it might change

    return (
        <>
            <div className=" justify-between  flex  px-8 sm:px-20 mt-16">
                <h1 className="text-left text-3xl text-[#2db34a] sm:text-4xl font-bold " style={{ fontFamily: '"Playfair Display", serif' }}>Découvrez notre sélection de biens
                </h1>
            </div >
            <section className="flex flex-col items-center bg-white pb-5">
                <div className="">
                    <div className="mt-10 grid     max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
                        {articles.map((article) => (
                            <Link
                                to={`/Annonce/${article.id}-${encodeURIComponent(article.title)}`}
                                key={article.id}
                            >
                                <article className="mb-4 overflow-hidden  w-[20rem] rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl">
                                    <div className="relative">
                                        <img
                                            src={`https://i.imghippo.com/files/${article.img2}`}
                                            alt={article.img2}
                                            className="w-full h-48 object-cover hover:scale-110 hover:rotate-1 cursor-pointer"
                                            title={article.img2}
                                            loading="lazy"
                                        />
                                        <span className="absolute top-0 left-0 m-2 rounded-full bg-[#2db34a] px-2 text-center text-sm font-medium text-white">{article.typevend}</span>
                                    </div>
                                    <div className="p-4">
                                        <div className="pb-2">
                                            <p className="text-lg text-[#2db34a] font-medium duration-500 ease-in-out">{article.prix}</p>
                                            <p className="text-sm text-[#000] font-medium duration-500 ease-in-out mb-2">{article.title}</p>
                                            <p className="text-xs text-[#808080] font-medium duration-500 ease-in-out mb-2">Superficie : {article.Superficie}</p>
                                            <p className="text-xs text-[#808080] font-medium duration-500 ease-in-out mb-2">Terrasse : {article.Terrasse}</p>
                                            <p className="text-xs text-[#808080] font-medium duration-500 ease-in-out mb-2">Ville : {article.ville}</p>
                                        </div>

                                        <ul className="box-border flex list-none items-center border-t border-solid border-gray-200 px-0 pt-4">
                                            <li className="mr-4 flex items-center text-left">
                                                <i className="mr-2 text-2xl text-[#2db34a]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" />
                                                    </svg>
                                                </i>
                                                <span className="text-xs">{article.Superficie_Totale}</span>
                                            </li>
                                            <li className="mr-4 flex items-center text-left">
                                                <i className="mr-2 text-2xl text-[#2db34a]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z" /></svg>
                                                </i>
                                                <span className="text-xs">{article.Chambre}</span>
                                            </li>
                                            <li className="flex items-center text-left">
                                                <i className="mr-2 text-2xl text-[#2db34a]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" /></svg>
                                                </i>
                                                <span className="text-xs">{article.Bathroom}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
};

export default HowWeWork;

