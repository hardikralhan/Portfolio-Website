import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";


export default function Work() {
  return (
    <section data-scroll-section id="work" >
      <div className="text-gray-400 px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-16">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="font-bold text-6xl lg:text-3xl  title-font mb-6 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-4xl lg:text-2xl">
            /*<br/>Apps that I have build in recent months <br/>*/
          </p>
          <p className="mt-3 lg:text-2xl text-3xl">//Click on the image to view the source code</p>
        </div>
        <div className="lg:flex lg:flex-wrap my-6 lg:-m-4 ml-32 mr-32">
          {projects.map((project,index) => (
            <div className="hover:p-[10px] hover:-mb-5 duration-200">
            <div data-scroll data-scroll-speed={((project.id)%2)===0? "1":"-1"} data-scroll-direction="horizontal" data-scroll-class="about-p-scroll"
             className="custom-p ">
            <a
              href={project.link}
              key={project.id}
              className="lg:w-1/2  lg:p-4">
              <div className="lg:flex relative  ">
                
                <img data-scroll 
                  alt="gallery"
                  className="img-work absolute inset-0 lg:w-full mb-4 lg:h-full object-cover object-center"
                  src={project.image}
                />
                
                <div className=" px-8 py-16 w-full border-4 backdrop-blur-md  backdrop-grayscale opacity-0 hover:opacity-100 transition-opacity duration-700">
                  <h1 className="tracking-widest font-extrabold text-2xl lg:text-xl text-green-600 mb-1">
                    {project.title}
                  </h1>
                  <h2 className="font-bold lg:text-sm  text-purple-700 mb-3">
                    {project.subtitle}
                  </h2>
                  {project.image_col==="black"?<p className="font-bold leading-relaxed text-white ">
                    {project.description}</p>:
                    <p className="font-bold leading-relaxed text-black ">{project.description}</p>
                  }
                </div>
              </div>
            </a>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}