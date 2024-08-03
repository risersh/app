<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { Tabs as TabsPrimitive } from "bits-ui";

  type $$Props = TabsPrimitive.ListProps;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<TabsPrimitive.List
  class={cn("inline-flex h-9 items-center justify-center gap-1 rounded-lg border border-zinc-200 bg-slate-100 p-1 text-slate-500 dark:border-slate-800 dark:bg-zinc-900/70", className)}
  {...$$restProps}>
  <slot />
</TabsPrimitive.List>
