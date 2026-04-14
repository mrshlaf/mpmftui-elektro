import { getActivities } from "@/lib/actions/activities";
import ActivitiesClient from "./ActivitiesClient";

export const dynamic = "force-dynamic";

export default async function ActivitiesPage() {
  const activities = await getActivities();
  return <ActivitiesClient initial={activities} />;
}
