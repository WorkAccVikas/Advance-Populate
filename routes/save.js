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
router.route("/emp1").post(function (req, res) {
  //   res.send("In emp1");
  Emp1.insertMany(req.body).then((r1) => {
    res.json(r1);
  });
});

// Todo : Book
router.route("/book1").post(function (req, res) {
  //   res.send("In book1");
  Book1.insertMany(req.body).then((r1) => {
    res.json(r1);
  });
});

// Todo : Dept
router.route("/dept1").post(function (req, res) {
  //   res.send("In dept1");
  Dept1.insertMany(req.body).then((r1) => {
    res.json(r1);
  });
});

// Todo : Teacher
router.route("/teacher1").post(function (req, res) {
  //   res.send("In teacher1");
  Teacher1.insertMany(req.body).then((r1) => {
    res.json(r1);
  });
});

// Todo : Course
router.route("/course1").post(function (req, res) {
  //   res.send("In course1");
  Course1.insertMany(req.body).then((r1) => {
    res.json(r1);
  });
});

// Todo : Customer
router.route("/customer1").post(function (req, res) {
  //   res.send("In customer1");
  Customer1.insertMany(req.body).then((r1) => {
    res.json(r1);
  });
});

module.exports = router;
