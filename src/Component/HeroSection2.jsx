import React from "react";
import video from "../assets/video2.mp4";

const HeroSection2 = () => {
  return (
    <div className="container relative md:mx-auto mt-20 lg:mt-20">
      <div className="lg:flex md:flex md:gap-10  lg:gap-16">
        <video
          className="border h-72 lg:h-80 md:h-52 rounded-3xl w-full md:w-auto backdrop-brightness-50"
          autoPlay
          loop
          muted
          controls
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="flex flex-col gap-4 sm:text-start text-center">
          <div>
            <p className="uppercase mt-5 text-xs md:text-xs lg:text-sm tracking-wide italic">
              bot of meme is the <span className="text-purple-800">1st ever</span> solana trading bot that
              can prevent you from losing money before you even start sniping!
              reason why? idk lmao.. that’s how we all promote in this degen
              world but hey at least our bot works unlike unibot’s{" "}
            </p>
          </div>
          <div className="">
            <ol className="list-disc text-xs mb-2 md:text-xs lg:text-sm tracking-widest">
              <li>
                Alright, buckle up, because we're about to dive into the
                crypto rollercoaster with BOM! Imagine trading on Solana is like
                riding a Segway through a bustling city, smooth and efficient.
                And with our ETH - SOL bridging feature, it's like having a
                teleporter in your pocket. Zap! From Ethereum to Solana in the
                blink of an eye
              </li>
              <li>
                Now, let's talk user experience. We've crafted our interface
                to be so intuitive, even your grandma could navigate it while
                sipping her afternoon tea. It's like Tinder for tokens, swipe
                left for HODL, swipe right for sell
              </li>
              <li>
                So, grab your moon boots and join us on the rocket ship to
                financial freedom. With $BOM, trading is as easy as shuffling
                your meme coins, and the only thing we're hodling onto is our
                sense of humour
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
