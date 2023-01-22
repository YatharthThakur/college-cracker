// // Express server
// // Step1: import express
// const { json } = require('express');
// const express = require('express');
// const path = require("path");
// // Step2: make a object out of it
// const app = express();

// // Step 3: import mongoose and create database
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/users');

// // Api body can pass everything in JSON format
// app.use(express.json());

// // Step 4: 
// const userRoutes = require("./routes/userRouter");
// const collegeRoutes = require("./routes/collegeRoutes")
// app.use("/api/user",userRoutes);
// app.use("/api/college",collegeRoutes);
// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build", "index.html"));
//   });

// // listen on port 5000
// app.listen(5000, ()=>{
//     console.log("Server is listing on port 5000");
// })


const express = require("express");
const path = require("path");

const app = express();
const userRoutes = require("./routes/userRouter");
const collegeRoutes = require("./routes/collegeRoutes");
const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
// mongoose.connect('mongodb://127.0.0.1:27017/users');
mongoose.connect('mongodb+srv://Yeju:Yeju@cluster0.t9jkhs6.mongodb.net/?retryWrites=true&w=majority');
app.use(express.static(path.join(__dirname, "client/build")));

app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/college", collegeRoutes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is listening on port 5000");
});