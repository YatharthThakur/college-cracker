const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    const { name, email, password, cnf_password } = req.body;
  
    if (password !== cnf_password) {
      return res.status(500).send("The two passwords don't match");
    }
  
    const user = await UserModel.findOne({ email: email });
  
    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
  
      const newUser = new UserModel({
        name: name,
        email: email,
        password: hashPassword,
      });
      const savedUser = await newUser.save();
      const token = jwt.sign({ userID: savedUser._id }, "randomsecret");
      return res.status(200).json({
        user: newUser,
        token,
      });
    } else {
      return res.status(500).send("User email already exists");
    }
  };

  const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
  
    if (!user) {
      return res.status(400).send("User does not exist");
    }
  
    const isPasswordMatchingFromDB = await bcrypt.compare(
      password,
      user.password
    );
  
    if (isPasswordMatchingFromDB) {
      const token = jwt.sign({ userID: user._id }, "randomsecret");
      return res.status(200).json({ user, token });
    }
  
    res
      .status(401)
      .send("Incorrect login credentials i.e. userHandle/email or password!");
  };

  const updateUser = (req, res) => {
    const userID = req.query.id;
  
    UserModel.updateOne({ _id: userID }, { $set: req.body })
      .then(() => console.log("User updated"))
      .catch((err) => {
        console.log(err);
      });
  
    res.status(200).send("User updated in the database correctly");
  };

module.exports = {
    registerUser,
    loginUser,
    updateUser
}