const query = require("../services/db/db-connection");
const { multipleColumnSet } = require("../utils/common.utils");

class CollectionModel {
  tableName = "collection_image";

  find = async (params = {}) => {
    // let sql = `SELECT * FROM ${this.tableName} WHERE uuid = '${params.id}'`;
    let sql = `SELECT 
                collection_image_id, 
                collected_date, 
                generated_image.image_uri,
                generated_image.generated_image_id,
                collection_image.user_uploaded_image_id
              FROM collection_image
              INNER JOIN generated_image
              ON collection_image.generated_image_id=generated_image.generated_image_id
              WHERE collection_image.uuid = '${params.id}'
              UNION
              SELECT 
                collection_image_id, 
                collected_date, 
                user_uploaded_image.image_uri,
                collection_image.generated_image_id,
                user_uploaded_image.user_uploaded_image_id
              FROM collection_image
              INNER JOIN user_uploaded_image
              ON collection_image.user_uploaded_image_id = user_uploaded_image.user_uploaded_image_id
              WHERE collection_image.uuid = '${params.id}'`;

    console.log("find SQL QUERY", sql);
    return await query(sql);
  };

  findOne = async (params) => {
    const sql = `SELECT * FROM ${this.tableName}
        WHERE uuid = '${params.id}'`;
    console.log(sql);
    const result = await query(sql);

    // return back the first row (user)
    return result[0];
  };

  insert = async (params) => {
    console.log("the params", params);
    const { values } = multipleColumnSet(params);

    const sql = `INSERT INTO ${this.tableName}
        (uuid, generated_image_id, user_uploaded_image_id) VALUES (?,?,?)`;

    const result = await query(sql, values);
    console.log("the params", result);

    const affectedRows = result ? result.affectedRows : 0;

    return affectedRows;
  };

  delete = async (id) => {
    const sql = `DELETE FROM ${this.tableName}
        WHERE id = ?`;
    const result = await query(sql, [id]);
    const affectedRows = result ? result.affectedRows : 0;

    return affectedRows;
  };
}

module.exports = new CollectionModel();
