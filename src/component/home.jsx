import React from 'react'
import Hero from './hero'
import Annonces from './Annonces'
import Carousel from './Annonces'
import Pro from './Professionnel'
import Allannonces from './allannonces'
import Contact from './contact'

function home() {
    return (
        <>
            <Hero />
            <Annonces />
            <Pro />
            <Allannonces />
            <Contact />
        </>
    )
}

export default home