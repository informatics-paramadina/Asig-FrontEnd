import React from 'react';
import { Link } from 'react-router-dom';

export default function Unauthenticated({fallbackUrl, fallbackText}) {
    return (
        <section className="h-screen flex flex-col items-center">
            <img src="/images/content/illustration-private.jpg" alt="please login" />
            <h1 className="text-2xl text-gray-900 mt-12">
                Terimaksih telah mengunjungi Website Asig Paramadina
            </h1>
            <p className="text-lg text-gray-500 mt-5 mb-8">
                Sepertinya Anda tidak memiliki akses untuk halaman ini, Please Login
            </p>
            <Link className="bg-red-600 hover:bg-red-700 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4" to={fallbackUrl || "/login"}>
                {fallbackText || "Login to me"}
            </Link>
        </section>
    )
}
