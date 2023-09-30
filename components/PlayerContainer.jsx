import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import Player from "./canvas/Player";
import PlayerCanvas from "./canvas/Player";

function PlayerContainer({ isMobile }) {
	return (
		<motion.div
			variants={slideIn("right", "tween", 0.2, 1)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="md:w-1/3 w-full md:h-auto h-[550px]"
		>
			<PlayerCanvas isMobile={isMobile} />
		</motion.div>
	);
}

export default PlayerContainer;
