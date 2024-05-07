import express from "express";
import { STUDENTMODEL } from "../models/studentModel.js";

const studentRouter = express.Router();

// ADD STUDENT
studentRouter.post("/addstudent", async (req, res) => {
  try {
    if (
      !req.body.firstname ||
      !req.body.lastname ||
      !req.body.collegename ||
      !req.body.rollnumber ||
      !req.body.photo
    ) {
      return res.send({ message: "all fields are required" });
    }

    const newStudent = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      collegename: req.body.collegename,
      rollnumber: req.body.rollnumber,
      photo: req.body.photo,
    };

    const student = await STUDENTMODEL.create(newStudent);

    return res.status(500).send(student);
  } catch (error) {
    console.log(error.message);
    return res.send({ message: error.message });
  }
});

// get students
studentRouter.get("/", async (req, res) => {
  const students = await STUDENTMODEL.find({});

  if (!students) return res.send({ message: "cannot get students info" });
  return res.json({ count: students.length, data: students });
});

export default studentRouter;
