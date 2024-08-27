import Image from "next/image";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { UrlObject } from "url";
import React, { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";


export default function DarkModeComponent(){
    const [darkMode, setDarkMode] = useState(false);

    const pathname = usePathname();

    const isOnHomePage = () => {
        return pathname === "/";
    }

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
            <button onClick={() => setDarkMode((darkMode) =>
                darkMode? false : true
            )}
            hidden = {isOnHomePage()}
            className="absolute top-3 left-3 z-30">
                <Image
                    src = {darkMode? '/_art/light.png' : '/_art/dark.svg'}
                    alt = 'dark mode toggle'
                    width = {40}
                    height = {40}
                    className = "relative hover:scale-110 hover:transition hover:duration-300 "
                />
            </button>
        </>
    );
}