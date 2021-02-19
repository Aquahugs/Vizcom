const express = require("express");
const router = express.Router();
const collectionController = require("../controllers/collection.controller");
const checkIfAuthenticated = require("../middleware/auth.middleware");
const awaitHandlerFactory = require("../middleware/awaitHandlerFactory.middleware");

router.get(
  "/id/:id/collection",
  // checkIfAuthenticated,
  awaitHandlerFactory(collectionController.getUserCollection)
); // localhost:3000/api/v1/users/id/1/collection

router.post(
  "/collection",
  awaitHandlerFactory(collectionController.collectImage)
); // localhost:3000/api/v1/users

// router.patch(
//   "/update/id/:id",
//   // checkIfAuthenticated,
//   // updateUserSchema,
//   awaitHandlerFactory(userController.updateUser)
// ); // localhost:3000/api/v1/users/id/1 , using patch for partial update

// router.delete(
//   "/id/:id",
//   // checkIfAuthenticated,
//   awaitHandlerFactory(userController.deleteUser)
// ); // localhost:3000/api/v1/users/id/1

module.exports = router;
