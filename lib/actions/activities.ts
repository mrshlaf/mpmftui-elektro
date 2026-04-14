"use server";

import connectToDatabase from "@/lib/db";
import Activity from "@/models/Activity";
import { revalidatePath } from "next/cache";

export interface ActivityData {
  _id?: string;
  title: string;
  description: string;
  localImagePath: string;
  externaImageUrl?: string;
  date: string;
  category: string;
}

export async function getActivities(): Promise<ActivityData[]> {
  try {
    const conn = await connectToDatabase();
    if (!conn) return [];
    const activities = await Activity.find({}).sort({ date: -1 }).limit(10).lean();
    return JSON.parse(JSON.stringify(activities));
  } catch (error) {
    console.error("Failed to fetch activities:", error);
    return [];
  }
}

export async function createActivity(data: Omit<ActivityData, "_id">) {
  await connectToDatabase();
  await Activity.create(data);
  revalidatePath("/admin/dashboard/activities");
  revalidatePath("/");
}

export async function updateActivity(id: string, data: Omit<ActivityData, "_id">) {
  await connectToDatabase();
  await Activity.findByIdAndUpdate(id, data);
  revalidatePath("/admin/dashboard/activities");
  revalidatePath("/");
}

export async function deleteActivity(id: string) {
  await connectToDatabase();
  await Activity.findByIdAndDelete(id);
  revalidatePath("/admin/dashboard/activities");
  revalidatePath("/");
}
