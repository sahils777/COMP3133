const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Restaurant = require("../models/Restaurant");

// 1. Get all restaurants
router.get("/", async (req, res) => {
  try {
    const db = mongoose.connection.db;
    const restaurants = await db.collection("Restaurants").find({}).toArray();
    console.log("Direct MongoDB Query Result:", restaurants);
    res.json(restaurants);
  } catch (err) {
    console.error("Error in GET /restaurants:", err);
    res.status(500).json({ error: err.message });
  }
});



// 2. Get restaurants by cuisine
router.get("/cuisine/:cuisine", async (req, res) => {
  try {
    const { cuisine } = req.params;
    const restaurants = await Restaurant.find({ cuisine });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Get restaurants sorted by restaurant_id
router.get("/sorted", async (req, res) => {
  try {
    const { sortBy } = req.query;
    const sortOrder = sortBy === "DESC" ? -1 : 1;
    const restaurants = await Restaurant.find({}, { _id: 1, cuisine: 1, name: 1, city: 1, restaurant_id: 1 }).sort({ restaurant_id: sortOrder });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Get restaurants where cuisine is 'Delicatessen' and city is NOT Brooklyn
router.get("/Delicatessen", async (req, res) => {
  try {
    const restaurants = await Restaurant.find(
      { cuisine: "Delicatessen", city: { $ne: "Brooklyn" } },
      { _id: 0, cuisine: 1, name: 1, city: 1 }
    ).sort({ name: 1 });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
