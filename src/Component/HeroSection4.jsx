import img from "../assets/img5.png";
import { Add, Remove, Telegram, X } from "@mui/icons-material";
import logo from "../assets/Dogbanacorn1 1.png";

const HeroSection4 = () => {
  return (
    <>
      <div className="container px-20 py-10 rounded-2xl mt-20 relative md:mx-auto mb-3 bg-[#B26FFF] text-black">
        <div className="lg:flex flex sm:flex-row sm:gap-14 md:gap-40 flex-col lg:gap-64 gap-2 items-center">
          <div>
            <h1 className="uppercase text-2xl sm:text-3xl text-center lg:text-5xl italic font-normal">
              bot of meme <br /> ROADMAP
            </h1>
            <img
              src={img}
              className="lg:h-52 lg:w-52 h-40 w-40 object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-[#EFE0FF] lg:w-80 w-52 p-3">
              <button className="focus:outline-none">
                <Add />
              </button>
              <div className="space-x-3 mt-3 transition-all duration-1000 ease-in-out">
                <h2 className="text-sm sm:text-xs tracking-wider">
                  Socials Formation | Telegram Community | <br /> Smart Contract
                  Development | Website Development | <br /> Games Development |
                  Uniswap Stealth Launch | <br /> CoinGecko & CoinMarketCap |{" "}
                  <br /> Revenue Share System goes live
                </h2>
              </div>
            </div>
            <div className="bg-[#EFE0FF] lg:w-80 w-52 p-3">
              <button className="focus:outline-none">
                <Remove />
              </button>
            </div>
            <div className="bg-[#EFE0FF] lg:w-80 w-52 p-3">
              <button className="focus:outline-none">
                <Remove />
              </button>
            </div>
            <div className="bg-[#EFE0FF] lg:w-80 w-52 p-3">
              <button className="focus:outline-none">
                <Remove />
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className="md:px-8 text-white py-3 backdrop-blur-lg border-neutral-700/80">
        <div className="container relative text-sm">
          <div className="flex items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-14 w-14 object-cover mr-2" src={logo} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <ul className="lg:flex sm:ml-14 flex flex-row flex-wrap space-x-2 items-center justify-center lg:ml-14 lg:space-x-20 text-white">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Roadmap</a>
                </li>
                <li>
                  <a href="">Whitepaper</a>
                </li>
                <li>
                  <a href="">Whitepaper</a>
                </li>
              </ul>
              <div className="lg:flex flex-col sm:ml-36 sm:flex md:ml-80 lg:ml-96">
                <a href="">
                  <Telegram />
                </a>
                <a href="">
                  <X />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeroSection4;
