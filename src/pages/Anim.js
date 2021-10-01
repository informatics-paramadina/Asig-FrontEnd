import React from 'react'
import Header from 'parts/Header'
import Animation from 'parts/partsAnimation/Animation'
import Footer from 'parts/Footer'

export default function Anim() {
    return (
        <section className="bg-purple-900 pt-10">
            <div className="z-10 container mx-auto relative px-5 sm:px-0 sm:block">
                <Header  />
            </div>
            <div className="pb-16">
                <Animation />
            </div>
            <div className="py-12 bg-purple-800 mt-24">
                <Footer />
            </div>
        </section>
    )
}
