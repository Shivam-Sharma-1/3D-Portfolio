import React, { Suspense, forwardRef, use, useEffect, useState } from "react";
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

function Earth({ earthref }) {
	const { nodes, materials } = useGLTF("models/planet/scene.gltf");

	return (
		<View track={earthref}>
			<OrbitControls
				autoRotate
				enableZoom={false}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 2}
				enableDamping={true}
				dampingFactor={0.05}
				enablePan={false}
				makeDefault
			/>
			<Suspense fallback={<CanvasLoader />}>
				<EarthModel
					materials={materials}
					nodes={nodes}
					scale={2.2}
					position={[0, 0, 0]}
				/>
			</Suspense>
		</View>
	);
}

export default Earth;
