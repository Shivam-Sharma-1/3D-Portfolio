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
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import PlayerModel from "./models/PlayerModel";

function Player({ playerref, isMobile }) {
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
		<View track={playerref}>
			<ambientLight intensity={1} />

			<PerspectiveCamera
				makeDefault
				position={[0, 0, 12]}
				fov={30}
				near={0.8}
				far={120}
			/>
			<RandomizedLight position={[0, 1, 0]} />
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
		</View>
	);
}

export default Player;
