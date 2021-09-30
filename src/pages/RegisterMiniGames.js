import React from 'react';
import Header from 'parts/Header'
import Footer from 'parts/Footer'
import FormMiniGame from 'parts/partsRegister/RegisterMiniGame';

export default function RegisterMiniGames() {
    return (
        <section className="bg-purple-900">
            <div className="px-5 sm:px-0 pt-10">
                <div className="z-10 container mx-auto relative sm:block">
                    <Header  />
                </div>
                <div className="sm:my-40 my-16 container mx-auto">
                    <FormMiniGame />
                </div>
            </div>
                <div className="py-12 bg-purple-800 mt-24">
                    <Footer />
                </div>
        </section>
    )
}
