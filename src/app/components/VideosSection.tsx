'use client'

import React, { useState } from "react";
import "../WavySection2.css"; // CSS das ondas

const VideoSection: React.FC = () => {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  const videos = [
    {
      id: "cardano",
      title: "Cardano Warriors OST",
      description: "Epic pixel-art RPG music with exploration and adventure.",
      thumbnail: "/cardano.png",
      url: "https://www.youtube.com/embed/Q-cyePL1mDg",
    },
    {
      id: "phobia",
      title: "Phobia Game Music",
      description: "A tense and atmospheric horror soundtrack.",
      thumbnail: "/phobia.png",
      url: "https://www.youtube.com/embed/example1",
    },
    {
      id: "aila",
      title: "A.I.L.A OST",
      description: "High-energy sci-fi action music.",
      thumbnail: "/aila.png",
      url: "https://www.youtube.com/embed/example2",
    },
    {
      id: "chrono",
      title: "Chrono Trigger OST",
      description: "Iconic music from a classic RPG adventure.",
      thumbnail: "/chrono.jpg",
      url: "https://www.youtube.com/embed/example3",
    },
  ];

  return (
    <section
      id="videos"
      className="relative w-full flex flex-col items-center py-20 bg-[#0F0F0F]"
      >
<div className="wave-2 absolute inset-0 w-full h-full z-0">
  <span></span>
  <span></span>
  <span></span>
</div>

      {/* Section description */}
      <div className="relative z-10 w-full flex justify-center mb-16">
        <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-xl p-10 rounded-2xl shadow-xl text-center max-w-3xl border border-gray-700">
          <h2 className="text-3xl font-bold mb-4 text-white">Music & Videos</h2>
          <p className="text-lg leading-relaxed text-gray-100 opacity-90">
            Explore the soundscapes I create for games and media. Each video shows how music shapes emotions and immerses players in unique worlds.
          </p>
        </div>
      </div>

      {/* Horizontal row of vertical cards */}
      <div className="relative z-10 flex justify-center gap-8 w-full max-w-6xl flex-wrap lg:flex-nowrap">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setOpenVideo(video.url)}
            className="flex flex-col bg-white/10 border border-gray-700 rounded-2xl shadow-xl hover:bg-white/20 transition duration-300 w-[280px] overflow-hidden"
          >
            {/* Image on top */}
            <img
              className="w-full h-64 object-cover"
              src={video.thumbnail}
              alt={video.title}
            />

            {/* Text below */}
            <div className="flex flex-col justify-start p-6">
              <h5 className="mb-3 text-2xl font-bold tracking-tight text-white">
                {video.title}
              </h5>
              <p className="text-gray-300 text-lg">{video.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* See more button */}
      <div className="relative z-10 w-full flex justify-center mt-10">
        <a className="btn-primary rounded-xl px-10 py-3 text-lg">SEE MORE VIDEOS!</a>
      </div>

      {/* Floating video modal */}
      {openVideo && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="relative bg-gray-900 rounded-2xl shadow-xl p-[10px] max-w-[90vw] w-full">
            <button
              onClick={() => setOpenVideo(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold z-50"
            >
              &times;
            </button>
            <iframe
              className="w-full h-[50vw] max-h-[450px] rounded-xl"
              src={openVideo!}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
