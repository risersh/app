<script lang="ts">
  export let svg: string;
  export let onClick: any;
</script>

<button
  on:mousedown={(e) => {
    e.preventDefault();
    onClick();
  }}
  class="inline-flex w-fit items-center justify-center rounded-md border border-input p-2 shadow-sm transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-slate-800 dark:fill-slate-600 dark:hover:bg-zinc-800">
  <div class="h-2.5 w-2.5">
    {@html svg}
  </div>
</button>
