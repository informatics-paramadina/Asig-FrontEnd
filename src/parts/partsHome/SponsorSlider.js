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
        <section className="pb-16">
            <div className="container mx-auto">
                <div className="flex md:justify-start justify-center">
                    <h2 className="text-2xl font-semibold text-white my-10"><span className="font-medium text-blue-600">PROUD</span> <br className="hidden md:flex"/>PARTNERS</h2>
                </div>
            <div >
                <Slider  
                    infinite={true}
                    slidesToShow={3}
                    // slidesToScroll={1}
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
                    <img src="/images/content/ERA.svg" className="mx-auto" alt="" />
                </div>
                <div className="w-full my-8">
                    <img src="/images/content/Danacita_SVG.svg" className="mx-auto" alt="" />
                </div>
                <div className="w-full my-8">
                    <img src="/images/content/jktinfo.svg" className="mx-auto" alt="" />
                </div>
                <div className="w-full my-8">
                    <img src="/images/content/eventkampus.svg" className="mx-auto" alt="" />
                </div>
                <div className="w-full my-8">
                    <img src="/images/content/idcloudhost.svg" className="mx-auto" alt="" />
                </div>
                <div className="w-full my-8">
                    <img src="/images/content/Parmagz.svg" className="mx-auto" alt="" />
                </div>
                </Slider>
            </div>
            </div>
        </section>
    )
}
// className="w-full my-8" className="flex flex-wrap md:flex-nowrap justify-center items-center"