import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const dynamic = "force-dynamic";

export async function GET() {
  const envStatus = {
    MONGODB_URI: process.env.MONGODB_URI ? "DEFINED" : "MISSING",
    ADMIN_USERNAME: process.env.ADMIN_USERNAME ? "DEFINED" : "MISSING",
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ? "DEFINED" : "MISSING",
    ADMIN_SECRET: process.env.ADMIN_SECRET ? "DEFINED" : "MISSING",
  };

  let dbStatus = "NOT TESTED";
  let dbError = null;

  if (process.env.MONGODB_URI) {
    try {
      // Small timeout for the test
      const conn = await Promise.race([
        mongoose.connect(process.env.MONGODB_URI),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Database connection timeout")), 5000))
      ]);
      dbStatus = "CONNECTED ✅";
    } catch (e: any) {
      dbStatus = "FAILED ❌";
      dbError = e.message;
    }
  }

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    envStatus,
    dbStatus,
    dbError,
    tip: "If DB Status is FAILED, check your MongoDB Atlas IP Whitelist (allow 0.0.0.0/0) and ensure the URI is correct."
  });
}
