import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "../../assets/logo.png";
import Login from "./Login";
import Register from "./Register";

export default function AuthPage() {
	return (
		<div className="h-screen w-screen overflow-hidden flex justify-center items-center from-gray-800 via-teal-900 to-gray-800 bg-gradient-to-r ">
			<Tilt>
				<div className="container h-100 w-96 bg-opacity-60 bg-gray-900 rounded-2xl shadow-5xl hover:shadow-violet-900">
					{/* Register / Login */}
					<Register />
				</div>
			</Tilt>
		</div>
	);
}
