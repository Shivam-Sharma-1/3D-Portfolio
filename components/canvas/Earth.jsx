import React, { Suspense, forwardRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, View, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

function Earth({ earthref }) {
	const earth = useGLTF("models/planet/scene.gltf");

	return (
		<View track={earthref}>
			<Suspense fallback={<CanvasLoader />}>
				<primitive
					object={earth.scene}
					scale={2.2}
					position={[0, 0, 0]}
					rotation-y={0}
				/>
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
			</Suspense>
		</View>
	);
}

export default Earth;
