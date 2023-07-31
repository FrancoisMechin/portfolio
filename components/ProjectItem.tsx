import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
	title: string;
	backgroundImg: string;
	projectUrl: string;
	alt: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, backgroundImg, projectUrl, alt }) => {
	return (
		<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
			<Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt={alt} />
			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>

				<Link href={projectUrl}>
					<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer mt-4">
						More Info
					</p>
				</Link>
			</div>
		</div>
	);
};

export default ProjectItem;
