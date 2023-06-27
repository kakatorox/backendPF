const { Pool } = require("pg");
const fs = require("fs");

/*const {
  HOSTDB: host,
  USERDB: user,
  PASSWORDDB: password,
  DATABASEDB: database
} = process.env*/

const opt = {
  user: process.env.USERDB,
  host: process.env.HOSTDB,
  database: process.env.DATABASEDB,
  password: process.env.PASSWORDDB,
  port: process.env.PORTDB,
  //  ssl: {
  //    rejectUnauthorized: false,
  //    ca: fs.readFileSync('.credentials/server-ca.pem').toString(),
  //    key: fs.readFileSync('.credentials/client-key.pem').toString(),
  //    //key: fs.readFileSync('.credentials/postgresql.unprotected.pk8').toString(),
  //    cert: fs.readFileSync('.credentials/client-cert.pem').toString(),
  //  },
};

const pool = new Pool(opt);
/*const pool = new Pool({
    host: localhost,
    user: user,
    password: password,
    databaseName: database,
    allowExitOnIdle: true
});*/


// const pool = new Pool({
//    host: "34.86.205.21",
//    user: "dl-user",
//    password: "dl-store2023",
//    database: "dl-store",
//    allowExitOnIdle: true,
//  });

// const pool = new Pool({
//   host: "152.173.169.147",
//   user: "postgres",
//    password: "PIPEfacb--",
//   database: "MarketDL",
//   allowExitOnIdle: true,
// });


module.exports = pool;
