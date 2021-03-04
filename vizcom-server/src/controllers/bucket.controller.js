const BucketModel = require("../models/bucket.model");
const HttpException = require("../utils/HttpException.utils");
const { validationResult } = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();

class BucketController {
  getBuckets = async (req, res, next) => {
    let bucketList = await BucketModel.find({ id: req.params.id });
    if (!bucketList.length) {
      throw new HttpException(404, "No buckets exists");
    }

    res.send(bucketList);
  };

  // getBucket = async (req, res, next) => {
  //   let bucket = await BucketModel.findOne(req.body);
  //   if (!bucket) {
  //     throw new HttpException(404, "No bucket exists");
  //   }
  //   res.send(bucketList);
  // };

  createBucket = async (req, res, next) => {
    const result = await BucketModel.create(req.body);

    if (!result) {
      throw new HttpException(500, "Something went wrong saving image");
    }

    const bucketList = await BucketModel.find({ id: req.body.uuid });

    if (!bucketList) {
      throw new HttpException(
        500,
        "Something went wrong fetching updated bucket list"
      );
    }

    res.send(bucketList);
  };

  addToBucket = async (req, res, next) => {
    const result = await BucketModel.insert(req.body);
  };

  deleteBucket = async (req, res, next) => {
    const result = await BucketModel.insert(req.body);
  };
}
module.exports = new BucketController();
