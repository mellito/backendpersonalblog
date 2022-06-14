const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 55,
    },
    content: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    image: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    webLink: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    githubLink: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    extralink: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Project = mongoose.model("projects", ProjectSchema);
module.exports = Project;
