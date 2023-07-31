import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import Head from "next/head";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

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

	const intl = useIntl();
	const title = intl.formatMessage({ id: "page.home.head.title" });
	const description = intl.formatMessage({ id: "page.home.head.meta.desc" });
	const metaImg = "../public/assets/fmlogo-FULL-BG-colors.png";

	return (
		<>
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
			<IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
				<main className={`${quicksand.variable} font-sans`} dir={getDirection(locale)}>
					<Navbar locales={locales} />
					<Component {...pageProps} />
				</main>
			</IntlProvider>
		</>
	);
}
