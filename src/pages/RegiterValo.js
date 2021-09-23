import React from 'react'
import Header from 'parts/Header'
import Footer from 'parts/Footer'
import RegisterGamePlayer from 'parts/partsRegister/RegisterGamePlayer'

export default function RegisterValo() {
    return (
        <section className="bg-purple-900 pt-10">
            <div className="container mx-auto">
                <Header  />
            </div>
                <div className="my-40 container mx-auto">
                    <RegisterGamePlayer />
                </div>
            <div className="py-12 bg-purple-800 mt-24">
                <Footer />
            </div>
        </section>
    )
}