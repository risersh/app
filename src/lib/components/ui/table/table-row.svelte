<script lang="ts">
  import { cn } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLTableRowElement> & {
    "data-state"?: unknown;
  };

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<tr class={cn("border-b border-slate-800 transition-colors hover:bg-zinc-900/15 data-[state=selected]:bg-zinc-800", className)} {...$$restProps} on:click on:keydown>
  <slot />
</tr>
