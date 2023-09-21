import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

function Contact() {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: ""
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_v24oiak",
				"template_sqwax0b",
				{
					from_name: form.name,
					to_name: "Shivam Sharma",
					from_email: form.email,
					to_email: "shivamsharma77607@gmail.com",
					message: form.message
				},
				"ywtbnZ4k68zCCsf_2"
			)
			.then(
				() => {
					setLoading(false);
					alert(
						"Thank you for your message. I will get back to you soon."
					);

					setForm({
						name: "",
						email: "",
						message: ""
					});
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert("Something went wrong. Please try again later.");
				}
			);
	};

	return (
		<div
			className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
		>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] dark:bg-bgSecondaryDark bg-bgSecondaryLight p-8 rounded-2xl"
			>
				<p className={"sectionSubText"}>Get in touch</p>
				<h3 className={"sectionHeadText"}>Contact.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-medium mb-4">
							Your Name
						</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your good name?"
							className="bg-tertiary py-4 px-6 placeholder:dark:text-ctnSecondaryDark placeholder:text-ctnSecondaryLight text-[#1f1f1f] rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-medium mb-4">
							Your email
						</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your web address?"
							className="bg-tertiary py-4 px-6 placeholder:dark:text-ctnSecondaryDark placeholder:text-ctnSecondaryLight text-[#1f1f1f] rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-medium mb-4">
							Your Message
						</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What you want to say?"
							className="bg-tertiary py-4 px-6 placeholder:dark:text-ctnSecondaryDark placeholder:text-ctnSecondaryLight text-[#1f1f1f] rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<button
						type="submit"
						className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit dark:text-ctnSecondaryDark text-ctnPrimaryLight font-bold shadow-md shadow-primary"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
}

export default SectionWrapper(Contact, "contact");
