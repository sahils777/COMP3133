const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, minlength: 4 },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Invalid email format"],
  },
  address: {
    street: { type: String, required: true },
    suite: { type: String },
    city: {
      type: String,
      required: true,
      validate: [/^[a-zA-Z\s]+$/, "City name must contain only letters and spaces"],
    },
    zipcode: {
      type: String,
      required: true,
      validate: [/^\d{5}-\d{4}$/, "Invalid zip code format (must be 12345-1234)"],
    },
    geo: {
      lat: { type: String, required: true },
      lng: { type: String, required: true },
    },
  },
  phone: {
    type: String,
    required: true,
    validate: [/^1-\d{3}-\d{3}-\d{4}$/, "Invalid phone format (must be 1-123-123-1234)"],
  },
  website: {
    type: String,
    required: true,
    validate: [(val) => validator.isURL(val, { protocols: ["http", "https"] }), "Invalid URL format"],
  },
  company: {
    name: { type: String, required: true },
    catchPhrase: { type: String },
    bs: { type: String },
  },
}, { collection: "users" });

module.exports = mongoose.model("User", UserSchema);
