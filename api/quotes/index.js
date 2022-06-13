const { Router } = require("express");
const { getAllquotes } = require("./quotes.controller");

const router = Router();

router.get("/", getAllquotes);

module.exports = router;
