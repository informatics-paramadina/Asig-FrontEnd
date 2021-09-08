import React, {useState} from 'react';
import { NavLink, withRouter, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Fade from 'react-reveal/Fade';


function Header({onLight, location}) {
    const [ToggleMenu, setToggleMenu] = useState(false)
    const LinkColor = onLight ? "text-gray-900" : "text-white";
    const linkCTA = location.pathname.indexOf("/login") > -1 ? `/register` : `/login`;
    const textCTA = location.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";
    const user = useSelector((state) => state.users);

    return (
        <Fade top>
        <header className={["flex justify-between items-center", ToggleMenu ? "fixed w-full -mx-4 px-4" : "" ].join(" ")}>
            <div className="z-50">
                <Link to="/">
                    <img src="/images/content/logo 1.svg" alt="" />
                </Link>
            </div>
            <div className="flex md:hidden">
                <button onClick={() => setToggleMenu((prev) => (!prev))} className={["toggle z-50", ToggleMenu ? "active" : ""].join(" ")}></button>
            </div>
            <ul 
            className={["transition-all duration-200 items-center fixed inset-0 bg-purple-900 pt-40 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible", 
            ToggleMenu ? "opacity-100 visible z-20" : "opacity-0 invisible"
            ].join(" ")}>
                <li className="my-4 md:my-0">
                    <NavLink exact to="/" activeClassName="main-nav-active" className={[LinkColor, "text-white hover:text-purple-600 font-medium text-lg px-6 py-3"].join(" ")}>
                        Home
                    </NavLink>
                </li>
                <li className="my-4 md:my-0">
                    <NavLink to="/exhibition" activeClassName="main-nav-active" className={[LinkColor, "text-white hover:text-purple-600 font-medium text-lg px-6 py-3"].join(" ")}>
                        Exhibition
                    </NavLink>
                </li>
                <li className="my-4 md:my-0">
                    <NavLink to="/faq" activeClassName="main-nav-active" className={[LinkColor, "text-white hover:text-purple-600 font-medium text-lg px-6 py-3"].join(" ")}>
                        FAQ
                    </NavLink>
                </li>
            
                <li className="mt-8 md:mt-0">
                    {
                        user ? (
                            <Link to="/dasboard"
                                className="transition-all duration-200 rounded-lg px-5 py-2 md:ml-6 ml-24 inline-flex items-center bg-purple-900 hover:bg-purple-700"
                            >
                                <span className="text-white font-medium text-lg">
                                    Hi, {user?.userName}
                                </span>
                            </Link>
                        ) : (
                            <li className="my-4 md:my-0">
                                <Link  to={linkCTA} className="bg-purple-900 hover:bg-purple-700 transition-all duration-200 text-white rounded-md font-medium text-lg px-8 py-3 md:ml-6 ml-24">
                                    {textCTA}
                                </Link>
                            </li>
                        )
                    }



                </li>
            </ul>
        </header>
        </Fade>
    )
}

export default withRouter(Header)
