<script lang="ts">
  import { cn } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLUListElement>;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<div class={cn("flex flex-row items-center gap-1", className)} {...$$restProps}>
  <slot />
</div>
