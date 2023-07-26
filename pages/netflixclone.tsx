import React from "react";
import Image from "next/image";
import netflixCloneImg from "../public/assets/projects/netflixclone.png";

const netflixclone = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<Image className="absolute z-1 object-cover" src={netflixCloneImg} alt="/" />
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] text-white translate-x-[-50%] translate-x-[-50%] ">
					<h2 className="py-2">Netflix Clone</h2>
					<h3>NextJS, MongoDB, Prisma, Tailwind..</h3>
				</div>
			</div>
		</div>
	);
};

export default netflixclone;
