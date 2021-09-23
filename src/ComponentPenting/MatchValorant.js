import Header from 'parts/Header'
import Match from 'ComponentPenting/MatchValo/Match'
import React from 'react';
import Footer from 'parts/Footer'

export default function MatchValorant() {
    return (
        <section className="bg-purple-900 pt-10">
            <div className="container mx-auto">
                <Header />
            </div>
            <div className="container mx-auto">
                <Match />
            </div>
            <div className="py-12 bg-purple-800 mt-24">
                <Footer />
            </div>
        </section>
    )
}
