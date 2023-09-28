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
	const canvasref = useRef();
	const computerref = useRef();
	const earthref = useRef();
	const playerref = useRef();
	const ballref1 = useRef();
	const ballref2 = useRef();
	const ballref3 = useRef();
	const ballref4 = useRef();
	const ballref5 = useRef();
	const ballref6 = useRef();
	const ballref7 = useRef();
	const ballref8 = useRef();
	const ballref9 = useRef();
	const ballref10 = useRef();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);

	return (
		<>
			<div className="relative z-0 w-full h-full" ref={canvasref}>
				<div className=" bg-cover bg-no-repeat bg-center">
					<Navbar />
					<HeroBackground />
					<Hero computerref={computerref} loading={loading} />
				</div>
				<div className="relative z-0 flex w-full h-full overflow-x-hidden">
					<About />
					<PlayerContainer playerref={playerref} />
				</div>
				<Experience />
				{/* <Tech
					ballref1={ballref1}
					ballref2={ballref2}
					ballref3={ballref3}
					ballref4={ballref4}
					ballref5={ballref5}
					ballref6={ballref6}
				/> */}
				<div className="flex flex-row flex-wrap justify-center w-full h-full px-[100px] mb-[100px]">
					{technologies.map((technology, index) => (
						<div
							className="w-[180px] h-[350px]"
							key={technology.name}
							ref={
								index === 0
									? ballref1
									: index === 1
									? ballref2
									: index === 2
									? ballref3
									: index === 3
									? ballref4
									: index === 4
									? ballref5
									: index === 5
									? ballref6
									: index === 6
									? ballref7
									: index === 7
									? ballref8
									: index === 8
									? ballref9
									: ballref10
							}
							id={index}
						/>
					))}
				</div>
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
					ballref1={ballref1}
					ballref2={ballref2}
					ballref3={ballref3}
					ballref4={ballref4}
					ballref5={ballref5}
					ballref6={ballref6}
					ballref7={ballref7}
					ballref8={ballref8}
					ballref9={ballref9}
					ballref10={ballref10}
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
