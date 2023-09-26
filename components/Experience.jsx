import {
	VerticalTimeline,
	VerticalTimelineElement
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "@/constants/styles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

function ExperienceCard({ experience, theme }) {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: theme
					? theme === "dark"
						? "#2b2b42"
						: "#e0eaf0"
					: "#2b2b42",
				color: theme
					? theme === "dark"
						? "#e5e6e9"
						: "#2e384d"
					: "#e5e6e9"
			}}
			contentArrowStyle={{
				borderRight: `7px solid ${
					theme
						? theme !== "dark"
							? "#e0eaf0"
							: "#2b2b42"
						: "#2b2b42"
				}`
			}}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<div className="w-[60%] h-[60%] relative">
						<Image
							src={experience.icon}
							alt={experience.company_name}
							fill={true}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
						/>
					</div>
				</div>
			}
		>
			<div>
				<h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[24px] font-bold">
					{experience.title}
				</h3>
				<p
					className="dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[16px] font-semibold"
					style={{ margin: 0 }}
				>
					{experience.company_name}
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
}

function Experience() {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`sectionSubText text-center`}>
					What I have done so far
				</p>
				<h2 className={`sectionHeadText text-center`}>
					Work Experience.
				</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline
					lineColor={theme === "dark" ? "#7e8c9f" : "#8c9db1"}
				>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
							theme={theme}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
}

export default SectionWrapper(Experience, "work");
