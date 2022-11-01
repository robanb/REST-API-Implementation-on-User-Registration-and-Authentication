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
	birthdate: { type: Date, required: true },
	Contac_Number: { type: Number, required: true },
	profession: { type: String },
	Married: { type: Boolean, required: true },
	Image: { type: String, required: true },
	password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
