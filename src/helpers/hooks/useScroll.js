import {useLayoutEffect} from 'react';


export default function useScroll() {
    useLayoutEffect(() => {
        const smoothScroll = document.querySelectorAll("a[href^= '#']");
        function scrollBottom(ev) {
            ev.preventDefault();
            if(document.getElementById(this.getAttribute("href").replace("#", "")))
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                })
        }

        for (const scroll of smoothScroll) {
            scroll.addEventListener("click", scrollBottom)
        }

        return () => {};
    })
}
