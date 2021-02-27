const query = require("../services/db/db-connection");
const { multipleColumnSet } = require("../utils/common.utils");

class BucketModel {
  tableName = "bucket";

  find = async (params = {}) => {
    // let sql = `SELECT * FROM ${this.tableName} WHERE uuid = '${params.id}'`;
    let sql = `SELECT * FROM bucket 
        INNER JOIN collection_bucket on bucket.bucket_id 
        WHERE bucket.uuid = "${params.id}"
      `;

    console.log("find SQL QUERY", sql);

    const results = await query(sql);

    // group buckets by bucket
    // const buckets = results.filter((bucket) => {
    // })
    let buckets = results.reduce((r, a) => {
      console.log("a", a);
      console.log("r", r);
      r[a.bucket_id] = [...(r[a.bucket_id] || []), a];
      return r;
    }, {});
    console.log("group", buckets);

    return buckets;
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
