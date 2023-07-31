import { Html, Head, Main, NextScript } from "next/document";
import { useIntl } from "react-intl";

export default function Document() {
	const intl = useIntl();
	const title = intl.formatMessage({ id: "page.home.head.title" });
	const description = intl.formatMessage({ id: "page.home.head.meta.desc" });
	const metaImg = "../public/assets/fmlogo-FULL-BG-colors.png";

	return (
		<Html lang="en">
			<Head>
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
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
