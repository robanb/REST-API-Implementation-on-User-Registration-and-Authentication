import React from "react";
import logo from "../assets/logo.png";
import * as Flowbite from "flowbite-react";
import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		// <div className="container mx-auto p-5 ">
		// 	<nav className="flex justify-between">
		// 		<div>
		// 			<a href="../App.js">
		// 				<img className="h-24 w-24 animate-pulse" src={logo} />
		// 			</a>
		// 		</div>
		// 		<ul className="flex flex-row">
		// 			<li className="pr-5">
		// 				<a>
		// 					<button className="h-10 w-50 cursor-pointer rounded-full font-poppins px-5 py-1 bg-orange-400 bg-opacity-100 hover:animate-bounce drop-shadow-5xl ">
		// 						HOME
		// 					</button>
		// 				</a>
		// 			</li>
		// 			<li className="pr-5">
		// 				<a>
		// 					<button className="h-10 w-50 cursor-pointer rounded-full font-poppins px-5 py-1 bg-orange-400 bg-opacity-100 hover:animate-bounce drop-shadow-5xl ">
		// 						PROFILE
		// 					</button>
		// 				</a>
		// 			</li>
		// 			<li className="pr-5">
		// 				<a>
		// 					<button className="h-10 w-50 cursor-pointer rounded-full font-poppins px-5 py-1 bg-orange-400 bg-opacity-100 hover:animate-bounce drop-shadow-5xl font-bold">
		// 						LOGOUT
		// 					</button>
		// 				</a>
		// 			</li>
		// 		</ul>
		// 	</nav>
		// </div>
		<Flowbite.Navbar fluid={true} rounded={false} className="bg-opacity-70">
			<Flowbite.Navbar.Brand>
				<img
					src={logo}
					className="mr-3 h-6 sm:h-9 animate-pulse"
					alt="Flowbite Logo"
				/>
				<span className="self-center whitespace-nowrap text-SM font-semibold dark:text-white">
					WEB3 CONSCORTIUM
				</span>
			</Flowbite.Navbar.Brand>
			<div className="flex md:order-2">
				<Flowbite.Dropdown
					arrowIcon={false}
					inline={true}
					label={
						<Flowbite.Avatar
							alt="User settings"
							img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							rounded={true}
						/>
					}
				>
					<Flowbite.Dropdown.Header>
						<span className="block text-sm">Bonnie Green</span>
						<span className="block truncate text-sm font-medium">
							name@flowbite.com
						</span>
					</Flowbite.Dropdown.Header>
					<Link to={`/profile`}>
						<Flowbite.Dropdown.Item>Profile</Flowbite.Dropdown.Item>
					</Link>
					<Link to={``}>
						<Flowbite.Dropdown.Item>Settings</Flowbite.Dropdown.Item>
					</Link>
					<Link to={``}>
						<Flowbite.Dropdown.Item>Earnings</Flowbite.Dropdown.Item>
					</Link>
					<Link to={``}>
						<Flowbite.Dropdown.Item>Sign out</Flowbite.Dropdown.Item>
					</Link>
				</Flowbite.Dropdown>
				<Flowbite.Navbar.Toggle />
			</div>
			<Flowbite.Navbar.Collapse>
				<Link to={`/`}>
					<Flowbite.Navbar.Link active={true}>HOME</Flowbite.Navbar.Link>
				</Link>
				<Link to={`/services`}>
					<Flowbite.Navbar.Link>SERVICES</Flowbite.Navbar.Link>
				</Link>
				<Link to={`/pricing`}>
					<Flowbite.Navbar.Link>PRICING</Flowbite.Navbar.Link>
				</Link>
				<Link to={`/about`}>
					<Flowbite.Navbar.Link>ABOUT</Flowbite.Navbar.Link>
				</Link>
			</Flowbite.Navbar.Collapse>
		</Flowbite.Navbar>
	);
}
