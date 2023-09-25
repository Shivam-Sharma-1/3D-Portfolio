import { Suspense, forwardRef, useEffect, useState } from "react";
import CanvasLoader from "../Loader";
import { OrbitControls, Preload } from "@react-three/drei";
import Computers from "./Computers";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Earth from "./Earth";

function MainCanvas({ computerref, earthref, canvasref }) {
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
			<Computers computerref={computerref} isMobile={isMobile} />
			<Earth earthref={earthref} />
			<Preload all />
		</Canvas>
	);
}

export default MainCanvas;
