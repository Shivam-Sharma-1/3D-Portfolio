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
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import EarthContainer from "@/components/EarthContainer";
import PlayerContainer from "@/components/PlayerContainer";
import UpArrow from "./../public/assets/icons/up-arrow.svg";
import { PreLoader } from "@/components/Loader";

function App() {
	const canvasref = useRef();
	const computerref = useRef();
	const earthref = useRef();
	const playerref = useRef();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);

	return (
		<>
			<div className="relative z-0 w-full h-full" ref={canvasref}>
				<div className=" bg-cover bg-no-repeat bg-center">
					<Navbar />
					<HeroBackground />
					<Hero computerref={computerref} />
				</div>
				<div className="relative z-0 flex w-full h-full overflow-x-hidden">
					<About />
					<PlayerContainer playerref={playerref} />
				</div>
				<Experience />
				{/* <Tech /> */}
				<Works />
				{/* <Feedbacks /> */}
				<div className="relative z-0 flex w-full h-full overflow-x-hidden">
					<Contact />
					<EarthContainer earthref={earthref} />
					<StarsCanvas />
				</div>

				<MainCanvas
					computerref={computerref}
					earthref={earthref}
					canvasref={canvasref}
					playerref={playerref}
				/>
				<button
					onClick={() => {
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: "smooth"
						});
					}}
					className="fixed w-10 h-10 p-2 bottom-8 right-10 text-center text-secondary backdrop-filter backdrop-blur-xl bg-opacity-20 bg-tertiary rounded-lg hover:scale-110 transition-all duration-300"
				>
					<UpArrow />
				</button>
			</div>
		</>
	);
}

export default App;
