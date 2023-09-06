import React from "react";
import Image from "next/image";

// components
import WalletBox from "./WalletBox";

const HeroSection = () => {
  return (
    <div
      id="hero-section"
      // className="flex flex-col items-center justify-center gap-20 xl:pl-10 xl:flex-row"
      className="flex flex-col items-center justify-center gap-20 2xl:justify-between 2xl:flex-row"
    >
      <Image
        src="/assets/robin-wallpaper.png"
        alt="robin"
        width={500}
        height={500}
        className="hidden 2xl:block -scale-x-100 2xl:max-w-[300px] min-[1700px]:max-w-[400px] min-[1800px]:max-w-[500px]"
      />
      <WalletBox />
      <Image
        src="/assets/robin-wallpaper.png"
        alt="robin"
        width={500}
        height={500}
        className="w-full 2xl:max-w-[300px] min-[1700px]:max-w-[400px] min-[1800px]:max-w-[500px]"
      />
    </div>
  );
};

export default HeroSection;
