"use client";

import { useState, useTransition } from "react";
import type { ArchiveData } from "@/lib/actions/archives";
import { createArchive, updateArchive, deleteArchive } from "@/lib/actions/archives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/toaster";
import { Plus, Pencil, Trash2, ExternalLink } from "lucide-react";

const DOC_TYPES = ["UU", "TAP", "Siaran Pers", "Ketetapan", "Keputusan", "Lainnya"];
const CATEGORIES = ["FrakZIP", "UUD IKM", "Legislasi", "Umum"];

const EMPTY: Omit<ArchiveData, "_id"> = {
  title: "",
  documentType: "UU",
  description: "",
  linkUrl: "",
  category: "Legislasi",
};

interface Props {
  initial: ArchiveData[];
}

export default function ArchivesClient({ initial }: Props) {
  const [archives, setArchives] = useState<ArchiveData[]>(initial);
  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState<ArchiveData | null>(null);
  const [form, setForm] = useState<Omit<ArchiveData, "_id">>(EMPTY);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const openCreate = () => {
    setEditing(null);
    setForm(EMPTY);
    setIsOpen(true);
  };

  const openEdit = (a: ArchiveData) => {
    setEditing(a);
    setForm({
      title: a.title,
      documentType: a.documentType,
      description: a.description,
      linkUrl: a.linkUrl,
      category: a.category,
    });
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      if (editing?._id) {
        await updateArchive(editing._id, form);
        setArchives((prev) =>
          prev.map((a) => (a._id === editing._id ? { ...form, _id: editing._id } : a))
        );
        toast({ title: "Updated!", description: "Archive updated." });
      } else {
        await createArchive(form);
        toast({ title: "Created!", description: "Archive added." });
      }
      setIsOpen(false);
    });
  };

  const handleDelete = (a: ArchiveData) => {
    if (!confirm(`Delete "${a.title}"?`)) return;
    startTransition(async () => {
      await deleteArchive(a._id!);
      setArchives((prev) => prev.filter((x) => x._id !== a._id));
      toast({ title: "Deleted", description: "Archive removed.", variant: "destructive" });
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Legislative Archives</h1>
          <p className="text-muted-foreground text-sm mt-0.5">Manage UU, TAP, Siaran Pers, and other documents</p>
        </div>
        <Button onClick={openCreate} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
          <Plus className="w-4 h-4" /> Add Archive
        </Button>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Link</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {archives.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-12">
                  No archives found. Click &quot;Add Archive&quot; to start.
                </TableCell>
              </TableRow>
            )}
            {archives.map((a) => (
              <TableRow key={a._id}>
                <TableCell className="font-medium text-white max-w-xs truncate">{a.title}</TableCell>
                <TableCell>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-secondary/10 text-secondary border border-secondary/20">
                    {a.documentType}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{a.category}</TableCell>
                <TableCell>
                  <a
                    href={a.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" /> Open
                  </a>
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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent onClose={() => setIsOpen(false)}>
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Archive" : "New Archive"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="space-y-1.5">
              <Label htmlFor="arc-title">Title</Label>
              <Input id="arc-title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="arc-type">Document Type</Label>
                <select
                  id="arc-type"
                  value={form.documentType}
                  onChange={(e) => setForm({ ...form, documentType: e.target.value })}
                  className="w-full h-9 rounded-md border border-border bg-transparent px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {DOC_TYPES.map((t) => <option key={t} value={t} className="bg-card">{t}</option>)}
                </select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="arc-cat">Category</Label>
                <select
                  id="arc-cat"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full h-9 rounded-md border border-border bg-transparent px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {CATEGORIES.map((c) => <option key={c} value={c} className="bg-card">{c}</option>)}
                </select>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="arc-desc">Description</Label>
              <Textarea id="arc-desc" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required rows={3} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="arc-link">Document Link URL</Label>
              <Input id="arc-link" type="url" value={form.linkUrl} onChange={(e) => setForm({ ...form, linkUrl: e.target.value })} required placeholder="https://drive.google.com/..." />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button type="button" variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" disabled={isPending}>
                {isPending ? "Saving..." : editing ? "Update" : "Create"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
