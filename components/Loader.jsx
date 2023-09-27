import { Html, useProgress } from "@react-three/drei";

function CanvasLoader() {
	const { progress } = useProgress();

	return (
		<Html
			as="div"
			center
			className=" flex justify-center items-center w-full h-full flex-col z-30"
		>
			<span className="canvas-loader z-30 text-white"></span>
			<p className="text-[14px] text-white font-bold mt-10 z-30">
				{progress.toFixed(2)}%
			</p>
		</Html>
	);
}

export function PreLoader() {
	return (
		<div className="w-screen h-screen overflow-hidden bg-bgPrimaryLight dark:bg-bgPrimaryDark z-40 fixed top-0 left-0 flex flex-col justify-center items-center gap-5">
			<div className="loader w-[150px] h-[150px]">
				<div className="loader_cube loader_cube--color"></div>
				<div className="loader_cube loader_cube--glowing"></div>
				<span className="loader-span"></span>
			</div>
			<h1 className="text-2xl text-ctnPrimaryLight dark:text-ctnPrimaryDark">
				Loading...
			</h1>
		</div>
	);
}

export default CanvasLoader;
