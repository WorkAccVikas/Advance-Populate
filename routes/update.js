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

// Todo : Teacher
router.route("/teacher1/:t_id").put(function (req, res) {
  console.log(req.params.t_id);
  console.log(typeof req.params.t_id);
  let criteria = { _id: req.params.t_id };
  let updatedValues;
  if (req.body.did) {
    updatedValues = {
      $push: {
        department: req.body.did,
      },
    };
  }

  Teacher1.findByIdAndUpdate(criteria, updatedValues, { new: true }).then(
    (r1) => {
      res.json(r1);
    }
  );
});

// Todo : Course
router.route("/course1/:courseId").put(function (req, res) {
  let criteria = { _id: req.params.courseId };
  let updatedValues;
  let { tid, bid } = req.body;

  if (tid && bid) {
    updatedValues = { $push: { issuedBook: bid, assignedTeacher: tid } };
  } else if (tid) {
    updatedValues = { $push: { assignedTeacher: tid } };
  } else if (bid) {
    updatedValues = { $push: { issuedBook: bid } };
  }

  Course1.findByIdAndUpdate(criteria, updatedValues, { new: true }).then(
    (r1) => {
      res.json(r1);
    }
  );
});

// Todo : Customer
router.route("/customer1/:cid").put(function (req, res) {
  let criteria = { _id: req.params.cid };
  let valueUpdated;
  let { eid: emp_id, course_id } = req.body;

  emp_id && emp_id.reverse();

  if (emp_id && course_id) {
    valueUpdated = {
      $push: {
        // LEARN : push at start of the array
        "empDetails.listOfEmp": { $each: emp_id, $position: 0 },
        issuedCourses: course_id,
      },
    };
  } else if (emp_id) {
    valueUpdated = {
      $push: {
        // LEARN : push at start of the array
        "empDetails.listOfEmp": { $each: emp_id, $position: 0 },
      },
    };
  } else if (course_id) {
    valueUpdated = {
      $push: {
        // LEARN : push at end of the array
        issuedCourses: course_id,
      },
    };
  }

  Customer1.findByIdAndUpdate(criteria, valueUpdated, { new: true }).then(
    (r1) => {
      res.json(r1);
    }
  );
});

module.exports = router;
