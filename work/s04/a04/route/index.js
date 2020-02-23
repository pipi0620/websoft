/**
 * @Lingjia Chen
 */

"use strict";

const express = require("express");
const router  = express.Router();

// Add a route for the path /
router.get("/", (req, res) => {
    res.send("Hello World");
});

// Add a route for the path /about
router.get("/about", (req, res) => {
    res.send("About something");
});

// Add a route for the path /lotto
router.get("/lotto", (req, res) => {
    let Lotto = require("./lotto.js");

// Prepare a lotto hand
    let hand = [];

// roll lotto once
    for (let i=0; i<7; i++) {
        hand[i] = new Lotto();
        hand[i].roll();
    }
    res.send(hand);
});

module.exports = router;