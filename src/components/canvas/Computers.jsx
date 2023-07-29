/* eslint-disable react/no-unknown-property */
import { Preload, useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Computers = () => {
	const computer = useGLTF("/desktop_pc/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<spotLight
				intensity={1}
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={50} />
			<primitive
				object={computer.scene}
				scale={0.75}
				position={[0, -3.25, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ antialias: true, preserveDrawingBuffer: true }}
		>
			<Suspense fallback={""}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
					enableDamping={true}
					dampingFactor={0.05}
				/>
				<Computers />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
