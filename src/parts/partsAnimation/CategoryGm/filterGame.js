import React, {useState, useEffect} from 'react';
import Iframe from 'react-iframe';
import project from 'Constant/Api/project';
import { useParams } from 'react-router';

export default function FilterGame() {
    const {nama_project} = useParams();
    const [fetch, setFetch] = useState([]);

    useEffect(() => {
        project.games()
        .then((res) => {
            setFetch(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(fetch)

    return (
        <div className="container mx-auto mt-14">
            {
                fetch?.filter((data) => data?.nama_project === nama_project).map((item) => {
                    return (
                        <div key={item?.id}>
                            <h2 className="text-3xl text-white flex justify-center mb-11">
                                {item?.nama_project ?? "name-project"}
                            </h2>
                            <div className="">
                                <Iframe 
                                    url={item?.project_link ?? "Gamess"}
                                    position="relative"
                                    className="w-full h-screen z-10"
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
