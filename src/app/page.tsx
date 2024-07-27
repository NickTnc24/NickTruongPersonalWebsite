"use client";
import Image from "next/image";
import React, {useState, useEffect} from 'react';
import Link from "next/link";


export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center gap-10">
      <Link href = "/" className="text-7xl py-5 justify-center">
          Nick Truong
      </Link>
      <div className="flex flex-wrap lg:flex-nowrap flex-row justify-center md:justify-around items-center gap-y-10 gap-10 mx-10">
        <Image 
          src = "/_art/headshot.jpg"
          alt = "Logo"
          width = {500}
          height = {1}
          className="rounded-full animate-fadeInRight"
        />
        <div className="about-picture-description lg:max-w-[50%]">
          &emsp;&emsp;Welcome to my website! I&apos;m Nick Truong and I am majoring in Computer Science with a minor of Game Design and Cybersecurity at Texas A&M University. I work as a SOC Analyst for Texas A&M University as well as a Recreational Activities Director for SASE.
        </div>
      </div>
    </div>
  );
}
