const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const checkIfAuthenticated = require("../middleware/auth.middleware");
const awaitHandlerFactory = require("../middleware/awaitHandlerFactory.middleware");

const {
  createUserSchema,
  updateUserSchema,
  validateLogin,
} = require("../middleware/validators/userValidator.middleware");

router.get(
  "/",
  // checkIfAuthenticated,
  awaitHandlerFactory(userController.getAllUsers)
); // localhost:3000/api/v1/users
router.get(
  "/id/:id",
  // checkIfAuthenticated,
  awaitHandlerFactory(userController.getUserById)
); // localhost:3000/api/v1/users/id/1
router.get(
  "/username/:username",
  // checkIfAuthenticated,
  awaitHandlerFactory(userController.getUserByuserName)
); // localhost:3000/api/v1/users/usersname/julia
router.get(
  "/whoami",
  // checkIfAuthenticated,
  awaitHandlerFactory(userController.getCurrentUser)
); // localhost:3000/api/v1/users/whoami
router.post(
  "/",
  createUserSchema,
  awaitHandlerFactory(userController.createUser)
); // localhost:3000/api/v1/users
router.patch(
  "/id/:id",
  // checkIfAuthenticated,
  updateUserSchema,
  awaitHandlerFactory(userController.updateUser)
); // localhost:3000/api/v1/users/id/1 , using patch for partial update
router.delete(
  "/id/:id",
  // checkIfAuthenticated,
  awaitHandlerFactory(userController.deleteUser)
); // localhost:3000/api/v1/users/id/1

module.exports = router;
