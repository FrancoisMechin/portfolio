"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type LanguageDropdownProps = {
	locales?: string[];
	currentLocale: string;
};

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ locales }) => {
	const { locale, pathname } = useRouter(); // Use 'replace' instead of 'push'
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const currentLocale = locale ?? "en";

	if (!locales || locales.length === 0) {
		return null; // Return null or some other fallback when locales are not available
	}

	const handleLanguageChange = (newLocale: string) => {
		setIsDropdownOpen(false);
		if (newLocale !== currentLocale) {
			window.location.replace(`/${newLocale}/${pathname}`);
		}
	};

	return (
		<div className="relative inline-block text-left">
			<button
				type="button"
				className="inline-flex items-center justify-center w-16 gap-x-1 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
				id="menu-button"
				aria-expanded="true"
				aria-haspopup="true"
				onClick={() => setIsDropdownOpen((prevState) => !prevState)}
			>
				{currentLocale === "en" ? (
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
						alt="English Flag"
						className="w-4 h-4 mr-1"
					/>
				) : (
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"
						alt="French Flag"
						className="w-4 h-4 mr-1"
					/>
				)}
				{currentLocale.toUpperCase()}
				<svg
					className="-mr-1 h-5 w-5 text-gray-400 ml-1"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fillRule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
						clipRule="evenodd"
					/>
				</svg>
			</button>

			<div
				className={`absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
					isDropdownOpen ? "block" : "hidden"
				}`}
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabIndex={-1}
			>
				<div className="py-1" role="none">
					{/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
					<Link href="/" locale="en">
						<span
							className="flex items-center justify-between text-gray-700 px-4 py-2 text-sm cursor-pointer"
							role="menuitem"
							tabIndex={-1}
							id="menu-item-0"
							onClick={() => handleLanguageChange("en")}
						>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
								alt="English Flag"
								className="w-4 h-4 mr-1"
							/>
							EN
						</span>
					</Link>
					<Link href="/" locale="fr">
						<span
							className="flex items-center justify-between text-gray-700 px-4 py-2 text-sm cursor-pointer"
							role="menuitem"
							tabIndex={-1}
							id="menu-item-1"
							onClick={() => handleLanguageChange("fr")}
						>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"
								alt="French Flag"
								className="w-4 h-4 mr-1"
							/>
							FR
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LanguageDropdown;
