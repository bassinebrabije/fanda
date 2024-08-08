import React from 'react'
import { NavLink } from 'react-router-dom';
function notfound() {
    return (

        <div >
            <div className="flex items-center justify-center min-h-screen ">
                <div className="text-center">
                    <h1 className="text-9xl font-bold">404</h1>
                    <p className="text-2xl font-medium mt-4">Oops! Page not found</p>
                    <p className="mt-4 mb-8">The page you're looking for doesn't exist or has been moved.</p>
                    <NavLink to="/"
                        className="px-6 py-3 bg-white font-bold font-semibold rounded-full hover:bg-purple-100 transition duration-300 ease-in-out dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
                        Go Home
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default notfound