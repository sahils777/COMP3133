const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("MongoDB Connected. Fetching data...");
    const db = mongoose.connection.db;

    // Check available collections
    const collections = await db.listCollections().toArray();
    console.log("Collections in Database:", collections.map(col => col.name));

    // Fetch data directly from MongoDB
    const data = await db.collection("Restaurants").find({}).toArray();
    console.log("Fetched Data:", data);

    mongoose.connection.close();
  })
  .catch(err => console.error("MongoDB Connection Error:", err));
