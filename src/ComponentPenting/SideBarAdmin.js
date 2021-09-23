import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import users from 'Constant/Api/users';

function SideBar({match, history}) {
    const [toggleMenu, setToggleMenu] = useState(false)
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
                <button onClick={() => setToggleMenu((prev) => !prev)} className={["toggle-dash z-50", toggleMenu ? "active" : ""].join(" ")}></button>
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

                            <span className="text-indigo-500 text-sm pb-2">
                                {USERS?.userRole ?? "admin"}
                            </span>
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
                                    getNavLink("/listdaftar")
                                ].join(" ")}
                                to="/listdaftar"
                                >
                                List Daftar
                                </Link>
                            </li>
                        </ul>

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