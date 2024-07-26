import Image from "next/image";
import React, {useState, useEffect} from 'react';
import Link from "next/link";

export const metadata = {
    title: "My Projects",
    description: "Yo this is the stuff I did",
};

function projectLinks(title: string,urlName: string, imgPath: string, description: string){
    return(
        <div className="flex rounded-md border-8 border-red-600 dark:backdrop-brightness-200 backdrop-brightness-90 mx-10 flex-wrap">
            <Link href={urlName} target="_blank">
                <Image
                    src = {imgPath}
                    alt = "project"
                    width = {200}
                    height = {200}
                    className="rounded-md w-11/12"
                />
            </Link>
            <div className="flex flex-col border-8">
                <div className="h-1/2">{title}</div>
                <div className="opacity-60">{description}</div>
            </div>
        </div>
    );
};

export default function Projects(){
    return (
        <div className="min-h-screen flex flex-col gap-10">
          <div className="text-header-size self-center">Projects</div>
          <div className="self-center opacity-60">Click on an project to learn more about it</div>
          <div className="flex justify-evenly flex-wrap">
            <div>{projectLinks("SecuroChat", "https://github.com/aggie-coding-club/SecuroChat?tab=readme-ov-file", "/_art/securochat.jpg", "jaoidfjaosdjfasdfasdfafasdfsa")}</div>
            <div>{projectLinks("Securochat", "https://github.com/aggie-coding-club/SecuroChat?tab=readme-ov-file", "/_art/securochat.jpg", "jaoidfjaosdjf")}</div>
          </div>
        </div>
      );
}