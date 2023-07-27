import React from "react";
import Image from "next/image";

const Skills = () => {
	return (
		<div id="skills" className="w-full md:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
				<h2 className="py-4">What I can do</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* //? Tableau de compétences */}
					{/* //TODO A STOCKER DANS UN COMPOSANT ET MAPPER !!! */}
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/../public/assets/skills/html.png"
									alt="html-logo"
									width={64}
									height={64}
								/>
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
								<Image src="/../public/assets/skills/css.png" alt="css-logo" width={64} height={64} />
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
								<Image
									src="/../public/assets/skills/javascript.png"
									alt="javascript-logo"
									width={64}
									height={64}
								/>
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
								<Image
									src="/../public/assets/skills/node.png"
									alt="nodejs-logo"
									width={64}
									height={64}
								/>
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
								<Image
									src="/../public/assets/skills/react.png"
									alt="react-logo"
									width={64}
									height={64}
								/>
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
								<Image
									src="/../public/assets/skills/nextjs.png"
									alt="nextjs-logo"
									width={64}
									height={64}
								/>
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
								<Image
									src="/../public/assets/skills/mongo.png"
									alt="mongodb-logo"
									width={64}
									height={64}
								/>
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
								<Image
									src="/../public/assets/skills/tailwind.png"
									alt="tailwindcss-logo"
									width={64}
									height={64}
								/>
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
