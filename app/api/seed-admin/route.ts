import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";

// GET /api/seed-admin — seeds the default admin user ONCE, idempotent
export async function GET() {
  await connectToDatabase();

  const username = "mpmftui.elektro";
  const existing = await Admin.findOne({ username });
  if (existing) {
    return NextResponse.json({ message: "Admin already exists ✅" });
  }

  const hashed = await bcrypt.hash("admin123", 12);
  await Admin.create({
    name: "MPM FTUI Fraksi Elektro",
    username,
    password: hashed,
    imageUrl: "",
  });

  return NextResponse.json({
    message: "Admin seeded successfully ✅",
    username,
  });
}
