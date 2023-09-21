import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "@/constants/styles";

const ServiceCard = ({ index, title, icon }) => (
	<Tilt className="lg:w-[250px] w-full">
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450
				}}
				className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
			>
				<img
					src={icon}
					alt="web-development"
					className="w-16 h-16 object-contain"
				/>

				<h3 className="text-white text-[20px] font-bold text-center w-[80%]">
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={"sectionSubText"}>Introduction</p>
				<h2 className={"sectionHeadText"}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Hello! I&apos;m Shivam Sharma, a passionate web developer and
				problem solver. Currently, I&apos;m the Tech Team Lead at GDSC
				MVJCE, and I&apos;m pursuing a B.E. degree in Computer Science
				and Engineering at MVJ College Of Engineering in Bengaluru,
				India, with an expected graduation year of 2025. I&apos;m a
				software developer with experience in TypeScript, TailwindCSS,
				and JavaScript. I specialize in frameworks such as React,
				Node.js, Next.js, React-Fiber, and Three.js. My knowledge
				extends to fundamental data structures and algorithms, making me
				well-versed in frontend web development.
				<br className="sm:block hidden" />
				Let&apos;s collaborate to bring your ideas to life!
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
