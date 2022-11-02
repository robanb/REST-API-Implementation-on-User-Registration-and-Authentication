const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Importing the routes to shorten and use in middleware
const UserRoutes = require("./api/routes/user");

// middleware to log incoming request
app.use(morgan("dev"));

// parse incoming request with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: false }));

// extract json data
app.use(bodyParser.json());

// Adjust the Header payload to prevent CORS(Cross-Origin Resourse Sharing) error
app.use((req, res, next) => {
	res.header("Allow-Control-Allow_Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);

	// Checking for allowed http methods
	if (req.method === "OPTIONS") {
		res.header(
			"Access-Control-Allowed-Methods",
			"PUT, POST, PATCH, DELETE, GET"
		);
		return res.status(200).json({});
	}
	next();
});

// Setting up middleware
app.use("/user", UserRoutes);


module.exports = app;
