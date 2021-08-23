import React from 'react';
import Hero from 'parts/Hero';
import Schedule from 'parts/Schedule';
import Sponsor from 'parts/Sponsor';

export default function HomePages() {
    return (
        <>
        <Hero />
        <section className="bg-gray-900">
            <Sponsor />
            <Schedule />
        </section>
        </>
    )
}
