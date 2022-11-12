import React from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import useScriptRef from "../../hooks/useScriptRef";
import * as Yup from "yup";
import * as Flowbite from "flowbite-react";
import { registration } from "../../accessApi/userApi";
export default function Register() {
	const scriptedRef = useScriptRef();
	const navigate = useNavigate();

	const registers = (userData) => {
		const formdata = new FormData();
		formdata.append("name", userData.name);
		formdata.append("email", userData.email);
		formdata.append("birthDate", userData.birthDate);
		formdata.append("profession", userData.profession);
		formdata.append("password", userData.password);
		formdata.append("profileImage", userData.profileImage);

		registration(formdata).then((response) => {
			if (!response.status === 200) throw new Error(response.status);
			else {
				navigate("/auth");
			}
		});
	};
	return (
		<div className="h-screen w-screen overflow-hidden flex justify-center items-center from-gray-800 via-teal-900 to-gray-800 bg-gradient-to-r scroll-auto overflow-y-auto">
			<div className="container h-100 w-96 bg-opacity-60 bg-gray-900 rounded-2xl shadow-5xl hover:shadow-violet-900 mt-16">
				<div className="max-w-sm">
					<Flowbite.Card>
						<Formik
							initialValues={{
								name: "",
								email: "",
								birthDate: "",
								profession: "",
								profileImage: "",
								password: "",
								submit: null,
							}}
							validationSchema={Yup.object().shape({
								name: Yup.string().required("Name is required"),
								email: Yup.string()
									.email("Must be a valid email")
									.max(255)
									.required("Email is required"),
								birthDate: Yup.string().max(15).required("DOB is required"),
								profession: Yup.string().required("profession is required"),

								password: Yup.string()
									.max(255)
									.min(8)
									.required("Password is required"),
							})}
							onSubmit={async (
								values,
								{ setErrors, setStatus, setSubmitting }
							) => {
								try {
									if (scriptedRef.current) {
										setStatus({ success: true });
										console.log(values);
										registers(values);
										setSubmitting(false);
									}
								} catch (err) {
									console.error(err);
									if (scriptedRef.current) {
										setStatus({ success: false });
										setErrors({ submit: err.message });
										setSubmitting(false);
									}
								}
							}}
						>
							{({
								errors,
								handleBlur,
								handleSubmit,
								handleChange,
								isSubmitting,
								touched,
								values,
							}) => (
								<form
									className="flex flex-col gap-4"
									noValidate
									onSubmit={handleSubmit}
								>
									<div className="flex flex-col gap-4 text-black items-center font-bold">
										{" "}
										User Registration
									</div>
									<div>
										<div className=" block">
											<Flowbite.Label htmlFor="name" value="Full Name" />
										</div>
										<Flowbite.TextInput
											type="text"
											placeholder="Full Name"
											name="name"
											onBlur={handleBlur}
											onChange={handleChange}
										/>
										{touched.name && errors.name && (
											<p
												error
												id="standard-weight-helper-text-user_id-login"
												className="text-red-900"
											>
												{errors.name}
											</p>
										)}
									</div>
									<div>
										<div className=" block">
											<Flowbite.Label htmlFor="email1" value="Email" />
										</div>
										<Flowbite.TextInput
											type="text"
											placeholder="Email"
											name="email"
											onBlur={handleBlur}
											onChange={handleChange}
										/>
										{touched.email && errors.email && (
											<p
												error
												id="standard-weight-helper-text-user_id-login"
												className="text-red-900"
											>
												{errors.email}
											</p>
										)}
									</div>
									<div>
										<div className=" block">
											<Flowbite.Label htmlFor="dob" value="Date of Birth" />
										</div>
										<Flowbite.TextInput
											type="date"
											name="birthDate"
											onBlur={handleBlur}
											onChange={handleChange}
										/>
										{touched.birthDate && errors.birthDate && (
											<p
												error
												id="standard-weight-helper-text-user_id-login"
												className="text-red-900"
											>
												{errors.birthDate}
											</p>
										)}
									</div>
									<div>
										<div className=" block">
											<Flowbite.Label htmlFor="profession" value="Profession" />
										</div>
										<Flowbite.TextInput
											type="text"
											placeholder="Profession"
											name="profession"
											onBlur={handleBlur}
											onChange={handleChange}
										/>
										{touched.profession && errors.profession && (
											<p
												error
												id="standard-weight-helper-text-user_id-login"
												className="text-red-900"
											>
												{errors.profession}
											</p>
										)}
									</div>
									<div>
										<div className=" block">
											<Flowbite.Label htmlFor="pimage" value="Profile Image" />
										</div>
										<Flowbite.FileInput
											type="file"
											name="profileImage"
											onBlur={handleBlur}
											onChange={handleChange}
										/>
										{touched.profileImage && errors.profileImage && (
											<p
												error
												id="standard-weight-helper-text-user_id-login"
												className="text-red-900"
											>
												{errors.profileImage}
											</p>
										)}
									</div>
									<div>
										<div className=" block">
											<Flowbite.Label htmlFor="password" value="Password" />
										</div>
										<Flowbite.TextInput
											type="password"
											name="password"
											placeholder="Password"
											onBlur={handleBlur}
											onChange={handleChange}
										/>
										{touched.password && errors.password && (
											<p
												error
												id="standard-weight-helper-text-user_id-login"
												className="text-red-900"
											>
												{errors.password}
											</p>
										)}
									</div>
									<Flowbite.Button
										type="submit"
										disabled={isSubmitting}
										value="Register"
									>
										Register
									</Flowbite.Button>
									<p className="text-black text-sm items-center">
										Already Registered?{" "}
										<Link to={`/login`}>
											<b className="hover:text-orange-400">Sign in Now!</b>
										</Link>
									</p>
								</form>
							)}
						</Formik>
					</Flowbite.Card>
				</div>
			</div>
		</div>
	);
}
