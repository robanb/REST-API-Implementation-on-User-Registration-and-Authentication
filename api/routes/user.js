const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

// User Registeration Route
router.post("/signup", UserController.user_signup);

// User Authentication Route
router.post("/login", UserController.user_login);

// Get User's Details
router.get("/:userID", UserController.user_details);

// User Deletion Route
router.delete("/:userID", UserController.user_delete);
