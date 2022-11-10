import React from "react";
import logo from "../assets/logo.png";

export default function Navigation() {
	return (
		<div className="App bg-gray-800 h-screen w-screen relative overflow-hidden flex justify-center items-center ">
			<div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
			<div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-orange-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>

			<div className="container h-screen w-screen bg-white bg-opacity-0  backdrop-filter backdrop-blur-sm ">
				{/* Navigation */}
				<div className="container mx-auto bg-transparent p-5 ">
					<nav className="flex justify-between">
						<div>
							<a href="../App.js">
								<img className="h-24 w-24 animate-pulse" src={logo} />
							</a>
						</div>
						<ul className="flex flex-row">
							<li className="pr-5">
								<a>
									<button className="h-10 w-50 cursor-pointer rounded-full font-poppins px-5 py-1 bg-orange-400 bg-opacity-100 hover:animate-bounce drop-shadow-5xl ">
										HOME
									</button>
								</a>
							</li>
							<li className="pr-5">
								<a>
									<button className="h-10 w-50 cursor-pointer rounded-full font-poppins px-5 py-1 bg-orange-400 bg-opacity-100 hover:animate-bounce drop-shadow-5xl ">
										PROFILE
									</button>
								</a>
							</li>
							<li className="pr-5">
								<a>
									<button className="h-10 w-50 cursor-pointer rounded-full font-poppins px-5 py-1 bg-orange-400 bg-opacity-100 hover:animate-bounce drop-shadow-5xl ">
										LOGOUT
									</button>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}
