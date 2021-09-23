import React from 'react'
import ListDaftar from 'ComponentPenting/ListDaftar';
import SideBar from 'ComponentPenting/SideBarAdmin';

export default function List() {
    return (
        <div className="flex">
            <SideBar />
            <main className="flex-1">
                <div className="my-10 mx-5 sm:mx-0">
                    <ListDaftar />
                </div>
            </main>
        </div>
    )
}