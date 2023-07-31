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
	const metaImg = "../public/assets/fmlogo-FULL-BG-colors.png"

	return (
		<main>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description}/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>

				{/* <!-- Schema.org markup for Google+ --> */}
				<meta itemprop="name" content={title} />
				<meta itemprop="description" content={description} />
				<meta itemprop="image" content={metaImg} />
				{/* <!-- Open Graph data --> */}

				<meta property="og:title" content={title}/>
				<meta property="og:type" content="website"/>
				<meta property="og:url" content="https://francoismechin.fr"/>
				<meta property="og:image" content={metaImg}/>
				<meta property="og:description" content={description}/>
				<meta property="og:site_name" content={title} />

				{/* <!-- Twitter Card data --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@publisher_handle" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:creator" content="@author_handle" />
				{/* <-- Twitter Summary card images must be at least 200x200px --> */}
				<meta name="twitter:image" content={metaImg} />


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
