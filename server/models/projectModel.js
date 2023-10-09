import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    image: {
      type: String,
    },
    github: {
      type: String,
    },
    contributors: {
      type: Array,
      default: [],
    }
  }, {
    timestamps: true,
  }  
)

export default mongoose.models.Project || mongoose.model('Project', projectSchema);