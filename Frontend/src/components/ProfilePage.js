import React from "react";
import image from "../assets/Roba.png";
import Navigation from "./Navigation";
import * as Flowbite from "flowbite-react";
import * as Flobites from "flowbite";
// import Footer from "./Footer";

export default function ProfilePage() {
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
									<img
										className="mb-3 h-24 w-24 rounded-full shadow-lg"
										src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
										alt="Profile"
									/>
									<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
										Bonnie Green
									</h5>
									<span className="text-sm text-gray-500 dark:text-gray-400">
										Profession: Visual Designer
									</span>
									<span className="text-sm text-gray-500 dark:text-gray-400">
										Email: rororo@gmail.com
									</span>
									<span className="text-sm text-gray-500 dark:text-gray-400">
										Date of Birth: 12/23/1999
									</span>
									<div className="mt-4 flex space-x-3 lg:mt-6">
										<Flowbite.Button color="success">Edit</Flowbite.Button>
										{/* Modal */}
										{/* <Flobites.React.Fragment>
											<Flobites.Button
												color="failure"
												////  onClick={onClick}
											>
												Delete
											</Flobites.Button>
											<Flowbite.Modal
												show={false}
												size="md"
												popup={true}
												//// onClose={onClose}
											>
												<Flowbite.Modal.Header />
												<Flowbite.Modal.Body>
													<div className="text-center">
														////
														{/* <Flowbites.HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
										{/* <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
															Are you sure you want to delete your Account?
														</h3>
														<div className="flex justify-center gap-4">
															<Flowbite.Button
																color="failure"
																//// onClick={onClick}
															>
																Yes, I'm sure
															</Flowbite.Button>
															<Flowbite.Button
																color="gray"
																//// onClick={onClick}
															>
																No, cancel
															</Flowbite.Button> */}
										{/* </div>
													</div>
												</Flowbite.Modal.Body>
											</Flowbite.Modal>
										</Flobites.React.Fragment> */}
									</div>
								</div>
							</Flowbite.Card>
						</div>
					</div>
				</div>
				{/* <Footer /> */}
			</div>
		</div>
	);
}
