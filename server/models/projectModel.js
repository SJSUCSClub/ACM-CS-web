import mongoose, { Schema } from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    endDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["Completed", "Ongoing", "Not Started"],
      default: "Not Started",
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    image: {
      type: String,
      default: "/default/project-image",
    },
    github: {
      type: String,
      default: "",
    },
    contributors: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);
