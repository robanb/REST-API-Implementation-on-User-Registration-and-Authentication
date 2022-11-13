import React, { useEffect, useState } from "react";
import image from "../assets/Roba.png";
import Navigation from "./Navigation";
import * as Flowbite from "flowbite-react";
// import * as Flobites from "flowbite";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import useScriptRef from "../hooks/useScriptRef";
import * as Yup from "yup";
import { listData } from "../accessApi/userApi";

export default function ProfilePage() {
	const [showEditModal, setEditModal] = React.useState(false);
	const [showDeleteModal, setDeleteModal] = React.useState(false);
	const [userData, setUserData] = useState();

	const scriptedRef = useScriptRef();
	const navigate = useNavigate();
	useEffect(() => {
		listData().then((response) => {
			if (!response.status === 200) throw new Error(response.status);
			else {
				setUserData(response.data);
			}
		});
	}, []);

	return (
		<div className="bg-gray-800 h-screen w-screen relative overflow-hidden flex justify-center items-center ">
			<div className="h-40-r w-40-r bg-gradient-to-r  from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse brightness-50"></div>
			<div className="h-35-r w-35-r bg-gradient-to-r  from-purple-400 via-orange-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse brightness-50	"></div>
			<div className="h-screen w-screen bg-opacity-0 backdrop-blur-sm  ">
				<Navigation />
				<div class="grid grid-cols gap-4 place-items-center">
					<div className=" h-100 w-96 bg-opacity-0 bg-gray-900 rounded-2xl shadow-5xl shadow-violet-900 mt-16 ">
						<div className="max-w-sm">
							<Flowbite.Card>
								<div className="flex flex-col items-center pb-5">
									<h1 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
										Bonnie Green
									</h1>
									<span className="text-sm text-gray-500 dark:text-gray-400">
										Profession: Visual Designer
									</span>
									<span className="text-sm text-gray-500 dark:text-gray-400">
										Email: rororo@gmail.com
									</span>
									<span className="text-sm text-gray-500 dark:text-gray-400">
										Date of Birth: 12/23/1999
									</span>
									<div className="mt-4 flex space-x-3 lg:mt-6"></div>
								</div>
							</Flowbite.Card>
						</div>
					</div>
				</div>
				{showDeleteModal ? (
					<div className="w-full justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none scroll-auto overflow-y-auto">
						<div className=" h-100 w-96 bg-opacity-60 bg-gray-900 rounded-2xl shadow-5xl hover:shadow-violet-900 mt-16">
							<Flowbite.Card>
								<div className="flex flex-col gap-4">
									<div className="flex flex-col gap-4 text-black items-center font-bold">
										Are you sure you want to delete your account?
									</div>
									<div className="mt-4 flex space-x-3 lg:mt-6 items-center">
										<Flowbite.Button
											color="success"
											type="submit"
											value="yes"
											onClick={() => showEditModal(false)}
										>
											Yes
										</Flowbite.Button>
										<Flowbite.Button
											color="dark"
											type="button"
											value="no"
											onClick={() => showEditModal(false)}
										>
											No
										</Flowbite.Button>
									</div>
								</div>
							</Flowbite.Card>
						</div>
					</div>
				) : null}

				{/* <Footer /> */}
			</div>
		</div>
	);
}
