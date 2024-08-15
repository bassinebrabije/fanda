import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../apijson/fa.json';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import emailjs from '@emailjs/browser';
import Logo from './logo.png';

// Modal Component
const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
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
        <div className="p-4">
            <div className="justify-between flex sm:px-20 mb-5">
                <h1 className="text-left text-[#2db34a]">
                    <span className='sm:text-2xl font-bold'>{article.title}</span>
                    <p className='text-xs'>{article.type} - {article.ville}</p>
                </h1>
                <h1 className="text-right text-[#2db34a] sm:text-2xl font-bold">{article.prix}</h1>
            </div>
            <div className='sm:flex items-center justify-center '>
                <div className='sm:h-[60%] sm:w-[30%]'>
                    <Carousel>
                        {article.img2 && (
                            <div>
                                <img src={`https://i.imghippo.com/files/${article.img2}`} className='object-cover' alt={`${article.img2}`} />
                            </div>
                        )}
                        {article.img1 && (
                            <div>
                                <img src={`https://i.imghippo.com/files/${article.img1}`} className='object-cover' alt={`${article.img1}`} />
                            </div>
                        )}
                        {article.img3 && (
                            <div>
                                <img src={`https://i.imghippo.com/files/${article.img3}`} className='object-cover' alt={`${article.img3}`} />
                            </div>
                        )}
                        {article.img4 && (
                            <div>
                                <img src={`https://i.imghippo.com/files/${article.img4}`} className='object-cover' alt={`${article.img4}`} />
                            </div>
                        )}
                        {article.img5 && (
                            <div>
                                <img src={`https://i.imghippo.com/files/${article.img5}`} className='object-cover' alt={`${article.img5}`} />
                            </div>
                        )}
                        {article.img6 && (
                            <div>
                                <img src={`https://i.imghippo.com/files/${article.img6}`} className='object-cover' alt={`${article.img6}`} />
                            </div>
                        )}
                    </Carousel>
                </div>
            </div>
            <section className="py-12 text-gray-800 sm:px-20">
                <div className="mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
                    <div className="max-w-2xl px-4 lg:pr-24">
                        <h3 className="mb-2 text-3xl font-bold">{article.title}</h3>
                        <p className="mb-3 ">
                            <span className='text-2xl text-[#2db34a] font-bold'>Description du bien</span>
                        </p>
                        <p className="mb-3 ">
                            <span className='text-sm text-[#000]'>{article.Description}</span>
                        </p>
                        <p className='text-sm mb-5 text-[#2db34a] font-bold'>Caractéristiques de l’appartement :</p>
                        <div className="mb-3 flex font-medium">
                            <div>
                                <p>📐 {article.Superficie_Totale}</p>
                            </div>
                        </div>
                        <div className="mb-3 flex font-medium">
                            <div>
                                <p>🛏 {article.Chambre} chambres </p>
                            </div>
                        </div>
                        <div className="mb-3 flex font-medium">
                            <div>
                                <p>🍽 {article.Kitchen} Cuisine équipée</p>
                            </div>
                        </div>
                        <div className="mb-3 flex font-medium">
                            <div>
                                <p>🛋 {article.Salon} Salons </p>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">
                            <div>
                                <p>🚿 {article.Bathroom} salles de bain modernes</p>
                            </div>
                        </div>
                        {article.Parkings > 0 && ( // Condition to check Parkings
                            <div className="mb-5 flex font-medium">
                                <div>
                                    <p>🚗 Place de parking</p>
                                </div>
                            </div>
                        )}
                        {article.Balconorterrasse && (
                            <div className="mb-5 flex font-medium">
                                <div>
                                    <p>🏡 Balcon ou terrasse</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="m-5 max-w-sm">
                        <div className="rounded-lg border bg-white px-4 pt-8 pb-10 mb-10">
                            <div className="relative mx-auto w-36 rounded-full">
                                <img className="mx-auto h-auto w-full rounded-full border-2 border-[#2db34a]" src={Logo} alt={Logo} />
                            </div>
                            <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">PRESTIGE F&A IMMOBILIER</h1>
                            <h3 className="font-lg text-semibold text-center leading-6 text-gray-600 mb-5">Agents Prestige f&a immobilier</h3>
                            <a href="https://wa.me/+212645607468" target="_blank" className="relative mt-4 ml-12 sm:ml-10 rounded-lg border-2 border-[#2db34a] w-[16rem] hover:scale-105 bg-[#2db34a] px-6 py-2 font-medium text-white transition">
                                Contacter via whatsapp
                            </a>
                        </div>
                        <div className="rounded-lg border bg-white">
                            <div className="space-y-4 px-8 py-5">
                                <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">Contacter l'annonceur</h1>
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
                                    <button type="submit" className="relative ml-3 mt-4 rounded-lg border-2 border-[#2db34a] w-[16rem] hover:scale-105 bg-[#2db34a] px-6 py-2 font-medium text-white transition">
                                        Demander une visite
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal for Success Message */}
            {isModalOpen && (
                <Modal message={modalMessage} onClose={closeModal} />
            )}
        </div>
    );
};

export default ArticleDetail;
