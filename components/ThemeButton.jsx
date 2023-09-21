import { useTheme } from "next-themes";
import Sun from "./../public/assets/sun_icon.svg";
import Moon from "./../public/assets/moon_icon.svg";
import { useEffect, useState } from "react";

const ThemeButton = () => {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme("dark");
	const [curTheme, setCurTheme] = useState(systemTheme ?? "dark");

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (theme) setCurTheme(theme);
	}, [theme]);

	if (!mounted) {
		return null;
	}

	return (
		<button
			onClick={() =>
				theme === "dark" ? setTheme("light") : setTheme("dark")
			}
			className="bg-bgSecondaryLight dark:bg-bgSecondaryDark hover:bg-bgSecondaryLight dark:hover:bg-bgSecondaryDark transition-all duration-100 text-ctnPrimaryLight dark:text-ctnPrimaryDark rounded-full w-8 h-8 p-2 flex justify-center items-center"
		>
			{theme ? theme === "dark" ? <Moon /> : <Sun /> : <Sun />}
		</button>
	);
};

export default ThemeButton;
