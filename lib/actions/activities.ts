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
  await connectToDatabase();
  const activities = await Activity.find({}).sort({ date: -1 }).lean();
  return JSON.parse(JSON.stringify(activities));
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
