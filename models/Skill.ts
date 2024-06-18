import { Schema, model, models } from "mongoose";

const SkillSchema = new Schema(
  {
    exp: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Skill = models.Skill || model("Skill", SkillSchema, "skills");

export default Skill;
