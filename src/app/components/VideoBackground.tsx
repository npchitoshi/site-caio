'use client'

import React from "react";

const VideoBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
      // <div className="relative w-full h-200 overflow-hidden">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          // className="absolute top-0 left-1/2 h-full transform -translate-x-1/2 object-contain"
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video.mp4"
        />
        <div className="relative z-10 flex items-center justify-center w-full h-full bg-black/30">
          {children}
        </div>
      </div>
    );
};

export default VideoBackground;
