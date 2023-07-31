import React from "react";
import Image from "next/image";
import webcseImg from "../public/assets/projects/webcse/homepage-cse.jpg";
import { FcInfo } from "react-icons/fc";
import Link from "next/link";
import { SlideShow } from "@/components/SlideShow";
import Head from "next/head";

const webcse = () => {
	return (
		<>
			<Head>
				<title>WebCSE Local &apos;TV&apos; - FM</title>
			</Head>
			<div className="w-full">
				<div className="w-screen h-[30vh] lg:h-[40vh] relative">
					<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
					<Image
						className="absolute z-1 object-cover"
						src={webcseImg}
						fill
						alt="netflixclone-img"
						placeholder="blur"
						blurDataURL="../public/assets/projects/netflixclone.png"
					/>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] text-white translate-x-[-50%] translate-y-[-50%] z-10 ">
						<h2 className="py-2">WebCSE Local &apos;TV&apos;</h2>
						<h3>Symfony, NodeJS, ExpressJS, Twig & modules </h3>
					</div>
				</div>

				<div className="max-w-[1240px] m-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
					<div className="col-span-4">
						<p>Project</p>
						<h2>Overview</h2>
						<p className="my-3">
							During my 3-month internship as a web/mobile web developer, I worked in a multimedia
							company on a localized TV network platform. The goal was to schedule and manage daily
							film playlists, news tickers, and replay functionality. However, I was the sole developer
							assigned to this project, and it couldn&apos;t be deployed due to the company&apos;s ownership of
							the rights. Below are images showcasing the application&apos;s functionalities.
							<br />
							<br />
							This project demonstrates my expertise in web development, focusing on user-centric
							design and cutting-edge functionality.
						</p>
						<div className="pr-2">
							<SlideShow />
						</div>
					</div>

					<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="p-2">
							<p className="text-center font-bold pb-2">Technologies</p>
							<div className="grid grid-cols-3 md:grid-cols-1">
								<p className="text-gray-600 py-2 flex items-center">
									<FcInfo className="pr-1" size={15} />
									PHP 8
								</p>
								<p className="text-gray-600 py-2 flex items-center">
									<FcInfo className="pr-1" size={15} />
									Symfony
								</p>
								<p className="text-gray-600 py-2 flex items-center">
									<FcInfo className="pr-1" size={15} />
									NodeJS
								</p>
								<p className="text-gray-600 py-2 flex items-center">
									<FcInfo className="pr-1" size={15} />
									ExpressJS
								</p>
								<p className="text-gray-600 py-2 flex items-center">
									<FcInfo className="pr-1" size={15} />
									Twig
								</p>
							</div>
						</div>
					</div>

					<Link className="flex flex-col" href="/#projects" scroll={false}>
						<p className="underline decoration-[#5651E5] underline-offset-[6px] cursor-pointer">Back</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default webcse;
