import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import Image from "next/image";

function FeedbackCard({
	index,
	testimonial,
	name,
	designation,
	company,
	image
}) {
	return (
		<motion.section
			variants={fadeIn("", "spring", index * 0.5, 0.75)}
			className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
		>
			<p className="text-white font-black text-[48px]">&quot;</p>

			<div className="mt-1">
				<p className="text-white tracking-wider text-[18px]">
					{testimonial}
				</p>

				<div className="mt-7 flex justify-between items-center gap-1">
					<div className="flex-1 flex flex-col">
						<p className="text-white font-medium text-[16px]">
							<span className="blue-text-gradient">@</span> {name}
						</p>
						<p className="mt-1 text-secondary text-[12px]">
							{designation} of {company}
						</p>
					</div>
					<div className="w-10 h-10 rounded-full object-cover">
						<Image
							src={image}
							alt={`feedback_by-${name}`}
							fill={true}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
							className="rounded-full object-cover"
						/>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

function Feedback() {
	return (
		<div className={`mt-12 bg-black-100 rounded-[20px]`}>
			<div className={`bg-tertiary rounded-2xl padding min-h-[300px]`}>
				<motion.div variants={textVariant()}>
					<p className={"sectionSubText"}>What others say</p>
					<h2 className={"sectionHeadText"}>Testimonials.</h2>
				</motion.div>
			</div>
			<div
				className={`-mt-20 pb-14 paddingX flex flex-wrap gap-7 justify-center`}
			>
				{testimonials.map((testimonial, index) => (
					<FeedbackCard
						key={testimonial.name}
						index={index}
						{...testimonial}
					/>
				))}
			</div>
		</div>
	);
}

export default SectionWrapper(Feedback, "feedback");
