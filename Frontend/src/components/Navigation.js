import React from "react";
import logo from "../assets/logo.png";

export default function Navigation() {
	return (
		<div className="container mx-auto p-5 ">
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
							<button className="h-10 w-50 cursor-pointer rounded-full font-poppins px-5 py-1 bg-orange-400 bg-opacity-100 hover:animate-bounce drop-shadow-5xl font-bold">
								LOGOUT
							</button>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
