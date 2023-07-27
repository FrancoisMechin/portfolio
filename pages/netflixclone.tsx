import React from "react";
import Image from "next/image";
import netflixCloneImg from "../public/assets/projects/nextflix.png";
import { FcInfo } from "react-icons/fc";
import Link from "next/link";
import Head from "next/head";

const netflixclone = () => {
	return (
		<>
			<Head>
				<title>Netflix Clone - FM</title>
			</Head>
			<div className="w-full">
				<div className="w-screen h-[30vh] lg:h-[40vh] relative">
					<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
					<Image
						className="absolute z-1 object-cover object-top"
						src={netflixCloneImg}
						fill
						alt="netflixclone-img"
						placeholder="blur"
						blurDataURL="../public/assets/projects/netflixclone.png"
					/>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] text-white translate-x-[-50%] translate-y-[-50%] z-10 ">
						<h2 className="py-2">Netflix Clone</h2>
						<h3>NextJS, MongoDB, Prisma, Tailwind..</h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
					<div className="col-span-4">
						<p>Project</p>
						<h2>Overview</h2>
						<p className="my-3">
							The development of this Netflix clone stemmed from my aspiration to acquire essential
							skills in NextJS, Tailwind, Prisma, and MongoDB. Through this project, I delved into the
							intricacies of web development, honing my proficiency in cutting-edge technologies and
							frameworks.
							<br />
							<br />
							Since achieving my professional title, my unwavering dedication to personal and
							professional growth has driven me to actively pursue projects aligned with my expertise
							and ambitions. By engaging in endeavors that challenge and expand my skill set, I aim to
							fortify my capabilities in specialized domains, ensuring a dynamic and impactful career
							trajectory.
						</p>
						<button className="px-8 mt-4 py-2 mr-8">Demo</button>
						<button className="px-8 mt-4 py-2 ">Code</button>
					</div>

					<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="p-2">
							<p className="text-center font-bold pb-2">Technologies</p>
							<div className="grid grid-cols-3 md:grid-cols-1">
								<p className="text-gray-600 py-2 flex items-center">
									<FcInfo className="pr-1" size={15} />
									React
								</p>
								<p className="text-gray-600 py-2 flex items-center">
									<FcInfo className="pr-1" size={15} />
									NextJS
								</p>
								<p className="text-gray-600 py-2 flex items-center">
									<FcInfo className="pr-1" size={15} />
									NextAuth
								</p>
								<p className="text-gray-600 py-2 flex items-center">
									<FcInfo className="pr-1" size={15} />
									Prisma
								</p>
								<p className="text-gray-600 py-2 flex items-center">
									<FcInfo className="pr-1" size={15} />
									MongoDB
								</p>
								<p className="text-gray-600 py-2 flex items-center">
									<FcInfo className="pr-1" size={15} />
									Tailwind
								</p>
							</div>
						</div>
					</div>
					<Link href="/#projects" scroll={false}>
						<p className="underline decoration-[#5651E5] underline-offset-[6px] cursor-pointer">Back</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default netflixclone;
