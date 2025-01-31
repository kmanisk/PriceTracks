"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"; // Ensure you have the Autoplay plugin

const heroImages = [
  { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch' },
  { imgUrl: '/assets/images/hero-2.svg', alt: 'bag' },
  { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp' },
  { imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer' },
  { imgUrl: '/assets/images/hero-5.svg', alt: 'chair' },
];

const HeroCarousel = () => {
  const carouselRef = useRef(null);

  const autoplayPlugin = Autoplay({
    delay: 2000,
    stopOnMouseEnter: true, // Stop autoplay on hover
  });

  return (
    <div className="relative hero-carousel">
      <Carousel
        ref={carouselRef}
        plugins={[autoplayPlugin]} // Apply the Autoplay plugin
        opts={{ loop: true }} // Enable loop
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={image.alt} className="w-full">
              <Image
                src={image.imgUrl}
                alt={image.alt}
                width={484}
                height={484}
                className="object-contain w-full pointer-events-none" // Disable interactions with the image
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute top-1/2 left-0 z-10" />
        <CarouselNext className="absolute top-1/2 right-0 z-10" />
      </Carousel>

      <Image
        src="assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  );
}

export default HeroCarousel;
