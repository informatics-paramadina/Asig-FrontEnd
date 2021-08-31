import React from 'react';
import LoginForm from 'parts/loginForm';
import Header from 'parts/Header';
import Footer from 'parts/Footer';

export default function Login() {
    return (
        <>
            <section className="container mx-auto pt-10">
                <Header onLight />
            </section>
            <section className="container mx-auto pt-10">
                <LoginForm />
            </section>
            <div className="py-12 bg-gray-800 mt-24">
                <Footer />
            </div>
        </>
    )
}
