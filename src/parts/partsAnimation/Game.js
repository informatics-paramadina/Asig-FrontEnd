import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import project from 'Constant/Api/project';
import {ReactComponent as IconConsole} from 'Components/Icon/console.svg';
import Zoom from 'react-reveal/Zoom';


export default function Game() {

    const [fetch, setFetch] = useState([]);

    useEffect(() => {
        project.games()
        .then((res) => {
            setFetch(res)
        })
        .catch((err => {
            console.log(err);
        }))
    }, [])

console.log(fetch[0]);
    return (
        <section className="container px-4 mx-auto pt-24 md:visible invisible">
            <div className="flex justify-between items-center">
                <div className="w-auto">
                    <h2 className="text-2xl text-white">Show <span className="font-medium text-blue-600">Games</span></h2>
                </div>
                <div className="w-auto">
                    <Link to="/" className="text-teal-400 hover:underline text-sm">View All Games</Link>
                </div>
            </div>
            <div className="flex flex-wrap justify-start items-center -mx-4 mt-6 md:flex hidden">
                {
                    fetch?.map((item) => {
                        return (
                            <div className="md:w-1/4 w-full px-4 mb-6" key={item?.id}>
                                <Zoom delay={200 * item?.id}>
                                <div className="item relative">
                                    <div className="rounded-xl p-4 pb-8 bg-gray-800">
                                    <figure className="item-image">
                                        <IconConsole />
                                    <img src={item?.thumbnail ?? "Thumnail-image"} className="rounded-xl" alt="" />
                                    </figure>
                                    <div className="mt-4">
                                        <h4 className="text-gray-300">{item?.nama_project ?? "Name Project"}</h4>
                                    </div>
                                    <Link className="link-wrapped" to={`games/${item?.nama_project}/${item?.id}`}></Link>
                                </div>
                                </div>
                                </Zoom>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
