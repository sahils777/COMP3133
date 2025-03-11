const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/", (req, res) => {
    console.log("Received Data:", req.body);
    res.send("POST received!");
});

module.exports = router;
