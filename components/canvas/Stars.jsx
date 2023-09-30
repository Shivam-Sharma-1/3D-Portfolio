import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

function Stars(props) {
	const ref = useRef();
	const sphere = new Float32Array(5000 * 3);
	for (let i = 0; i < sphere.length; i++) {
		sphere[i] = (Math.random() - 0.5) * 2.4;
	}

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={sphere}
				stride={3}
				frustumCulled
				{...props}
			>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
}

function StarsCanvas() {
	return (
		<div className="w-full h-auto absolute inset-0 z-[-1]">
			<Canvas
				camera={{ position: [0, 0, 1] }}
				dpr={[1, 2]}
				gl={{
					outputColorSpace: THREE.SRGBColorSpace,
					alpha: false
				}}
			>
				<Suspense fallback={<CanvasLoader />}>
					<Stars />
				</Suspense>
				<Preload all />
			</Canvas>
		</div>
	);
}

export default StarsCanvas;
