// const dotenv = require("dotenv");
// dotenv.config();
const mysql2 = require("mysql2");

class DBConnection {
  constructor() {
    // local
    // this.db = mysql2.createPool({
    //   host: "localhost",
    //   user: "root",
    //   password: "RossKadoSC2!",
    //   database: "vizcom",
    // });
    this.db = mysql2.createPool({
      host: "vizcom-test.c9znzk3592xb.us-west-1.rds.amazonaws.com",
      user: "admin",
      password: "RossKadoSC2!",
      database: "vizcom",
    });

    this.checkConnection();
  }

  checkConnection() {
    this.db.getConnection((err, connection) => {
      if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
          console.error("Database connection was closed.");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
          console.error("Database has too many connections.");
        }
        if (err.code === "ECONNREFUSED") {
          console.error("Database connection was refused.");
        }
      }
      if (connection) {
        connection.release();
      }
      return;
    });
  }

  query = async (sql, values) => {
    return new Promise((resolve, reject) => {
      const callback = (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      };
      // execute will internally call prepare and query
      this.db.execute(sql, values, callback);
    }).catch((err) => {
      const mysqlErrorList = Object.keys(HttpStatusCodes);
      // convert mysql errors which in the mysqlErrorList list to http status code
      err.status = mysqlErrorList.includes(err.code)
        ? HttpStatusCodes[err.code]
        : err.status;

      throw err;
    });
  };
}

// like ENUM
const HttpStatusCodes = Object.freeze({
  ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 422,
  ER_DUP_ENTRY: 409,
});

module.exports = new DBConnection().query;
