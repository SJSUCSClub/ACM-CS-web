import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
    },
    studentType: {
      type: String,
      enum: ["undergraduate", "graduate", "alumni"],
      default: "undergraduate",
    },
    year: {
      type: String,
      enum: ["Freshman", "Sophomore", "Junior", "Senior", "Other"],
      required: true,
    },
    major: {
      type: String,
      default: "",
    },
    pronouns: {
      type: String,
      enum: ["He/Him", "She/Her", "They/Them"],
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    discord: {
      type: String,
      default: "",
    },
    linkedin: {
      type: String,
      default: "",
    },
    github: {
      type: String,
      default: "",
    },
    instagram: {
      type: String,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["member", "admin", "user"],
      default: "user",
    },
    registeredEvents: {
      type: [Schema.Types.ObjectId],
      ref: "Event",
      default: [],
    },
    image: {
      type: String,
      default: "/default/profile",
    },
    payment: {
      type: String,
      enum: ["semester", "yearly", "unpaid"],
      default: "unpaid",
    },
    projects: {
      type: [Schema.Types.ObjectId],
      ref: "Project",
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    // blacklisted: {
    //   type: Boolean,
    //   default: false
    // }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
