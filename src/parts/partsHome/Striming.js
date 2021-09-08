import React from 'react';
import Livestream from 'react-youtube';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


export default function Striming() {
    return (
        <section className="relative">
            <div className="">
            <img src="images/content/streming.png" className="object-cover object-center hidden md:flex" alt="" />
            <img src="images/content/streming-mobile.png" className="object-cover object-center md:hidden" alt="" />
                <div className="inset-0 absolute z-0 w-full h-full bg-black opacity-60"></div>
                <Fade left>
                    <h2 className="text-white font-semibold md:text-3xl text-2xl absolute inset-0 flex justify-center mt-10 w-full">
                        Live Stream Match
                    </h2>
                </Fade>
                    <div className="streming absolute inset-0 md:flex justify-center items-center hidden">
                        <Zoom delay={1000}>
                        <Livestream 
                        videoId="nomJocKOcuI" id="nomJocKOcuI"
                        opts={{
                            playerVars: {
                                loop: 0,
                                mute: 1,
                                autoplay: 1,
                                controls: 0,
                                showinfo: 0,
                            }
                        }}
                    />
                    </Zoom>
            </div>

            <div className="streming absolute inset-0 flex justify-center items-center md:hidden mt-10">
                        <Zoom delay={1000}>
                        <Livestream 
                        videoId="nomJocKOcuI" id="nomJocKOcuI"
                        opts={{
                            height: '200',
                            width: '350',
                            playerVars: {
                                loop: 0,
                                mute: 1,
                                autoplay: 1,
                                controls: 0,
                                showinfo: 0,
                            }
                        }}
                    />
                    </Zoom>
            </div>
            </div>
        </section>
    )
}
