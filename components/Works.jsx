import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "@/constants/styles";

function ProjectCard({
	index,
	name,
	description,
	tags,
	image,
	source_code_link
}) {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450
				}}
				className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							onClick={() =>
								window.open(source_code_link, "_blank")
							}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={"/assets/github.png"}
								alt="source code"
								className="w-1/2 h-1/2 object-contain"
							/>
						</div>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
						{name}
					</h3>
					<p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
						{description}
					</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
}

function Works() {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={"sectionSubText"}>My work</p>
				<h2 className={"sectionHeadText"}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]"
				>
					These projects showcase my practical skills and experience,
					each with descriptions and links to code repositories and
					live demos. They demonstrate my ability to handle complex
					challenges, adapt to different technologies, and oversee
					projects from start to finish.
				</motion.p>
			</div>

			<div className="mt-20 flex justify-center flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
					/>
				))}
			</div>
		</>
	);
}

export default SectionWrapper(Works, "");
