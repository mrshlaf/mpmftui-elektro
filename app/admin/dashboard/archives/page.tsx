import { getArchives } from "@/lib/actions/archives";
import ArchivesClient from "./ArchivesClient";

export default async function ArchivesPage() {
  const archives = await getArchives();
  return <ArchivesClient initial={archives} />;
}
