import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import users from 'Constant/Api/users';

function SideBarLink({setActive, isActive, children, title}) {
    return  (
        <div className="px-auto w-full">
        <h5 className="text-white relative py-3 px-5">
                {title}
                <button onClick={() => setActive(isActive)}
                    className={["absolute block right-5 transform -translate-y-1/2 transition-all duration-300 focus:outline-none top-1/2",
                    isActive ? "rotate-0" : "rotate-180"].join(" ")}
                    >
                    <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9.75 7.5L18.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
        </h5>
                <ul className={["md:h-auto md:opacity-100 overflow-hidden transition-all duration-300 main-menu", 
                    isActive ? "h-0 invisible opacity-0" : "opacity-100"].join(" ")}>
                        {children}
                </ul>
        </div>
    )
}
function SideBar({match, history}) {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [active, setActive] = useState(null)
    const USERS = useSelector((state) => state.users);
    const getNavLink = (path) => {
        return (
            match.path === path ?  "active text-white bg-indigo-700" : "text-indigo-500"
        )
    }
    function logout() {
        localStorage.removeItem("ASIG:token");
        history.push("/login")
    }

    const sidebarStyle = {
        width: 280,
        left: window.innerWidth < 640 && !toggleMenu ? -280 : 0
    }

    return (
        <>
            <div className="flex sm:hidden">
                <button onClick={() => setToggleMenu((prev) => !prev)} className={["toggle z-50", toggleMenu ? "active" : ""].join(" ")}></button>
            </div>
                <aside className="transition-all duration-300 bg-purple-900 max-h-screen h-screen overflow-y-auto min-h-full fixed sm:relative z-50" style={sidebarStyle}>
                    {toggleMenu && (
                        <div className="overlay" onClick={() => setToggleMenu((prev) => !prev)}></div>
                    )}
                    <div className="max-h-screen h-screen fixed bg-purple-900 flex flex-col content-between z-50" style={{width: 280}}>
                        <div className="flex flex-col text-center mt-8">
                            <div className="border border-indigo-500 rounded-full mx-auto p-2 inline-flex mb-3">
                                <div className="rounded-full overflow-hidden">
                                    <img src="/images/content/default-avatar.svg" alt="DefaultAvater" className="object-cover w-24 h-24 fill-indigo-500" />
                                </div>
                            </div>

                            <h6 className="text-white text-xl">
                                {USERS?.userName ?? "UserName"}
                            </h6>
                            <span className="text-indigo-500 text-sm">
                                {USERS?.userEmail ?? "userEmail"}
                            </span>
                        </div>

                        <ul className="main-menu mt-12">
                            <li>
                                <Link
                                className={["nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white w-full text-left",
                                    getNavLink("/")
                                ].join(" ")}
                                to="/"
                                >
                                Back to Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                className={["nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white w-full text-left",
                                    getNavLink("/shcedule")
                                ].join(" ")}
                                to="/shcedule"
                                >
                                Shcedule
                                </Link>
                            </li>
                            <li>
                                <Link
                                className={["nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white w-full text-left",
                                    getNavLink("/sertifikat")
                                ].join(" ")}
                                to="/sertifikat"
                                >
                                Sertifikat
                                </Link>
                            </li>
                        </ul>

                            <SideBarLink 
                                setActive={setActive}
                                isActive={active === 1 ? null : 1 }
                                title="Register"
                            >
                                <li>
                                    <Link
                                    className={["nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white w-full text-left",
                                        getNavLink("/game")
                                    ].join(" ")}
                                    to="/game"
                                    >
                                    Game Player
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    className={["nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white w-full text-left",
                                        getNavLink("/minigame")
                                    ].join(" ")}
                                    to="/minigame"
                                    >
                                    MiniGame
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    className={["nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white w-full text-left",
                                        getNavLink("/talkshow")
                                    ].join(" ")}
                                    to="/talkshow"
                                    >
                                    TalkShow
                                    </Link>
                                </li>
                            </SideBarLink>
                    <div className="my-auto"></div>
                    <ul className="main-menu mb-16">
                        <li>
                                <button
                                className="nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left text-indigo-500"
                                onClick={logout}
                                >
                                Logout
                                </button>
                            </li>
                    </ul>
                </div>
                </aside>
        </>
    )
}
export default withRouter(SideBar)