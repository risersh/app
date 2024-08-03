<script lang="ts">
  import Share from "lucide-svelte/icons/share";
  import { Moon, Sun } from "radix-icons-svelte";

  import Logo from "$lib/common/logo.svelte";
  import { Button } from "$ui/button";
  import { toggleMode } from "mode-watcher";
</script>

<header class="fixed -ml-[54px] flex w-full items-center justify-between gap-1 bg-white px-3 py-3 dark:bg-zinc-950">
  <h1 class="flex items-center gap-1 pl-2 pr-6 font-semibold">
    <Logo theme="dark" class="w-[100px]" />
  </h1>
  <div class="flex items-center">
    <Button variant="outline" size="sm" class="ml-auto gap-1.5 text-sm">
      <Share class="size-3.5" />
      Share
    </Button>
    <Button on:click={toggleMode} variant="outline" size="icon">
      <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span class="sr-only">Toggle theme</span>
    </Button>
  </div>
</header>
