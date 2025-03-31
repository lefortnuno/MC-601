"use client";

import { useState, useEffect } from "react";
import "../musics/music.css";
import { videos } from "@/components/Data/film.data";

export default function Film() {
  const [baseItemsPerPage, setBaseItemsPerPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setBaseItemsPerPage(3);
      } else if (width < 1024) {
        setBaseItemsPerPage(5);
      } else {
        setBaseItemsPerPage(7);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

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
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="content-wrapper">
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
          {hasPreviousVideos && (
            <div className="voir-plus" onClick={handleShowPrevious}>
              <p>Voir Précédents</p>
            </div>
          )}

          {visibleVideos.map((video, index) => (
            <div
              key={index}
              className="video-card"
              onClick={() => handleVideoClick(video.link)}
            >
              <div className="thumbnail-container">
                <img
                  src={video.thumbnail}
                  alt="Video Thumbnail"
                  className="thumbnail"
                />
                <p className="duration">{video.duration}</p>
                <div className="video-info">
                  <h2 className="title">{video.title}</h2>
                  <p className="channel-name">{video.channelName}</p>
                </div>
              </div>
            </div>
          ))}

          {hasNextVideos && (
            <div className="voir-plus" onClick={handleShowNext}>
              <p>Voir Plus</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
