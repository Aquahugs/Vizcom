// const mysql = require("mysql2");

// const dbConnection = mysql.createConnection({
//   host: "http://159.89.132.249:8000/",
//   user: "root",
//   password: "jtaylo8994",
//   database: "designerspen",
//   port: 3306,
// });

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: "localhost",
//   user: "root",
//   password: "RossKadoSC2!",
//   database: "designerspen",
//   port: 3306,
// });

// let vizcomDb = {};

// vizcomDb.all = () => {
//   return new Promise((resolve, reject) => {
//     pool.query("SELECT * FROM designerspen.user", (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       console.log(results);
//       return resolve(results);
//     });
//   });
// };

// module.exports = vizcomDb;
