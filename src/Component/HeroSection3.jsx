import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const HeroSection3 = () => {
  return (
    <div className="container mt-20 relative md:mx-auto mb-3">
      <div className="lg:grid lg:grid-cols-4 flex flex-col gap-4 sm:grid sm:grid-cols-2">
        <div className="">
          <img
            src={img1}
            className="h-48 w-48 object-cover rounded-3xl mx-auto mb-3"
            alt=""
          />
          <div className="text-start flex flex-col">
            <h1 className="text-center italic text-base">I WANT TO JEET IT</h1>
            <h2 className="uppercase text-center text-xs mx-12 mt-2">
              take those profits and JEET IT FASTER THAN ANYONE ELSE IN SOLANA
            </h2>
          </div>
        </div>
        <div className="">
          <img
            src={img2}
            className="h-48 w-48 object-cover rounded-3xl mx-auto mb-3"
            alt=""
          />
          <div className="text-start flex flex-col">
            <h1 className="text-center italic text-base">RESURRECTION</h1>
            <h2 className="uppercase text-center text-xs sm:mx-5 mx-10 mt-2">
            ONE STOP LOSS A DAY KEEPS THE DOCTOR AWAY resurrect yourself and survive another day
            </h2>
          </div>
        </div>
        <div className="">
          <img
            src={img3}
            className="h-48 w-48 object-cover rounded-3xl mx-auto mb-3"
            alt=""
          />
          <div className="text-start flex flex-col">
            <h1 className="text-center italic text-base">f*ck jaredsubway</h1>
            <h2 className="uppercase text-center text-xs mx-12 mt-2">
            TIRED OF THIS FATSO EATING YOUR MONEY WE HERE TO SAVE YOU
            </h2>
          </div>
        </div>
        <div className="">
          <img
            src={img4}
            className="h-48 w-48 object-cover rounded-3xl mx-auto mb-3"
            alt=""
          />
          <div className="text-start flex flex-col">
            <h1 className="text-center italic text-base"> SUS AS F*UCK </h1>
            <h2 className="uppercase text-center text-xs mx-12 mt-2">
            WE SNIFF THOSE UGLY, SKINNY ACNE FACE, NAIL BITING, RUG PULLERS FOR YOU
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;
