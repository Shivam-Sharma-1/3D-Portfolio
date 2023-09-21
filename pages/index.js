import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	StarsCanvas,
	Tech,
	Works
} from "@/components";
import Head from "next/head";

// export const metadata = {
// 	viewport: {
// 		width: "device-width",
// 		height: "device-height",
// 		initialScale: 1,
// 		maximumScale: 1,
// 		minimumScale: 1,
// 		title: "Portfolio | Shivam Sharma"
// 	}
// };
const App = () => {
	return (
		<>
			<Head>
				<title>Portfolio | Shivam Sharma</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				{/* <Tech /> */}
				<Works />
				{/* <Feedbacks /> */}
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</>
	);
};

export default App;
