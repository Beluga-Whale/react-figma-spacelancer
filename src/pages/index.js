import React from 'react'
import CategorySec from '../components/Category'
import FreeLance from '../components/FreeLancers'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Info />
            <FreeLance /> 
            <CategorySec />
        </>
    )
}

export default Home