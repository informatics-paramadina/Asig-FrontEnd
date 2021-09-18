import React from 'react';
import RegisterMiniGame from 'parts/partsDasboard/RegisterMiniGame';
import SideBar from 'parts/partsDasboard/SideBarUser';

export default function RMiniGame() {
    return (
        <div className="flex">
            <SideBar />
            <main className="flex-1">
                <div className="my-40 mx-5 sm:mx-0">
                    <RegisterMiniGame />  
                </div>
            </main>
        </div>
    )
}
