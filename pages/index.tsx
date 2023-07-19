import Head from "next/head";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";

export default function Home() {
	return (
		<main>
			<Head>
				<title>Francois - Full-stack Developer</title>
			</Head>
			<Main />
			<About />
		</main>
	);
}
