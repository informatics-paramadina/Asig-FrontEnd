import React from 'react'
import SideBar from 'parts/partsDasboard/SideBar';
import RegistrasiTalkshow from 'parts/partsDasboard/RegistrasiTalkshow';
export default function RTalkShow() {
    return (
        <div className="flex">
            <SideBar />
            <main className="flex-1">
                <div className="my-40  ml-40">
                    <RegistrasiTalkshow />  
                </div>
            </main>
        </div>
    )
}
