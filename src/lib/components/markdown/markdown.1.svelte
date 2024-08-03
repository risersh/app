<script lang="ts">
  import Markdoc from "@markdoc/markdoc";
  import Tags from "./tags.svelte";

  export let doc = "";

  // const components: Record<string, ComponentType> = { Callout };

  const ast = Markdoc.parse(doc);
  const content = Markdoc.transform(ast);
  // console.log(content);
</script>

<!-- {#each content?.children as child}
  <svelte:element this={child.name} {...child.attributes}>
    <svelte:self children={child.children} />
  </svelte:element>
{/each} -->

<div class="markdown-body">
  <Tags children={content.children}></Tags>
</div>
