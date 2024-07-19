import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = ['/_art/eating.JPEG', '/_art/postrun.JPEG', '/_art/roomies.JPEG', '/_art/vb.JPEG',];

export default function ImageSlider(){
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((currIndex) => (currIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  return (
    <>
        <Image
            src = {images[currIndex]}
            alt = "imageSlider"
            width = {1000}
            height = {1}
        />
    </>
  );
};

