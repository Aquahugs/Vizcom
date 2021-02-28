const express = require("express");
const router = express.Router();
const bucketController = require("../controllers/bucket.controller");
const checkIfAuthenticated = require("../middleware/auth.middleware");
const awaitHandlerFactory = require("../middleware/awaitHandlerFactory.middleware");

router.get(
  "/:id/get/all",
  // checkIfAuthenticated,
  awaitHandlerFactory(bucketController.getBuckets)
); // localhost:3000/api/v1/user
router.post("/create", awaitHandlerFactory(bucketController.createBucket)); // localhost:3000/api/v1/users
router.post("/add", awaitHandlerFactory(bucketController.addToBucket)); // localhost:3000/api/v1/users
router.delete(
  "/id/:id",
  // checkIfAuthenticated,
  awaitHandlerFactory(bucketController.deleteBucket)
); // localhost:3000/api/v1/user/id/1

module.exports = router;
