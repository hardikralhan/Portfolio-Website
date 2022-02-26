import React from "react";
import { AiFillTwitterCircle,AiFillGithub } from "react-icons/ai";
export default function Nav(){
    return (
    <section>
        <div>
        <header className="text-white top-0 md:sticky z-10 bg-black">
            <div className=" flex flex-wrap flex-col md:flex-row items-center sm:text-2xl lg:text-lg">
                <div className=" ml-6 font-medium mb-5 md:mb-0 ">
                    <a data-scroll-to href="#is" className="ml-3 text-xl text-light_purp md:text-xl sm:text-2xl border-[1px] border-slate-300 ">
                        is()
                    </a>
                </div>
                <div className="ml-auto  ">
                <nav className=" flex space-x-6 md:py-5 md:mr-2 ">
                    <a data-scroll-to href="#work" className="mr-2 mt-2 hover:text-light_purp hover:duration-300">work()
                    </a>
                    <a data-scroll-to href="#skills" className="mr-1 mt-2 hover:text-light_purp hover:duration-300">skills()
                    </a>
                    <a data-scroll-to href="#about" className="mr-5 mt-2 hover:text-light_purp hover:duration-300">about()
                    </a>
                    <a data-scroll-to href="#contact" className="mr-5 mt-2 hover:text-light_purp hover:duration-300">contact()
                    </a>
                    <a data-scroll-to href="https://twitter.com/Hardik_rhn">
                    <AiFillTwitterCircle className="h-12 w-10 hover:text-light_purp hover:duration-300"></AiFillTwitterCircle>
                    </a>
                    <a data-scroll-to href="https://github.com/hardikralhan">
                    <AiFillGithub className=" h-12 w-10 hover:text-light_purp hover:duration-300"></AiFillGithub>
                    </a>
                </nav>
                </div>
            </div>
        </header>
        </div>
    </section>
    )
}