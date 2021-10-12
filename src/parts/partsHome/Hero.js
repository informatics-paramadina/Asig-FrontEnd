import React, {useEffect, useRef, useState} from 'react';
import Header from 'parts/Header';
import YouTube from 'react-youtube';
import LightSpeed from 'react-reveal/LightSpeed';

export default function Hero() {

    const Button = () =>  {
        return (
            <div>
                <a href="#match-valorant" className="bg-purple-800 text-teal-400 hover:bg-teal-400 hover:text-black rounded-xl px-8 py-3 text-xl inline-block flex-none transition duration-300">
                    Live Match
                </a>
            </div>
        )
    }

    let Interval = useRef()
    const [globalTime, setGlobalTime]= useState()
    const startTimer = () => {
        // const countDownDate = new Date('October 1, 2021 0:0:00').getTime();
        const countDownDate = new Date('October 11, 2021 10:00:00').getTime();
        Interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance) % (1000 * 60) / 1000);

            setGlobalTime(days + " : " + hours + " : " + minutes + " : " + seconds)

                if (distance < 0) {
                    clearInterval(Interval.current)
                    setGlobalTime(<Button />)
                }

        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(Interval.current)
        }
    }, [])



    return (
        <section className="pt-10 md:px-0 relative overflow-hidden" style={{height: 660}}>
            <div className="video-wrapper min-h-screen md:min-h-full md:visible invisible">
                <YouTube
                    videoId="AOqsO03mOEs" id="AOqsO03mOEs"
                    opts = {{
                        playerVars: {
                            loop: 1,
                            mute: 1,
                            autoplay: 1,
                            controls: 0,
                            showinfo: 0,
                        }
                    }}
                    onEnd={(ev) => {ev.target.playVideo()}}
                />
            </div>
            <div className="inset-0 absolute z-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute inset-0 z-0 w-full object-fill flex items-center justify-center">
                <div className="">
                    <LightSpeed right delay={1000}>
                    <h2 className="text-teal-500 sm:text-4xl text-3xl animate-bounce font-semibold text-center" style={{textShadow: "2px 2px 7px"}}>ASIG 14 | Connectivity in <br className="md:hidden block" />Digital</h2>
                    </LightSpeed>
                    <LightSpeed left delay={1000}>
                    <div>
                        <div className="stop-watch mt-7">
                            <section>
                                <p>{globalTime}</p>
                            </section>
                        </div>
                    </div>
                    </LightSpeed>
                </div>
            </div>
                <div className="mx-4 z-20 relative">
                    <Header />
                </div>
        </section>
    )
}
