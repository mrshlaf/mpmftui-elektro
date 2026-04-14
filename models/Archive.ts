import mongoose, { Schema, models } from "mongoose";

const ArchiveSchema = new Schema(
  {
    title: { type: String, required: true },
    documentType: { type: String, required: true },
    description: { type: String, required: true },
    linkUrl: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const Archive = models.Archive || mongoose.model("Archive", ArchiveSchema);

export default Archive;
