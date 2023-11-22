import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        open: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Door || mongoose.model("Door", eventSchema);
