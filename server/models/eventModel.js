import mongoose, { Schema } from "mongoose";

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
        presenter: {
            type: String,
            default: "TBA",
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
            default: "/default/event-image",
        },
        paidMemberOnly: {
            type: Boolean,
            default: false,
        },
        attendees: {
            type: [Schema.Types.ObjectId],
            ref: "User",
            default: [],
        },
        maxAttendees: {
            type: Number,
            required: [true, "Max attendees is required"],
            min: [1, "Minimum 1 attendee"],
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        type: {
            type: String,
            enum: ["Event", "Workshop"],
            default: "Event",
        },
        audienceType: {
            type: [
                { type: String, enum: ["Undergraduate", "Graduate", "Alumni"] },
            ],
            default: ["Undergraduate", "Graduate", "Alumni"],
        },
        tags: {
            type: [String],
            default: [],
        },
        deadline: {
            type: Date,
            default: function () {
                return this.date;
            },
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Event || mongoose.model("Event", eventSchema);
