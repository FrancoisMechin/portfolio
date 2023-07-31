import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import Head from "next/head";

import en from "@/i18n/en.json";
import fr from "@/i18n/fr.json";

const quicksand = Quicksand({
	subsets: ["latin"],
	variable: "--font-quicksand",
	display: "swap",
});

type Messages = {
	[key: string]: Record<string, string>;
};

const messages: Messages = {
	en,
	fr,
};

function getDirection(locale: any): string {
	return "ltr";
}

export default function App({ Component, pageProps }: AppProps) {
	const { locale, locales } = useRouter();

	const currentLocale = locale ?? "en";
	const description =
		"Welcome to François Mechin's portfolio website! François is an aspiring freelance web developer with a strong passion for creating captivating online experiences. With a year of hands-on experience in web development, François is committed to continuous learning and growth in the dynamic world of coding. Specializing in front-end and back-end development, François is eager to collaborate on projects that push boundaries and explore new possibilities. This website showcases François's projects, demonstrating a blend of technical skills and creativity. If you're looking to collaborate with an enthusiastic and dedicated web developer, get in touch with François to discuss your project ideas today!";

	const title = "Full-Stack Developer : Francois Mechin";
	const metaImg = "../public/assets/fmlogo-FULL-BG-colors.png";

	return (
		<IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
			<main className={`${quicksand.variable} font-sans`} dir={getDirection(locale)}>
				<Head>
					<title>{title}</title>
					<meta name="description" content={description} />
					<meta name="viewport" content="width=device-width, initial-scale=1" />

					{/* <!-- Schema.org markup for Google+ --> */}
					<meta itemProp="name" content={title} />
					<meta itemProp="description" content={description} />
					<meta itemProp="image" content={metaImg} />
					{/* <!-- Open Graph data --> */}

					<meta property="og:title" content={title} />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://francoismechin.fr" />
					<meta property="og:image" content={metaImg} />
					<meta property="og:description" content={description} />
					<meta property="og:site_name" content={title} />

					{/* <!-- Twitter Card data --> */}
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:site" content="@publisher_handle" />
					<meta name="twitter:title" content={title} />
					<meta name="twitter:description" content={description} />
					<meta name="twitter:creator" content="@author_handle" />
					{/* <-- Twitter Summary card images must be at least 200x200px --> */}
					<meta name="twitter:image" content={metaImg} />

					<link
						rel="icon"
						href="https://cdn.icon-icons.com/icons2/1451/PNG/512/codefolder_99364.png"
						hrefLang="x-default"
					/>
					<link
						rel="icon"
						href="https://cdn.icon-icons.com/icons2/1451/PNG/512/codefolder_99364.png"
						hrefLang="en"
					/>
					<link
						rel="icon"
						href="https://cdn.icon-icons.com/icons2/1451/PNG/512/codefolder_99364.png"
						hrefLang="fr"
					/>
				</Head>
				<Navbar locales={locales} />
				<Component {...pageProps} />
			</main>
		</IntlProvider>
	);
}
