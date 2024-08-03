<script lang="ts">
  import { camelcase } from "$lib/common/strings";
  import { Badge } from "$lib/components/ui/badge";

  export let status: statuses;

  type statuses = "draft" | "active" | "archived";

  const styles: Record<statuses, string> = {
    draft: "bg-slate-600",
    active: "bg-green-600",
    archived: ""
  };
</script>

<Badge variant="outline" class="flex w-full justify-center {styles[status]}">{camelcase(status)}</Badge>
