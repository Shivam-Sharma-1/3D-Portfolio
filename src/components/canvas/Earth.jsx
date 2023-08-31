import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

function Earth() {
	const earth = useGLTF("./planet/scene.gltf");

	return (
		<primitive
			object={earth.scene}
			scale={2.5}
			position-y={0}
			rotation-y={0}
		/>
	);
}

function EarthCanvas() {
	return (
		<Canvas
			shadows
			dpr={[1, 2]}
			gl={{
				preserveDrawingBuffer: true,
				antialias: true,
				toneMappingExposure: 0.7,
				outputEncoding: THREE.sRGBEncoding
			}}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-4, 3, 6]
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Earth />

				<Preload all />
			</Suspense>
		</Canvas>
	);
}

export default EarthCanvas;
