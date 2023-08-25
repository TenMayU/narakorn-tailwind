"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar(){
    const [navshow, setNavshow] = useState("hidden")
    const navtoggle =()=>{
        if(navshow === "hidden"){
            setNavshow("flex")
        }else{
            setNavshow("hidden")
        }
    }
    return(
        <>
         <nav className=" bg-transparent absolute z-10 w-full min-h-[30px] h-[3vw] flex flex-row justify-between px-5 items-center" >
            <Link href="/">
                <h1 className="text-xl lg:text-2xl text-white">
              
                </h1>
                </Link>
             <ul className={`${navshow} `+"flex flex-col text-lg items-center z-10 gap-5 absolute w-full h-[100px] left-0 top-14  lg:flex-row lg:static lg:flex lg:h-fit lg:w-fit "}>
                <Link href="/" className=" w-16 h-10 bg-green-400 flex justify-center items-center rounded-lg">
                    <h1 className="text-white">
                    Github
                    </h1>
                </Link>
            </ul>
        {/*     <ul className={"hidden lg:flex-row lg:static lg:h-fit lg:w-fit lg:flex"}>
                <Link href="/">
                 May
                </Link>
                <Link href="/">
                 May
                </Link>
            </ul> */}
      {/*       <div className=" block cursor-pointer lg:hidden " onClick={()=>{navtoggle()}}>X</div> */}
        </nav>
        </>

    )
}