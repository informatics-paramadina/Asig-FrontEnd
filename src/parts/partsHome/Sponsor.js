import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SampleArrow() {
    return (
        <div
            style={{display: 'none'}}
        />
    )
}


export default function Sponsor() {
    return (
        <section className="mt-16">
            <div className="container mx-auto py-10">
                <div className="flex justify-center">
                    <h2 className="text-xl font-semibold text-white my-10"><span className="font-medium text-blue-600">PROUD</span> <br className="hidden md:flex"/>PARTNERS</h2>
                </div>
            <div >
                <Slider
                    infinite={true}
                    slidesToShow={4}
                    slidesToScroll={1}
                    autoplay={true}
                    nextArrow={<SampleArrow />}
                    prevArrow={<SampleArrow />}
                    responsive={[
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            }
                        }
                    ]}
                >
                <div className="w-full m-8">
                    <img src="/images/content/ERA.svg" className="m-auto md:w-64 w-36" alt="" />
                </div>
                <div className="w-full m-8">
                    <img src="/images/content/Parmagz.svg" className="m-auto md:w-80 w-48" alt="" />
                </div>
                {/*
                     <div className="mt-7 flex justify-center">
                     <h2 className="text-red-500 text-xl animate-pulse">Sponsor masih dalam Process!!! &#128522;</h2>
                     </div>
                     <div className="w-full m-8">
                     <img src="/images/content/Twitch.svg" className="m-auto md:w-64 w-40" alt="" />
                     </div>
               */}
                <div className="w-full m-8">
                    <img src="/images/content/Danacita_SVG.svg" className="m-auto md:w-80 w-48" alt="" />
                </div>
                <div className="w-full m-8">
                    <img src="/images/content/eventkampus.svg" className="m-auto md:w-80 w-48" alt="" />
                </div>
                <div className="w-full m-8">
                    <img src="/images/content/idcloudhost.svg" className="m-auto md:w-80 w-48" alt="" />
                </div>
                </Slider>
            </div>
            </div>
        </section>
    )
}
// className="w-full my-8" className="flex flex-wrap md:flex-nowrap justify-center items-center"
