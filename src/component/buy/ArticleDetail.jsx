// src/components/ArticleDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../apijson/fa.json';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Logo from './logo.png'

const ArticleDetail = () => {
    const { id } = useParams(); // Get the ID from the URL
    const article = data.find(item => item.id == parseInt(id)); // Find the article by ID

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="p-4">
            <div className=" justify-between  flex  sm:px-20 mb-5">
                <h1 className="text-left text-[#2db34a] "><span className='sm:text-2xl  font-bold'>{article.title}</span><p className='text-xs'>{article.type} - {article.ville}</p></h1>
                <h1 className="text-right text-[#2db34a] sm:text-2xl font-bold">{article.prix}</h1>
            </div>
            <div className='sm:flex items-center justify-center '>
                <div className='sm:h-[60%] sm:w-[30%]'>
                    <Carousel>
                        <div>
                            <img src={`https://i.imghippo.com/files/${article.img2}`} className=' object-cover' alt={`${article.img2}`} />
                        </div>
                        <div>
                            <img src={`https://i.imghippo.com/files/${article.img1}`} className=' object-cover' alt={`${article.img1}`} />
                        </div>
                        <div>
                            <img src={`https://i.imghippo.com/files/${article.img3}`} className=' object-cover' alt={`${article.img3}`} />
                        </div>
                        <div>
                            <img src={`https://i.imghippo.com/files/${article.img4}`} className=' object-cover' alt={`${article.img4}`} />
                        </div>
                        <div>
                            <img src={`https://i.imghippo.com/files/${article.img5}`} className=' object-cover' alt={`${article.img5}`} />
                        </div>
                        <div>
                            <img src={`https://i.imghippo.com/files/${article.img6}`} className=' object-cover' alt={`${article.img6}`} />
                        </div>
                    </Carousel>
                </div>
            </div>
            <section className=" py-12 text-gray-800 sm:px-20 ">
                <div className="mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
                    <div className="max-w-2xl px-4 lg:pr-24">
                        <h3 className="mb-2 text-3xl font-bold">{article.title}</h3>
                        <p className="mb-3 ">
                            <span className='text-2xl text-[#2db34a] font-bold'>Description du bien</span>
                        </p>
                        <p className="mb-3 ">
                            <span className='text-sm text-[#000]'>{article.Description}
                            </span>
                        </p>
                        <p className='text-sm mb-5 text-[#2db34a] font-bold '>Caractéristiques de l’appartement  :</p>
                        <div className="mb-3 flex font-medium">
                            <div >
                                <p >📐 {article.Superficie_Totale}</p>
                            </div>
                        </div>
                        <div className="mb-3 flex font-medium">
                            <div >
                                <p >🛏 {article.Chambre} chambres </p>
                            </div>
                        </div>
                        <div className="mb-3 flex font-medium">
                            <div >
                                <p >🍽 {article.Kitchen} Cuisine équipée</p>
                            </div>
                        </div>
                        <div className="mb-3 flex font-medium">
                            <div >
                                <p >🛋 {article.Salon} Salons </p>
                            </div>
                        </div>
                        <div className="mb-5 flex  font-medium">
                            <div >
                                <p >🚿 {article.Bathroom} salles de bain modernes</p>
                            </div>
                        </div>
                        <p className='text-xs mb-5 text-[#2db34a] font-bold '>Réservez dès maintenant votre visite avec PRESTIGE F&A IMMOBILIER !
                            <br />  +212 645-607468</p>
                        <div className="mb-5 flex ">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2359.7288089168865!2d-7.604865326050376!3d33.54638084427479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda632bc9e05e3cf%3A0xec5f7c1bf21da6db!2sAv.%202%20Mars%2C%20Casablanca!5e1!3m2!1sen!2sma!4v1723230995802!5m2!1sen!2sma" width="600" height="450" ></iframe>
                        </div>

                    </div>

                    <div className="m-5 max-w-sm">
                        <div className="rounded-lg border bg-white px-4 pt-8 pb-10  mb-10">
                            <div className="relative mx-auto w-36 rounded-full">
                                <img className="mx-auto h-auto w-full rounded-full border-2 border-[#2db34a]"
                                    src={Logo} alt={Logo} />
                            </div>
                            <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">PRESTIGE F&A IMMOBILIER</h1>
                            <h3 className="font-lg text-semibold text-center leading-6 text-gray-600 mb-5">Agents Prestige f&a immobilier</h3>
                            <a href="https://wa.me/+212645607468" target="_blank" className="relative mt-4 ml-8 rounded-lg border-2 border-[#2db34a] w-[16rem] hover:scale-105 bg-[#2db34a]  px-6 py-2 font-medium text-white transition">
                                Contacter via whatsapp
                            </a>
                        </div>

                        <div className="rounded-lg border bg-white   ">
                            <div class="space-y-4 px-8 py-5">
                                <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">Contacter l'annonceur
                                </h1>

                                <label class="block" for="name">
                                    <p class="text-gray-600">Name</p>
                                    <input class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your name" />
                                </label>
                                <label class="block" for="name">
                                    <p class="text-gray-600">Email Address</p>
                                    <input class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="email" placeholder="Enter your email" />
                                </label>
                                <label class="block" for="name">
                                    <p class="text-gray-600">Request</p>
                                    <textarea class="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."></textarea>
                                </label>
                                <button className="relative mt-4 rounded-lg border-2 border-[#2db34a] w-[16rem]  hover:scale-105 bg-[#2db34a]  px-6 py-2 font-medium text-white transition">
                                    Demander une visite
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </div>
    );
};

export default ArticleDetail;
