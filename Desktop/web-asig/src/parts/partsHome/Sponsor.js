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
        <section className="bg-gray-800">
            <div className="container mx-auto">
                <div className="flex justify-start">
                    <h2 className="text-xl font-semibold text-white mt-5"><span className="font-medium text-blue-600">PROUD</span> <br />PARTNERS</h2>
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
                <div className="w-full my-8">
                    <img src="/images/content/HyperX.svg" className="mx-auto" alt="" />
                </div>
                <div className="w-full my-8">
                    <img src="/images/content/Logitech.svg" className="mx-auto" alt="" />
                </div>
                <div className="w-full my-8">
                    <img src="/images/content/Asus.svg" className="mx-auto" alt="" />
                </div>
                <div className="w-full my-8">
                    <img src="/images/content/Twitch.svg" className="mx-auto" alt="" />
                </div>
                <div className="w-full my-8">
                    <img src="/images/content/Twitch.svg" className="mx-auto" alt="" />
                </div>
                <div className="w-full my-8">
                    <img src="/images/content/Twitch.svg" className="mx-auto" alt="" />
                </div>
                <div className="w-full my-8">
                    <img src="/images/content/Twitch.svg" className="mx-auto" alt="" />
                </div>
                <div className="w-full my-8">
                    <img src="/images/content/Twitch.svg" className="mx-auto" alt="" />
                </div>
                </Slider>
            </div>
            </div>
        </section>
    )
}
// className="w-full my-8" className="flex flex-wrap md:flex-nowrap justify-center items-center"