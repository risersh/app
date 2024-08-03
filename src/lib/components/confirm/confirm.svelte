<script lang="ts">
  import { modalManager } from "$lib/common/modals";
  import { Button } from "$lib/components/ui/button";
  import * as Dialog from "$lib/components/ui/dialog";
  import type { ModalInstance } from "@svelte.codes/modal-manager";
  import type { ConfirmArgs } from "./confirm";

  export let instance: ModalInstance<ConfirmArgs>;
</script>

<Dialog.Root id="confirm">
  <Dialog.Content closeable={false} class="max-w-md">
    <Dialog.Header class="mb-2 gap-1">
      <Dialog.Title>{instance.config.data.title}</Dialog.Title>
      {#if Array.isArray(instance.config.data.message)}
        <div class="grid gap-2">
          {#each instance.config.data.message as message}
            <Dialog.Description>{message}</Dialog.Description>
          {/each}
        </div>
      {:else}
        <Dialog.Description>{instance.config.data.message}</Dialog.Description>
      {/if}
    </Dialog.Header>
    <Dialog.Footer>
      <Button
        on:click={() => {
          instance.config.data.subject.next(false);
          modalManager.close("confirm");
        }}
        variant="outline">Cancel</Button>
      <Button
        on:click={() => {
          instance.config.data.subject.next(true);
          modalManager.close("confirm");
        }}>{instance.config.data.label || "Continue"}</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
