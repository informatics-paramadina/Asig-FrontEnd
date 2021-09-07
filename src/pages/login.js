import React from 'react';
import LoginForm from 'parts/loginForm';
import Header from 'parts/Header';

export default function Login() {
    return (
        <>
            <section className="container mx-auto py-10 absolute z-10">
                <Header />
            </section>
            <section className="">
                <LoginForm />
            </section>
        </>
    )
}
