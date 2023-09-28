import {
	OrbitControls,
	PerspectiveCamera,
	RandomizedLight,
	View,
	useAnimations,
	useFBX,
	useGLTF
} from "@react-three/drei";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import CanvasLoader from "../Loader";
import { Canvas, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import PlayerModel from "./models/PlayerModel";
import * as THREE from "three";

function Player() {
	const group = useRef();
	const [animationsLoaded, setAnimationsLoaded] = useState(false);

	const { nodes, materials, scene } = useGLTF("models/player/player.glb");
	const { animations: waveAnimation } = useFBX(
		"animations/standing-greeting.fbx"
	);
	scene.frustumCulled = false;

	waveAnimation[0].name = "wave-animation";

	const { actions } = useAnimations(waveAnimation, group);

	useEffect(() => {
		if (waveAnimation && actions["wave-animation"]) {
			setAnimationsLoaded(true);
		}
		if (animationsLoaded) {
			actions["wave-animation"].reset().play();
		}
	}, [animationsLoaded, waveAnimation, actions]);

	setTimeout(() => {
		if (waveAnimation && actions["wave-animation"]) {
			setAnimationsLoaded(true);
		}
	}, 2000);

	return (
		<>
			<ambientLight intensity={1} />
			<PerspectiveCamera
				makeDefault
				position={[0, 0, 12]}
				fov={30}
				near={0.8}
				far={120}
			/>
			<RandomizedLight position={[0, 1, 0]} />
			<pointLight
				intensity={2}
				position={[1, 1.5, 0]}
				color={"#804dee"}
			/>
			<pointLight
				intensity={2}
				position={[-1, 1.5, 1]}
				color={"#4b42a7"}
			/>
			<pointLight
				intensity={2}
				position={[-1, 0.5, 1]}
				color={"#804dee"}
			/>
			<OrbitControls
				makeDefault
				enableZoom={false}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 2}
				enableDamping={true}
				dampingFactor={0.05}
				enablePan={false}
				autoRotate={false}
			/>
			<Suspense fallback={<CanvasLoader />}>
				<PlayerModel
					nodes={nodes}
					materials={materials}
					rotation={[-1.6, 0, 0]}
					position={[0, -1.6, 0]}
					scale={2}
					group={group}
				/>
			</Suspense>
		</>
	);
}

function PlayerCanvas() {
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
			<Player />
		</Canvas>
	);
}

export default PlayerCanvas;
