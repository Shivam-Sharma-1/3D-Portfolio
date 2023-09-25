import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

function EarthContainer({ earthref }) {
	return (
		<motion.div
			variants={slideIn("right", "tween", 0.2, 1)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="xl:w-1/2 xl:h-auto md:h-[550px] h-[350px]"
			ref={earthref}
		/>
	);
}

export default EarthContainer;
