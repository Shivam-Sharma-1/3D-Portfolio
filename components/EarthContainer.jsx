import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import Earth from "./canvas/Earth";
import EarthCanvas from "./canvas/Earth";

function EarthContainer() {
	return (
		<motion.div
			variants={slideIn("right", "tween", 0.2, 1)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="xl:w-1/2 w-full xl:h-auto md:h-[550px] h-[350px]"
		>
			<EarthCanvas />
		</motion.div>
	);
}

export default EarthContainer;
