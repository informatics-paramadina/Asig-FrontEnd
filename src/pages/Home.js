import React from 'react';
import Hero from 'parts/partsHome/Hero';
import SponsorSlider from 'parts/partsHome/SponsorSlider';
import Striming from 'parts/partsHome/Striming';
import Game from 'parts/partsAnimation/Game';
import useScroll from 'helpers/hooks/useScroll';
import Footer from 'parts/Footer';
import FAQ from './FAQ';
import BracketValo from 'parts/partsHome/BracketValo';


export default function HomePages() {
    useScroll()
    return (
        <>
        <div className="bg-purple-900">
        <Hero />
            <SponsorSlider />
            <Game />
            <BracketValo />
            <Striming />
            <FAQ />
            <div className="py-12 bg-purple-800 mt-24">
                <Footer />
            </div>
        </div>
        </>
    )
}
