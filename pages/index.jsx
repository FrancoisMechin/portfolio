"use client";

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
		<main>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description}/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="https://cdn.icon-icons.com/icons2/1451/PNG/512/codefolder_99364.png" hrefLang="x-default"/>
				<link rel="icon" href="https://cdn.icon-icons.com/icons2/1451/PNG/512/codefolder_99364.png" hrefLang="en"/>
				<link rel="icon" href="https://cdn.icon-icons.com/icons2/1451/PNG/512/codefolder_99364.png" hrefLang="fr"/>
			</Head>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
}
