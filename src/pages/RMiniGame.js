import React from 'react';
import RegisterMiniGame from 'parts/partsDasboard/RegisterMiniGame';
import SideBar from 'parts/partsDasboard/SideBar';

export default function RMiniGame() {
    return (
        <div className="flex">
            <SideBar />
            <main className="flex-1">
                <div className="my-40  ml-40">
                    <RegisterMiniGame />  
                </div>
            </main>
        </div>
    )
}
