"use client";

import { useState, useTransition } from "react";
import type { ActivityData } from "@/lib/actions/activities";
import { createActivity, updateActivity, deleteActivity } from "@/lib/actions/activities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/toaster";
import { Plus, Pencil, Trash2, X } from "lucide-react";

const CATEGORIES = ["Open Recruitment", "Rapat Kerja", "Sidang Paripurna", "Hearing", "Kunjungan", "Workshop", "Lainnya"];

const EMPTY: Omit<ActivityData, "_id"> = {
  title: "",
  description: "",
  localImagePath: "/assets/activities/",
  externaImageUrl: "",
  date: new Date().toISOString().split("T")[0],
  category: "Lainnya",
};

interface Props {
  initial: ActivityData[];
}

export default function ActivitiesClient({ initial }: Props) {
  const [activities, setActivities] = useState<ActivityData[]>(initial);
  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState<ActivityData | null>(null);
  const [form, setForm] = useState<Omit<ActivityData, "_id">>(EMPTY);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const openCreate = () => {
    setEditing(null);
    setForm(EMPTY);
    setIsOpen(true);
  };

  const openEdit = (a: ActivityData) => {
    setEditing(a);
    setForm({
      title: a.title,
      description: a.description,
      localImagePath: a.localImagePath,
      externaImageUrl: a.externaImageUrl ?? "",
      date: new Date(a.date).toISOString().split("T")[0],
      category: a.category,
    });
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      if (editing?._id) {
        await updateActivity(editing._id, form);
        setActivities((prev) =>
          prev.map((a) => (a._id === editing._id ? { ...form, _id: editing._id } : a))
        );
        toast({ title: "Updated!", description: "Activity updated successfully." });
      } else {
        await createActivity(form);
        toast({ title: "Created!", description: "New activity added." });
      }
      setIsOpen(false);
    });
  };

  const handleDelete = (a: ActivityData) => {
    if (!confirm(`Delete "${a.title}"?`)) return;
    startTransition(async () => {
      await deleteActivity(a._id!);
      setActivities((prev) => prev.filter((x) => x._id !== a._id));
      toast({ title: "Deleted", description: "Activity removed.", variant: "destructive" });
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Activities</h1>
          <p className="text-muted-foreground text-sm mt-0.5">Manage public activity posts</p>
        </div>
        <Button onClick={openCreate} className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
          <Plus className="w-4 h-4" /> Add Activity
        </Button>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground py-12">
                  No activities found. Click &quot;Add Activity&quot; to start.
                </TableCell>
              </TableRow>
            )}
            {activities.map((a) => (
              <TableRow key={a._id}>
                <TableCell className="font-medium text-white max-w-xs truncate">{a.title}</TableCell>
                <TableCell>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
                    {a.category}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {new Date(a.date).toLocaleDateString("id-ID")}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-muted-foreground hover:text-primary"
                      onClick={() => openEdit(a)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                      onClick={() => handleDelete(a)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent onClose={() => setIsOpen(false)}>
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Activity" : "New Activity"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="space-y-1.5">
              <Label htmlFor="act-title">Title</Label>
              <Input id="act-title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="act-desc">Description</Label>
              <Textarea id="act-desc" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required rows={3} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="act-date">Date</Label>
                <Input id="act-date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="act-cat">Category</Label>
                <select
                  id="act-cat"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full h-9 rounded-md border border-border bg-transparent px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {CATEGORIES.map((c) => <option key={c} value={c} className="bg-card">{c}</option>)}
                </select>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="act-img">Local Image Path</Label>
              <Input id="act-img" value={form.localImagePath} onChange={(e) => setForm({ ...form, localImagePath: e.target.value })} placeholder="/assets/activities/filename.jpg" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="act-ext">External Image URL (optional)</Label>
              <Input id="act-ext" value={form.externaImageUrl} onChange={(e) => setForm({ ...form, externaImageUrl: e.target.value })} placeholder="https://..." />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button type="button" variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90" disabled={isPending}>
                {isPending ? "Saving..." : editing ? "Update" : "Create"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
