import React, {useEffect, useRef, useState} from 'react'
import Header from 'parts/Header';
import YouTube from 'react-youtube';
import LightSpeed from 'react-reveal/LightSpeed';

export default function Hero() {

    let Interval = useRef()
    const [timerDays, setTimerDays] = useState("00")
    const [timerHours, setTimerHours] = useState("00")
    const [timerMinutes, setTimerMinutes] = useState("00")
    const [timerSecond, setTimerSecond] = useState("00")

    const startTimer = () => {
        const countDownDate = new Date('October 1, 2021 0:0:00').getTime();
        Interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance) % (1000 * 60) / 1000);

            if (distance < 0) {
                clearInterval(Interval.current)
            }else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSecond(seconds)
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
        <section className="pt-10 px-4 md:px-0 relative overflow-hidden" style={{height: 660}}>
            <div className="video-wrapper min-h-screen md:min-h-full">
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
            <div className="inset-0 absolute z-0 w-full h-full bg-black opacity-70"></div>
            <div className="absolute inset-0 z-0 w-full object-fill flex items-center justify-center">
                <div className="items-center">
                    <LightSpeed right delay={1000}>
                    <h2 className="text-teal-500 sm:text-6xl text-3xl animate-bounce font-semibold" style={{textShadow: "2px 2px 7px"}}>Coming Soon ASIG 14</h2>
                    </LightSpeed>
                    <LightSpeed left delay={1000}>
                    <div>
                        <div className="stop-watch mt-7">
                            <section>
                                <p>{timerDays}</p>
                                <small>Days</small>
                            </section>
                            <span>:</span>
                            <section>
                                <p>{timerHours}</p>
                                <small>Hours</small>
                            </section>
                            <span>:</span>{" "}
                            <section>
                                <p>{timerMinutes}</p>
                                <small>Minutes</small>
                            </section>
                            <span>:</span>{" "}
                            <section>
                                <p>{timerSecond}</p>
                                <small>Second</small>
                            </section>
                        </div>
                    </div>
                    </LightSpeed>
                </div>
            </div>
                <div className="container mx-auto z-20 relative">
                    <Header />
                </div>
        </section>
    )
}
