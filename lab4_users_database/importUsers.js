const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User");
const usersData = require("./UsersData.json");

console.log("Raw JSON Data:", usersData);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("MongoDB Connected. Importing Users...");

    console.log("First User Data:", usersData[0]);

    await User.insertMany(usersData);
    console.log("Users Imported Successfully!");
    mongoose.connection.close();
  })
  .catch(err => console.error("MongoDB Connection Error:", err));
