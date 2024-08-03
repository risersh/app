<!-- adapted from https://github.com/movingbrands/svelte-portable-text -->
<script>
  export let children = [];
  export let components = new Map();
</script>

{#each children as child}
  {#if typeof child === "string"}{@html child}{/if}
  {#if child?.children}
    {#if components.has(child.name)}
      <svelte:component this={components.get(child.name)} {...child.attributes}>
        <svelte:self children={child.children} />
      </svelte:component>
    {:else}
      <svelte:element this={child.name} {...child.attributes}>
        <svelte:self children={child.children} />
      </svelte:element>
    {/if}
  {/if}
{/each}

<!-- <style>
  /* Add your CSS styles here */
  * {
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }

  h1,
  h2,
  h3 {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 1em;
  }

  ul,
  ol {
    margin-left: 1.5em;
    margin-bottom: 1em;
  }

  a {
    color: blue;
    text-decoration: underline;
  }

  code {
    background-color: #f5f5f5;
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }
</style> -->
