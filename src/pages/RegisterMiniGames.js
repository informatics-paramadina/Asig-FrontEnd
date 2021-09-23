import React from 'react';
import Header from 'parts/Header'
import Footer from 'parts/Footer'
import FormMiniGame from 'parts/partsRegister/RegisterMiniGame';

export default function RegisterMiniGames() {
    return (
        <section className="bg-purple-900 pt-10">
            <div className="container mx-auto">
                <Header  />
                <div className="my-40 container mx-auto">
                    <FormMiniGame />
                </div>
            </div>
                <div className="py-12 bg-purple-800 mt-24">
                    <Footer />
                </div>
        </section>
    )
}
