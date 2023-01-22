const express = require("express");
const router = express.Router();

const {
    getColleges,
    getSpecificColleges,
    updateColleges,
    createCollege,
    deleteCollege
} = require("../controllers/collegeController");

router.get("/colleges", getColleges); // read
router.get("/colleges-college", getSpecificColleges); //read
router.post("/create-college", createCollege); // create
router.put("/update-college", updateColleges); //update
router.delete("/delete-college", deleteCollege); // delete

module.exports = router;