import mongoose from "mongoose";

const imageModel = mongoose.Schema({
  image: {
    type: String,
  },
});

export const IMAGEMODEL = mongoose.model("images", imageModel);
