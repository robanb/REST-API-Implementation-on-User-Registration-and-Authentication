import axios from "axios";
import Config from "../config";

// User Login
const login = async ({ credietial }) => {
	console.log(credietial);
	return await axios.post(`${Config.API_KEY}/login`, credietial);
};

// User Registeration
const registration = async (formData) => {
	return await axios.post(`{Config.API_KEY}/signup`, formData);
};

//Listing uaser Profile details
const listData = async ({ email }) => {
	return await axios.get(`${Config.API_KEY}`, email);
};

// Update user Profile details
const updateData = async ({ ...formData }) => {
	return await axios.patch(`${Config.API_KEY}`, formData);
};

// Delete user
const deleteData = async ({ id }) => {
	return await axios.delete(`${Config.API_KEY}`, id);
};

export { login, registration, listData, updateData, deleteData };
