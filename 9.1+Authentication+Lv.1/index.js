import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "password",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
}); 

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const result = await db.query("SELECT email FROM users WHERE email = $1",[username]);
    if (result.rows===0) {
      await db.query("INSERT INTO users (email,password) values ($1,$2)",[username,password]);
    res.render("secrets.ejs");
    } else {
      console.log("username exist");
      res.redirect("/register");
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const result = await db.query("SELECT password FROM users WHERE email = $1 AND password = $2",[username,password]);
    console.log(result.rows);
    if (result.rows.length===0) {
      console.log("Check your username and password");
    } else {
      res.render("secrets.ejs");
    }
    res.redirect("/login");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
