import React, { forwardRef, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, staggerContainer } from "../utils/motion";
import { useFrame } from "@react-three/fiber";

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
		<motion.div
			variants={slideIn("left", "tween", 0.2, 1)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="xl:my-36 md:w-2/5 w-full bg-bgSecondaryDark  md:ml-36 p-8 rounded-2xl shadow-sm shadow-primary"
			id="contact"
		>
			<p className={"sectionSubText text-ctnSecondaryDark"}>
				Get in touch
			</p>
			<h3 className={"sectionHeadText text-ctnPrimaryDark"}>Contact.</h3>

			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className="mt-8 flex flex-col gap-8"
			>
				<label className="flex flex-col">
					<span className="text-ctnPrimaryDark font-medium mb-4">
						Your Name
					</span>
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
						required
						placeholder="What's your good name?"
						className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
					/>
				</label>
				<label className="flex flex-col">
					<span className="text-ctnPrimaryDark  font-medium mb-4">
						Your email
					</span>
					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						required
						placeholder="What's your web address?"
						className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
					/>
				</label>
				<label className="flex flex-col">
					<span className="text-ctnPrimaryDark  font-medium mb-4">
						Your Message
					</span>
					<textarea
						rows={7}
						name="message"
						value={form.message}
						onChange={handleChange}
						required
						placeholder="What you want to say?"
						className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
					/>
				</label>

				<button
					type="submit"
					className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-tertiary hover:shadow-primary hover:bg-tertiary transition-all duration-800 ease-in"
				>
					{loading ? "Sending..." : "Send"}
				</button>
			</form>
		</motion.div>
	);
}

export default Contact;
