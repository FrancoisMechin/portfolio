"use client";

import React from "react";
import Image from "next/image";
import htmlLogo from "@/public/assets/skills/html.png";
import cssLogo from "@/public/assets/skills/css.png";
import jsLogo from "@/public/assets/skills/javascript.png";
import nodeLogo from "@/public/assets/skills/node.png";
import reactLogo from "@/public/assets/skills/react.png";
import nextjsLogo from "@/public/assets/skills/nextjs.png";
import mongoLogo from "@/public/assets/skills/mongo.png";
import tailwindLogo from "@/public/assets/skills/tailwind.png";
import { FormattedMessage } from "react-intl";

const Skills = () => {
	return (
		<div id="skills" className="w-full md:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					<FormattedMessage id="skills.section.title" />
				</p>
				<h2 className="py-4">
					<FormattedMessage id="skills.section.context" />
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* //? Tableau de compétences */}
					{/* //TODO A STOCKER DANS UN COMPOSANT ET MAPPER !!! */}
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={htmlLogo} alt="html-logo" width={64} height={64} />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>HTML</h3>
							</div>
						</div>
					</div>

					{/* //? Tableau de compétences */}
					{/* //TODO A STOCKER DANS UN COMPOSANT ET MAPPER !!! */}
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={cssLogo} alt="css-logo" width={64} height={64} />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>CSS</h3>
							</div>
						</div>
					</div>

					{/* //? Tableau de compétences */}
					{/* //TODO A STOCKER DANS UN COMPOSANT ET MAPPER !!! */}
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={jsLogo} alt="javascript-logo" width={64} height={64} />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>

					{/* //? Tableau de compétences */}
					{/* //TODO A STOCKER DANS UN COMPOSANT ET MAPPER !!! */}
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={nodeLogo} alt="nodejs-logo" width={64} height={64} />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>NodeJS</h3>
							</div>
						</div>
					</div>

					{/* //? Tableau de compétences */}
					{/* //TODO A STOCKER DANS UN COMPOSANT ET MAPPER !!! */}
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={reactLogo} alt="react-logo" width={64} height={64} />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>React</h3>
							</div>
						</div>
					</div>

					{/* //? Tableau de compétences */}
					{/* //TODO A STOCKER DANS UN COMPOSANT ET MAPPER !!! */}
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={nextjsLogo} alt="nextjs-logo" width={64} height={64} />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>NextJS</h3>
							</div>
						</div>
					</div>

					{/* //? Tableau de compétences */}
					{/* //TODO A STOCKER DANS UN COMPOSANT ET MAPPER !!! */}
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={mongoLogo} alt="mongodb-logo" width={64} height={64} />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>MongoDB</h3>
							</div>
						</div>
					</div>

					{/* //? Tableau de compétences */}
					{/* //TODO A STOCKER DANS UN COMPOSANT ET MAPPER !!! */}
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={tailwindLogo} alt="tailwindcss-logo" width={64} height={64} />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>TailwindCSS</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
