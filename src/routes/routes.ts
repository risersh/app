import Dashboard from "./dashboard/dashboard.svelte";
import Topics from "./topics/topics.svelte";

export const routes = {
  "/topics": Topics,
  "/dashboard": Dashboard,
  "*": Dashboard
}