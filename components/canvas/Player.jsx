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
				<mesh>
					<group
						ref={group}
						dispose={null}
						rotation={[-1.6, 0, 0]}
						scale={2}
						position={[0, -1.6, 0]}
					>
						<group>
							<primitive object={nodes.Hips} />
							<skinnedMesh
								frustumCulled={false}
								geometry={nodes.Wolf3D_Body.geometry}
								material={materials.Wolf3D_Body}
								skeleton={nodes.Wolf3D_Body.skeleton}
							/>
							<skinnedMesh
								frustumCulled={false}
								geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
								material={materials.Wolf3D_Outfit_Bottom}
								skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
							/>
							<skinnedMesh
								frustumCulled={false}
								geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
								material={materials.Wolf3D_Outfit_Footwear}
								skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
							/>
							<skinnedMesh
								frustumCulled={false}
								geometry={nodes.Wolf3D_Outfit_Top.geometry}
								material={materials.Wolf3D_Outfit_Top}
								skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
							/>
							<skinnedMesh
								frustumCulled={false}
								geometry={nodes.Wolf3D_Hair.geometry}
								material={materials.Wolf3D_Hair}
								skeleton={nodes.Wolf3D_Hair.skeleton}
							/>
							<skinnedMesh
								frustumCulled={false}
								name="EyeLeft"
								geometry={nodes.EyeLeft.geometry}
								material={materials.Wolf3D_Eye}
								skeleton={nodes.EyeLeft.skeleton}
								morphTargetDictionary={
									nodes.EyeLeft.morphTargetDictionary
								}
								morphTargetInfluences={
									nodes.EyeLeft.morphTargetInfluences
								}
							/>
							<skinnedMesh
								frustumCulled={false}
								name="EyeRight"
								geometry={nodes.EyeRight.geometry}
								material={materials.Wolf3D_Eye}
								skeleton={nodes.EyeRight.skeleton}
								morphTargetDictionary={
									nodes.EyeRight.morphTargetDictionary
								}
								morphTargetInfluences={
									nodes.EyeRight.morphTargetInfluences
								}
							/>
							<skinnedMesh
								frustumCulled={false}
								name="Wolf3D_Head"
								geometry={nodes.Wolf3D_Head.geometry}
								material={materials.Wolf3D_Skin}
								skeleton={nodes.Wolf3D_Head.skeleton}
								morphTargetDictionary={
									nodes.Wolf3D_Head.morphTargetDictionary
								}
								morphTargetInfluences={
									nodes.Wolf3D_Head.morphTargetInfluences
								}
							/>
							<skinnedMesh
								frustumCulled={false}
								name="Wolf3D_Teeth"
								geometry={nodes.Wolf3D_Teeth.geometry}
								material={materials.Wolf3D_Teeth}
								skeleton={nodes.Wolf3D_Teeth.skeleton}
								morphTargetDictionary={
									nodes.Wolf3D_Teeth.morphTargetDictionary
								}
								morphTargetInfluences={
									nodes.Wolf3D_Teeth.morphTargetInfluences
								}
							/>
						</group>
					</group>
				</mesh>
			</Suspense>
		</View>
	);
}

export default Player;
