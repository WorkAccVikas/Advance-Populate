const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose
  .connect(process.env.URL, { useNewUrlParser: true })
  .then(() => console.log(`DB Connected ........`));

// Todo : Emp
const empSchema = new Schema(
  {
    eid: {
      type: Number,
      unique: true,
    },
    ename: String,
    salary: Number,
  },
  { timestamps: true, toJSON: { virtual: true } }
);

const Emp1 = mongoose.model("Emp1", empSchema, "Emp1");

// Todo : Book
const bookSchema = new Schema(
  {
    bid: {
      type: Number,
      unique: true,
    },
    bname: String,
    price: Number,
    type: {
      type: String,
      enum: ["kid", "school", "college"],
    },
  },
  { timestamps: true, toJSON: { virtual: true } }
);

const Book1 = mongoose.model("Book1", bookSchema, "Book1");

// Todo : Dept
const deptSchema = new Schema(
  {
    did: {
      type: Number,
      unique: true,
    },
    dname: String,
  },
  { timestamps: true, toJSON: { virtual: true } }
);

const Dept1 = mongoose.model("Dept1", deptSchema, "Dept1");

// Todo : Course
const teacherSchema = new Schema(
  {
    tid: {
      type: Number,
      unique: true,
    },
    tname: String,
    department: [{ type: "ObjectId", ref: "Dept1" }],
  },
  { timestamps: true, toJSON: { virtual: true } }
);

const Teacher1 = mongoose.model("Teacher1", teacherSchema, "Teacher1");

// Todo : Course
const courseSchema = new Schema(
  {
    course_id: {
      type: Number,
      unique: true,
    },
    course_name: String,
    fee: Number,
    issuedBook: [{ type: "ObjectId", ref: "Book1" }],
    assignedTeacher: [{ type: "ObjectId", ref: "Teacher1" }],
  },
  { timestamps: true, toJSON: { virtual: true } }
);

const Course1 = mongoose.model("Course1", courseSchema, "Course1");

// Todo : Customer
const customerSchema = new Schema(
  {
    cid: {
      type: Number,
      unique: true,
    },
    cname: String,
    age: Number,
    issuedCourses: [{ type: "ObjectId", ref: "Course1" }],
    empDetails: {
      listOfEmp: [{ type: "ObjectId", ref: "Emp1" }],
    },
  },
  { timestamps: true, toJSON: { virtual: true } }
);

const Customer1 = mongoose.model("Customer1", customerSchema, "Customer1");

module.exports = {
  Emp1,
  Book1,
  Dept1,
  Teacher1,
  Course1,
  Customer1,
};
