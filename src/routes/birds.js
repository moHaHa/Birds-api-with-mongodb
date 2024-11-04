const express = require("express");
const router = express.Router();
const birdsController = require("../controllers/birdsController");
const validateBird = require("../middlewares/validateBird");

router.get("/", birdsController.getAllBirds);
router.post("/", validateBird, birdsController.createBird);
router.put("/:id", validateBird, birdsController.updateBird);
router.delete("/:id", birdsController.deleteBird);
module.exports = router;
