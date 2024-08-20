"use client";
import Image from "next/image";
import React, {useState, useEffect} from 'react';
import Link from "next/link";
import HeaderComponent from "./_components/headerComponent";

export default function Home() {

  return (
    <div className="relative min-h-screen overflow-hidden text-lightprimary">
      <Image 
        src = "/_art/bg.JPG"
        alt = "Background"
        fill
        layout="fill"
        objectFit="cover"
        className="absolute brightness-50"
      />
      <div className="flex flex-col items-center justify-start mt-20">
        <Image 
          src = "/_art/headshot.jpg"
          alt = "Logo"
          width = {250}
          height = {1}
          className="relative rounded-full animate-fadeInRight"
        />
        {/* In the box */}
        <div className="addUnderline animate-fadeInRight"></div>
        <div className="relative text-7xl mb-5">
          Nick Truong
        </div>
        <div className="text-center relative">
          Software Engineer, Marathon Runner, Security Analyst, Pianist, Sports Coordinator
        </div>
        <div className="addUnderline animate-fadeInLeft"></div>
        {/* In the box */}
      </div>
      {/* contact links */}
      <div className="relative flex flex-row justify-center gap-x-10 z-10 mb-10 animate-fadeInLeft">
        <Link href= 'https://github.com/nicktnc24' target="_blank" className="hover:scale-110 hover:transition hover:duration-300 active:duration-0">
          <Image
            src = "/_art/github.jpg"
            alt = "Github"
            width = {40}
            height = {40}
            className="rounded-full relative"
          />
        </Link>
        <Link href= 'https://www.linkedin.com/in/nick-truong' target="_blank" className="hover:scale-110 hover:transition hover:duration-300 active:duration-0">
          <Image
            src = "/_art/linkedin.png"
            alt = "LinkedIn"
            width = {40}
            height = {40}
            className="relative"
          />
        </Link>
        <Image
          src = "/_art/number.png"
          alt = "Number"
          width = {40}
          height = {40}
          title="281-919-4995"
          className="relative"
        />
        <Image
          src = "/_art/mail.png"
          alt = "Email"
          width = {40}
          height = {40}
          title="nicktnc24@gmail.com"
          className="relative"
        />
      </div>
      {/* contact links */}
      <div className="absolute bottom-0 right-0">Built via Next.js and Tailwind</div>
    </div>
  );
}
