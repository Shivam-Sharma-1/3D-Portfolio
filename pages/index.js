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

function App() {
	const canvasref = useRef();
	const computerref = useRef();
	const earthref = useRef();
	const playerref = useRef();

	return (
		<>
			<Head>
				<title>Portfolio | Shivam Sharma</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

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
			</div>
		</>
	);
}

export default App;
