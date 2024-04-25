import React from "react";
import video from "../assets/video.mp4";
import logo from "../assets/Dogbanacorn1 1.png";

const HeroSection = () => {
  return (
    <div className="container relative md:mx-auto">
      <video
        className="border rounded-3xl w-full md:w-auto backdrop-brightness-50"
        autoPlay
        loop
        muted
        controls
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute text-center mx-auto top-14 left-1/4 md:top-20 sm:left-1/4   lg:left-1/3 lg:top-1/4">
        <h1 className="text-2xl md:text-6xl sm:text-5xl flex flex-col mx-auto md:mx-0">
          BOT OF MEME{" "}
          <span className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-10 w-10 md:h-28 md:w-28 object-cover"
            />
            <span className="ml-2">IS HERE!!!</span>
          </span>
        </h1>
      </div>
      <div className="mt-5 lg:ml-5 w-full">
        <p className="text-xl text-center md:tracking-[5px] lg:tracking-[10px]">
          Contract: CA is on Telegram stop getting scammed with fake ones you
          twats
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
