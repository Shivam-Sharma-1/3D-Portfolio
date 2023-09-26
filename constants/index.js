export const navLinks = [
	{
		id: "about",
		title: "About"
	},
	{
		id: "work",
		title: "Work"
	},
	{
		id: "contact",
		title: "Contact"
	}
];

const services = [
	// {
	// 	title: "Full Stack Developer",
	// 	icon: web
	// },
	{
		title: "Frontend Developer",
		icon: "/assets/web.png"
	},
	{
		title: "Leader",
		icon: "/assets/web.png"
	}
	// {
	// 	title: "Backend Developer",
	// 	icon: backend
	// }
	// {
	// 	title: "Content Creator",
	// 	icon: creator
	// }
];

const technologies = [
	{
		name: "HTML5",
		icon: "/assets/tech/html.png"
	},
	{
		name: "CSS3",
		icon: "/assets/tech/html.png"
	},
	{
		name: "JavaScript",
		icon: "/assets/tech/html.png"
	},
	{
		name: "TypeScript",
		icon: "/assets/tech/html.png"
	},
	{
		name: "React",
		icon: "/assets/tech/html.png"
	},
	{
		name: "Next.js",
		icon: "/assets/tech/html.png"
	},
	{
		name: "Three.js",
		icon: "/assets/tech/html.png"
	},
	{
		name: "Styled-Components",
		icon: "/assets/tech/html.png"
	},
	{
		name: "TailwindCSS",
		icon: "/assets/tech/html.png"
	},
	{
		name: "Framer-motion",
		icon: "/assets/tech/html.png"
	},
	{
		name: "Node.js",
		icon: "/assets/tech/html.png"
	},
	{
		name: "MongoDB",
		icon: "/assets/tech/html.png"
	},
	{
		name: "Express.js",
		icon: "/assets/tech/html.png"
	},
	{
		name: "Firebase",
		icon: "/assets/tech/html.png"
	},
	{
		name: "NextAuth.js",
		icon: "/assets/tech/html.png"
	},
	{
		name: "Prisma",
		icon: "/assets/tech/html.png"
	},
	{
		name: "C",
		icon: "/assets/tech/html.png"
	},
	{
		name: "Java",
		icon: "/assets/tech/html.png"
	},
	{
		name: "Python",
		icon: "/assets/tech/html.png"
	},
	{
		name: "git",
		icon: "/assets/tech/html.png"
	},
	{
		name: "Postman",
		icon: "/assets/tech/html.png"
	},
	{
		name: "figma",
		icon: "/assets/tech/html.png"
	}
];

const experiences = [
	{
		title: "Frontend Developer",
		company_name: "Tech Lead at GDSC MVJCE",
		icon: "/assets/company/gdsc-logo.svg",
		iconBg: "#E6DEDD",
		date: "July 2023 - Present",
		points: [
			"Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
			"Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
			"Developed GDSC MVJCE website, enhancing the organization's online visibility.",
			"Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events."
		]
	},
	{
		title: "Frontend Developer",
		company_name: "Tech team member at GDSC MVJCE",
		icon: "/assets/company/gdsc-logo.svg",
		iconBg: "#E6DEDD",
		date: "February 2022 - July 2023",
		points: [
			"Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
			"Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
			"Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
			"Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth."
		]
	}
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg"
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg"
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg"
	}
];

const projects = [
	{
		name: "Netflix Clone",
		description:
			"Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
		tags: [
			{
				name: "next.js",
				color: "blue-text-gradient"
			},
			{
				name: "typescript",
				color: "green-text-gradient"
			},
			{
				name: "tailwindcss",
				color: "pink-text-gradient"
			},
			{
				name: "mongodb",
				color: "white-text-gradient"
			}
		],
		image: "/assets/projects/netflix-clone.png",
		source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git"
	},
	{
		name: "Van-Life",
		description:
			"VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient"
			},
			{
				name: "mirage.js",
				color: "green-text-gradient"
			},
			{
				name: "firebase-firestore",
				color: "pink-text-gradient"
			}
		],
		image: "/assets/projects/vanlife.png",
		source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git"
	},
	{
		name: "Spooky-Run",
		description:
			"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
		tags: [
			{
				name: "html5",
				color: "blue-text-gradient"
			},
			{
				name: "css3",
				color: "green-text-gradient"
			},
			{
				name: "javascript",
				color: "pink-text-gradient"
			}
		],
		image: "/assets/projects/spooky-run.png",
		source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git"
	}
];

export { services, technologies, experiences, testimonials, projects };
