/* eslint-disable react/no-unknown-property */
import { Preload, useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
	const computer = useGLTF("desktop_pc/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={1} groundColor="black" />
			<ambientLight intensity={0.65} />
			<spotLight
				intensity={1}
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={1} />
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.6 : 0.75}
				position={isMobile ? [0, -3, -1.2] : [0, -3.6, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
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
			shadows
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{
				preserveDrawingBuffer: true,
				antialias: true,
				toneMappingExposure: 0.7,
				outputEncoding: THREE.sRGBEncoding
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
					enableDamping={true}
					dampingFactor={0.05}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
