import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<Head>
				<title>Francois - Full-stack Developer</title>
			</Head>
			<Navbar />
		</main>
	);
}
