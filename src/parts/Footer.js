import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const FooterLinks = ({isActive, setActive, children, title}) => {
    return (
        <div className="px-auto w-full md:w-1/6 md:mb-0 mb-2">
            <h5 className="text-xl font-semibold mb-2 relative text-white">
                {title}
            <button onClick={() => setActive(isActive)}
            className={["absolute block md:hidden right-0 transform -translate-y-1/2 focus:outline-none transition-all duration-300 top-1/2",
            isActive ? "rotate-0" : "rotate-180"].join(" ")}
            >
            <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9.75 7.5L18.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
            </h5>
            <ul className={["md:h-auto md:visible md:opacity-100 overflow-hidden transition-all duration-200",
            isActive ? "h-0 invisible opacity-0" : "opacity-100"].join(" ")}
            >
                {children}
            </ul>
        </div>
    )
}

export default function Footer() {
    const [active, setActive] = useState(null)
    return (
        <section className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
                <FooterLinks
                    setActive={setActive}
                    isActive={active === 1 ? null : 1}
                    title= "About Us"
                >
                    <li className="mt-5">
                        <Link to="/" className="text-purple-700 text-lg hover:text-teal-500 hover:underline">
                            Comunity
                        </Link>
                    </li>
                    <li className="mt-5">
                        <Link to="/" className="text-purple-700 text-lg hover:text-teal-500 hover:underline">
                            Jobs
                        </Link>
                    </li>
                    <li className="my-5">
                        <Link to="/" className="text-purple-700 text-lg hover:text-teal-500 hover:underline">
                            Blogs
                        </Link>
                    </li>
                </FooterLinks>

                <FooterLinks
                    setActive={setActive}
                    isActive={active === 2 ? null : 2}
                    title= "Explore"
                >
                    <li className="mt-5">
                        <Link to="/" className="text-purple-700 text-lg hover:text-teal-500 hover:underline">
                            Home
                        </Link>
                    </li>
                    <li className="mt-5">
                        <Link to="/" className="text-purple-700 text-lg hover:text-teal-500 hover:underline">
                            About
                        </Link>
                    </li>
                    <li className="my-5">
                        <Link to="/exhibition" className="text-purple-700 text-lg hover:text-teal-500 hover:underline">
                            Exhibition
                        </Link>
                    </li>
                </FooterLinks>

                <FooterLinks
                    setActive={setActive}
                    isActive={active === 3 ? null : 3}
                    title= "Visit"
                >
                    <li className="my-2">
                        <a className="text-purple-700 text-lg hover:text-teal-500 hover:underline" href="https://www.google.com/maps/place/Paramadina+University/@-6.241133,106.8308091,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f3c398b48d51:0x2a232e58c9357e8f!8m2!3d-6.241133!4d106.8329978" target="_blank" rel="noopener noreferrer">
                            Jl. Gatot Subroto Mampang Prpt., Kec.Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12790
                        </a>
                    </li>
                </FooterLinks>

                <FooterLinks
                    setActive={setActive}
                    isActive={active === 4 ? null : 4}
                    title= "Follow"
                >
                    <li className="my-2">
                        <div className="social-links" >
                            <a href="https://www.instagram.com/himtiparamadina/?hl=en" target="_blank" rel="noopener noreferrer">
                                <i className="ri-instagram-line ri-2x"></i>
                            </a>
                            <a href="https://twitter.com/himtiparamadina?lang=en" target="_blank" rel="noopener noreferrer">
                                <i className="ri-twitter-line ri-2x"></i>
                            </a>
                            <a href="https://www.facebook.com/himti.univparamadina/?hc_ref=ARRYyRLpbQh1_1HriZg66NwX2eGQyJ6uj00WsF8jyQRoywzr03iu2aRzbEV9SbxTFj8&fref=nf&__tn__=kC-R" target="_blank" rel="noopener noreferrer">
                                <i className="ri-facebook-fill ri-2x"></i>
                            </a>
                        </div>
                    </li>
                </FooterLinks>
            </div>
            <div className="border-t pt-8 mt-8 border-gray-700 text-center">
                <p className="text-gray-500">2021 Copyright Paramadina. All Rights Reserved</p>
            </div>
        </section>
    )
}
