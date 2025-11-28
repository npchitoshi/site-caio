'use client'

import React, { useState } from "react";
import "../WavySection.css";

const WavySection: React.FC = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <section
      id="jogos"
      className="relative w-full flex justify-center items-start overflow-hidden py-20"
    >
      {/* Waves */}
      <div className="wave absolute inset-0 w-full h-full">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col gap-16 items-center justify-start w-full max-w-6xl px-4">

        {/* 🔥 DESCRIÇÃO DOS GAMES */}
        <div className="w-full flex justify-center">
          <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-xl p-10 rounded-2xl shadow-xl text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Games Composition</h2>

            <p className="text-lg leading-relaxed opacity-90">
              As a game composer and gamer, I create music that fits every moment of the gameplay. 
              I take the main idea of the game and turn it into a theme that brings the world 
              to life, making the experience more immersive and memorable.
            </p>
          </div>
        </div>

        {/* Cards container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full justify-items-center">
          {/* Card 1 */}
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full max-w-xl"
          >
            <img
              className="w-full sm:w-48 h-48 flex-shrink-0 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="/phobia.png"
              alt="Phobia game cover"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                PHOBIA
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A first-person horror game filled with puzzles, tension, and atmospheric storytelling.
              </p>
            </div>
          </a>

          {/* Card 2 – Cardano with video */}
          <button
            onClick={() => setOpenVideo(true)}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full max-w-xl"
          >
            <img
              className="w-full sm:w-48 h-48 flex-shrink-0 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="/cardano.png"
              alt="Cardano Warriors"
            />
            <div className="flex flex-col justify-between p-4 leading-normal text-center md:text-left">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cardano Warriors
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A pixel-art RPG with exploration, battles, and blockchain-based progression.
              </p>
            </div>
          </button>

          {/* Card 3 */}
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full max-w-xl"
          >
            <img
              className="w-full sm:w-48 h-48 flex-shrink-0 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="/aila.png"
              alt="A.I.L.A"
            />
            <div className="flex flex-col justify-between p-4 leading-normal text-center md:text-left">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                A.I.L.A
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A fast-paced sci-fi action game where an advanced AI faces mystery and high-tech combat.
              </p>
            </div>
          </a>

          {/* Card 4 – Chrono Trigger */}
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full max-w-xl"
          >
            <img
              className="w-full sm:w-48 h-48 flex-shrink-0 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="/chrono.jpg"
              alt="Chrono Trigger"
            />
            <div className="flex flex-col justify-between p-4 leading-normal text-center md:text-left">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Chrono Trigger
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A legendary RPG filled with time travel, memorable characters, and iconic music.
              </p>
            </div>
          </a>

        </div>

        {/* Button */}
        {/* <div className="w-full flex justify-center mt-8">
          <a className="btn-primary rounded-xl">
            SEE MUCH MORE!
          </a>
        </div> */}
        
      </div>

      {/* Floating video */}
      {openVideo && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="relative pointer-events-auto bg-gray-800 rounded-lg shadow-lg p-[10px]">
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold z-50"
            >
              &times;
            </button>
            <iframe
              className="w-[90vw] max-w-[600px] h-[50vw] max-h-[337.5px] rounded-lg"
              src="https://www.youtube.com/embed/Q-cyePL1mDg"
              title="Cardano Video"
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

export default WavySection;
