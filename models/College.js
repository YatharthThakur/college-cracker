const mongoose = require("mongoose");

const CollegeModel = mongoose.model("college", {
  name: { type: String, required: true },
  branch: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: String, required: true },
  createdBy: { type: mongoose.Types.ObjectId,required: true }
});

module.exports = CollegeModel;