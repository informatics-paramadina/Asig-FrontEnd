import React from 'react'
import RegisterForm from 'parts/RegisterForm';
import Header from 'parts/Header';

export default function Register() {
    return (
        <>
        <section className="container mx-auto pt-10">
            <Header onLight />
        </section>
            <section className="pt-24">
                <RegisterForm />
            </section>
        </>
    )
}
