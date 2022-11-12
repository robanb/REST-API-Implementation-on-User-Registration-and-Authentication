import React from "react";
import Navigation from "./Navigation";
import * as Flowbite from "flowbite-react";

export default function Pricing() {
	return (
		<div className="bg-gray-800 h-screen w-screen relative overflow-hidden flex justify-center items-center ">
			<div className="h-40-r w-40-r bg-gradient-to-r  from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse brightness-50"></div>
			<div className="h-35-r w-35-r bg-gradient-to-r  from-purple-400 via-orange-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse brightness-50	"></div>
			<div className="h-screen w-screen bg-opacity-0 backdrop-blur-sm  ">
				<Navigation />
				<div class="grid grid-cols-3 gap-4 place-items-center">
					<div className=" h-100 w-96 bg-opacity-0 bg-gray-900 rounded-2xl shadow-5xl shadow-violet-900 mt-16 ">
						<div className="max-w-sm">
							<Flowbite.Card
								imgAlt="Meaningful alt text for an image that is not purely decorative"
								imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
							>
								<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									Noteworthy technology acquisitions 2021
								</h5>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									Here are the biggest enterprise technology acquisitions of
									2021 so far, in reverse chronological order.
								</p>
							</Flowbite.Card>
						</div>
					</div>
					<div className=" h-100 w-96 bg-opacity-0 bg-gray-900 rounded-2xl shadow-5xl shadow-violet-900 mt-16 ">
						<div className="max-w-sm">
							<Flowbite.Card
								imgAlt="Meaningful alt text for an image that is not purely decorative"
								imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
							>
								<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									Noteworthy technology acquisitions 2021
								</h5>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									Here are the biggest enterprise technology acquisitions of
									2021 so far, in reverse chronological order.
								</p>
							</Flowbite.Card>
						</div>
					</div>
					<div className=" h-100 w-96 bg-opacity-0 bg-gray-900 rounded-2xl shadow-5xl shadow-violet-900 mt-16 ">
						<div className="max-w-sm">
							<Flowbite.Card
								imgAlt="Meaningful alt text for an image that is not purely decorative"
								imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
							>
								<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									Noteworthy technology acquisitions 2021
								</h5>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									Here are the biggest enterprise technology acquisitions of
									2021 so far, in reverse chronological order.
								</p>
							</Flowbite.Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
