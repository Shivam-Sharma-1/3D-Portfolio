import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	threejs,
	nextjs,
	styledComponents,
	expressjs,
	firebase,
	nextauthjs,
	prisma,
	c,
	java,
	python,
	framerMotion,
	postman,
	netflixClone,
	vanLife,
	spookyRun
} from "../assets";

import GDSCLogo from "../assets/company/gdsc-logo.svg";

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
		icon: mobile
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
		icon: html
	},
	{
		name: "CSS3",
		icon: css
	},
	{
		name: "JavaScript",
		icon: javascript
	},
	{
		name: "TypeScript",
		icon: typescript
	},
	{
		name: "React",
		icon: reactjs
	},
	{
		name: "Next.js",
		icon: nextjs
	},
	{
		name: "Three.js",
		icon: threejs
	},
	{
		name: "Styled-Components",
		icon: styledComponents
	},
	{
		name: "TailwindCSS",
		icon: tailwind
	},
	{
		name: "Framer-motion",
		icon: framerMotion
	},
	{
		name: "Node.js",
		icon: nodejs
	},
	{
		name: "MongoDB",
		icon: mongodb
	},
	{
		name: "Express.js",
		icon: expressjs
	},
	{
		name: "Firebase",
		icon: firebase
	},
	{
		name: "NextAuth.js",
		icon: nextauthjs
	},
	{
		name: "Prisma",
		icon: prisma
	},
	{
		name: "C",
		icon: c
	},
	{
		name: "Java",
		icon: java
	},
	{
		name: "Python",
		icon: python
	},
	{
		name: "git",
		icon: git
	},
	{
		name: "Postman",
		icon: postman
	},
	{
		name: "figma",
		icon: figma
	}
];

const experiences = [
	{
		title: "Full Stack Developer",
		company_name: "Tech Lead at GDSC MVJCE",
		icon: GDSCLogo,
		iconBg: "#E6DEDD",
		date: "July 2023 - Present",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers."
		]
	},
	{
		title: "Frontend Developer",
		company_name: "Tech team member at GDSC MVJCE",
		icon: GDSCLogo,
		iconBg: "#E6DEDD",
		date: "February 2022 - July 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers."
		]
	}
	// {
	// 	title: "Web Developer",
	// 	company_name: "Shopify",
	// 	icon: shopify,
	// 	iconBg: "#383E56",
	// 	date: "Jan 2022 - Jan 2023",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers."
	// 	]
	// },
	// {
	// 	title: "Full stack Developer",
	// 	company_name: "Meta",
	// 	icon: meta,
	// 	iconBg: "#E6DEDD",
	// 	date: "Jan 2023 - Present",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers."
	// 	]
	// }
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
		image: netflixClone,
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
		image: vanLife,
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
		image: spookyRun,
		source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git"
	}
];

export { services, technologies, experiences, testimonials, projects };
