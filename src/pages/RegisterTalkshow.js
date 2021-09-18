import React from 'react';
import Header from 'parts/Header'
import Footer from 'parts/Footer'
import FormTalkshow from 'parts/partsDasboard/RegistrasiTalkshow';

export default function RegisterTalkshow() {
    return (
        <section className="bg-purple-900 pt-10">
            <div className="container mx-auto">
                <Header  />
            </div>
            <div className="pb-16 flex justify-center">
                <FormTalkshow />
            </div>
            <div className="py-12 bg-purple-800 mt-24">
                <Footer />
            </div>
        </section>
    )
}
