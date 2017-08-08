const express = require('express');
const router = express.Router();
const data = require("../data");
const user = data.user;

router.get("/", (req, res) => {
    res.render("user/login", {});
});

router.get("/private", (req, res) => {
    res.render("/", {});
});

/*router.post("/server", (req, res) => {
    let string = req.body.string;
   
    let result;
    result = palindromechecker.checkpalindrome(string);
    res.render("calculator/server", { result: result });
});*/

module.exports = router;