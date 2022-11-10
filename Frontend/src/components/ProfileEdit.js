import React from "react";
import image from "../assets/Roba.png";
import Navigation from "./Navigation";

export default function ProfileEdit() {
	return (
		<div className="bg-gray-800 h-screen w-screen relative overflow-hidden flex justify-center items-center ">
			<div className="h-40-r w-40-r bg-gradient-to-r  from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse brightness-50"></div>
			<div className="h-35-r w-35-r bg-gradient-to-r  from-purple-400 via-orange-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse brightness-50	"></div>
			<div className="h-screen w-screen bg-opacity-0 backdrop-blur-sm ">
				<Navigation />
				<div className="flex justify-center max-h-max max-w-max mx-96">
					<div class="grid lg:grid-cols-1 md:w-96">
						<div class="max-w-xs mx-4 mb-2 rounded-lg shadow-xl shadow-violet-900 border ">
							<img
								class="w-48 h-48 rounded-full mx-auto mt-3"
								src={image}
								alt="product"
							/>
							<div class="px-6 py-4 mx-auto mt-3">
								<div>
									<h6 className="font-serif text-xl font-medium text-center text-white md:text-left underline">
										User Profile Information
									</h6>
									<div className="text-white">
										<h4>Name: Roba Nath Basnet</h4>
										<h4>Email: robanbth@gmail.com</h4>
										<h4>Profession: Montng Asst.</h4>
										<h4>DOB: 12/11/1999</h4>
										<div class="grid lg:grid-cols-2">
											<div>
												<button className=" h-10 w-50 cursor-pointer rounded-full  font-poppins font-bold px-10 py-3 text-xs text-black bg-lime-500 hover:bg-lime-700 hover:text-white mt-3 ">
													EDIT
												</button>
											</div>
											<div>
												<button className=" h-10 w-50 cursor-pointer rounded-full  font-poppins font-bold px-10 py-3 text-xs text-black bg-red-500 hover:bg-lime-700 hover:text-white mt-3 ">
													DELETE
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}
