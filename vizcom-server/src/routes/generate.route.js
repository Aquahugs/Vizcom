const express = require("express");
const router = express.Router();
const generateController = require("../controllers/generate.controller");
const awaitHandlerFactory = require("../middleware/awaitHandlerFactory.middleware");

router.get(
  "/get/all",
  // checkIfAuthenticated,
  awaitHandlerFactory(generateController.getAllGeneratedImages)
); // localhost:3000/api/v1/generate/get/all

module.exports = router;
