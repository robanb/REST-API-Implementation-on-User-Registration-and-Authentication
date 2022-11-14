import React from "react";
import { useContext, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import * as Flowbite from "flowbite-react";

import useScriptRef from "../../hooks/useScriptRef";
import { login } from "../../accessApi/userApi";
import { useNavigate } from "react-router";
import AuthContext from "../../store/auth-context";
import { Link } from "react-router-dom";

export default function OldLogin({ ...others }) {
	const scriptedRef = useScriptRef();
	const navigate = useNavigate();

	const { setAuth } = useContext(AuthContext);
	const [error, setError] = useState();

	const userlogin = (email, password) => {
		const crediential = { email, password };
		console.log(crediential);
		login(crediential).then((response) => {
			if (!response.status === 200){
				console.log(response.status.message)
				
				throw new Error(response.status);
			} 
			else {
				setAuth(response.data.token);
				localStorage.setItem('userEmail',response.data.userEmail);
		
				navigate("/");
			}
		},error=>{
			setError(error.response.data.message);
			console.log(error.response.data.message				)
		});
	};

	return (
		<div className="h-screen w-screen overflow-hidden flex justify-center items-center from-gray-800 via-teal-900 to-gray-800 bg-gradient-to-r ">
			<div className="container h-100 w-96 bg-opacity-60 bg-gray-900 rounded-2xl shadow-5xl hover:shadow-violet-900">
				<div className="max-w-sm">
					<Flowbite.Card>
						<Formik
							initialValues={{
								email: "",
								password: "",
								submit: null,
							}}
							validationSchema={Yup.object().shape({
								email: Yup.string()
									.email("Must be a valid email")
									.max(255)
									.required("Email is required"),
								password: Yup.string()
									.max(255)
									.required("Password is required"),
							})}
							onSubmit={async (
								values,
								{ setErrors, setStatus, setSubmitting }
							) => {
								try {
									if (scriptedRef.current) {
										setStatus({ success: true });
										userlogin(values.email, values.password);
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
								handleChange,
								handleSubmit,
								isSubmitting,
								touched,
								values,
							}) => (
								<form
									className="flex flex-col gap-4"
									noValidate
									onSubmit={handleSubmit}
								>
									<p >{error}</p>
									<div className="flex flex-col gap-4 text-black items-center font-bold">
										{" "}
										User Login
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
										value="Login"
									>
										Login
									</Flowbite.Button>
									<p className="text-black text-sm">
										No Account?{" "}
										<Link to={`/register`}>
											<b className="hover:text-orange-400">Register Now!</b>
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
