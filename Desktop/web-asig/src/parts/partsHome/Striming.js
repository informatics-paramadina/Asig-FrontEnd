import React from 'react';
import Livestream from 'react-youtube';


export default function Striming() {
    return (
        <section className="relative">
            <div className="">
            <img src="images/content/streming.png" className="object-cover object-center" alt="" />
                <div className="inset-0 absolute z-0 w-full h-full bg-black opacity-60"></div>
                        <h2 className="text-white font-semibold text-3xl absolute inset-0 flex justify-center mt-10">
                            Live Stream Match
                        </h2>
                    <div className="absolute inset-0 flex justify-center items-center w-full">
                        <Livestream 
                        videoId="nomJocKOcuI" id="nomJocKOcuI"
                        opts={{
                            playerVars: {
                                loop: 0,
                                mute: 0,
                                autoplay: 1,
                                controls: 0,
                                showinfo: 0,
                            }
                        }}
                    />
            </div>
            </div>
        </section>
    )
}
