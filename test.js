const { internet } = require("faker");
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

// CREATE-insert the users
// const c = "INSERT INTO users (email) VALUES ('rusty_the_dog@gmail.com')";

// connection.query(c, (error, results, fields) => {
//   if (error) throw error;
//   console.log(results);
// });

const person = { email: internet.email() };

const c = "INSERT INTO users SET ?";

connection.query(c, person, (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

// const q = "SELECT 1+5 AS answer";
// connection.query(q, (error, results, fields) => {
//   if (error) throw error;

//   console.log("the solution is: ", results[0].answer);
// });

// const q = "SELECT CURTIME() AS time, CURDATE() AS date, NOW() AS now";
// connection.query(q, (error, results, fields) => {
//   if (error) throw error;
//   const { time, date, now } = results[0];
//   console.log("the solution is: ", time);
//   console.log("the solution is: ", date);
//   console.log("the solution is: ", now);
// });

connection.end();
