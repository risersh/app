<script lang="ts">
  import { ModeWatcher } from "mode-watcher";

  import Shell from "$lib/layout/shell.svelte";
  import { Toaster } from "svelte-sonner";
</script>

<div class="grid h-screen w-full pl-[53px]">
  <Shell />
</div>

<Toaster />
<ModeWatcher />
