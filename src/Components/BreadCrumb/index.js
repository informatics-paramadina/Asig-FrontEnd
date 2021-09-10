import React from 'react';
import { Link } from 'react-router-dom';

export default function BreadCrumb({list}) {
    return (
        <section className="bg-purple-800 text-wihte py-8 px-4 mt-16">
            <div className="container mx-auto">
                <ul className="breadcrumb">
                    {
                        list?.map?.((item, index) => {
                            const arias = index === list?.lenght ? {"aria-label" : "current-page"} : {}
                            return (
                                <li key={item?.url}>
                                    <Link to={item?.url} {...arias}> {item?.name} </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}
