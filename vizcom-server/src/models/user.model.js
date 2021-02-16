const query = require("../services/db/db-connection");
const { multipleColumnSet } = require("../utils/common.utils");
class UserModel {
  tableName = "user";

  find = async (params = {}) => {
    let sql = `SELECT * FROM ${this.tableName}`;

    if (!Object.keys(params).length) {
      return await query(sql);
    }

    const { columnSet, values } = multipleColumnSet(params);
    sql += ` WHERE ${columnSet}`;
    console.log("find SQL QUERY", sql);
    return await query(sql, [...values]);
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

    const sql = `INSERT INTO ${this.tableName}
        (uuid, display_name, image_uri, email, first_name, last_name) VALUES (?,?,?,?,?,?)`;
    console.log(sql, values);
    const result = await query(sql, values);
    const affectedRows = result ? result.affectedRows : 0;

    return affectedRows;
  };

  update = async (params, id) => {
    const { columnSet, values } = multipleColumnSet(params);
    console.log("YOOO", columnSet, values, id);

    const sql = `UPDATE user SET ${columnSet} WHERE uuid = ?`;
    console.log(sql, values, id);

    const result = await query(sql, [...values, id]);

    return result;
  };

  delete = async (id) => {
    const sql = `DELETE FROM ${this.tableName}
        WHERE uuid = ?`;
    const result = await query(sql, [id]);
    const affectedRows = result ? result.affectedRows : 0;

    return affectedRows;
  };
}

module.exports = new UserModel();
