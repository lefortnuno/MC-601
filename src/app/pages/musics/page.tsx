"use client";

import { useState, useEffect } from "react";
import "./music.css";
import Image from "next/image";
import { videos } from "@/dwmusicfilm/music.data";
import Video from "@/components/video/Video";
import { motion, AnimatePresence } from "framer-motion";

export default function Music() {
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [baseItemsPerPage, setBaseItemsPerPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // 👈 new state

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;

      if (width < 600) {
        setBaseItemsPerPage(3);
        setIsSmallScreen(true);
      } else if (width < 1024) {
        setBaseItemsPerPage(5);
        setIsSmallScreen(false);
      } else {
        setBaseItemsPerPage(7);
        setIsSmallScreen(false);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    setIsReady(false);
    const timeout = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(timeout);
  }, [currentIndex, baseItemsPerPage]);

  const hasPreviousVideos = currentIndex > 0;
  const itemsPerPage = hasPreviousVideos
    ? baseItemsPerPage - 1
    : baseItemsPerPage;
  const visibleVideos = videos.slice(currentIndex, currentIndex + itemsPerPage);
  const hasNextVideos = currentIndex + itemsPerPage < videos.length;

  const handleShowNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  const handleShowPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
  };

  const handleVideoClick = (videoLink: string) => {
    const embedLink = videoLink
      .replace("watch?v=", "embed/")
      .concat("?autoplay=1&mute=0");
    setSelectedVideo(embedLink);
    setIsVideoVisible(true);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    setIsVideoVisible(false);
  };

  return (
    <div
      className="content-wrapper"
      style={{ backgroundColor: isVideoVisible ? "transparent" : "black" }}
    >
      <Video name="diaspo-mc" onVisibilityChange={setIsVideoVisible} />

      {selectedVideo ? (
        <div className="video-player-overlay">
          <button className="close-btn" onClick={handleCloseVideo}>
            ✖
          </button>
          <iframe
            src={selectedVideo}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
            className="video-player"
          ></iframe>
        </div>
      ) : (
        <div className="video-list">
          {isSmallScreen ? (
            <>
              {isReady && hasPreviousVideos && (
                <div className="voir-plus" onClick={handleShowPrevious}>
                  <p>Voir Précédents</p>
                </div>
              )}
            </>
          ) : (
            <AnimatePresence>
              {isReady && hasPreviousVideos && (
                <motion.div
                  className="voir-plus"
                  onClick={handleShowPrevious}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>Voir Précédents</p>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {visibleVideos.map((video, index) => (
            <div
              key={index}
              className="video-card video-card-animated"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleVideoClick(video.link)}
            >
              <div className="thumbnail-container">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  className="thumbnail"
                  width={300}
                  height={169}
                  priority
                />
                <p className="duration">{video.duration}</p>
                <div className="video-info">
                  <h2 className="title">{video.title}</h2>
                  <p className="channel-name">{video.channelName}</p>
                </div>
              </div>
            </div>
          ))}

          {isSmallScreen ? (
            <>
              {isReady && hasNextVideos && (
                <div className="voir-plus" onClick={handleShowNext}>
                  <p>Voir Plus</p>
                </div>
              )}
            </>
          ) : (
            <AnimatePresence>
              {isReady && hasNextVideos && (
                <motion.div
                  className="voir-plus"
                  onClick={handleShowNext}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>Voir Plus</p>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      )}
    </div>
  );
}
