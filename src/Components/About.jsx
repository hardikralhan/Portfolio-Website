import me from "../me.png";
import resume from "../Resume.pdf";
import {BiDownload} from "react-icons/bi";

export default function About(){
    let title = "</About Me>",
    description =
      "A student passionate about tech. I'm quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time. Other than that, I love to workout plus love to play with dogs";

      return(
        <section data-scroll-section id="about">
             <div className="mb-6 mt-6 box-border ">
                <h2 className=" opacity-0 transition-opacity duration-1000 text-center text-6xl lg:text-3xl text-white mb-8 font-bold" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3" data-scroll-class="about-p-scroll">{title}</h2>
                    <div className="lg:flex ">
                        <div className="">
                        <img 
                            className="container rounded-full m-auto lg:w-72 w-96 lg:ml-32 border-4 border-slate-500"
                            src={me}
                            alt="me "
                        />
                        </div>
                
                    <div data-scroll data-scroll-speed="1" data-scroll-class="about-p-scroll"
                     className="text-slate-400 text-4xl lg:text-2xl leading-relaxed  ml-16 lg:ml-26 lg:mt-16 opacity-0 transition-opacity duration-[1300ms]">
                        <p>
                        /* <br/> {description} <br/> /*
                        </p>
                        <div className="flex">
                        <a href={resume} className="flex text-black bg-light_purp border-0 lg:pt-[0.15rem] lg:pb-[0.15rem] py-1 lg:px-4 px-5 focus:outline-none hover:bg-white duration-300 rounded-2xl font-bold lg:text-lg text-4xl" >resume <BiDownload className="mt-[0.35rem] ml-2"></BiDownload></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
}