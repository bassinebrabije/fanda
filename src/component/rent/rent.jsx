import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import data from '../apijson/fa.json'; // Adjust the path if necessary
import { Helmet } from 'react-helmet-async';
import Heroimg from '../home.jpg'

function Rent() {
    const [articles, setArticles] = useState([]);
    const location = useLocation();

    // Get the selected type from the URL query params
    const query = new URLSearchParams(location.search);
    const selectedType = query.get('type'); // Get the selected type from the query params

    useEffect(() => {
        const fetchData = async () => {
            const allArticles = data; // Fetch all articles from the JSON file
            // Filter articles based on the selected type and if ville is 'casablanca'
            const filteredArticles = allArticles.filter(article => {
                const matchesType = selectedType ? article.type === selectedType : true; // Filter by type if selected
                const matchesVille = article.typevend === 'Louer'; // Check if ville is 'casablanca'
                return matchesType && matchesVille; // Return articles that match both conditions
            });
            setArticles(filteredArticles); // Set the filtered articles
        };
        fetchData();
    }, [selectedType]); // Add 'ville' to the dependency array

    return (
        <>
            <Helmet>
                <title>Recherche - Louer </title>
                <link rel="canonical" href="https://prestigefandaimmobilier.com/Louer" />
            </Helmet>
            <section className="mt-16 ">
                <div className="sm:ml-5 sm:mr-5">
                    <div className="flex flex-col items-center bg-white">
                        <div className=" grid  mt-7  max-w-md grid-cols-1 gap-6 px-2 sm:mt-10 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
                            {articles.map((article) => (
                                <Link
                                    to={`/Annonce/${article.id}-${encodeURIComponent(article.title)}`}
                                    key={article.id}
                                >
                                    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-5   max-w-sm mx-auto   w-[20rem] sm:w-[18rem] h-[20rem] hover:scale-105 ">
                                        <img src={`https://i.imghippo.com/files/${article.img2}`} alt={article.img2} className="absolute  inset-0 h-full w-full object-cover" />
                                        <span className="absolute top-0 left-0 m-2 rounded-md bg-[#2db34a] p-2 text-center text-sm font-medium text-white ">à {article.typevend}</span>
                                        <span className="absolute Bottom-10 z-50 right-0 m-2  p-[0.8rem] text-center text-sm   font-medium text-white"><i class="fa fa-camera mr-2  text-white"></i>6</span>
                                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                        <h3 className="z-10 mt-3 text-base font-bold text-white">{article.type} • <span className="text-[#2db34a] text-sm">{article.prix}</span></h3>
                                        <div className="z-10 gap-y-1 overflow-hidden text-xs leading-6 text-white  ">{article.title}</div>
                                        <div className="z-10 gap-y-1 overflow-hidden text-xs leading-6 text-white  ">Sidi maarouf - {article.ville} </div>
                                        <div className="z-10 gap-y-1 overflow-hidden text-xs leading-6 text-white mb-5">82 m2 •  3 Chambre(s)  •  2 Sdb </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Rent;
