import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from './apijson/fa.json';
import AOS from "aos";
import "aos/dist/aos.css";
const HowWeWork = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // Shuffle the data and select the first three articles
            const shuffledData = data.sort(() => 0.5 - Math.random());
            const randomArticles = shuffledData.slice(0, 4);
            setArticles(randomArticles);
        };
        fetchData();
    }, [data]);
    // Add `data` as a dependency if it might change
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <section>
            <div className=" justify-between  flex  px-8 sm:px-20 mt-8" data-aos="fade-up">
                <h1 className="text-left text-3xl text-[#2db34a] sm:text-4xl font-bold " style={{ fontFamily: '"Playfair Display", serif' }}>Découvrez notre sélection de biens
                </h1>
            </div >
            <div className="flex flex-col items-center bg-white pb-5" data-aos="fade-up">

                <div className="">
                    <div className=" grid  mt-7  max-w-md grid-cols-1 gap-6 px-2 sm:mt-10 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
                        {articles.map((article) => (
                            <Link
                                to={`/Annonce/${article.id}-${encodeURIComponent(article.title)}`}
                                key={article.id}
                            >
                                <article className="relative isolate flex flex-col 	 justify-end overflow-hidden rounded-2xl px-5   max-w-sm mx-auto   w-[20rem]  sm:w-[18rem] h-[20rem] hover:scale-105  hover:no-underline ">
                                    <img src={`https://i.imghippo.com/files/${article.img2}`} alt={article.img2} className="absolute  inset-0 h-full w-full object-cover" />
                                    <span className="absolute top-0 left-0 m-2 rounded-md bg-[#2db34a] p-2 text-center text-sm font-medium text-white">à {article.typevend}</span>
                                    <span className="absolute Bottom-10 z-50 right-0 m-2  p-[0.8rem] text-center text-sm   font-medium text-white"><i class="fa fa-camera mr-2  text-white"></i>6</span>
                                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                    <h3 className="z-10 mt-3 text-base font-bold text-white">{article.type} • <span className="text-[#2db34a] text-sm">70 000 DH</span></h3>
                                    <div className="z-10 gap-y-1  text-sm leading-6 text-white  ">Sidi maarouf - Casablanca </div>
                                    <div className="z-10 gap-y-1 text-sm leading-6 text-white mb-5">82 m2 •  3 Chambre(s)  •  2 Sdb </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;

