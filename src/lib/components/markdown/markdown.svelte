<!-- <script lang="ts">
  import Markdoc from "@markdoc/markdoc";
  import Tags from "./tags.svelte";

  export let doc = "";

  // const components: Record<string, ComponentType> = { Callout };

  const ast = Markdoc.parse(doc);
  const content = Markdoc.transform(ast);
  // console.log(content);
</script> -->

<!-- {#each content?.children as child}
  <svelte:element this={child.name} {...child.attributes}>
    <svelte:self children={child.children} />
  </svelte:element>
{/each} -->

<!-- <div class="markdown-body">
  <Tags children={content.children}></Tags>
</div> -->

<script>
  // Import markdown conversion library
  import { marked } from "marked";

  // Declare a variable to store the markdown data
  let markdown = "";
</script>

<!-- Declare a textarea where the user can enter markdown, and bind it to the variable `markdown` -->
<textarea bind:value={markdown} placeholder="Enter markdown here" />

<!-- Convert the markdown to HTML and display it -->
<div class="preview">{@html marked(markdown)}</div>

<!-- Make it look (slightly) nicer ;) -->
<style>
  textarea,
  .preview {
    box-sizing: border-box;
    display: block;
    width: 100%;
  }

  textarea {
    font-family: monospace, Roboto;
    height: 25%;
    border: none;
    margin: 0;
    padding: 1rem;
  }

  .preview {
    height: 75%;
    padding: 2rem;
    border-top: solid 2px #888;
  }

  h1 {
    background: #e1e1e1;
    margin: 0px;
    padding: 0.8rem;
    font-size: 1.2rem;
  }

  :global(body) {
    padding: 0;
  }
</style>
