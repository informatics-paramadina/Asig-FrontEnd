import React, {useEffect, useState} from 'react';
import admin from 'Constant/Api/admin';

export default function ListDaftar() {

    const [fetch, setFetch] = useState([])
    useEffect(() => {
        admin.team()
        .then((res) => {
            setFetch(res)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    console.log(fetch)

    return (
        <div className="container mx-auto">
            <div className="flex justify-start ml-5">
                <h1 className="text-2xl font-semibold">List Player Valorant</h1>
            </div>
            <div className="flex justify-between flex-wrap mx-5">
            {
                fetch?.map((item, index) => {
                    return (
                    <div className="w-2/6 bg-gray-500 mt-7" key={item?.id}>
                        {/* <h2 className="flex justify-center">Team 1</h2> */}
                        <div className="p-3">
                            <h3 className="font-medium pb-3">Team: {index + 1}</h3>
                            <img src={item?.team_logo} className="rounded-full" alt="" style={{width: 50, height: 50}} />
                            <h3 className="font-medium pt-3">Name Team: <span className="font-normal pl-3">{item?.team_name ?? "nama team"}</span></h3>
                            <h3 className="font-medium">Leader: <span className="font-normal pl-3">{item?.leader_name ?? "nama team"}</span></h3>
                        </div>
                    </div>

                    )
                })
            }
            </div>
        </div>
    )
}
