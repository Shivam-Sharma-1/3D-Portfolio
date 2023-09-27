import { useState } from "react";

import { navLinks } from "../constants";
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import Image from "next/image";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		<nav
			className={`paddingX w-full flex items-center py-5 fixed top-0 z-30 dark:bg-transparent bg-bgPrimaryLight backdrop-filter backdrop-blur-xl bg-opacity-60`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					href="/"
					className="flex items-center gap-6"
					onClick={() => {
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: "smooth"
						});
					}}
				>
					<div
						className="w-9 h-9 object-contain
                        rounded-full relative"
					>
						<Image
							src="/assets/avatar.png"
							alt="avatar"
							fill={true}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
							className="w-9 h-9 object-cover
                        rounded-full"
						/>
					</div>
					<p className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[18px] font-bold cursor-pointer flex ">
						Shivam Sharma &nbsp;
						<span className="sm:block hidden">
							{" "}
							| Frontend Developer
						</span>
					</p>
				</Link>

				<ul className="list-none hidden sm:flex flex-row gap-10 flex items-center">
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`${
								active === nav.title
									? "text-secondary"
									: "dark:text-ctnPrimaryDark text-ctnPrimaryLight"
							} hover:text-quaternary text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
					<li
						className={`text-white hover:text-white text-[18px] font-medium cursor-pointer`}
					>
						<ThemeButton />
					</li>
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
						alt="menu"
						className="w-[28px] h-[28px] object-contain"
						onClick={() => setToggle(!toggle)}
					/>

					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
							{navLinks.map((nav) => (
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ${
										active === nav.title
											? "text-secondary"
											: "dark:text-ctnPrimaryDark text-ctnPrimaryLight"
									}`}
									onClick={() => {
										setToggle(!toggle);
										setActive(nav.title);
									}}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
