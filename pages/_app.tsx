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
		"Welcome to an aspiring freelance web developer's portfolio, showcasing a passion for creating captivating online experiences. With a year of hands-on experience, this developer specializes in both front-end and back-end development, constantly seeking growth and pushing boundaries. The displayed projects reflect a blend of technical expertise and creativity, making this developer an ideal collaborator for your next web venture. If you're in need of an enthusiastic and dedicated web developer, reach out now to bring your ideas to life!";

	const title = "Full-Stack Developer #Francois";
	const metaImg = "../public/assets/fmlogo-FULL-BG-colors.png";

	return (
		<IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
			<main className={`${quicksand.variable} font-sans`} dir={getDirection(locale)}>
				<Head>
					<meta name="description" content={description} />
					<meta name="viewport" content="width=device-width, initial-scale=1" />

					{/* <!-- Schema.org markup for Google+ --> */}
					<meta itemProp="name" content={title} />
					<meta itemProp="description" content={description} />
					<meta
						itemProp="image"
						content="https://www.francoismechin.fr/assets/fmlogo-FULL-BG-colors.png"
					/>
					{/* <!-- Open Graph data --> */}

					<meta property="og:title" content={title} />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="www.francoismechin.fr" />
					<meta
						property="og:image"
						content="https://www.francoismechin.fr/assets/fmlogo-FULL-BG-colors.png"
					/>
					<meta property="og:description" content={description} />
					<meta property="og:site_name" content={title} />

					{/* <!-- Twitter Card data --> */}
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:title" content={title} />
					<meta name="twitter:description" content={description} />
					{/* <-- Twitter Summary card images must be at least 200x200px --> */}
					<meta
						name="twitter:image"
						content="https://www.francoismechin.fr/assets/fmlogo-FULL-BG-colors.png"
					/>

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
