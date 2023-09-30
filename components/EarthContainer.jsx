import { motion } from "framer-motion";

import { slideIn } from "@/utils/motion";
import { EarthCanvas } from "./canvas";

function EarthContainer({ isMobile }) {
	return (
		<motion.div
			variants={slideIn("right", "tween", 0.2, 1)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="xl:w-1/2 w-full md:w-2/3 md:h-auto h-[550px]"
		>
			<EarthCanvas isMobile={isMobile} />
		</motion.div>
	);
}

export default EarthContainer;
