import { motion } from "framer-motion";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
	return (
		<section className={`relative w-full h-screen mx-auto`}>
			<div
				className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto paddingX flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-primary" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>

				<div>
					<h1 className={`heroHeadText`}>
						Hi, I&apos;m{" "}
						<span className="dark:text-five text-primary">
							Shivam
						</span>
					</h1>
					<p className={`heroSubText mt-2`}>
						React.js/Next.js developer | Frontend developer |
						<br className="sm:block hidden" />
						Technical Team Lead at GDSC MVJCE{" "}
					</p>
				</div>
			</div>

			<ComputersCanvas />

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#aaa6c3] flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0]
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop"
							}}
							className="w-3 h-3 rounded-full bg-[#aaa6c3] mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
