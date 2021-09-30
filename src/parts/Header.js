import React, {useState, useRef, useEffect} from 'react';
import { NavLink, Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import DropDown from './DropDown';



export default function Header({onLight}) {
    const [ToggleMenu, setToggleMenu] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const WrapperDropdown = useRef(false)
    const LinkColor = onLight ? "text-gray-900" : "text-white";

    function DropdownSelect() {
        setDropdown(() => !dropdown)
    }

    function ClickOutSide(ev) {
        if(WrapperDropdown && !WrapperDropdown.current.contains(ev.target)){
            setDropdown(false)
        }
    }

    useEffect(() => {
        window.addEventListener("mousedown", ClickOutSide)
        return () => {
            window.removeEventListener("mousedown", ClickOutSide)
        }
    }, [])

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
            ToggleMenu ? "opacity-100 visible z-30" : "opacity-0 invisible"

            ].join(" ")}>
                <li className="my-4 md:my-0">
                    <NavLink exact to="/" activeClassName="main-nav-active" className={[LinkColor, "text-white hover:text-purple-600 font-medium text-lg px-8 py-3"].join(" ")}>
                        Home
                    </NavLink>
                </li>
                <li ref={WrapperDropdown} onClick={DropdownSelect} className="my-4 md:my-0">
                    <div className="px-8 py-3 font-medium text-lg text-white hover:text-purple-600  cursor-pointer">
                        Register
                    </div>
                    {dropdown && <DropDown />}
                </li>
                <li className="my-4 md:my-0">
                    <NavLink to="/exhibition" activeClassName="main-nav-active" className={[LinkColor, "text-white hover:text-purple-600 font-medium text-lg px-8 py-3"].join(" ")}>
                        Exhibition
                    </NavLink>
                </li>
            </ul>
        </header>
        </Fade>
    )
}
