import useLocoScroll from '../useLocoScroll';
import { useEffect, useRef, useState } from 'react';
import Preloader from './Preloader'
import Nav from "./Nav";
import LandingPage from "./LandingPage";
import Work from "./Work";
import Skills from "./skills";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";

function App() {
    // load area - start
    const [preload,setPreload]= useState(true);
    useLocoScroll(!preload);
    const [timer,setTimer]= useState(2);
    const id = useRef(null);
    const clear = () =>{
        window.clearInterval(id.current);  // it will clear the timer
        setPreload(false);
    };
    useEffect(()=>{
        id.current = window.setInterval(()=>{
            setTimer(timer=>timer-1);
        },1000)
    },[]);
    useEffect(()=>{
        if(timer===0){
            clear();
        }
    },[timer]);
    // load area - finish

  return (
  <div id='main-container'>
  
      {preload ? <Preloader/>:<div>
        <Nav />
        <LandingPage />
        <Work />
        <About />
        <Skills />
        <Contact />
        {/* <Footer /> */}
      </div>}

      
      {/* <Nav />
      <LandingPage />
      <Work />
      <About />
      <Skills />
      <Contact /> */}
  </div>
  );
}

export default App;
