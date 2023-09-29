import React, {
	Suspense,
	forwardRef,
	use,
	useEffect,
	useRef,
	useState
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	OrbitControls,
	Preload,
	View,
	useAnimations,
	useGLTF
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";
import EarthModel from "./models/EarthModel";

function Earth({ isMobile }) {
	const { nodes, materials } = useGLTF("models/planet/scene.gltf");
	const earthRef = useRef();

	useFrame(() => {
		earthRef.current.rotation.y += 0.01;
	});

	return (
		<>
			{!isMobile && (
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
					enableDamping={true}
					dampingFactor={0.05}
					enablePan={false}
					enableRotate={isMobile ? false : true}
					makeDefault
				/>
			)}
			<Suspense fallback={<CanvasLoader />}>
				<EarthModel
					materials={materials}
					nodes={nodes}
					scale={2.2}
					position={[0, 0, 0]}
					earthRef={earthRef}
				/>
			</Suspense>
		</>
	);
}

function EarthCanvas({ isMobile }) {
	return (
		<Canvas
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
		>
			<Earth isMobile={isMobile} />
		</Canvas>
	);
}

export default EarthCanvas;
