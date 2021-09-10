import React from 'react';
import Hero from 'parts/partsHome/Hero';
import Sponsor from 'parts/partsHome/Sponsor';
import Striming from 'parts/partsHome/Striming';
import Game from 'parts/partsAnimation/Game';
import Schedule from 'parts/partsHome/Schedule';
import Footer from 'parts/Footer';


export default function HomePages() {
    return (
        <>
        <div className="bg-purple-900">
        <Hero />
            <Sponsor />
            {/* <GamingGear /> */}
            <Schedule />
            <Striming />
            <Game />
            <div className="py-12 bg-purple-800 mt-24">
                <Footer />
            </div>
        </div>
        </>
    )
}
