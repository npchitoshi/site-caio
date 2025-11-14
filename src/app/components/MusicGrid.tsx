"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../MusicGrid.css"; //

const MusicGrid: React.FC = () => {
  const cards = [
    { title: "Jazz", artist: "Trecho de teste", img: "/images/jazz.png", audio: "/sounds/jazz.mp3" },
    { title: "Metal", artist: "You Cannot Kill Me", img: "images/metal.png", audio: "/sounds/metal.mp3" },
    { title: "Pop", artist: "Tycho", img: "https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg", audio: "/sounds/dive.mp3" },
    { title: "Reggae", artist: "Tycho", img: "https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg", audio: "/sounds/dive2.mp3" },
    { title: "Eletrônico", artist: "Tycho", img: "https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg", audio: "/sounds/dive2.mp3" },
    { title: "Dive 2", artist: "Tycho", img: "https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg", audio: "/sounds/dive2.mp3" },
    { title: "Dive 2", artist: "Tycho", img: "https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg", audio: "/sounds/dive2.mp3" },
    { title: "Dive 2", artist: "Tycho", img: "https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg", audio: "/sounds/dive2.mp3" },
  ];

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const togglePlay = (idx: number) => {
    if (playingIndex === idx) {
      audioRefs.current[idx]?.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) audioRefs.current[playingIndex]?.pause();
      audioRefs.current[idx]?.play();
      setPlayingIndex(idx);
    }
  };

  return (
    <div className="musicgrid-container">
      <h1 className="musicgrid-title">Estilos Musicais</h1>

      <div className="musicgrid-wrapper">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={100}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx} className="musicgrid-slide">
              <div className="musicgrid-card">
                <div className="musicgrid-image-wrapper">
                  <img className="musicgrid-image" src={card.img} alt={card.title} />

                  <button
                    onClick={() => togglePlay(idx)}
                    className="musicgrid-play-btn"
                  >
                    {playingIndex === idx ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.5 3.5h1v9h-1v-9zm4 0h1v9h-1v-9z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6 5.5v5l4-2.5-4-2.5z" />
                      </svg>
                    )}
                  </button>

                  <audio ref={(el) => (audioRefs.current[idx] = el)} src={card.audio} />
                </div>

                <div className="musicgrid-text">
                  <h3 className="musicgrid-card-title">{card.title}</h3>
                  <p className="musicgrid-card-artist">{card.artist}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default MusicGrid;
