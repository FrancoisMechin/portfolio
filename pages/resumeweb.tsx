import React from "react";
import Image from "next/image";
import resumeImg from "../public/assets/projects/resumeweb.png";
import { FcInfo } from "react-icons/fc";
import Link from "next/link";
import Head from "next/head";

const resumeweb = () => {
	return (
		<>
			<Head>
				<title>Resume Website - FM</title>
			</Head>
			<div className="w-full">
				<div className="w-screen h-[30vh] lg:h-[40vh] relative">
					<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
					<Image
						className="absolute z-1 object-cover object-top"
						src={resumeImg}
						fill
						alt="netflixclone-img"
						placeholder="blur"
						blurDataURL="../public/assets/projects/netflixclone.png"
					/>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] text-white translate-x-[-50%] translate-y-[-50%] z-10 ">
						<h2 className="py-2">Resume Website</h2>
						<h3>HTML, CSS, Javascript</h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
					<div className="col-span-4">
						<p>Project</p>
						<h2>Overview</h2>
						<p className="my-3">
							This website was the first project I undertook during my initial month of training. I
							took advantage of my free time to experiment with animations, create double-sided cards,
							set up email notifications, and more. Although it was a straightforward project, it
							provided me with valuable insights into fundamental programming languages during my early
							learning phase.
						</p>
						<a href="https://francoismechin.com" target="__blank">
							<button className="px-8 mt-4 py-2 mr-8">Demo</button>
						</a>
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

export default resumeweb;
