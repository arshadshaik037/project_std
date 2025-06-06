const express = require("express");
const morgon = require("morgan");
const app = express();
const userModel = require("./models/user");
const dbConnection = require("./config/db");
app.use(morgon("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.post("/form-data", (req, res) => {
  console.log(req.body);
  res.send("data received");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const {
    username,
    email,
    dob,
    gender,
    address,
    school,
    city,
    state,
    pincode,
    Course,
  } = req.body;
  await userModel.create({
    username: username,
    email: email,
    dob: dob,
    gender: gender,
    address: address,
    school: school,
    city: city,
    state: state,
    pincode: pincode,
    Course: Course,
  });
  res.send("user registered successfully");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
