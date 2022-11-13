import axios from "axios";
import Config from "../config";

// User Login
const login = async ({ ...credietial }) => {
	return await axios.post(`${Config.API_KEY}/login`, credietial, {
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "POST",
		},
	});
};

// User Registeration
const registration = async (formData) => {
	return await axios.post(`${Config.API_KEY}/signup`, formData, {
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "POST",
		},
	});
};

//Listing user Profile details
const listData = async ({ email }) => {
	return await axios.get(`${Config.API_KEY}`, email, {
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET",
		},
	});
};

// Update user Profile details
const updateData = async ({ ...formData }) => {
	return await axios.patch(`${Config.API_KEY}`, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "PATCH",
		},
	});
};

// Delete user
const deleteData = async ({ id }) => {
	return await axios.delete(`${Config.API_KEY}`, id, {
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "DELETE",
		},
	});
};

export { login, registration, listData, updateData, deleteData };
