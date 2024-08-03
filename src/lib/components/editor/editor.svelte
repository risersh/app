<script lang="ts">
  import { splitEditing } from "@milkdown-lab/plugin-split-editing";
  import { commandsCtx, defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
  import { commonmark, splitListItemCommand, toggleEmphasisCommand, toggleStrongCommand, wrapInBlockquoteCommand } from "@milkdown/preset-commonmark";
  import { onDestroy, onMount } from "svelte";
  import Button from "./button.svelte";

  export let preview: boolean = false;
  export let markdown: string = "";

  let div: HTMLDivElement;
  let editor: Editor;

  onMount(() => {});

  onDestroy(async () => {
    // console.log("Destroy");
    // editor.remove(splitEditing);
    // await editor.destroy(true);
    // editor = null;
    console.log(div.parentNode);
    div.parentNode.removeChild(div);
    await editor.destroy();
    editor = null;
  });

  const make = async (split?: boolean) => {
    try {
      editor = await Editor.make()
        .config((ctx) => {
          ctx.set(rootCtx, div);
          ctx.set(defaultValueCtx, markdown);
        })
        // .use(fullscreen)
        .use(commonmark)
        .use(splitEditing);

      // if (split) {
      //   editor.use(splitEditing);
      // }

      await editor.create();
    } catch (error) {
      console.error("Error creating editor:", error);
    }
    // editor.ctx.get(commandsCtx).call("ToggleFullscreen", { value: true });
  };
  make(true);
  // setTimeout(() => {
  //   editor.action((ctx) => ctx.get(commandsCtx).call(toggleSplitEditing.key));
  // }, 1000);
</script>

<div class="flex h-full min-h-96 flex-col">
  <div class="flex gap-1 bg-slate-100/75 p-1 dark:bg-zinc-900/25">
    <Button
      onClick={() => editor.action((ctx) => ctx.get(commandsCtx).call(toggleEmphasisCommand.key))}
      svg={`<svg id="fi_3019775" enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m45.171 1.62h-17.342c-2.761 0-5 2.239-5 5s2.239 5 5 5h3.217l-8.451 40.675c-.006.029-.003.056-.008.085h-3.758c-2.761 0-5 2.238-5 5s2.239 5 5 5h17.342c2.762 0 5-2.238 5-5s-2.238-5-5-5h-3.399l8.467-40.76h3.932c2.762 0 5-2.239 5-5s-2.238-5-5-5z"></path></svg>`} />
    <Button
      onClick={() => editor.action((ctx) => ctx.get(commandsCtx).call(toggleStrongCommand.key))}
      svg={`<svg id="fi_3019759" enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m45.108 28.993c2.142-3.175 3.307-7.061 3.055-11.224-.583-9.63-8.873-16.993-18.521-16.993h-12.174c-4.677 0-8.468 3.791-8.468 8.468v17.756 10 17.755c0 4.677 3.792 8.469 8.469 8.469h18.972c9.528 0 17.766-7.177 18.503-16.676.592-7.626-3.578-14.35-9.836-17.555zm-26.108-1.993v-16.224h10.798c4.316 0 8.091 3.249 8.38 7.556.316 4.723-3.437 8.668-8.094 8.668zm17.888 26.224h-17.888v-16.224h11.084.01 6.507c4.316 0 8.091 3.249 8.38 7.556.317 4.722-3.435 8.668-8.093 8.668z"></path></svg>`} />
    <Button
      onClick={() => editor.action((ctx) => ctx.get(commandsCtx).call(wrapInBlockquoteCommand.key))}
      svg={`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="fi_11042704"><g><g id="glyph"  transform="translate(-216 -120)"><g id="quote-left-saying-speech" transform="translate(216 123)"><path id="Combined-Shape" d="m6.5 0c3.19421011 0 5.5000019 2.63704722 5.499925 6.54163158-.0204568 5.67313602-4.28524227 9.68420702-10.437811 10.45449522-.5708102.0714642-.79090767-.7192662-.26526381-.9529968 2.36078916-1.0497382 3.55311007-2.38181 3.70711676-3.7002924.11506179-.9850674-.42043311-1.8479608-1.09283612-2.0095374-1.74318309-.41888225-2.91113083-2.58970727-2.91113083-4.8333002 0-3.03756612 2.46243388-5.5 5.5-5.5z"></path><path id="Combined-Shape" d="m18.5 0c3.1942101 0 5.5000019 2.63704722 5.499925 6.54163158-.0204568 5.67313602-4.2852423 9.68420702-10.437811 10.45449522-.5708102.0714642-.7909077-.7192662-.2652638-.9529968 2.3607891-1.0497382 3.5531101-2.38181 3.7071167-3.7002924.1150618-.9850674-.4204331-1.8479608-1.0928361-2.0095374-1.7431831-.41888225-2.9111308-2.58970727-2.9111308-4.8333002 0-3.03756612 2.4624339-5.5 5.5-5.5z"></path></g></g></g></svg>`} />
    <Button
      onClick={() => editor.action((ctx) => ctx.get(commandsCtx).call(splitListItemCommand.key))}
      svg={`<svg id="fi_2099192" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m464.883 64.267h-289.233c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h289.232c25.98 0 47.117-21.137 47.117-47.117.001-26.013-21.136-47.149-47.116-47.149z"></path><path d="m47.134 64.267c-25.989 0-47.134 21.144-47.134 47.133s21.145 47.133 47.134 47.133 47.133-21.144 47.133-47.133-21.144-47.133-47.133-47.133z"></path><path d="m47.134 208.867c-25.989 0-47.134 21.144-47.134 47.133s21.145 47.133 47.134 47.133 47.133-21.144 47.133-47.133-21.144-47.133-47.133-47.133z"></path><path d="m47.134 353.467c-25.989 0-47.134 21.144-47.134 47.133s21.145 47.133 47.134 47.133 47.133-21.144 47.133-47.133-21.144-47.133-47.133-47.133z"></path><path d="m464.883 208.867h-289.233c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h289.232c25.98 0 47.117-21.137 47.117-47.117.001-26.013-21.136-47.149-47.116-47.149z"></path><path d="m464.883 353.467h-289.233c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h289.232c25.98 0 47.117-21.137 47.117-47.117.001-26.012-21.136-47.149-47.116-47.149z"></path></svg>`} />
    <Button
      onClick={() => (preview = !preview)}
      svg={`<svg id="fi_8682865" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="Developer"><g><path d="m256 436c-39.265 0-76.581-12.422-107.914-35.923-.082-.061-124.205-96.163-124.205-96.163-14.956-11.288-23.881-29.187-23.881-47.914s8.925-36.626 23.882-47.914c0 0 124.123-96.101 124.205-96.163 31.332-23.501 68.648-35.923 107.913-35.923s76.581 12.422 107.914 35.923c.082.061 124.205 96.163 124.205 96.163 14.956 11.288 23.881 29.187 23.881 47.914s-8.925 36.626-23.882 47.914c0 0-124.123 96.101-124.205 96.163-31.332 23.501-68.648 35.923-107.913 35.923zm-83.792-67.832c24.329 18.208 53.301 27.832 83.792 27.832s59.463-9.624 83.792-27.832c0 0 124.104-96.087 124.186-96.148 5.098-3.824 8.022-9.663 8.022-16.02s-2.924-12.196-8.022-16.02c-.082-.061-124.186-96.148-124.186-96.148-24.329-18.208-53.301-27.832-83.792-27.832-30.494 0-59.465 9.624-83.795 27.835 0 0-124.101 96.084-124.182 96.145-5.099 3.824-8.023 9.664-8.023 16.02s2.924 12.196 8.022 16.02c.082.061 124.186 96.148 124.186 96.148z"></path></g><g><path d="m231.149 355.403c-10.716-2.679-17.231-13.538-14.552-24.254l40-160c2.679-10.716 13.539-17.231 24.253-14.552 10.716 2.679 17.231 13.538 14.552 24.254l-40 160c-2.678 10.714-13.538 17.231-24.253 14.552z"></path></g><g><path d="m164 312-31.988-23.99c-10.026-7.518-16.012-19.485-16.012-32.01s5.986-24.492 16.013-32.011l31.987-23.989c8.834-6.627 21.372-4.837 28 4.001 6.627 8.837 4.836 21.373-4.001 28l-31.988 23.99 31.989 24.009c8.837 6.627 10.628 19.163 4.001 28-6.629 8.837-19.163 10.628-28.001 4z"></path></g><g><path d="m320 308c-6.627-8.837-4.836-21.373 4.001-28l31.988-23.99-31.989-24.01c-8.837-6.627-10.628-19.163-4.001-28 6.629-8.837 19.164-10.628 28-4.001l31.988 23.99c10.027 7.519 16.013 19.486 16.013 32.011s-5.986 24.492-16.013 32.011l-31.987 23.989c-8.836 6.627-21.374 4.836-28-4z"></path></g><g><path d="m20 156c-11.046 0-20-8.954-20-20v-40c0-33.084 26.916-60 60-60h40c11.046 0 20 8.954 20 20s-8.954 20-20 20h-40c-11.028 0-20 8.972-20 20v40c0 11.046-8.954 20-20 20z"></path></g><g><path d="m492 156c-11.046 0-20-8.954-20-20v-40c0-11.028-8.972-20-20-20h-40c-11.046 0-20-8.954-20-20s8.954-20 20-20h40c33.084 0 60 26.916 60 60v40c0 11.046-8.954 20-20 20z"></path></g><g><path d="m452 476h-40c-11.046 0-20-8.954-20-20s8.954-20 20-20h40c11.028 0 20-8.972 20-20v-40c0-11.046 8.954-20 20-20s20 8.954 20 20v40c0 33.084-26.916 60-60 60z"></path></g><g><path d="m100 476h-40c-33.084 0-60-26.916-60-60v-40c0-11.046 8.954-20 20-20s20 8.954 20 20v40c0 11.028 8.972 20 20 20h40c11.046 0 20 8.954 20 20s-8.954 20-20 20z"></path></g></g></svg>`} />
  </div>
  <div class="wrapper w-full flex-1" class:show={preview} class:hide={!preview} bind:this={div} />
</div>

<style>
  :global(.milkdown *) {
    @apply text-slate-700 dark:text-slate-400;
  }

  :global(.milkdown h1) {
    @apply text-3xl font-semibold text-slate-900 dark:text-slate-200;
  }

  :global(.milkdown h2) {
    @apply mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-200;
  }

  :global(.milkdown h3) {
    @apply mt-2 text-xl font-semibold text-slate-900 dark:text-slate-200;
  }

  :global(.milkdown h4) {
    @apply mt-2 text-lg font-semibold text-slate-900 dark:text-slate-200;
  }

  :global(.milkdown h5) {
    @apply mt-2 text-base font-semibold text-slate-900 dark:text-slate-200;
  }

  :global(.milkdown h6) {
    @apply mt-2 text-base font-semibold text-slate-900 dark:text-slate-200;
  }

  :global(.milkdown p) {
    @apply my-0.5 text-slate-700 dark:text-slate-400;
  }

  :global(.milkdown blockquote) {
    @apply my-2 border-l-4 border-gray-300 pl-2 dark:border-gray-600;
  }

  :global(.milkdown) {
    @apply h-full;
  }

  :global(.split-editor) {
    @apply flex h-full;
  }

  :global(.split-editor .prose) {
    @apply w-1/2 border-r-2 border-slate-200 dark:border-slate-800;
  }

  .hide :global(.split-editor .editor) {
    @apply w-full caret-green-500 outline-none;
  }

  .show :global(.milkdown .ProseMirror) {
    @apply h-full;
  }

  .show :global(.split-editor .editor) {
    @apply h-full w-1/2 caret-green-500 outline-none;
  }

  .show :global(.split-editor .milkdown-split-editor) {
    @apply visible w-1/2;
  }

  .hide :global(.split-editor .milkdown-split-editor) {
    @apply hidden;
  }

  :global(.cm-gutters) {
    @apply !border-r-0 !bg-zinc-100 dark:!bg-slate-800/25;
  }
  :global(.cm-activeLineGutter) {
    @apply !bg-zinc-200 dark:!bg-slate-600/50;
  }
  :global(.cm-activeLine) {
    @apply !bg-zinc-100 dark:!bg-zinc-900;
  }

  :global(.cm-cursor) {
    @apply !ml-0.5 w-2 !border !border-b-[3px] !border-l-0 !border-b-green-500 dark:!border-b-purple-600;
  }
</style>
