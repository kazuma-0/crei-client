import { extendTheme } from "@chakra-ui/react";
import {
	Manrope,
	Rubik,
	Advent_Pro,
	Noto_Sans_Display,
} from "@next/font/google";

const manrope = Manrope({
	subsets: ["latin"],
});

const rubik = Rubik({
	subsets: ["latin"],
});

const advent = Advent_Pro({
	subsets: ["latin"],
});

const noto_sans = Noto_Sans_Display({
	subsets: ["latin"],
});

const theme = extendTheme({
	fonts: {
		heading: `${noto_sans.style.fontFamily}, sans-serif`,
		body: `${rubik.style.fontFamily}, sans-serif`,
	},
});

export default theme;
