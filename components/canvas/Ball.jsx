import React, { Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#ffffff"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon }) => {
	return (
		<Canvas
			dpr={[1, 2]}
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
					minAzimuthAngle={-Math.PI / 4}
					maxAzimuthAngle={Math.PI / 4}
					minPolarAngle={Math.PI / 3}
					maxPolarAngle={Math.PI - Math.PI / 3}
					enableDamping={true}
					dampingFactor={0.05}
					enablePan={false}
				/>
				<Ball imgUrl={icon} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
