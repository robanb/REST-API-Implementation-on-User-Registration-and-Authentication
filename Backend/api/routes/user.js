const express = require("express");
const router = express.Router();
const multer = require("multer");
const UserController = require("../controllers/user");
const checkToken = require("../middleware/check-auth");

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
const fileFilter = (req, file, cb) => {
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
	upload.single("profileImage"),
	UserController.user_signup
);

// User Authentication Route
router.post("/login", UserController.user_login);

// Get User's Details: Allow only the loggedin user ro get his/her details
router.get("/:userID", checkToken, UserController.user_details);

// Update User's Details: Allow only the loggedin user ro Edit his/her details
router.patch("/:userID", checkToken, UserController.update_user);

// User Deletion Route: allow only the loggedin user to delete his/her account
router.delete("/:userID", checkToken, UserController.user_delete);

module.exports = router;
