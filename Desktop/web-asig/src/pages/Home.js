import React from 'react';
import Hero from 'parts/partsHome/Hero';
import GamingGear from 'parts/partsHome/GamingGear';
import Sponsor from 'parts/partsHome/Sponsor';
import Striming from 'parts/partsHome/Striming';
import Schedule from 'parts/partsHome/Schedule';
import Footer from 'parts/Footer';


export default function HomePages() {
    return (
        <>
        <Hero />
        <div className="bg-gray-900">
            <Sponsor />
            <GamingGear />
            <Striming />
            <Schedule />
            <div className="py-12 bg-gray-800 mt-24">
                <Footer />
            </div>
        </div>
        </>
    )
}
