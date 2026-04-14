// Run once: node scripts/seed-admin.mjs
// Then delete or keep it — it's idempotent (won't duplicate)

import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

const MONGODB_URI =
  "mongodb+srv://marshalaufa_db_user:nic3upLw9eZjroaR@mpmftui-elektro.h0rcfu5.mongodb.net/?appName=mpmftui-elektro";

const EMAIL = "mpmftui.fraksielektro@gmail.com";
const PASSWORD = "fraksigma2025";
const NAME = "MPM FTUI Fraksi Elektro";

async function main() {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  console.log("✅ Connected to MongoDB");

  const db = client.db();
  const collection = db.collection("admins");

  const existing = await collection.findOne({ email: EMAIL });
  if (existing) {
    console.log("⚠️  Admin already exists — skipping.");
    await client.close();
    return;
  }

  const hashedPassword = await bcrypt.hash(PASSWORD, 12);

  await collection.insertOne({
    name: NAME,
    email: EMAIL,
    password: hashedPassword,
    imageUrl: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  console.log(`✅ Admin seeded successfully!`);
  console.log(`   Email   : ${EMAIL}`);
  console.log(`   Password: ${PASSWORD}`);
  await client.close();
}

main().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
