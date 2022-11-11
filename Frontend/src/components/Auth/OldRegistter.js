import React from "react";
import { Formik } from "formik";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import useScriptRef from "../../hooks/useScriptRef";
import * as Yup from "yup";

import { registration } from "../../accessApi/userApi";

export default function OldRegister() {
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
		<div className="h-screen w-screen overflow-hidden flex justify-center items-center from-gray-800 via-teal-900 to-gray-800 bg-gradient-to-r ">
			<div className="container h-100 w-96 bg-opacity-60 bg-gray-900 rounded-2xl shadow-5xl hover:shadow-violet-900">
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
					onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
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
							className="h-full flex flex-col space-y-4 items-center pb-5"
							noValidate
							onSubmit={handleSubmit}
						>
							<div className="h-24 w-24 relative animate-pulse mt-4">
								<img src={logo} />
							</div>
							<h3 className="text-white font-poppins text-2xl tracking-widest mt-8 mb-3">
								User Registration
							</h3>
							<input
								type="text"
								placeholder="Full Name"
								name="name"
								onBlur={handleBlur}
								onChange={handleChange}
								className="input-text rounded-lg hover:outline-offset-2  focus:outline-offset-2 focus:outline-grey-500 w-100 pl-2 pt-1 px-10 w-77"
							/>
							{touched.name && errors.name && (
								<p error id="standard-weight-helper-text-user_id-login">
									{errors.name}
								</p>
							)}
							<input
								type="text"
								placeholder="Email"
								name="email"
								id="email"
								onBlur={handleBlur}
								onChange={handleChange}
								className="input-text rounded-lg hover:outline-offset-2  focus:outline-offset-2 focus:outline-grey-500 w-100 pl-2 pt-1 px-10 w-77"
							/>
							{touched.email && errors.email && (
								<p error id="standard-weight-helper-text-user_id-login">
									{errors.email}
								</p>
							)}
							<div className="flex flex-nowrap">
								<div className="text-white pr-2 pt-2">DOB</div>
								<div>
									<input
										type="date"
										placeholder="Date of Birth"
										name="birthDate"
										id="birthDate"
										onBlur={handleBlur}
										onChange={handleChange}
										className="input-text rounded-lg hover:outline-offset-2  focus:outline-offset-2 focus:outline-grey-500 w-100 pl-2 pt-1 px-10 w-77"
									/>
									{touched.birthDate && errors.birthDate && (
										<p error id="standard-weight-helper-text-user_id-login">
											{errors.birthDate}
										</p>
									)}
								</div>
							</div>

							<input
								type="text"
								placeholder="Profession"
								name="profession"
								id="profession"
								onBlur={handleBlur}
								onChange={handleChange}
								className="input-text rounded-lg hover:outline-offset-2  focus:outline-offset-2 focus:outline-grey-500 w-100 pl-2 pt-1 px-10 w-77"
							/>
							{touched.profession && errors.profession && (
								<p error id="standard-weight-helper-text-user_id-login">
									{errors.profession}
								</p>
							)}
							<input
								type="password"
								placeholder="Password"
								name="password"
								id="password"
								onBlur={handleBlur}
								onChange={handleChange}
								className="input-text rounded-lg hover:outline-offset-2  focus:outline-offset-2 focus:outline-grey-500 w-100 pl-2 pt-1 px-10 w-77"
							/>
							{touched.password && errors.password && (
								<p error id="standard-weight-helper-text-user_id-login">
									{errors.password}
								</p>
							)}
							<input
								type="file"
								placeholder="File"
								name="profileImage"
								title="Profile Image"
								onBlur={handleBlur}
								onChange={handleChange}
								className="input-file rounded-lg hover:outline-offset-2  focus:outline-offset-2 focus:outline-grey-500 w-100 pl-2 pt-1 px-10 w-77"
							/>
							{touched.profileImage && errors.profileImage && (
								<p error id="standard-weight-helper-text-user_id-login">
									{errors.profileImage}
								</p>
							)}
							<input
								type="submit"
								disabled={isSubmitting}
								value="Register"
								className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-orange-400 bg-opacity-100 drop-shadow-5xl hover:text-white  hover:scale-100  "
							/>
							<p className="text-white text-sm">
								Already Registered?{" "}
								<Link to={`/login`}>
									<b className="hover:text-orange-400">Sign in Now!</b>
								</Link>
							</p>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
}
