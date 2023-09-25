import { Preload, useGLTF, OrbitControls, View } from "@react-three/drei";
import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import { Suspense, forwardRef, useEffect, useState } from "react";
import CanvasLoader from "../Loader";

function Computers({ isMobile, computerRef }) {
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
				scale={isMobile ? 0.6 : 0.12}
				position={isMobile ? [0, -3, -1.2] : [0, 1, -1.5]}
				rotation={[-0.01, -0.2, -0.3]}
			/>
			<OrbitControls
				enableZoom={false}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 2}
				enableDamping={true}
				dampingFactor={0.05}
				enablePan={false}
			/>
		</mesh>
	);
}

export default Computers;
