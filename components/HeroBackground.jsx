import Image from "next/image";

import Mountain1 from "../public/assets/background/mountain1.svg";
import Mountain2 from "../public/assets/background/mountain2.svg";
import Mountain3 from "../public/assets/background/mountain3.svg";
import Mountain5 from "../public/assets/background/mountain5.svg";
import HeroSvg from "../public/assets/background/hero-wave.svg";

function HeroBackground() {
  return (
    <div className="absolute top-0 w-full h-[100svh] bg-gradient-to-b from-opacity-[6.33%] dark:from-[#322d6d] from-[#b0afb1] to-opacity-[39.13%] dark:to-[#663182] to-[#51afda]">
      <Mountain1 className="w-full h-[446px] wave top-[170px]" />
      <Mountain2 className="w-full h-[464px] wave top-[160px]" />
      <div className="w-full h-[1503px] wave top-[-200px]">
        <Image
          src={"/assets/background/blur-layer.png"}
          alt="blur-layer"
          fill={true}
        />
      </div>
      <Mountain3 className="w-full h-[408px] wave top-[347px]" />
      <Mountain5 className="w-full h-[867px] wave md:top-[450px] top-[300px]" />
      <HeroSvg className="md:w-full w-full h-[1200px] wave md:top-[100dvh] md:left-0 top-[520px] dark:text-[#181826] text-[#4e2f84]" />
    </div>
  );
}

export default HeroBackground;
