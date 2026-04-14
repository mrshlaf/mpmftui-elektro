"use server";

import connectToDatabase from "@/lib/db";
import Archive from "@/models/Archive";
import { revalidatePath } from "next/cache";

export interface ArchiveData {
  _id?: string;
  title: string;
  documentType: string;
  description: string;
  linkUrl: string;
  category: string;
}

export async function getArchives(): Promise<ArchiveData[]> {
  try {
    const conn = await connectToDatabase();
    if (!conn) return [];
    const archives = await Archive.find({}).sort({ createdAt: -1 }).limit(10).lean();
    return JSON.parse(JSON.stringify(archives));
  } catch (error) {
    console.error("Failed to fetch archives:", error);
    return [];
  }
}

export async function createArchive(data: Omit<ArchiveData, "_id">) {
  await connectToDatabase();
  await Archive.create(data);
  revalidatePath("/admin/dashboard/archives");
  revalidatePath("/");
}

export async function updateArchive(id: string, data: Omit<ArchiveData, "_id">) {
  await connectToDatabase();
  await Archive.findByIdAndUpdate(id, data);
  revalidatePath("/admin/dashboard/archives");
  revalidatePath("/");
}

export async function deleteArchive(id: string) {
  await connectToDatabase();
  await Archive.findByIdAndDelete(id);
  revalidatePath("/admin/dashboard/archives");
  revalidatePath("/");
}
