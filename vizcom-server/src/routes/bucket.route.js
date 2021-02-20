const express = require("express");
const router = express.Router();
const bucketController = require("../controllers/bucket.controller");
const checkIfAuthenticated = require("../middleware/auth.middleware");
const awaitHandlerFactory = require("../middleware/awaitHandlerFactory.middleware");

router.get(
  "/",
  // checkIfAuthenticated,
  awaitHandlerFactory(bucketController.getBucket)
); // localhost:3000/api/v1/user
router.get(
  "/id/:id",
  // checkIfAuthenticated,
  awaitHandlerFactory(userController.getUserById)
); // localhost:3000/api/v1/user/id/1
router.post("/create", awaitHandlerFactory(userController.createUser)); // localhost:3000/api/v1/users
router.patch(
  "/update/id/:id",
  // checkIfAuthenticated,
  // updateUserSchema,
  awaitHandlerFactory(userController.updateUser)
); // localhost:3000/api/v1/user/id/1 , using patch for partial update
router.delete(
  "/id/:id",
  // checkIfAuthenticated,
  awaitHandlerFactory(userController.deleteUser)
); // localhost:3000/api/v1/user/id/1

module.exports = router;
