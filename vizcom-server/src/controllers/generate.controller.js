const GenerateModel = require("../models/generate.model");
const HttpException = require("../utils/HttpException.utils");
const { validationResult } = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();

class GenerateController {
  getAllGeneratedImages = async (req, res, next) => {
    const generatedImages = await GenerateModel.find();
    if (!generatedImages.length) {
      throw new HttpException(
        404,
        "something happened retrieving generated images"
      );
    }
    res.send(generatedImages);
  };
}

module.exports = new GenerateController();
