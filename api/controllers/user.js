require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// User registeration controller
exports.user_signup = (req, res, next) => {
	User.findOne({ Email: req.body.Email })
		.exec()
		.then((user) => {
			if (user) {
				return res.status(409).json({
					// status(404): indicating a conflict
					message: "User Already Exist!",
				});
			} else {
				bcrypt.hash(req.body.Password, 10, (err, hash) => {
					if (err) {
						console.log(err + "Error Here");
						return res.status(500).json({
							error: err,
						});
					} else {
						const user = new User({
							_id: new mongoose.Types.ObjectId(),
							Name: req.body.Name,
							Email: req.body.Email,
							BirthDate: req.body.BirthDate,
							ContacNumber: req.body.ContacNumber,
							Profession: req.body.Profession,
							Married: req.body.Married,
							ProfileImage: req.file.path,
							Password: hash,
						});
						user
							.save()
							.then((result) => {
								res.status(201).json({
									message: "User Registeration Successful!",
								});
							})
							.catch((err) => {
								console.log(err + "Error Here");
								res.status(500).json({
									error: err,
								});
							});
					}
				});
			}
		});
};

// User Authentication Controller
exports.user_login = (req, res, next) => {
	User.findOne({ Email: req.body.Email })
		.exec()
		.then((user) => {
			if (!user) {
				// 401: Unauthorized
				return res.status(401).json({
					message: "User doesn't exist!",
				});
			}
			bcrypt.compare(req.body.Password, user.Password, (err, result) => {
				if (err) {
					return res.status(401).json({
						message: "Authentication failed!",
					});
				}
				if (result) {
					const token = jwt.sign(
						{
							email: user.Email,
							userID: user._id,
						},
						process.env.JWT_KEY,
						{
							expiresIn: "1h",
						}
					);
					return res.status(200).json({
						message: "Authentication Successful",
						token: token,
					});
				}
				return res.status(401).json({
					message: "Authentication failed!",
				});
			});
		})
		.catch((err) => {
			res.status(500).json({
				error: err,
			});
		});
};

// Get individual user's Detail
exports.user_details = (req, res, next) => {
	const id = req.params.userID;
	User.findById(id)
		.select("Name Email BirthDate ContacNumber Profession Married ProfileImage")
		.exec()
		.then((doc) => {
			if (doc) {
				res.status(200).json({
					user: doc,
				});
			} else {
				res.status(404).json({
					message: "No valid entry found for provided User ID",
				});
			}
		})
		.catch((err) => {
			res.status(500).json({
				error: err,
			});
		});
};

// User Deletion: To allow only the loggedin user to delete his/her account
exports.user_delete = (req, res, next) => {
	User.deleteOne({ _id: req.params.userID })
		.exec()
		.then((result) => {
			res.status(200).json({
				message: "User Deletion Successful",
			});
		})
		.catch((err) => {
			res.status(500).json({
				error: err,
			});
		});
};
