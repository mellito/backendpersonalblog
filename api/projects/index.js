const { Router } = require("express");
const { getAllprojects } = require("./project.controller");

const router = Router();

router.get("/", getAllprojects);

module.exports = router;
