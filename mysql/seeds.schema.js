const { internet, date } = require("faker");
const { createConnection } = require("mysql");

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "th20o5m94",
  database: "join_us",
});

connection.connect((err) => {
  if (err) {
    console.log("error connection" + err.stack);
    return;
  }
  console.log("connections successful: join_us database");
});

//CREATE- inssert users email and date
// const data = [];

// for (const el of Array(500)) {
//   data.push([internet.email(), date.past()]);
// }

// console.log(data);

// const c_one = "INSERT INTO users (email, created_at) VALUES ?";

// const end_result_one = connection.query(
//   c_one,
//   [data],
//   (error, results, fields) => {
//     if (error) throw error;
//     console.log(results);
//   }
// );

// console.log(end_result_one.sql);

// READ-count the number users
const q = "SELECT COUNT(*) AS total FROM users";

connection.query(q, (error, results, fields) => {
  if (error) throw error;

  console.log(results[0].total);
});

const qOne = "SELECT * FROM users ORDER BY created_at DESC";

connection.query(qOne, (error, results, fields) => {
  if (error) throw error;

  console.log(results);
});

connection.end();
