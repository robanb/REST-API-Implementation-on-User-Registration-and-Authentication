const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: { type: String, required: true },
	email: {
		type: String,
		required: true,
		unique: true,
		match:
			/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
	},
	birthDate: { type: Date, required: true, format: "%Y-%m-%d" },
	contacNumber: { type: Number, required: true },
	profession: { type: String },
	married: { type: String, required: true },
	profileImage: { type: String, required: true },
	password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
