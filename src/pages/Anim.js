import React from 'react'
import Header from 'parts/Header'
import Animation from 'parts/partsAnimation/Animation'
import Footer from 'parts/Footer'

export default function Anim() {
    return (
        <section className="bg-purple-900 pt-10">
            <div className="container mx-auto z-20">
                <Header  />
            </div>
            <div className="pb-16 z-0">
                <Animation />
            </div>
            <div className="py-12 bg-purple-800 mt-24">
                <Footer />
            </div>
        </section>
    )
}
