import { Navigate } from "react-router-dom";
import AuthLogin from "./components/Auth/Login";
import AuthRegister from "./components/Auth/Register";
import UserProfile from "./components/ProfileCard";

const routes = [
	// { path: "/", element: <Navigate to="home" /> },
	{ path: "/register", element: <AuthRegister /> },
	{ path: "/profile", element: <UserProfile /> },
	{ path: "/login", element: <AuthLogin /> },
];

export default routes;
