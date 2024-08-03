<script lang="ts">
  import { cn } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<div class={cn("rounded-lg border bg-card p-1 text-card-foreground shadow dark:border-slate-800", className)} {...$$restProps} on:click on:focusin on:focusout on:mouseenter on:mouseleave>
  <slot />
</div>
