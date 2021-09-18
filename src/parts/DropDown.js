import React, {useState} from 'react'
import {MenuItems} from './MenuItems';
import { Link } from 'react-router-dom';

export default function DropDown() {
    const [click, setClick] = useState(false)
    return (
        <>
            <ul  className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
                {
                    MenuItems?.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item?.path} className={item?.cName} onClick={() => setClick(false)}/>
                                {item?.component}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
