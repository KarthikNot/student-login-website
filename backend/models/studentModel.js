import mongoose from "mongoose";

const schema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },

  collegename: {
    type: String,
    required: true,
  },

  rollnumber: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
  },
});

export const STUDENTMODEL = mongoose.model("Student", schema);
