'use client';
import Image from "next/image";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { UrlObject } from "url";
import React, { useState, useEffect } from 'react';

export default function DarkModeComponent(){
    const [darkMode, setDarkMode] = useState(false);

    // const userTheme = typeof window !== 'undefined' && localStorage.getItem("Theme");

    // const themeCheck = () => {
    //     if (userTheme === "dark") {
    //         document.documentElement.classList.add("dark");
    //     }
    // }

    const changeTheme = () => {
        if (!darkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("Theme", "light");
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("Theme", "dark");
        }
    }
    
    useEffect(() => {
        changeTheme();
    }, [darkMode]);

    return(
        <>  
            {/* {themeCheck()} */}
            <button onClick={() => setDarkMode((darkMode) =>
                darkMode? false : true
            )} className="absolute top-3 left-3 z-30">
                <Image
                    src = {darkMode? '/_art/dark.svg' : '/_art/light.svg'}
                    alt = 'dark mode toggle'
                    width = {40}
                    height = {40}
                    className = "hover:scale-110 hover:transition hover:duration-300 "
                />
            </button>
            
        </>
    );
}