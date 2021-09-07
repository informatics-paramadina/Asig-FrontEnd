import React from 'react'
import RegisterGamePlayer from 'parts/partsDasboard/RegisterGamePlayer';
import SideBar from 'parts/partsDasboard/SideBar';

export default function RGame() {
    return (
        <div className="flex">
            <SideBar />
            <main className="flex-1">
                <div className="my-40 mx-5 sm:mx-0">
                    <RegisterGamePlayer />  
                </div>
            </main>
        </div>
    )
}
