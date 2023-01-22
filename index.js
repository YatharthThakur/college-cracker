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

app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is listening on port 5000");
});