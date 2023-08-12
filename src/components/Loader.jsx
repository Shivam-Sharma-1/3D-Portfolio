import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
	const { progress } = useProgress();

	return (
		<Html
			as="div"
			center
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column"
			}}
		>
			<span className="canvas-loader"></span>
			<p className="text-[14px] text-white font-bold mt-10">
				{progress.toFixed(2)}%
			</p>
		</Html>
	);
};

export default CanvasLoader;
