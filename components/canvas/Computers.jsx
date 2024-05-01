import {
  Preload,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasLoader from "../Loader";
import ComputerModel from "./models/ComputerModel";

function Computers({ isMobile }) {
  const { nodes, materials } = useGLTF("/models/desktop_pc/scene.gltf");

  return (
    <>
      <hemisphereLight intensity={1} groundColor="black" />
      <ambientLight intensity={0.65} />
      <spotLight intensity={1} position={[0, 1.5, 0.7]} angle={0.12} />
      <PerspectiveCamera makeDefault position={[0, 0, -8]} fov={30} />
      <pointLight intensity={2} position={[1, 1.3, 0]} color={"#804dee"} />
      <pointLight intensity={2} position={[-1, 1.3, 1]} color={"#804dee"} />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableDamping={true}
        dampingFactor={0.05}
        enablePan={false}
        autoRotateSpeed={4}
        autoRotate={isMobile && true}
        makeDefault
      />
      <ComputerModel
        nodes={nodes}
        materials={materials}
        scale={isMobile ? 0.45 : 0.35}
        position={isMobile ? [-0.75, -0.7, 0] : [-0.5, -0.5, 0]}
        rotation={[-0.01, 1.6, -0.1]}
      />
    </>
  );
}

function ComputersCanvas({ isMobile }) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        alpha: true,
      }}
      className="cursor-pointer"
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;
