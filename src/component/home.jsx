import React from 'react'
import Hero from './hero'
import Annonces from './Annonces'
import Decouvrez from './Decouvrez'

import About from './about'
import Contact from './contact'

function home() {
    return (
        <>
            <Hero />
            <Annonces />

            <About />
            <Decouvrez />
            <Contact />
        </>
    )
}

export default home