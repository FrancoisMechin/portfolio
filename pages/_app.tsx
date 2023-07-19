import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";

const quicksand = Quicksand({
	subsets: ["latin"],
	variable: "--font-quicksand",
	display: "swap",
});
export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${quicksand.variable} font-sans`}>
			<Navbar />
			<Component {...pageProps} />
		</main>
	);
}
