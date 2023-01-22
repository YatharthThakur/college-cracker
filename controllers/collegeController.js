const express = require("express")

// 
const College = require("../models/College");

// const getColleges = async (req, res) =>{

//   const results = await College.find({ createdBy: req.query.createdBy });
//   res.status(200).send(results);
// }
const getColleges = async (req, res) => {
  const results = await College.find({ createdBy: req.query.createdBy });
  console.log(req.query)
  res.status(200).send(results);
};

const getSpecificColleges = async (req, res) =>{
    const collegeID = req.query.id;
    console.log(collegeID)
    const results = await College.findOne({ _id: collegeID });
    res.status(200).send(results);
}

const createCollege = async (req, res) =>{
    const college = new College({
        name: req.body.name,
        branch: req.body.branch,
        location: req.body.location,
        status: req.body.status,
        createdBy: req.body.createdBy,
        date: req.body.date
    });
    await college.save().then(()=>console.log("College added"));
    res.status(200).send("Colleges added in the db correctly");
}
const updateColleges = (req, res) => {
    const collegeID = req.query.id;
  
    College.updateOne({ _id: collegeID }, { $set: req.body })
      .then(() => console.log("College updated"))
      .catch((err) => {
        console.log(err);
      });
  
    res.status(200).send("College updated in the database correctly");
  };
const deleteCollege = (req, res) => {
    const collegeID = req.query.id;
    console.log(req.query.id);
    College.deleteOne({ _id: collegeID })
      .then(() => console.log("College deleted"))
      .catch((err) => {
        console.log(err);
      });
  
    res.status(200).send("College deleted in the database correctly");
};

module.exports = {getColleges,getSpecificColleges,createCollege,updateColleges,deleteCollege}