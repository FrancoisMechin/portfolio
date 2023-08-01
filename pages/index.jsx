import Head from "next/head";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { useIntl } from 'react-intl';
import Link from "next/link";

export default function Home() {

	const { locales } = useRouter();
	const intl = useIntl();
	const title = intl.formatMessage({ id: "page.home.head.title"})
	const description = intl.formatMessage({ id: "page.home.head.meta.desc"})

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
				<Main />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</>
	);
}
