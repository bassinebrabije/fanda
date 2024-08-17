import React from 'react'
import Hero from './hero'
import Annonces from './Annonces'
import Decouvrez from './Decouvrez'
import { Helmet } from 'react-helmet-async';
import About from './about'
import Contact from './contact'

function home() {
    return (
        <>
            <Helmet>
                <title>PRESTIGE F&A IMMOBILIER</title>
                <link rel="canonical" href="https://prestigefandaimmobilier.com/" />
            </Helmet>
            <Hero />
            <Annonces />
            <About />
            <Decouvrez />
            <Contact />
        </>
    )
}

export default home