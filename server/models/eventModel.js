import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    image: {
      type: String,
    },
    paidMemberOnly: {
      type: Boolean,
      default: false,
    },
    attendees: {
      type: Array,
      default: [],
    },
    maxAttendees: {
      type: Number,
      required: [true, "Max attendees is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    type: {
      type: String,
      enum: ["event", "workshop"],
      default: "event",
    },
    tags: {
      type: Array,
      default: [],
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Event || mongoose.model("Event", eventSchema);