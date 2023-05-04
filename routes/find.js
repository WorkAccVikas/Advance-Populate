const express = require("express");
const router = express.Router();

const {
  Emp1,
  Book1,
  Dept1,
  Teacher1,
  Course1,
  Customer1,
} = require("../models/all");

// Todo : Emp
router.route("/emp1").get(function (req, res) {
  //   res.send("In emp1");
  Emp1.find({}).then((r1) => {
    res.json(r1);
  });
});

// Todo : Book
router.route("/book1").get(function (req, res) {
  //   res.send("In book1");
  Book1.find({}).then((r1) => {
    res.json(r1);
  });
});

// Todo : Dept
router.route("/dept1").get(function (req, res) {
  //   res.send("In dept1");
  Dept1.find({}).then((r1) => {
    res.json(r1);
  });
});

// Todo : Teacher
router.route("/teacher1").get(function (req, res) {
  //   res.send("In teacher1");
  Teacher1.find({}).then((r1) => {
    res.json(r1);
  });
});

// Todo : Course
router.route("/course1").get(function (req, res) {
  //   res.send("In course1");
  Course1.find({}).then((r1) => {
    res.json(r1);
  });
});

// Todo : Customer
router.route("/customer1").get(function (req, res) {
  //   res.send("In customer1");
  Customer1.find({})
    .lean()
    .populate({ path: "empDetails.listOfEmp", model: "Emp1" })
    .populate({
      path: "issuedCourses",
      model: "Course1",
      populate: [
        { path: "issuedBook", model: "Book1" },
        {
          path: "assignedTeacher",
          model: "Teacher1",
          populate: {
            path: "department",
            options: { sort: { did: -1 } },
            model: "Dept1",
          },
        },
      ],
    })
    .then((r1) => {
      res.json(r1);
    });
});

module.exports = router;
