import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useEffect, useState } from "react";

function Tech({ ballref1, ballref2, ballref3, ballref4, ballref5, ballref6 }) {
	// const [isLoaded, setIsLoaded] = useState(false);

	// function addToRefs(el) {
	// 	if (el) {
	// 		ballrefs.current.push(el);
	// 		console.log(ballrefs);
	// 	}
	// }

	// console.log(isLoaded, ballrefs);

	// useEffect(() => {
	// 	if (ballrefs) setIsLoaded(true);
	// }, [ballrefs, isLoaded]);

	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((technology, index) => (
				<div
					className="w-28 h-28"
					key={technology.name}
					ref={
						index === 0
							? ballref1
							: index === 1
							? ballref2
							: index === 2
							? ballref3
							: index === 3
							? ballref4
							: index === 4
							? ballref5
							: ballref6
					}
				>
					Hello
				</div>
			))}
		</div>
	);
}

export default SectionWrapper(Tech, "tech");
