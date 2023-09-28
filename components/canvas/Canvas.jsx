import { Suspense, forwardRef, use, useEffect, useState } from "react";
import CanvasLoader from "../Loader";
import { OrbitControls, Preload } from "@react-three/drei";
import Computers from "./Computers";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Earth from "./Earth";
import Player from "./Player";
import Ball from "./Ball";
import { technologies } from "@/constants";

function MainCanvas({
	computerref,
	earthref,
	canvasref,
	playerref,
	ballref1,
	ballref2,
	ballref3,
	ballref4,
	ballref5,
	ballref6,
	ballref7,
	ballref8,
	ballref9,
	ballref10
}) {
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
		<Canvas
			computerref={computerref}
			earthref={earthref}
			playerref={playerref}
			eventSource={canvasref}
			shadows
			dpr={[1, 2]}
			// camera={{ position: [-150, 10, 5], fov: 25 }}
			gl={{
				preserveDrawingBuffer: true,
				antialias: true,
				toneMappingExposure: 0.7,
				outputColorSpace: THREE.SRGBColorSpace,
				alpha: true
			}}
			style={{
				height: "100%",
				width: "100%",
				position: "fixed",
				top: 0,
				left: 0
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<Computers computerref={computerref} isMobile={isMobile} />
				<Earth earthref={earthref} />
				<Player playerref={playerref} isMobile={isMobile} />
				{technologies.map((tech, index) => (
					<Ball
						key={index}
						ballref={
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
						imgUrl={tech.icon}
					/>
				))}
			</Suspense>
			<Preload all />
		</Canvas>
	);
}

export default MainCanvas;
