import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Iframe from "react-iframe";



export default function Striming() {
  return (
    <section className="relative" id="match-valorant">
      <div className="">
        <img
          src="images/content/streming.png"
          className="object-cover object-center hidden md:flex"
          alt=""
        />
        <img
          src="images/content/streming-mobile.png"
          className="object-cover object-center md:hidden"
          alt=""
        />
        <div className="inset-0 absolute z-0 w-full h-full bg-black opacity-60"></div>
        <Fade left>
          <h2 className="text-white font-semibold md:text-3xl text-2xl absolute inset-0 flex justify-center md:mt-10 mt-5 w-full">
            Live Stream Match
          </h2>
        </Fade>
        <div className="streming absolute inset-0 md:flex justify-center items-center hidden">
              <Zoom delay={1000}>
              <Iframe
              width='800'
              height='500'
                src="https://www.youtube.com/embed/live_stream?channel=UC4TqGrKuaIGCXjkyXzeNDMg"
                frameBorder="0"
              />
              </Zoom>
        </div>

        <div className="streming absolute inset-0 flex justify-center items-center md:hidden mt-12">
          <Zoom delay={1000}>
              <Iframe
                height='200'
                width='350'
                src="https://www.youtube.com/embed/live_stream?channel=UC4TqGrKuaIGCXjkyXzeNDMg"
                frameBorder="0"
              />
            </Zoom>
        </div>
      </div>
    </section>
  );
}
