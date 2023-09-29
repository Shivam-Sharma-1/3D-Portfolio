import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

function Tech() {
	return (
		<div className=" w-full h-fit p-8" id="about">
			<motion.div
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
			>
				<p className={"sectionSubText"}>What I have learnt so far</p>
				<h2 className={"sectionHeadText"}>Skills.</h2>
			</motion.div>

			<motion.div
				variants={fadeIn("", "", 0.1, 1)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className="mt-4 dark:text-ctnSecondaryDark text-ctnSecondaryLight dark:bg-bgSecondaryDark bg-bgSecondaryLight text-[17px] w-full h-full leading-[30px] flex gap-4 p-8 px-10 rounded-lg justify-between backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-sm shadow-primary"
			>
				<div className="flex flex-col justify-between h-full gap-5">
					<h3 className="h-[50px] flex items-center">Languages</h3>
					<h3 className="h-[50px] flex items-center">Frameworks</h3>
					<h3 className="h-[50px] flex items-center">Libraries</h3>
					<h3 className="h-[50px] flex items-center">Databases</h3>
					<h3 className="h-[50px] flex items-center">Tools</h3>
				</div>
				<div className="w-[2px] h-[340px] dark:bg-ctnSecondaryDark bg-ctnSecondaryLight rounded-lg" />
				<div className="w-[80%] h-full flex flex-col gap-5">
					<div className="w-full h-fit flex gap-2">
						{technologies.languages.map((tech, index) => (
							<Link
								href={tech.link}
								key={tech.name}
								target="_blank"
							>
								<div className="w-[50px] h-[50px] relative flex items-center group cursor-pointer">
									<Image
										src={tech.icon}
										alt={tech.name}
										fill={true}
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
									/>

									<div className="opacity-0 w-fit min-w-[80px] bg-bgPrimaryLight dark:bg-bgPrimaryDark text-ctnPrimaryLight dark:text-ctnPrimaryDark text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-3/4 -left-1/3 pointer-events-none">
										{tech.name}
									</div>
								</div>
							</Link>
						))}
					</div>
					<div className="w-full h-fit flex gap-2">
						{technologies.frameworks.map((tech, index) => (
							<Link
								href={tech.link}
								key={tech.name}
								target="_blank"
							>
								<div className="w-[50px] h-[50px] relative flex items-center group cursor-pointer">
									<Image
										src={tech.icon}
										alt={tech.name}
										fill={true}
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
									/>
									<div className="opacity-0 w-fit min-w-[80px] bg-bgPrimaryLight dark:bg-bgPrimaryDark text-ctnPrimaryLight dark:text-ctnPrimaryDark text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-3/4 -left-1/3 pointer-events-none">
										{tech.name}
									</div>
								</div>
							</Link>
						))}
					</div>
					<div className="w-full h-fit flex gap-2">
						{technologies.libraries.map((tech, index) => (
							<Link
								href={tech.link}
								key={tech.name}
								target="_blank"
							>
								<div className="w-[50px] h-[50px] relative flex items-center group cursor-pointer">
									<Image
										src={tech.icon}
										alt={tech.name}
										fill={true}
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
									/>
									<div className="opacity-0 w-fit min-w-[80px] bg-bgPrimaryLight dark:bg-bgPrimaryDark text-ctnPrimaryLight dark:text-ctnPrimaryDark text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-3/4 -left-1/3 pointer-events-none">
										{tech.name}
									</div>
								</div>
							</Link>
						))}
					</div>
					<div className="w-full h-fit flex gap-2">
						{technologies.databases.map((tech, index) => (
							<Link
								href={tech.link}
								key={tech.name}
								target="_blank"
							>
								<div className="w-[50px] h-[50px] relative flex items-center group cursor-pointer">
									<Image
										src={tech.icon}
										alt={tech.name}
										fill={true}
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
									/>
									<div className="opacity-0 w-fit min-w-[80px] bg-bgPrimaryLight dark:bg-bgPrimaryDark text-ctnPrimaryLight dark:text-ctnPrimaryDark text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-3/4 -left-1/3 pointer-events-none">
										{tech.name}
									</div>
								</div>
							</Link>
						))}
					</div>
					<div className="w-full h-fit flex gap-2">
						{technologies.tools.map((tech, index) => (
							<Link
								href={tech.link}
								key={tech.name}
								target="_blank"
							>
								<div className="w-[50px] h-[50px] relative flex items-center group cursor-pointer">
									<Image
										src={tech.icon}
										alt={tech.name}
										fill={true}
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
									/>
									<div className="opacity-0 w-fit min-w-[80px] bg-bgPrimaryLight dark:bg-bgPrimaryDark text-ctnPrimaryLight dark:text-ctnPrimaryDark text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-3/4 -left-1/3 pointer-events-none">
										{tech.name}
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default SectionWrapper(Tech, "tech");
