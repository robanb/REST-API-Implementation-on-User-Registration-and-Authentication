const express = require("express");
const router = express.Router();
const multer = require("multer");
const UserController = require("../controllers/user");

// ProfileImage Storage
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploads");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + file.originalname);
	},
});

// Filtering the ProfileImage file
const fileFilter = (req, res, cb) => {
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
		cb(null, true);
	} else {
		cb(null, flase);
	}
};

// Process file upload via multer and allocate file size limit (to 5 MB)
const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	fileFilter: fileFilter,
});

// User Registeration Route
router.post(
	"/signup",
	upload.single("ProfileImage"),
	UserController.user_signup
);

// User Authentication Route
router.post("/login", UserController.user_login);

// Get User's Details
router.get("/:userID", UserController.user_details);

// User Deletion Route
router.delete("/:userID", UserController.user_delete);
