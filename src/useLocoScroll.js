import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(start){
    useEffect(()=>{
        if (!start) return;
        let locoScroll = null;
        const scrollEl = document.querySelector("#main-container");
        locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: "is-reveal",
            mobile:{
                breakpoint:0,
                smooth: true,
                multiplier: 1,
            },
            tablet:{
                breakpoint:0,
                smooth: true,
                multiplier: 1,
            },
        })
        setTimeout(() => {
            locoScroll.update();
        }, 500); 
        
    },[start])
        
}