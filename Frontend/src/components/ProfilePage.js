import React from "react";

import image from "../assets/Roba.png";

export default function ProfilePage() {
	return (
		<div className="flex justify-center max-h-max max-w-max mx-96">
			<div className="flex flex-col md:flex-row mt-0 bg-opacity-40 bg-gray-900 rounded-lg shadow-5xl shadow-violet-900">
				<div className="flex flex-col md:flex-row rounded-l-xl">
					<img
						src={image}
						alt="Profile Image"
						className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
					/>
					<div className="p-1 md:p-10">
						<h6 className="font-serif text-xl font-medium text-center text-white md:text-left">
							User Profile Information
							<hr />
						</h6>
						<div className="text-white">
							<h4>Name: Roba Nath Basnet</h4>
							<h4>Email: robanbth@gmail.com</h4>
							<h4>Profession: Montng Asst.</h4>
							<h4>DOB: 12/11/1999</h4>
							<button className=" h-10 w-50 cursor-pointer rounded-full  font-poppins px-5 py-3 text-xs text-black bg-lime-500 hover:bg-lime-700 hover:text-white mt-3">
								Edit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
