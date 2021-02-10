const express = require("express"),
  app = express(),
  { createConnection } = require("mysql"),
  { join } = require("path"),
  ejsMate = require("ejs-mate"),
  bodyParser = require("body-parser");

app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "th20o5m94",
  database: "join_us",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connection is success on join_us database");
});

// GET
app.get("/", (req, res, next) => {
  const q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, (err, results, field) => {
    if (err) throw err;
    const count = results[0].count;
    console.log(`the solution of query is`, count);
    res.render("homepage", { count });
  });
});

// POST
app.post("/register", (err, req, res, next) => {
  const { email } = req.body;

  const q = "INSERT INTO users SET ?";

  connection.query(q, { email }, (err, results, field) => {
    if (err) throw err;

    console.log(results);
    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log("this is port 3000");
});
