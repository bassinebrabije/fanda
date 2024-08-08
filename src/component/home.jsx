import React from 'react'
import Hero from './hero'
import Annonces from './Annonces'

import Pro from './Professionnel'
import About from './about'
import Contact from './contact'

function home() {
    return (
        <>
            <Hero />
            <Annonces />
            <Pro />
            <About />
            <Contact />
        </>
    )
}

export default home