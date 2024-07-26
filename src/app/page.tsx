"use client";
import Image from "next/image";
import React, {useState, useEffect} from 'react';
import ImageSlider from "./_components/imageSlider";
import Link from "next/link";


export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* <ImageSlider></ImageSlider> */}
      <div className="flex flex-wrap flex-row justify-center items-center gap-x-60 gap-y-32 w-4/5">
        <Image 
          src = "/_art/headshot.jpg"
          alt = "Logo"
          width = {500}
          height = {1}
          className="rounded-full animate-fadeInRight"
        />
        <div className="about-picture-description w-1/2">
          &emsp;&emsp;Welcome to my website! I&apos;m Nick Truong and I am majoring in Computer Science with a minor of Game Design and Cybersecurity at Texas A&M University. I work as a SOC Analyst for Texas A&M University as well as a Recreational Activities Director for SASE.
        </div>
      </div>
    </div>
  );
}
