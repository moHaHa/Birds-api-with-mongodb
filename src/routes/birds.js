const express = require("express");
const router = express.Router();
const validateBird = require("../middlewares/validateBird");
const birdsController = require("../controllers/birdsController");

// TODO : router.get("/:id", birdsController.getAllBirds);
router.post("/", validateBird, birdsController.createBird);
router.put("/:id", validateBird, birdsController.updateBird); // TODO : PATCH
router.delete("/:id", birdsController.deleteBird);
router.get("/", birdsController.getAllBirds);

module.exports = router;
