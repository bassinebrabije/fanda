import React, { useState } from 'react';

import logo from '../images/logo.png'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
            <div className="flex items-center justify-between">
                <a href="#">
                    <img className="w-auto h-12 " src={logo} alt="" />
                </a>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-gray-500 hover:text-gray-600 focus:outline-none"
                        aria-label="toggle menu"
                    >
                        {/* Menu Icon */}
                        {!isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
                className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:shadow-none ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                    } lg:mt-0 lg:p-0 lg:top-0 lg:bg-transparent lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
            >
                <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
                    <a className="text-gray-700 lg:mx-6 hover:text-[#2db34a]" href="#">
                        Home
                    </a>
                    <a className="text-gray-700 lg:mx-6 hover:text-[#2db34a]" href="#">
                        Components
                    </a>
                    <a className="text-gray-700 lg:mx-6 hover:text-[#2db34a]" href="#">
                        Pricing
                    </a>
                    <a className="text-gray-700 lg:mx-6 hover:text-[#2db34a]" href="#">
                        Contact
                    </a>
                    <a className="text-gray-700 lg:mx-6 hover:text-[#2db34a]" href="#">
                        FAQ
                    </a>
                </div>

                <a
                    className="block px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-300 transform border rounded-md hover:text-white hover:bg-[#2db34a] lg:mt-0 lg:w-auto"
                    href="#"
                >
                    Contact Us
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
