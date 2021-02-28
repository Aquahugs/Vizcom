const query = require("../services/db/db-connection");
const { multipleColumnSet } = require("../utils/common.utils");

class BucketModel {
  tableName = "bucket";

  find = async (params = {}) => {
    console.log("HERERH", params.id);

    let sql = `select 
        bucket.bucket_name,
        collection_image.image_uri,
        bucket.create_date,
        bucket.is_public,
        bucket.bucket_id,
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

    console.log("BUCKET find SQL QUERY", sql);

    const results = await query(sql);

    let buckets = results.reduce((r, a) => {
      const obj = {
        bucket_name: a.bucket_name,
        image_uri: a.image_uri,
        create_date: a.create_date,
        is_public: a.is_public,
        bucket_id: a.bucket_id,
        collection_image_id: a.collection_image_id,
        generated_image_id: a.generated_image_id,
        user_uploaded_image_id: a.user_uploaded_image_id,
      };
      r[a.bucket_id] = [...(r[a.bucket_id] || []), obj];
      return r;
    }, []);

    const filteredBuckets = buckets.filter((el) => {
      return el != null;
    });

    return filteredBuckets;
  };

  findOne = async (params) => {
    const sql = `SELECT * FROM ${this.tableName}
        WHERE uuid = '${params.id}'`;
    console.log(sql);
    const result = await query(sql);

    // return back the first row (user)
    return result[0];
  };

  create = async (params) => {
    const { values } = multipleColumnSet(params);

    const command = `INSERT INTO bucket
          (uuid, bucket_name, is_public)
        VALUES
          (?, ?, ?)`;
    await query(command, values);

    // const query =

    const affectedRows = command ? command.affectedRows : 0;

    return affectedRows;
  };

  insert = async (params) => {
    console.log("the params", params);
    const { values } = multipleColumnSet(params);

    const sql = `INSERT INTO collection_bucket
        (collection_image_id, bucket_id) 
      VALUES 
        (?,?)`;

    const result = await query(sql, values);
    console.log("the params", result);

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
