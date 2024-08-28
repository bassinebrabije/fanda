import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../apijson/fa.json';
import emailjs from '@emailjs/browser';
import Logo from './logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet-async';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";


// Modal Component
const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Success</h2>
                <p>{message}</p>
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-[#2db34a] text-white rounded">
                    Close
                </button>
            </div>
        </div>
    );
};
const ArticleDetail = () => {
    const { id } = useParams(); // Get the ID from the URL
    const [article, setArticle] = useState(null); // State to store the article

    const [open, setOpen] = React.useState(false);


    const [formData, setFormData] = useState({
        name: '',
        telephone: '',
        email_from: '',
        message: '',
        bien: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        telephone: '',
        email_from: '',
        message: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        // Find the article by ID when the component mounts or ID changes
        const foundArticle = data.find(item => item.id === parseInt(id));
        if (foundArticle) {
            setArticle(foundArticle);
            setFormData(prevData => ({
                ...prevData,
                bien: foundArticle.title // Set the 'bien' value based on the article
            }));
        } else {
            setArticle(null); // Explicitly set to null if not found
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // Clear the error message when the user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const newErrors = {};
        // Validate the form fields
        if (!formData.name) {
            newErrors.name = 'Nom et prénom sont requis.';
        }
        if (!formData.telephone) {
            newErrors.telephone = 'Téléphone est requis et doit être valide';
        }
        if (!formData.email_from) {
            newErrors.email_from = "L'email est requis.";
        }
        if (!formData.message) {
            newErrors.message = 'Message est requis.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Send email
            emailjs.sendForm('service_bwnzvyv', 'template_88r3isk', e.target, 'rQKst5CeGhqIQl4Ov')
                .then((result) => {
                    console.log(result.text);
                    // Reset form after successful submission
                    setFormData({
                        name: '',
                        telephone: '',
                        email_from: '',
                        message: '',
                        bien: article?.title || '' // Set bien based on article title
                    });
                    setModalMessage('Your message has been sent successfully!');
                    setIsModalOpen(true);
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Check if the article is null
    if (article === null) {
        return <div>Article not found</div>;
    }
    // If article is still loading, you can show a loading indicator here
    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Helmet>
                <title>{article.typevend} - {article.title}</title>
                <link rel="canonical" href={`https://prestigefandaimmobilier.com/Annonce/${article.id}-${encodeURIComponent(article.title)}`} />

            </Helmet>
            <section className="p-4 mt-20">


                <Lightbox
                    plugins={[Fullscreen, Zoom]}
                    open={open}
                    close={() => setOpen(false)}
                    slides={[
                        { src: `https://i.imghippo.com/files/${article.img2}` },
                        { src: `https://i.imghippo.com/files/${article.img1}` },
                        { src: `https://i.imghippo.com/files/${article.img3}` },
                        { src: `https://i.imghippo.com/files/${article.img4}` },
                        { src: `https://i.imghippo.com/files/${article.img5}` },
                        { src: `https://i.imghippo.com/files/${article.img6}` },
                    ]}
                />


                <div className="mx-auto mt-2  px-2 sm:px-12" >
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2" uk-lightbox="animation: scale">
                        <button type="button" onClick={() => setOpen(true)} className="outline-none	">
                            <div className="w-full" >
                                <img src={`https://i.imghippo.com/files/${article.img2}`} className="w-full h-[28.5rem] object-cover rounded-xl shadow" alt={`https://i.imghippo.com/files/${article.img2}`} loading="lazy" />
                            </div>
                        </button>
                        <div className="w-full">
                            <div className="grid gap-2 grid-cols-2">
                                <button type="button" onClick={() => setOpen(true)} className="outline-none	">
                                    <div className="w-full">
                                        <img src={`https://i.imghippo.com/files/${article.img1}`} className="w-full h-[14rem] object-cover rounded-xl shadow" alt={`https://i.imghippo.com/files/${article.img1}`} loading="lazy" />
                                    </div>
                                </button>
                                <button type="button" onClick={() => setOpen(true)} className="outline-none	">
                                    <div className="w-full">
                                        <img src={`https://i.imghippo.com/files/${article.img3}`} className="w-full h-[14rem] object-cover rounded-xl shadow" alt={`https://i.imghippo.com/files/${article.img3}`} title='' loading="lazy" />
                                    </div>
                                </button>
                                <button type="button" onClick={() => setOpen(true)} className="outline-none	">
                                    <div className="w-full">
                                        <img src={`https://i.imghippo.com/files/${article.img4}`} className="w-full h-[14rem] object-cover rounded-xl shadow" alt={`https://i.imghippo.com/files/${article.img4}`} loading="lazy" />
                                    </div>
                                </button>
                                <button type="button" onClick={() => setOpen(true)} className="outline-none	">

                                    <div className="w-full relative">
                                        <img
                                            src={`https://i.imghippo.com/files/${article.img5}`}
                                            className="w-full h-[14rem] object-cover rounded-xl shadow"
                                            alt={`https://i.imghippo.com/files/${article.img5}`}
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-xl">
                                            <i className="fa-solid fa-image text-white "><span className="ml-2">2</span></i>
                                        </div>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="py-8 text-gray-800 sm:px-8 ">
                    <div className="mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
                        <div className="max-w-2xl px-4 lg:pr-24">
                            <h3 className="mb-2 text-3xl font-bold">{article.title}</h3>
                            <p className="mb-3 ">
                                <span className='text-2xl text-[#2db34a] font-bold'>Description du bien</span>
                            </p>
                            <p className="mb-3 ">
                                <span className='text-sm '>{article.Description}</span>
                            </p>
                            <p className='text-sm mb-5 text-[#2db34a] font-bold'>Caractéristiques :</p>
                            <div className="mb-3 flex font-medium">
                                <div>
                                    <p className="text-sm">📐 {article.Superficie_Totale}</p>
                                </div>
                            </div>
                            <div className="mb-3 flex font-medium">
                                <div>
                                    <p className="text-sm">🛏 {article.Chambre} chambres </p>
                                </div>
                            </div>
                            <div className="mb-3 flex font-medium">
                                <div>
                                    <p className="text-sm">🍽 {article.Kitchen} Cuisine équipée</p>
                                </div>
                            </div>
                            <div className="mb-3 flex font-medium">
                                <div>
                                    <p className="text-sm">🛋 {article.Salon} Salons </p>
                                </div>
                            </div>
                            <div className="mb-5 flex font-medium">
                                <div>
                                    <p className="text-sm">🚿 {article.Bathroom} salles de bain modernes</p>
                                </div>
                            </div>
                            {article.Parkings > 0 && ( // Condition to check Parkings
                                <div className="mb-5 flex font-medium">
                                    <div>
                                        <p className="text-sm">🚗 Place de parking</p>
                                    </div>
                                </div>
                            )}
                            {article.Balconorterrasse.length > 0 && (
                                <div className="mb-5 flex font-medium">
                                    <div>
                                        <p className="text-sm">🪴 {article.Balconorterrasse}</p>
                                    </div>
                                </div>
                            )}
                            <div className="mb-5 flex ">
                                <div>
                                    <p className="text-sm">Réservez dès maintenant votre visite avec Prestige F&A immobilier !
                                        <br></br>  Sara : +212645607468 <br></br> Othmane : +212614989507 </p>
                                </div>
                            </div>
                            <p className='text-xl mb-5 text-[#2db34a] font-bold'>Localisation du bien
                                :</p>

                            <div className="mb-5 flex font-medium">
                                <div className="relative w-full pb-[56.25%]  sm:h-[33rem] overflow-hidden">
                                    <iframe
                                        src={article.location}
                                        title="Responsive iframe"
                                        loading="lazy"
                                        className="absolute top-0 left-0 w-full h-full border-0"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="m-5 sm:pl-20 max-w-sm">
                            <div className="rounded-lg border bg-white px-4 pt-8 pb-10 mb-10">
                                <div className="relative mx-auto w-36 rounded-full">
                                    <img className="mx-auto h-auto w-full rounded-full border-2 border-[#2db34a]" src={Logo} alt={Logo} />
                                </div>
                                <h1 className="my-1 text-center text-xl font-bold leading-8 text-[#000]">PRESTIGE F&A IMMOBILIER</h1>
                                <h3 className="font-lg text-semibold text-center font-normal leading-6 text-[#000] mb-5">Agents Prestige F&A immobilier</h3>

                                <a
                                    href={`https://wa.me/+212614989507?text=${encodeURIComponent(article.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative mt-4 ml-5 sm:ml-5 flex items-center justify-center rounded-lg border-2 border-[#2db34a] w-[16rem] hover:scale-105 bg-[#2db34a] px-6 py-2 font-medium text-white transition no-underline"
                                >
                                    <i className="fab fa-whatsapp"></i>
                                    <span className="ml-2">Contacter via whatsapp</span>
                                </a>


                            </div>
                            <div className="rounded-lg border bg-white">
                                <div className="space-y-4 px-8 py-5">
                                    <h1 className="my-1 text-center text-xl font-bold leading-8 text-[#000]">Contacter l'annonceur</h1>
                                    <form onSubmit={sendEmail}>
                                        <label className="block mb-3" htmlFor="name">
                                            <p className="text-gray-600 mb-2">Nom et prénom</p>
                                            <input
                                                name='name'
                                                id='name'
                                                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-[#2db34a] focus:ring-1"
                                                type="text"
                                                placeholder=" Nom et prénom"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                                        </label>
                                        <label className="block mb-3" htmlFor="telephone">
                                            <p className="text-gray-600 mb-2">Téléphone</p>
                                            <input
                                                name='telephone'
                                                id='telephone'
                                                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-[#2db34a] focus:ring-1"
                                                type="number"
                                                placeholder="Téléphone"
                                                value={formData.telephone}
                                                onChange={handleChange}
                                            />
                                            {errors.telephone && <span className="text-red-500 text-sm">{errors.telephone}</span>}
                                        </label>
                                        <input type="text" name="bien" id="bien" value={article.title} className="hidden" readOnly />
                                        <label className="block mb-3" htmlFor="email_from">
                                            <p className="text-gray-600 mb-2">E-mail </p>
                                            <input
                                                name='email_from'
                                                id='email_from'
                                                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-[#2db34a] focus:ring-1"
                                                type="email"
                                                placeholder="Email"
                                                value={formData.email_from}
                                                onChange={handleChange}
                                            />
                                            {errors.email_from && <span className="text-red-500 text-sm">{errors.email_from}</span>}
                                        </label>
                                        <label className="block mb-3" htmlFor="message">
                                            <p className="text-gray-600 mb-2">Votre message</p>
                                            <textarea
                                                name='message'
                                                id='message'
                                                className="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-[#2db34a] focus:ring-1"
                                                placeholder="Votre message"
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                                        </label>
                                        <button type="submit" className="relative   mt-4 rounded-lg border-2 border-[#2db34a] w-[16rem] hover:scale-105 bg-[#2db34a] px-6 py-2 font-medium text-white transition">
                                            Demander une visite
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal for Success Message */}
                {isModalOpen && (
                    <Modal message={modalMessage} onClose={closeModal} />
                )}

            </section >
        </>
    );
};

export default ArticleDetail;