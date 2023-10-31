import me from "../ani_page.svg";
import ParticlesComp from "./ParticleComp";
import Typed from "react-typed";


export default function LandingPage(){
    return (
      
      <section data-scroll-section id="is">
        <div className="lg:flex lg:flex-row py-3 ">
         <ParticlesComp />
          <div className="lg:ml-20 ml-14 lg:mt-12 mt-9 md:w-1/2 lg:pr-72 mb-16 md:mb-0">
            <div className="flex -mb-4">
              <h1 className=" font-extrabold text-8xl  mb-4 text-white">
                hardik
              </h1>
              <div className=" font-extrabold -ml-2 text-8xl  mb-4 text-purple-700">
              <Typed
                strings={[".is()"]}
                typeSpeed={100}
              />
              </div>
            </div>
            {/* <div className="-mt-6 leading-relaxed text-purple-700 text-5xl">
            <Typed
                strings={["Hardik Ralhan"]}
                typeSpeed={40}
              />
            </div> */}
            <p className="-mt-6 leading-relaxed text-purple-700 text-5xl">
            Hardik Ralhan</p>
            <p className=" leading-relaxed text-slate-400 text-3xl ">
              /* 
            </p><p className="-mt-3  leading-relaxed text-slate-400 text-3xl">
            Transforming Ideas |
            </p>
            <p className="-mt-3  leading-relaxed text-slate-400 text-3xl">
            Full-Stack Developer |
            </p>
            <p className="-mt-3  leading-relaxed text-slate-400 text-3xl">
            Software Developer, Emoneeds (Gurgaon) |
            {/* at <i><u><a href="https://www.osmania.ac.in/">Osmania University</a></u></i>, */}
            </p>
            {/* <p className="-mt-3 leading-relaxed text-slate-400 text-3xl">
            Hyderabad
            </p> */}
            <p className="-mt-3 mb-8 leading-relaxed text-slate-400 text-3xl">
            */
            </p>
            <div className="flex justify-center ">
              <a data-scroll-to
                href="#contact"
                className=" inline-flex text-white bg-green-500 border-0 lg:py-2 py-3 lg:px-6 px-10 focus:outline-none hover:bg-green-600 rounded text-3xl lg:text-lg">
                Work With Me
              </a>
              <a data-scroll-to
                href="#work"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 lg:py-2 py-3 lg:px-6 px-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-2xl lg:text-lg">
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-0 w-[60%] ml-48 ">
            <img
              className="lg:mt-2 mt-0 "
              alt="hero"
              src={me}
            />
          </div>
          
        </div>
      </section>
      
    );
}