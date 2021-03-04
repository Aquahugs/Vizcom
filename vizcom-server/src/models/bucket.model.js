const query = require("../services/db/db-connection");
const { multipleColumnSet } = require("../utils/common.utils");

class BucketModel {
  tableName = "bucket";

  find = async (params = {}) => {
    console.log(params.id);

    const getBucketsSql = `select *
        from bucket 
        where uuid = "${params.id}"`;

    const topLevelBuckets = await query(getBucketsSql);

    const getBucketsWithImageSql = `select 
        bucket.bucket_name,
        collection_image.image_uri,
        bucket.create_date,
        bucket.is_public,
        bucket.bucket_id,
        bucket.description,
        collection_image.collection_image_id,
        collection_image.generated_image_id,
        collection_image.user_uploaded_image_id
      FROM bucket
      JOIN collection_bucket 
        ON bucket.bucket_id = collection_bucket.bucket_id
      JOIN collection_image 
        ON collection_image.collection_image_id = collection_bucket.collection_image_id
      WHERE bucket.uuid = "${params.id}"
      `;

    const bucketsWithImages = await query(getBucketsWithImageSql);

    topLevelBuckets.forEach((bucket) => {
      bucket.images = bucketsWithImages
        .map((image) => {
          if (image.bucket_id === bucket.bucket_id) {
            return {
              image_uri: image.image_uri,
              collection_image_id: image.collection_image_id,
              generated_image_id: image.generated_image_id,
              user_uploaded_image_id: image.user_uploaded_image_id,
            };
          }
          return null;
        })
        .filter((el) => el !== null);
    });
    console.log(topLevelBuckets);
    return topLevelBuckets;
  };

  findOne = async (params) => {
    const sql = `SELECT * FROM ${this.tableName}
        WHERE uuid = '${params.id}'`;
    const result = await query(sql);

    // return back the first row (user)
    return result[0];
  };

  create = async (params) => {
    const { values } = multipleColumnSet(params);

    const command = `INSERT INTO bucket
          (bucket_name, description, is_public, uuid)
        VALUES
          (?, ?, ?, ?)`;

    const result = await query(command, values);

    const affectedRows = result ? result.affectedRows : 0;

    return affectedRows;
  };

  insert = async (params) => {
    const { values } = multipleColumnSet(params);

    const sql = `INSERT INTO collection_bucket
        (collection_image_id, bucket_id) 
      VALUES 
        (?,?)`;

    const result = await query(sql, values);

    const affectedRows = result ? result.affectedRows : 0;

    return affectedRows;
  };

  delete = async (id) => {
    const sql = `DELETE FROM bucket
        WHERE bukcet_id = ${id}`;

    const sql2 = `DELETE FROM collection_bucket WHERE bucket_id = ${id}`;

    const result = await query(sql, [id]);

    const affectedRows = result ? result.affectedRows : 0;

    return affectedRows;
  };
}

module.exports = new BucketModel();
