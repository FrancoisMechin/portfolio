/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["en", "fr"],
		defaultLocale: "fr",
		localeDetection: false,
	},
}

module.exports = nextConfig
