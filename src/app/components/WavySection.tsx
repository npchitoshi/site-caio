'use client'

import React, { useState } from "react";
import "../WavySection.css";

const WavySection: React.FC = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <section id="jogos" className="relative w-full min-h-screen lg:h-screen flex justify-center items-center overflow-hidden">
      {/* Waves */}
      <div className="wave absolute inset-0 w-full h-full">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col gap-8 items-center justify-center w-full max-w-6xl px-4 py-12">
        <h2 className="text-4xl tracking-wider font-bold mb-8 text-center">
          JOGOS
        </h2>

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
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
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
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cardano Project
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Click to watch a video about this project.
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
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Third amazing project
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A brief description of the third project. Add key points or highlights.
              </p>
            </div>
          </a>

          {/* Card 4 */}
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full max-w-xl"
          >
            <img
              className="w-full sm:w-48 h-48 flex-shrink-0 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="/chrono.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Fourth cool project
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A brief description of the fourth project. Keep it concise and clear.
              </p>
            </div>
          </a>
        </div>

        <div className="w-full flex justify-center mt-8">
          <a
            href="/outra-pagina"
            className="px-6 py-3 bg-[#B71C1C] hover:bg-[#F44336] text-white text-lg font-semibold rounded-xl shadow-lg transition"
          >
            Ver todos os jogos
          </a>
        </div>
      </div>

      {/* Floating video with 10px background */}
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
