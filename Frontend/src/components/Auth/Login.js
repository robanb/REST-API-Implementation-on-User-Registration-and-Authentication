import React from "react";
import { useContext, useState } from "react";
import { Formik } from "formik";
import logo from "../../assets/logo.png";
import Tilt from "react-parallax-tilt";
import * as Yup from "yup";

import useScriptRef from "../../hooks/useScriptRef";
import { login } from "../../accessApi/userApi";
import { useNavigate } from "react-router";
import AuthContext from "../../store/auth-context";
import { Link } from "react-router-dom";

export default function Login({ ...others }) {
	const scriptedRef = useScriptRef();
	const navigate = useNavigate();
	const { setAuth } = useContext(AuthContext);

	const userlogin = (email, password) => {
		const crediential = { email, password };
		login(crediential).then((response) => {
			if (!response.status === 200) throw new Error(response.status);
			else {
				setAuth(response["data"].access_token);
				navigate("/");
			}
		});
	};

	return (
		<div className="h-screen w-screen overflow-hidden flex justify-center items-center from-gray-800 via-teal-900 to-gray-800 bg-gradient-to-r ">
			{/* <Tilt> */}
			<div className="container h-100 w-96 bg-opacity-60 bg-gray-900 rounded-2xl shadow-5xl hover:shadow-violet-900">
				{/* Register / Login */}
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
						password: Yup.string().max(255).required("Password is required"),
					})}
					onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
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
							className="h-full flex flex-col space-y-4 items-center pb-5"
							noValidate
							onSubmit={handleSubmit}
							{...others}
						>
							<div className="h-24 w-24 relative animate-pulse mt-4">
								<img src={logo} />
							</div>
							<h3 className="text-white font-poppins text-2xl tracking-widest mt-8 mb-3">
								User Login
							</h3>
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
								type="Submit"
								value="login"
								disabled={isSubmitting}
								className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-orange-400 bg-opacity-100 drop-shadow-5xl hover:text-white  hover:scale-100  "
							/>
							<p className="text-white text-sm">
								No Account?{" "}
								<Link to={`/register`}>
									<b className="hover:text-orange-400">Register Now!</b>
								</Link>
							</p>
						</form>
					)}
				</Formik>
			</div>
			{/* </Tilt> */}
		</div>
	);
}
