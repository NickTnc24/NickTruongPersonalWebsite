"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { UrlObject } from "url";
import DarkModeComponent from "./darkModeComponent";
import React, { useState, useEffect } from 'react';


function headerLinks(urlName: string, name: string){
    return(
        <Link href = {urlName} className="text-header-size active:text-darktext dark:active:text-lighttext">
            {name}
        </Link>
    );
};

function removePing(pingName: string){
    document.getElementById(pingName)?.classList.add("after:content-none");
}
//new headercomponent
export default function HeaderComponent(){
    return(
        <>
            <div className="absolute flex flex-row items-center justify-between top-0 z-10 w-full rounded-md sm:duration-300 ">
                <div className="pl-7 pt-2 w-[60px] h-[60px]">
                    <DarkModeComponent/>
                </div>
                <div className="flex flex-row p-4 px-7 rounded-md gap-x-20 gap-y-5 max-sm:gap-10 max-sm:text-xl">
                    <div className="hover:scale-110 hover:duration-300">{headerLinks("/", "Home")}</div>
                    <div className="addPing hover:scale-110 hover:duration-300" id= 'aboutPing' onClick={() => removePing('aboutPing')}>{headerLinks("/about", "About")}</div>
                    <div className="addPing hover:scale-110 hover:duration-300" id= 'projectsPing' onClick={() => removePing('projectsPing')}>{headerLinks("/work", "Work")}</div>
                </div>
            </div>
        </>
    );
}

// export default function HeaderComponent(){
//     return(
//         <>
//             <div className="sticky flex flex-row items-center justify-between top-0 primary-dynamic z-10 rounded-md sm:duration-300">
//                 <div className="pl-7 pt-2 w-[60px] h-[60px]">
//                     <DarkModeComponent/>
//                 </div>
//                 {/* <div className="sm:hidden absolute right-0"></div> */}
//                 <div className="flex flex-row p-4 px-7 rounded-md gap-x-20 gap-y-5 max-sm:gap-10 max-sm:text-xl">
//                     <div className="hover:scale-110 hover:duration-300">{headerLinks("/", "Home")}</div>
//                     <div className="addPing hover:scale-110 hover:duration-300" id= 'aboutPing' onClick={() => removePing('aboutPing')}>{headerLinks("/about", "About")}</div>
//                     <div className="addPing hover:scale-110 hover:duration-300" id= 'projectsPing' onClick={() => removePing('projectsPing')}>{headerLinks("/work", "Work")}</div>
//                 </div>
//             </div> 
//             <div className="relative flex flex-wrap items-center justify-center rounded-2xl left-1/2 w-3/4 gap-3 -translate-x-1/2 mb-10">
//             </div>
//         </>
//     );
// }