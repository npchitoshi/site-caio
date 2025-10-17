"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const MusicGrid: React.FC = () => {
  const cards = [
    { title: "Jazz", artist: "Trecho de teste", img: "/images/jazz.png", audio: "/sounds/jazz.mp3" },
    { title: "Metal", artist: "You Cannot Kill Me", img: "images/metal.png", audio: "/sounds/metal.mp3" },
    { title: "Dive", artist: "Tycho", img: "https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg", audio: "/sounds/dive.mp3" },
    { title: "Dive 2", artist: "Tycho", img: "https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg", audio: "/sounds/dive2.mp3" },
  ];

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const togglePlay = (idx: number) => {
    if (playingIndex === idx) {
      // Pause if already playing
      audioRefs.current[idx]?.pause();
      setPlayingIndex(null);
    } else {
      // Pause any other audio
      if (playingIndex !== null) {
        audioRefs.current[playingIndex]?.pause();
      }
      // Play this one
      audioRefs.current[idx]?.play();
      setPlayingIndex(idx);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-10 text-center">
        Estilos Musicais
      </h1>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
            <div className="bg-yellow-300 shadow-lg rounded p-3 max-w-xs w-full group relative">
              <div className="relative">
                <img className="w-full h-72 object-cover rounded" src={card.img} alt={card.title} />

                {/* Play/Pause button */}
                <button
                  onClick={() => togglePlay(idx)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                             bg-gray-900 bg-opacity-80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100
                             transition hover:scale-110"
                >
                  {playingIndex === idx ? (
                    // Pause icon
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.5 3.5h1v9h-1v-9zm4 0h1v9h-1v-9z" />
                    </svg>
                  ) : (
                    // Play icon
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M6 5.5v5l4-2.5-4-2.5z" />
                    </svg>
                  )}
                </button>

                {/* Audio element */}
                <audio ref={(el) => (audioRefs.current[idx] = el)} src={card.audio} />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-white text-lg">{card.title}</h3>
                <p className="text-gray-400">{card.artist}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MusicGrid;
