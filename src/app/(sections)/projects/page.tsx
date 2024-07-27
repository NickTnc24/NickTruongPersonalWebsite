import Image from "next/image";
import React, {useState, useEffect} from 'react';
import Link from "next/link";

export const metadata = {
    title: "My Projects",
    description: "Yo this is the stuff I did",
};

function projectLinks(title: string,urlName: string, imgPath: string, description: string, techUsed: Array<String>){
    return(
        <div className="flex rounded-md dark:backdrop-brightness-200 backdrop-brightness-90 flex-wrap lg:flex-nowrap justify-center gap-2 min-w-[250px] max-w-[720px]">
            <Link href={urlName} target="_blank" className="shrink-0">
                <Image
                    src = {imgPath}
                    alt = "project"
                    width = {250}
                    height = {200}
                    className="rounded-md"
                />
            </Link>
            <div className="flex flex-col justify-around gap-y-2">
                <Link href={urlName} target="blank" className="text-2xl">
                    {title}
                </Link>
                <div className="flex flex-row gap-2 flex-wrap">
                    {techUsed.map((element, index) => (
                        <div key={index} className="border-4 dark:border-darkprimary border-lightprimary rounded-2xl text-center p-1">{element}</div>
                    ))}
                </div>
                <div className="opacity-60">&emsp;&emsp;{description}</div>
            </div>
        </div>
    );
};

export default function Projects(){
    return (
        <div className="min-h-screen flex flex-col gap-10">
          <div className="text-header-size self-center">Projects</div>
          <div className="self-center opacity-60">Click on an project to learn more about it</div>
          <div className="flex flex-row gap-y-10 mx-10 justify-around gap-x-10 flex-wrap">
            <div>{projectLinks("SecuroChat", "https://github.com/aggie-coding-club/SecuroChat?tab=readme-ov-file", "/_art/securochat.jpg", "SecuroChat is an end-to-end Encrypted real-time chat application ensuring secure communication between users.", ["React Native", "Node.js", "AWS", "WebSocket", "React Navigation", "PostgreSQL", "Redux", "Firebase Cloud Messaging"])}</div>
            <div>{projectLinks("Personal Website", "https://github.com/NickTnc24/NickTnc24.github.io", "/_art/website.png", "I made a personal website that you can find all about me!", ["Next.js", "Tailwind", "Vercel"])}</div>
            {/* <div>{projectLinks("Securochat", "https://github.com/aggie-coding-club/SecuroChat?tab=readme-ov-file", "/_art/securochat.jpg", "jaoidfjaosdjf", [])}</div>
            <div>{projectLinks("SecuroChat", "https://github.com/aggie-coding-club/SecuroChat?tab=readme-ov-file", "/_art/securochat.jpg", "jaoidfjaosdjfasdfasdfafasdfsa", [])}</div> */}

          </div>
        </div>
      );
}