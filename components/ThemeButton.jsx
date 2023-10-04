import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Sun from "./../public/assets/sun_icon.svg";
import Moon from "./../public/assets/moon_icon.svg";

function ThemeButton() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme("dark");

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			onClick={() =>
				theme === "dark" ? setTheme("light") : setTheme("dark")
			}
			className="rounded-full w-8 h-8 p-2 flex justify-center items-center backdrop-filter backdrop-blur-xl bg-opacity-20 bg-[#8c9db1] dark:bg-[#21213467] transition-all duration-100 ease-in text-ctnPrimaryLight dark:text-ctnPrimaryDark"
		>
			{theme === "dark" ? <Moon /> : <Sun />}
		</button>
	);
}

export default ThemeButton;
