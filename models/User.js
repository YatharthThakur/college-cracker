  const mongoose = require("mongoose");
// defining schema (schema is a structure of the  document)
// "user" is a collection name
const UserModel = mongoose.model("user", {
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = UserModel;