import React from "react";
// import Livestream from "react-youtube";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import ReactLivestream from "react-livestream";
import Iframe from "react-iframe";

function OfflineComponent() {
  console.log("hello");
  return (
    <div>
      <p>I am offline now, but checkout my stream on Fridays at 5 PM EST</p>
    </div>
  );
}

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
        <div className="streming absolute inset-0 flex justify-center items-center">
          <div className="w-2/3 h-2/3">
              <Iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/live_stream?channel=UC4TqGrKuaIGCXjkyXzeNDMg"
                frameBorder="0"
                allowFullScreen
              ></Iframe>
              {/* <Livestream
              videoId="M99DShgu664"
              id="M99DShgu664"
              opts={{
                playerVars: {
                  loop: 0,
                  mute: 0,
                  autoplay: 1,
                  controls: 0,
                  showinfo: 0,
                },
              }}
            /> */}
          </div>
        </div>

        <div className="streming absolute inset-0 flex justify-center items-center md:hidden mt-12">
          <Zoom delay={1000}></Zoom>
        </div>
      </div>
    </section>
  );
}
