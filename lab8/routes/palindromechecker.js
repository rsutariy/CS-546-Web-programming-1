const express = require('express');
const router = express.Router();
const data = require("../data");
const palindromechecker = data.palindromechecker;

router.get("/", (req, res) => {
    res.render("palindromechecker/static", {});
});

router.get("/server", (req, res) => {
    res.render("palindromechecker/server", {});
});

/*router.post("/server", (req, res) => {
    let string = req.body.string;
   
    let result;
    result = palindromechecker.checkpalindrome(string);
    res.render("calculator/server", { result: result });
});*/

module.exports = router;