const UserModel = require("../models/user.model");
const HttpException = require("../utils/HttpException.utils");
const { validationResult } = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();

/******************************************************************************
 *                              User Controller
 ******************************************************************************/
class UserController {
  getAllUsers = async (req, res, next) => {
    let userList = await UserModel.find();
    if (!userList.length) {
      throw new HttpException(404, "Users not found");
    }
    res.send(userList);
  };

  getUserById = async (req, res, next) => {
    console.log("PARAMS", req.params);
    const user = await UserModel.findOne({ id: req.params.id });
    if (!user) {
      throw new HttpException(404, "User not found");
    }

    res.send(user);
  };

  createUser = async (req, res, next) => {
    // this.checkValidation(req);
    const result = await UserModel.create(req.body);

    if (!result) {
      throw new HttpException(500, "Something went wrong creating user");
    }

    res.status(201).send("User was created!");
  };

  updateUser = async (req, res, next) => {
    const { ...restOfUpdates } = req.body;

    // do the update query and get the result
    // it can be partial edit
    const result = await UserModel.update(restOfUpdates, req.params.id);

    if (!result) {
      throw new HttpException(404, "Something went wrong");
    }

    const { affectedRows, changedRows, info } = result;

    const message = !affectedRows
      ? "User not found"
      : affectedRows && changedRows
      ? "User updated successfully"
      : "Update failed";

    res.send({ message, info });
  };

  deleteUser = async (req, res, next) => {
    const result = await UserModel.delete(req.params.id);
    if (!result) {
      throw new HttpException(404, "User not found");
    }
    res.send("User has been deleted");
  };

  // checkValidation = (req) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     throw new HttpException(400, "Validation faild", errors);
  //   }
  // };
}

/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new UserController();
