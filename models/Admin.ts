import mongoose, { Schema, models } from "mongoose";

const AdminSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imageUrl: { type: String, required: false },
  },
  { timestamps: true }
);

const Admin = models.Admin || mongoose.model("Admin", AdminSchema);

export default Admin;
