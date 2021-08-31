import React, {useState} from 'react';
import { NavLink, withRouter, Link} from 'react-router-dom';
import {useSelector} from 'react-redux'


function Header({onLight, location}) {
    const [ToggleMenu, setToggleMenu] = useState(false)
    const LinkColor = onLight ? "text-gray-900" : "text-white";
    const linkCTA = location.pathname.indexOf("/login") > -1 ? `/register` : `/login`;
    const textCTA = location.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";
    const user = useSelector((state) => state.users);

    return (
        <header className={["flex justify-between items-center", ToggleMenu ? "fixed w-full -mx-4 px-4" : "" ].join(" ")}>
            <div className="text-lg text-white">
                Logo
            </div>
            <div className="flex md:hidden">
                <button onClick={() => setToggleMenu((prev) => (!prev))} className={["toggle z-50", ToggleMenu ? "active" : ""].join(" ")}></button>
            </div>
            <ul 
            className={["transition-all duration-200 items-center fixed inset-0 bg-purple-900 pt-24 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible", 
            ToggleMenu ? "opacity-100 visible z-20" : "opacity-0 invisible"
            ].join(" ")}>
                <li className="my-4 md:my-0">
                    <NavLink to="/" className={[LinkColor, "text-white hover:text-purple-600 font-medium text-lg px-6 py-3"].join(" ")}>
                        Home
                    </NavLink>
                </li>
                <li className="my-4 md:my-0">
                    <NavLink to="/minigame" className={[LinkColor, "text-white hover:text-purple-600 font-medium text-lg px-6 py-3"].join(" ")}>
                        Mini Game
                    </NavLink>
                </li>
                <li className="my-4 md:my-0">
                    <NavLink to="/exhibition" className={[LinkColor, "text-white hover:text-purple-600 font-medium text-lg px-6 py-3"].join(" ")}>
                        Exhibition
                    </NavLink>
                </li>
            
                <li className="mt-8 md:mt-0">
                    {
                        user ? (
                            <Link to="/dasboard"
                                className="transition-all duration-200 rounded-lg px-5 py-2 ml-6 inline-flex items-center bg-purple-900 hover:bg-purple-700"
                            >
                                <span className="text-white font-medium text-lg">
                                    Hi, {user?.userName}
                                </span>
                            </Link>
                        ) : (
                            <li className="my-4 md:my-0">
                                <Link  to={linkCTA} className="bg-purple-900 hover:bg-purple-700 transition-all duration-200 text-white rounded-md font-medium text-lg px-8 py-3 ml-6">
                                    {textCTA}
                                </Link>
                            </li>
                        )
                    }



                </li>
            </ul>
        </header>
    )
}

export default withRouter(Header)
