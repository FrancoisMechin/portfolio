import { Html, Head, Main, NextScript } from "next/document";
import { useIntl } from "react-intl";

export default function Document() {
	const intl = useIntl();
	const title = intl.formatMessage({ id: "page.home.head.title" });
	const description = intl.formatMessage({ id: "page.home.head.meta.desc" });
	const metaImg = "../public/assets/fmlogo-FULL-BG-colors.png";

	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
