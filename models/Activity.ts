import mongoose, { Schema, models } from "mongoose";

const ActivitySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    localImagePath: { type: String, required: true },
    externaImageUrl: { type: String, required: false },
    date: { type: Date, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const Activity = models.Activity || mongoose.model("Activity", ActivitySchema);

export default Activity;
