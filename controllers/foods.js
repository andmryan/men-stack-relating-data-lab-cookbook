// controllers/foods.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// router logic will go here - will be built later on in the lab
router.get('/', (req, res) => {
    res.render('foods/index.ejs');
});

// route to get to and render the new page from a logged in user
router.get("/users/:userId/foods/new", (req, res) => {
    // render the page
    res.render("foods/new.ejs");
});

module.exports = router;