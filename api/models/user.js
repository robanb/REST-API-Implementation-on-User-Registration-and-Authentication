const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	Name: { type: String, required: true },
	Email: {
		type: String,
		required: true,
		unique: true,
		match:
			/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
	},
	BirthDate: { type: Date, required: true },
	ContacNumber: { type: Number, required: true },
	Profession: { type: String },
	Married: { type: Boolean, required: true },
	Image: { type: String, required: true },
	Password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
