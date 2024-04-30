import {
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
  useAnimations,
  useFBX,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

import CanvasLoader from "../Loader";
import PlayerModel from "./models/PlayerModel";

function Player({ isMobile }) {
  const group = useRef();
  const [animationsLoaded, setAnimationsLoaded] = useState(false);

  const { nodes, materials, scene } = useGLTF("models/player/player.gltf");
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
        zoom={1.4}
      />
      <RandomizedLight position={[0, 1, 0]} />
      <pointLight intensity={2} position={[1, 1.5, 0]} color={"#804dee"} />
      <pointLight intensity={2} position={[-1, 1.5, 1]} color={"#4b42a7"} />
      <pointLight intensity={2} position={[-1, 0.5, 1]} color={"#804dee"} />
      {!isMobile && (
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
      )}
      <Suspense fallback={<CanvasLoader />}>
        <PlayerModel
          nodes={nodes}
          materials={materials}
          rotation={[-1.6, 0, 0]}
          position={isMobile ? [0, -2.7, 0] : [0, -2.1, 0]}
          scale={isMobile ? 3 : 2}
          group={group}
        />
      </Suspense>
    </>
  );
}

function PlayerCanvas({ isMobile }) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        alpha: true,
      }}
    >
      <Player isMobile={isMobile} />
    </Canvas>
  );
}

export default PlayerCanvas;
