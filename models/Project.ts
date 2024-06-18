import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    codeUrl: {
      type: String,
      required: true,
    },
    liveUrl: {
      type: String,
      required: true,
    },
    hash: [{ type: String, required: true }],
    tech: [{ type: String, required: true }],
    desktopFull: {
      type: String,
    },
    desktopPreview: {
      type: String,
      required: true,
    },
    mobileFull: {
      type: String,
    },
    mobilePreview: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Project = models.Project || model("Project", ProjectSchema, "projects");

export default Project;
