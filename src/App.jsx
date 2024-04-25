import "./App.css";
import HeroSection from "./Component/HeroSection";
import HeroSection2 from "./Component/HeroSection2";
import HeroSection3 from "./Component/HeroSection3";
import HeroSection4 from "./Component/HeroSection4";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container sm:max-w-7xl mx-auto px-5 sm:px-14">
        <HeroSection/>
        <HeroSection2/>
        <HeroSection3/>
        <HeroSection4/>
      </div>
    </>
  );
}

export default App;
