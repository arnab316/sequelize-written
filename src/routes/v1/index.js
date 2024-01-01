const express = require("express");
const router = express.Router();
const MyController = require("../../controller");
router.get("/home", MyController.getAll);
router.post("/users", MyController.creatUser);
module.exports = router;
