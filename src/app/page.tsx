"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BsPlus } from "react-icons/bs";
import { items } from "@/components/Data/carousel.data";
import "./pages/sliders/carousel.css";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 55000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [activeIndex]);

  const handleNextSlide = () => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      setTransitioning(false);
    }, 500);
  };

  const handleManualSlide = (index: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setTransitioning(false);
    }, 500);
  };

  return (
    <div className="blog-card">
      <video
        ref={videoRef}
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controls={false}
      >
        <source src={items[activeIndex].video} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
      <div className="sliders">
        {items.map((_, index) => (
          <button
            key={index}
            className={`tap ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleManualSlide(index)}
          />
        ))}
      </div>
      <div className="inner-part">
        <div className={`img-container ${transitioning ? "move-left" : ""}`}>
          <Image
            src={items[activeIndex].imgSrc}
            alt={items[activeIndex].title}
            width={200}
            height={200}
            className="images-works"
          />
        </div>
        <div className="content">
          <span>{items[activeIndex].date}</span>
          <div className="title">{items[activeIndex].title}</div>
          <div className="text">{items[activeIndex].description}</div>
          <button>
            <a
              href={items[activeIndex].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir Plus <BsPlus />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
