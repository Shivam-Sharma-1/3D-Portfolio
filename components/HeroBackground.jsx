import Image from "next/image";
import Mountain1 from "../public/assets/background/mountain1.svg";
import Mountain2 from "../public/assets/background/mountain2.svg";
import Mountain3 from "../public/assets/background/mountain3.svg";
import Mountain4 from "../public/assets/background/mountain4.svg";
import Mountain5 from "../public/assets/background/mountain5.svg";
import HeroSvg from "../public/assets/background/hero-wave.svg";

const HeroBackground = () => {
	return (
		<div className="absolute top-0 w-full h-screen bg-gradient-to-b from-opacity-[6.33%] dark:from-[#322d6d] from-[#ffffff] to-opacity-[39.13%] dark:to-[#663182] to-[#51afda]">
			<Mountain1 className="w-full h-[446px] wave top-[170px]" />
			<Mountain2 className="w-full h-[464px] wave top-[160px]" />
			<div className="w-full h-[1503px] wave top-[-200px]">
				<Image
					src={"/assets/background/blur-layer.webp"}
					alt="blur-layer"
					fill={true}
				/>
			</div>
			<Mountain3 className="w-full h-[408px] wave top-[347px]" />
			{/* <Mountain4 className="w-full h-[457px] wave top-[466px]" /> */}
			<Mountain5 className="w-full h-[867px] wave top-[450px]" />
			<HeroSvg className="w-full h-[900px] wave top-[100vh] dark:text-[#181826] text-bgPrimaryLight" />
		</div>
	);
};

export default HeroBackground;
