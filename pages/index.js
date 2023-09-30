import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	StarsCanvas,
	Tech,
	Works
} from "@/components";
import HeroBackground from "@/components/HeroBackground";
import MainCanvas from "@/components/canvas/Canvas";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { use, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import EarthContainer from "@/components/EarthContainer";
import PlayerContainer from "@/components/PlayerContainer";
import UpArrow from "./../public/assets/icons/up-arrow.svg";
import { PreLoader } from "@/components/Loader";
import { technologies } from "@/constants";

function App({ loading }) {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<>
			<div className="relative z-0 w-full h-full">
				<div className=" bg-cover bg-no-repeat bg-center">
					<Navbar />
					<HeroBackground />
					<Hero loading={loading} isMobile={isMobile} />
				</div>
				<div className="relative z-0 flex md:flex-row flex-col-reverse w-full h-full overflow-hidden">
					<About isMobile={isMobile} />
					{!isMobile && <PlayerContainer isMobile={isMobile} />}
				</div>
				<Experience />
				<Tech />
				<Works />
				{/* <Feedbacks /> */}
				<div className="relative z-0 flex md:flex-row justify-between flex-col-reverse w-full h-full overflow-x-hidden p-8">
					<Contact />
					<EarthContainer isMobile={isMobile} />
					<StarsCanvas />
				</div>
				<button
					onClick={() => {
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: "smooth"
						});
					}}
					className="fixed md:w-10 md:h-10 h-8 w-8 p-2 bottom-8 md:right-10 right-8 text-center text-secondary backdrop-filter backdrop-blur-xl bg-opacity-20 bg-tertiary rounded-lg hover:scale-110 transition-all duration-300"
				>
					<UpArrow />
				</button>
			</div>
		</>
	);
}

export default App;
