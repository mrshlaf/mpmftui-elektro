import { NextResponse } from "next/server";
import { createHmac } from "crypto";

function makeToken(username: string, secret: string) {
  const payload = `${username}:${Date.now()}`;
  const sig = createHmac("sha256", secret).update(payload).digest("hex");
  return Buffer.from(`${payload}:${sig}`).toString("base64");
}

export async function POST(req: Request) {
  const { username, password } = await req.json();
  
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const ADMIN_SECRET = process.env.ADMIN_SECRET;

  if (!ADMIN_USERNAME || !ADMIN_PASSWORD || !ADMIN_SECRET) {
    return NextResponse.json({ error: "Server Error: Environment variables not configured" }, { status: 500 });
  }

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Username atau password salah" }, { status: 401 });
  }

  const token = makeToken(username, ADMIN_SECRET);

  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
    sameSite: "lax",
  });
  return res;
}
