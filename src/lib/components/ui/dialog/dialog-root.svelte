<script lang="ts">
  import { modalManager } from "$lib/common/modals";
  import { Dialog as DialogPrimitive } from "bits-ui";

  export let id: string;
</script>

<DialogPrimitive.Root
  onOpenChange={(v) => {
    if (!v) {
      modalManager.close(id);
    }
  }}
  open>
  <slot />
</DialogPrimitive.Root>
