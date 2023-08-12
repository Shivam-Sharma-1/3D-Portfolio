/* eslint-disable react/no-unknown-property */
import { Preload, useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../Loader";

const Computers = () => {
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
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ antialias: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
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
