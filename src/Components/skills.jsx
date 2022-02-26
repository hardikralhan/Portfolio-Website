import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section data-scroll-section id="skills">
      <div className=" px-5 py-10  ">
        <div className="text-center mb-12">
          <ChipIcon  className="w-10 inline-block mb-4 text-light_purp" />
          <h1  className="text-center text-6xl lg:text-3xl text-white mb-4">
            <b>Skills & Technologies</b>
          </h1>
          <p className=" text-slate-400 mt-8 text-4xl lg:text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
           /* <br /> I think it is possible for an ordinary person to choose to be an <b>extraordinary</b> <br />*/
          </p>
        </div>
        <div className="lg:flex lg:flex-wrap lg:w-4/5 max-w-full lg:mx-auto mb-2 -mx-2 lg:-ml-0 ">
          {skills.map((skill,index) => (
            <div data-scroll data-scroll-speed={((index)%2)===0? "-1":"1"} data-scroll-direction="horizontal" data-scroll-class="about-p-scroll"
              key={skill} className="custom-p p-3 lg:w-1/2 w-full">
              <div className="container bg-gray-800 rounded flex p-10 lg:p-4 lg:h-full items-center ml-20 lg:mr-40 lg:ml-36">
                <BadgeCheckIcon className="text-green-400 w-10 h-10 lg:w-6 lg:h-6 flex-shrink-0 mr-4" />
                <span className="lg:title-font lg:font-medium lg:text-xl text-4xl text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}