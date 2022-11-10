import React from "react";
import { Routes, Route, useRoutes, BrowserRouter } from "react-router-dom";
// import AuthPage from "./components/Auth/AuthPage";
// import Navigation from "./components/Navigation";
// import Register from "./components/Auth/Register";
// import Login from "./components/Auth/Login";
// import Page from "./components/Page";
// import ProfileCard from "./components/ProfileCard";
import { AuthContextProvider } from "./store/auth-context";
import routes from "./routes";

function App() {
	const content = useRoutes(routes);

	return <AuthContextProvider> {content} </AuthContextProvider>;
}

export default App;
