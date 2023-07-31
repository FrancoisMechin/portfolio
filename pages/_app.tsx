import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

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

	return (
		<IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
			<main className={`${quicksand.variable} font-sans`} dir={getDirection(locale)}>
				<Navbar locales={locales} />
				<Component {...pageProps} />
			</main>
		</IntlProvider>
	);
}
