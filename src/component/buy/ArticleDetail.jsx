// src/components/ArticleDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../apijson/fa.json';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const ArticleDetail = () => {
    const { id } = useParams(); // Get the ID from the URL
    const article = data.find(item => item.id == parseInt(id)); // Find the article by ID

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="p-4">
            <div class=" justify-between  flex  sm:px-20 mb-5">
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
            <section class=" py-12 text-gray-800 sm:py-24">
                <div class="mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
                    <div class="max-w-2xl px-4 lg:pr-24">

                        <h3 class="mb-2 text-3xl font-bold">{article.title}</h3>

                        <p class="mb-5 ">
                            <span className='text-xl text-[#2db34a] font-bold '>Description du bien</span>  <br />
                            <span className='text-sm text-gray-600'>{article.Description}
                            </span>
                        </p>
                        <p className='text-sm mb-5'>Caractéristiques de l’appartement :</p>
                        <div class="mb-5 flex font-medium">
                            <div class="">
                                <p class="mb-2">📐 {article.Superficie_Totale}</p>
                            </div>
                        </div>
                        <div class="mb-5 flex font-medium">
                            <div class="">
                                <p class="mb-2">🛏 {article.Chambre} chambres </p>
                            </div>
                        </div>
                        <div class="mb-5 flex font-medium">
                            <div class="">
                                <p class="mb-2">🍽 {article.Kitchen} Cuisine équipée</p>
                            </div>
                        </div>
                        <div class="mb-5 flex font-medium">
                            <div class="">
                                <p class="mb-2">🛋 {article.Salon}</p>
                            </div>
                        </div>
                        <div class="mb-5 flex font-medium">
                            <div class="">
                                <p class="mb-2">🚿 {article.Bathroom}</p>
                            </div>
                        </div>
                    </div>
                    <div class="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
                        <div class="relative border-b border-gray-300 p-4 py-8 sm:px-8">
                            <h3 class="mb-1 inline-block text-3xl font-medium"><span class="mr-4">Get a quote!</span><span class="inline-block rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-700 sm:inline">Quick Response</span></h3>
                            <p class="text-gray-600">Contact us for custom use cases</p>
                        </div>
                        <div class="p-4 sm:p-8">
                            <input id="name" type="text" class="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500" placeholder="Enter your name" />
                            <input id="email" type="email" class="peer mt-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500" placeholder="Enter your email" />
                            <div class="peer-invalid:block mt-1 hidden text-left text-xs text-rose-600">Email format Incorrect. Please complete the email</div>
                            <label class="mt-5 mb-2 inline-block max-w-full">Tell us about your company</label>
                            <textarea id="about" class="mb-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"></textarea>
                            <button class="w-full rounded-lg border border-blue-700 bg-blue-700 p-3 text-center font-medium text-white outline-none transition focus:ring hover:border-blue-700 hover:bg-blue-600 hover:text-white">Send</button>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ArticleDetail;
